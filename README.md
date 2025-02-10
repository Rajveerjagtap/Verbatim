# 🎙️ Verbatim: Live Lecture Transcription & Summarization

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Azure](https://img.shields.io/badge/Microsoft%20Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)

## 🖥️ Demo Interface

![Verbatim Interface Demo](https://github.com/user-attachments/assets/e4250d55-6b0b-4323-b192-5ad68c80b938)

Experience our intuitive user interface that features:
- 🎯 Clean, modern design with a focus on usability
- 📊 Split-view layout showing transcription and summary side by side
- 🎛️ Simple audio recording controls
- 📁 Drag-and-drop file upload support
- 💫 Real-time processing status indicators
- 📱 Fully responsive design for all devices

## 📝 Description

Verbatim is an advanced lecture transcription and summarization tool that leverages cutting-edge AI technology to convert spoken lectures into text and generate concise summaries in real-time. Perfect for students, educators, and professionals who want to make their lectures more accessible and digestible.

### ✨ Key Features

- 🎤 **Live Audio Recording**: Record lectures in real-time with our built-in audio recorder
- 📁 **File Upload Support**: Upload existing audio or video files for processing
- 🤖 **AI-Powered Transcription**: Utilizing OpenAI's Whisper Large V3 model for accurate speech-to-text conversion
- 📊 **Smart Summarization**: Powered by Facebook's BART-large-CNN model for generating comprehensive summaries
- 📱 **Responsive Design**: Works seamlessly across desktop and mobile devices
- 🎥 **Video Support**: Extract and process audio from video files automatically

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Hugging Face API token

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rajveerjagtap/Verbatim.git
cd Verbatim
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Hugging Face API token:
```env
HUGGING_FACE_API_TOKEN=your_api_token_here
```

4. Start the development server:
```bash
npm run dev
```

## 🛠️ Technical Architecture

- **Frontend**: React with TypeScript for type-safe development
- **UI Components**: Custom components with Tailwind CSS for styling
- **Audio Processing**: Web Audio API for handling audio/video input
- **API Integration**: Axios for communication with Hugging Face's API
- **AI Models**:
  - Whisper Large V3 for transcription
  - BART-large-CNN for summarization

## 📊 Features in Detail

### Audio/Video Processing
- Supports multiple audio formats
- Automatic audio extraction from video files
- File size limit: 100MB
- Real-time processing feedback

### Transcription
- High-accuracy speech recognition
- Support for multiple languages
- Punctuation and formatting preservation
- Real-time text output

### Summarization
- Contextual understanding
- Key points extraction
- Concise summary generation
- Maintains important details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI's Whisper model for transcription
- Facebook's BART model for summarization
- Hugging Face for AI model hosting
- All contributors and supporters

## 📧 Contact

Rajveer Jagtap - [GitHub](https://github.com/Rajveerjagtap)

Project Link: [https://github.com/Rajveerjagtap/Verbatim](https://github.com/Rajveerjagtap/Verbatim)
