import React, { useState } from 'react';
import { Brain, FileAudio, FileText } from 'lucide-react';
import AudioRecorder from './components/AudioRecorder';
import { transcribeAudio, summarizeText } from './api';

function App() {
  const [transcription, setTranscription] = useState('');
  const [summary, setSummary] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const processAudioData = async (audioData: Blob) => {
    setIsProcessing(true);
    setError('');
    
    try {
      // Transcribe audio
      const transcribedText = await transcribeAudio(audioData);
      setTranscription(transcribedText);

      // Generate summary
      const summarizedText = await summarizeText(transcribedText);
      setSummary(summarizedText);
    } catch (err) {
      setError('An error occurred while processing your recording. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRecordingComplete = (audioBlob: Blob) => {
    processAudioData(audioBlob);
  };

  const handleFileUpload = async (file: File) => {
    // Check if file is audio or video
    if (!file.type.startsWith('audio/') && !file.type.startsWith('video/')) {
      setError('Please upload an audio or video file.');
      return;
    }

    // Check file size (limit to 100MB)
    const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB in bytes
    if (file.size > MAX_FILE_SIZE) {
      setError('File size must be less than 100MB.');
      return;
    }

    // Extract audio from video if needed, or use audio file directly
    let audioBlob: Blob;
    if (file.type.startsWith('video/')) {
      try {
        const videoElement = document.createElement('video');
        const audioContext = new AudioContext();
        const mediaElement = audioContext.createMediaElementSource(videoElement);
        const destination = audioContext.createMediaStreamDestination();
        
        mediaElement.connect(destination);
        
        videoElement.src = URL.createObjectURL(file);
        await videoElement.play();
        
        const mediaRecorder = new MediaRecorder(destination.stream);
        const chunks: BlobPart[] = [];
        
        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
          audioBlob = new Blob(chunks, { type: 'audio/wav' });
          processAudioData(audioBlob);
        };
        
        mediaRecorder.start();
        setTimeout(() => mediaRecorder.stop(), videoElement.duration * 1000);
      } catch (err) {
        setError('Error processing video file. Please try an audio file instead.');
        console.error(err);
        return;
      }
    } else {
      // For audio files, process directly
      audioBlob = file;
      processAudioData(audioBlob);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lecture Transcription & Summarization
          </h1>
          <p className="text-gray-600">
            Record your lecture or upload an audio/video file to get an instant transcription with AI-powered summary
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-center mb-8">
            <AudioRecorder
              onRecordingComplete={handleRecordingComplete}
              onFileUpload={handleFileUpload}
              isProcessing={isProcessing}
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                <FileAudio className="w-5 h-5" />
                <h2>Transcription</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
                {transcription || (
                  <p className="text-gray-400 italic">
                    Your transcription will appear here...
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                <Brain className="w-5 h-5" />
                <h2>Summary</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
                {summary || (
                  <p className="text-gray-400 italic">
                    Your summary will appear here...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>Powered by Hugging Face's Whisper and BART models</p>
        </footer>
      </div>
    </div>
  );
}

export default App;