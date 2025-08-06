Video Demo Link:

"https://drive.google.com/drive/folders/191qSzzQ9YqTlgGWINYEelDbNZxKWqgzs?usp=drive_link"

# 🎯 VisionChat AI

[![Built for Mantra Hackathon 2024](https://img.shields.io/badge/Hackathon-Mantra%202024-orange.svg)](https://github.com/Vedant23-23/Visionchat-20Ai)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.11-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Transform traffic safety through intelligent video analysis and AI-powered insights**

VisionChat AI is a cutting-edge, production-ready web application that revolutionizes traffic safety monitoring by combining advanced artificial intelligence with intuitive user experience design. Upload traffic footage and receive comprehensive AI-powered insights through an interactive conversational interface.

![VisionChat AI Demo](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=VisionChat+AI+Demo)

## ✨ **Features**

### 🎬 **Intelligent Video Analysis**

- **Drag-and-drop video upload** with real-time processing feedback
- **AI-powered event detection** (pedestrians, vehicles, traffic lights)
- **Traffic violation identification** with confidence scoring
- **Environmental analysis** (weather, lighting, traffic density)
- **Risk assessment** and safety recommendations

### 💬 **Interactive AI Chat Interface**

- **Natural language querying** about video content
- **Context-aware responses** with precise timestamps
- **Suggested questions** for guided exploration
- **Real-time conversation** with typing indicators
- **Multi-turn dialogue** with conversation memory

### 📊 **Visual Timeline Summary**

- **Color-coded event timeline** with precise timestamps
- **Violation badges** (Safe, Violation, Unknown)
- **Confidence scores** for each detection
- **Environmental context cards**
- **Detailed event descriptions**

### 🧠 **Educational MCQ Testing**

- **Auto-generated questions** based on video analysis
- **Interactive multiple-choice format**
- **Immediate feedback** with detailed explanations
- **Progress tracking** and scoring system
- **Traffic safety education**

### 🎨 **Modern UI/UX**

- **Dark theme** with neon accent colors
- **Glassmorphism & Neumorphism** effects
- **Responsive design** (mobile-first approach)
- **Smooth animations** and transitions
- **Accessible components** (WAI-ARIA compliant)

## 🚀 **Tech Stack**

### **Frontend**

- **React 18** - Modern UI framework with hooks
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **React Router 6** - Client-side routing

### **Backend**

- **Express.js** - Web application framework
- **Node.js** - JavaScript runtime environment
- **TypeScript** - Full-stack type safety
- **CORS** - Cross-origin resource sharing

### **AI & Machine Learning**

- **Gemini AI** - Google's multimodal AI for video understanding
- **OpenAI GPT-4 Vision** - Advanced vision-language model
- **Vertex AI** - Google Cloud ML platform
- **Firebase** - Real-time data and authentication

### **Development Tools**

- **Vitest** - Fast unit testing framework
- **Prettier** - Code formatting
- **ESLint** - Code linting and quality
- **npm** - Package management

## 📋 **Prerequisites**

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- **Modern web browser** with ES6+ support

## ⚡ **Quick Start**

### 1. **Clone the Repository**

```bash
git clone https://github.com/Vedant23-23/Visionchat-20Ai.git
cd Visionchat-20Ai
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Environment Setup**

```bash
# Copy environment template
cp .env.example .env

# Add your API keys
VITE_OPENAI_API_KEY=your_openai_key
VITE_GEMINI_API_KEY=your_gemini_key
FIREBASE_CONFIG=your_firebase_config
```

### 4. **Start Development Server**

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### 5. **Build for Production**

```bash
npm run build
npm start
```

## 📖 **Usage**

### **Upload and Analyze Video**

1. Click "Try It Now" or navigate to the Upload section
2. Drag and drop a traffic video (max 2 minutes, 100MB)
3. Wait for AI processing to complete
4. View the generated timeline summary

### **Interactive Chat**

1. Scroll to the Chat Assistant section
2. Ask questions about the video content
3. Use suggested questions for guidance
4. Explore detailed insights about events

### **Educational Testing**

1. Navigate to the Test Your Understanding section
2. Answer auto-generated multiple-choice questions
3. Review explanations for each answer
4. Track your progress and score

## 🏗️ **Architecture**

### **System Architecture Diagram**

```


                                ┌─────────────────┐
                                │   Frontend      │
                                │   (React App)   │
                                └─────────────────┘
                                         │
                                ┌─────────────────┐
                                │   Backend       │
                                │   (Express.js)  │
                                └─────────────────┘
                                         │
                    ┌────────────────────┼────────────────────┐
                    │                    │                    │
            ┌───────────────┐   ┌────────────────┐   ┌────────────────┐
            │   Gemini AI   │   │  OpenAI GPT-4  │   │   Firebase     │
            │   (Video)     │   │   (Vision)     │   │   (Data)       │
            └───────────────┘   └────────────────┘   └────────────────┘

```

### **Project Structure**

```
├── client/                 # React frontend application
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Landing section
│   │   ├── UploadVideo.tsx # Video upload interface
│   │   ├── VideoSummary.tsx# AI analysis results
│   │   ├── ChatAssistant.tsx# Interactive chat
│   │   ├── MCQTest.tsx     # Educational testing
│   │   ├── About.tsx       # Features and use cases
│   │   └── Footer.tsx      # Footer with credits
│   ├── pages/              # Route components
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility functions
├── server/                 # Express backend
│   ├── routes/             # API endpoints
│   └── index.ts            # Server configuration
├── shared/                 # Shared TypeScript types
└── public/                 # Static assets
```

### **Component Flow**

```
App.tsx
├── Header (Navigation)
├── Main
│   └── Index.tsx
│       ├── Hero (Landing)
│       ├── UploadVideo (File Upload)
│       ├── VideoSummary (AI Results)
│       ├── ChatAssistant (Interactive Chat)
│       ├── MCQTest (Educational)
│       ├── About (Use Cases)
│       └── Footer (Credits)
```

## 🎯 **Use Cases**

### **Traffic Safety Monitoring**

- Real-time intersection surveillance
- Pedestrian safety analysis
- Vehicle compliance monitoring
- Accident prevention through predictive analysis

### **Law Enforcement & Legal**

- Evidence documentation with timestamps
- Incident reconstruction
- Court-ready reports with visual evidence
- Training materials for officers

### **Urban Planning & Smart Cities**

- Traffic flow optimization
- Infrastructure improvement recommendations
- Public safety enhancement
- Policy development support

### **Insurance & Claims**

- Automated claim processing
- Fraud detection through pattern recognition
- Risk assessment for premium calculations
- Objective dispute resolution

## 🧪 **Testing**

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Type checking
npm run typecheck
```

## 📦 **Building**

```bash
# Build client and server
npm run build

# Build client only
npm run build:client

# Build server only
npm run build:server
```

## 🚀 **Deployment**

The application is configured for deployment on multiple platforms:

### **Netlify/Vercel**

```bash
# Build and deploy
npm run build
# Upload dist/ folder to your platform
```

### **Docker**

```bash
# Build Docker image
docker build -t visionchat-ai .

# Run container
docker run -p 8080:8080 visionchat-ai
```

### **Cloud Platforms**

- **Google Cloud Platform** (Vertex AI integration)
- **Firebase Hosting** (Static files)
- **Heroku** (Full-stack deployment)

## 👥 **Team**

This project was developed by a talented team for **Mantra Hackathon 2024**:

- **[Vedant Patil](https://github.com/Vedant23-23)** - Lead Developer & Project Architecture
- **Manas Patil** - Frontend Development & UI/UX Design
- **Fenil Selodiya** - AI Integration & Backend Development
- **Jatin Bendale** - Backend Architecture & API Development

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**

- Follow TypeScript best practices
- Write unit tests for new features
- Follow the existing code style
- Update documentation as needed

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Mantra Hackathon 2024** for the opportunity to innovate
- **Google Gemini AI** for advanced video understanding
- **OpenAI** for GPT-4 Vision capabilities
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for rapid UI development

## 📞 **Support**

- **Issues**: [GitHub Issues](https://github.com/Vedant23-23/Visionchat-20Ai/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Vedant23-23/Visionchat-20Ai/discussions)
- **Email**: [Contact Team](mailto:vedant.patil@example.com)

## 🔮 **Roadmap**

- [ ] Real-time video streaming analysis
- [ ] Multi-camera coordination
- [ ] Mobile app development
- [ ] Advanced ML model training
- [ ] API integration with traffic systems
- [ ] Real-time collaboration features

---

**Built with ❤️ for safer roads and smarter cities**

[![GitHub stars](https://img.shields.io/github/stars/Vedant23-23/Visionchat-20Ai.svg?style=social&label=Star)](https://github.com/Vedant23-23/Visionchat-20Ai/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Vedant23-23/Visionchat-20Ai.svg?style=social&label=Fork)](https://github.com/Vedant23-23/Visionchat-20Ai/network)
