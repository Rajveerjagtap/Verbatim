import axios from 'axios';
import { TranscriptionResponse, SummaryResponse } from './types';

const WHISPER_API_URL = 'https://api-inference.huggingface.co/models/openai/whisper-large-v3';
const BART_API_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';

// Replace with your Hugging Face API token
const API_TOKEN = '';

const headers = {
  'Authorization': `Bearer ${API_TOKEN}`,
};

export const transcribeAudio = async (audioBlob: Blob): Promise<string> => {
  try {
    // Convert blob to array buffer
    const arrayBuffer = await audioBlob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    const response = await axios.post<TranscriptionResponse>(
      WHISPER_API_URL,
      uint8Array,
      {
        headers: {
          ...headers,
          'Content-Type': 'audio/wav',
        },
      }
    );
    return response.data.text;
  } catch (error) {
    console.error('Transcription error:', error);
    throw new Error('Failed to transcribe audio');
  }
};

export const summarizeText = async (text: string): Promise<string> => {
  try {
    const response = await axios.post<SummaryResponse>(
      BART_API_URL,
      { inputs: text },
      {
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.summary_text;
  } catch (error) {
    console.error('Summarization error:', error);
    throw new Error('Failed to summarize text');
  }
};