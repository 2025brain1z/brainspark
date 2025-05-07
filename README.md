# BrainSpark - AI-Powered Learning Platform

A modern educational platform that leverages AI to generate quizzes from lecture notes and provide personalized learning paths.

## Features

- **AI-Powered Quiz Generation**: Upload PDF or PPTX lecture notes and get instant quizzes
- **Personalized Learning**: Get tailored learning paths based on quiz performance
- **Progress Tracking**: Track your learning progress with daily streaks and achievements
- **Multiple Difficulty Levels**: Choose between beginner, intermediate, and advanced quizzes
- **Interactive Interface**: User-friendly design with real-time feedback
- **Achievement System**: Earn medals and points as you learn

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: Clerk
- **AI Integration**: Google Gemini AI, Open AI ChatGPT
- **Email Service**: Resend
- **File Processing**: PDF and PPTX parsing

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database
- Environment variables:
  ```
  MONGODB_URI
  MONGODB_DB_NAME
  CLERK_SECRET_KEY=
  GOOGLE_API_
  RESEND_API_KEY
  ```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/brainsspark.git
cd brainsspark
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
brainsspark/
├── app/                     # Next.js app directory
│   ├── api/                # API routes
│   │   ├── chat/          # AI chat endpoints
│   │   ├── contact/       # Contact form endpoints  
│   │   ├── upload/        # File upload handling
│   │   └── user/          # User management
│   │       └── [id]/      # Dynamic user routes
│   ├── Questions/         # Quiz interface
│   │   └── [name]/       # Dynamic quiz routes
│   ├── quiz/             # Quiz results
│   │   └── generated/    # Generated quiz pages
│   └── UploadNotes/      # Note upload interface
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── Confetti/        # Celebration effects
│   ├── email-template/  # Email templates
│   └── Navbar/          # Navigation
├── lib/                  # Utility functions
│   ├── mongodb.ts       # Database connection
│   └── utils.ts         # Helper functions
├── models/              # Database schemas
│   └── User.ts         # User model
├── public/             # Static assets
│   └── images/        # Image assets
├── styles/            # Styling
│   └── styles.module.css # CSS modules
└── .env              # Environment variables
```

## Key Features Explained

### Quiz Generation
- Upload lecture notes in PDF or PPTX format
- AI analyzes content and generates relevant questions
- Multiple choice questions with varying difficulty levels

### Learning Path
- Personalized recommendations based on quiz performance
- AI-generated study suggestions
- Progress tracking with daily streaks

### User Progress
- Point system based on quiz performance
- Achievement badges for milestones
- Daily login streaks
- Email notifications for achievements

## Acknowledgments
- Google Gemini AI for content generation
- Clerk for authentication services
- MongoDB for database services
- Resend for email services
- Canva for Icons and Logos