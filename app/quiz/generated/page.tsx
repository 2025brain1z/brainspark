"use client";

// Import necessary dependencies for quiz functionality
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Confetti from "@/components/Confetti";
import { useUser } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import styles from "@/styles/styles.module.css";

/**
 * Type definition for quiz questions
 * @typedef {Object} Question
 * @property {string} question - The question text
 * @property {string[]} options - Array of possible answers
 * @property {string} correctOption - The correct answer
 */
type Question = {
  question: string;
  options: string[];
  correctOption: string;
};

/**
 * Main quiz content component
 * Handles quiz state, user interactions, and scoring
 */
function QuizContent() {
  // State management for quiz data and UI
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  // User authentication
  const { user } = useUser();
  const userId = user?.id;

  // URL parameters for topic name
  const searchParams = useSearchParams();
  const topicName = searchParams.get("topic") || "your topic";

  // Quiz state management
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState("");
  const [output, setOutput] = useState(
    <div className="flex items-center space-x-1">
      <span>The response will appear here</span>
      <span className="inline-block">...</span>
      <span className={styles.blinkingCursor}></span>
    </div>
  );

  // Pagination state
  const [currentBatch, setCurrentBatch] = useState(0);
  const questionsPerPage = 10;
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const router = useRouter();
  const [difficulty, setDifficulty] = useState<string | null>(null);

  /**
   * Load saved quiz questions from localStorage on component mount
   */
  useEffect(() => {
    const storedQuiz = localStorage.getItem("generatedQuiz");
    if (storedQuiz) {
      const parsedQuestions: Question[] = JSON.parse(storedQuiz);
      setQuestions(parsedQuestions);
    }
    setLoading(false);
  }, []);

  // Calculate pagination variables for question batches
  const totalBatches = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    currentBatch * questionsPerPage,
    (currentBatch + 1) * questionsPerPage
  );

  /**
   * Navigate to next batch of questions
   * Includes smooth scrolling to top
   */
  const onNext = () => {
    if (currentBatch + 1 < totalBatches) {
      setCurrentBatch(currentBatch + 1);
      const middleSection = document.querySelector('.w-1\\/2.flex.flex-col.justify-start.items-center.p-8.pt-10.overflow-y-auto.max-h-screen');
      if (middleSection) {
        middleSection.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };
  
  /**
   * Navigate to previous batch of questions
   * Includes smooth scrolling to top
   */
  const onPrevious = () => {
    if (currentBatch > 0) {
      setCurrentBatch(currentBatch - 1);
      const middleSection = document.querySelector('.w-1\\/2.flex.flex-col.justify-start.items-center.p-8.pt-10.overflow-y-auto.max-h-screen');
      if (middleSection) {
        middleSection.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  /**
   * Reset quiz and return to upload page
   */
  const onRestart = () => {
    localStorage.removeItem("generatedQuiz");
    router.push("/UploadNotes");
  };

  /**
   * Handle quiz submission
   * Calculates score, awards medals, updates user progress
   * Fetches personalized learning path
   */
  const onSubmit = async () => {
    // Score calculation
    let newScore = 0;

    questions.forEach((question, index) => {
      const selected = selectedAnswers[index]?.toString().trim().toLowerCase();
      const correct = question.correctOption?.toString().trim().toLowerCase();
      if (selected && correct && selected === correct) {
        newScore += 1;
      }
    });

    setScore(newScore);
    setCurrentBatch(totalBatches);
    setResponse("");

    // Points and medals calculation
    const difficultyMultiplier = difficulty === "beginner" ? 1 : difficulty === "intermediate" ? 2 : 3;
    const quizPoints = newScore * difficultyMultiplier;

    // Determine medal based on score
    let medal = "";
    let medalPoints = 0;
    if (newScore >= 30) {
      medal = "🏅 Gold Medal";
      medalPoints = 20;
    } else if (newScore >= 20) {
      medal = "🥈 Silver Medal";
      medalPoints = 10;
    } else if (newScore >= 10) {
      medal = "🥉 Bronze Medal";
      medalPoints = 5;
    } else {
      medal = "💔 Try Again";
      medalPoints = -15;
    }

    // Total points calculation
    let totalPoints = quizPoints + medalPoints;

    if (!userId) {
      console.error("User ID is missing!");
      return;
    }

    try {
      // Save quiz history
      await fetch('/api/quiz-history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId,
          courseName: topicName,
          score: `${newScore}/${questions.length}`
        }),
      });      
    } catch (error) {
      console.error('Error updating quiz history:', error);
    }

    try {
      // Update user points and medals
      await fetch("/api/user/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          quizCompleted: true,
          quizPoints,
          medalPoints,
          totalPoints,
          medal,
        }),
      });
    } catch (error) {
      console.error("Error updating user points:", error);
    }

    // Generate personalized learning path
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userPrompt: `Hello, I scored ${newScore}/${questions.length} in ${topicName}. Can you suggest a learning path for ${topicName}?`,
        }),
      });

      const data = await response.json();
      setResponse(data.text);
    } catch (error) {
      console.error("Error fetching learning path:", error);
      setResponse("Failed to load learning path.");
    }
  };

  /**
   * Animated text effect for learning path display
   * Creates typewriter-style animation
   */
  useEffect(() => {
    if (response.length === 0) return;
    setOutput(
      <div className="flex items-center space-x-1">
        <span></span>
        <span className={styles.blinkingCursor}></span>
      </div>
    );
    response.split("").forEach((char, i) => {
      setTimeout(() => {
        setOutput(prev => (
          <div className="flex items-center space-x-1">
            <span>{typeof prev === 'string' ? prev + char : prev.props.children[0].props.children + char}</span>
            <span className={styles.blinkingCursor}></span>
          </div>
        ));
      }, i * 10);
    });
  }, [response]);

  // Render quiz interface with conditional content based on quiz state
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-grow">
        {/* Left Section */}
        <div className="w-1/4 bg-gray-100 p-6 flex flex-col justify-center">
          <h2 className="text-lg font-semibold">Quiz Navigation</h2>
          <p className="mt-2">Generated Quiz</p>
        </div>

        {/* Main Section */}
        <div className="w-1/2 flex flex-col justify-start items-center p-8 pt-10 overflow-y-auto max-h-screen">
          {loading ? (
            <h1 className="text-2xl font-bold">Loading questions...</h1>
          ) : currentBatch < totalBatches ? (
            <div className="flex flex-col items-center w-full">
              <h2 className="text-lg font-semibold mb-4">
                Question {currentBatch * 10 + 1}-{Math.min((currentBatch + 1) * 10, questions.length)} of {questions.length}
              </h2>
              <div className="w-full max-w-2xl pb-10">
                {currentQuestions.map((question, index) => (
                  <div key={index} className="mb-6">
                    <h1 className="text-xl font-bold">{question.question}</h1>
                    <RadioGroup
                      value={selectedAnswers[currentBatch * questionsPerPage + index] || ""}
                    >
                      {question.options.map((option, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={option}
                            id={`q${index}-r${idx}`}
                            onClick={() =>
                              setSelectedAnswers((prev) => ({
                                ...prev,
                                [currentBatch * questionsPerPage + index]: option,
                              }))
                            }
                          />
                          <Label htmlFor={`q${index}-r${idx}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <Button onClick={onPrevious} disabled={currentBatch === 0}>
                  Previous
                </Button>
                {currentBatch + 1 < totalBatches ? (
                  <Button onClick={onNext}>Next</Button>
                ) : (
                  <Button onClick={onSubmit}>Submit</Button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-2xl mt-2 font-bold">
                You scored {score} out of {questions.length}
              </h1>

              <Confetti />

              {/* Medal System */}
              {score >= 30 ? (
                <h2 className="text-xl font-bold text-green-500">🏅 Gold Medal!</h2>
              ) : score >= 20 ? (
                <h2 className="text-xl font-bold text-silver-500">🥈 Silver Medal!</h2>
              ) : score >= 10 ? (
                <h2 className="text-xl font-bold text-bronze-500">🥉 Bronze Medal!</h2>
              ) : (
                <h2 className="text-xl font-bold text-red-500">💔 Try Again!</h2>
              )}

              {/* Learning Path */}
              <div className="w-full max-w-2xl bg-gray-100 p-4 rounded-md shadow">
                <h2 className="text-lg font-semibold">Suggested Learning Path:</h2>
                <div className="mt-2 prose">
                  {response ? (
                    <Markdown>{response}</Markdown>
                  ) : (
                    <div className="flex items-center space-x-1">
                      <span>The response will appear here</span>
                      <span className="inline-block">...</span>
                      <span className={styles.blinkingCursor}></span>
                    </div>
                  )}
                </div>
              </div>

              {/* Buttons: Upload New Notes & View Results */}
              <div className="flex gap-4">
                <Button onClick={onRestart}>Upload New Notes</Button>
                <Button
                  onClick={() => {
                    const resultWindow = window.open("", "_blank");
                    if (resultWindow) {
                      resultWindow.document.write(`
                        <html>
                          <head>
                            <title>Quiz Results</title>
                            <style>
                              body { 
                                font-family: Arial, sans-serif; 
                                padding: 20px; 
                                max-width: 800px;
                                margin: 0 auto;
                              }
                              h1 { 
                                font-size: 24px;
                                color: #202124;
                              }
                              .question {
                                margin-bottom: 30px;
                                background: #f8f9fa;
                                padding: 20px;
                                border-radius: 8px;
                              }
                              .question-text {
                                font-size: 16px;
                                color: #202124;
                                margin-bottom: 15px;
                              }
                              .option {
                                padding: 10px 15px;
                                margin: 5px 0;
                                border-radius: 4px;
                                position: relative;
                              }
                              .option.correct {
                                background-color: #e6f4ea;
                                border: 1px solid #137333;
                                color: #137333;
                              }
                              .option.incorrect {
                                background-color: #fce8e6;
                                border: 1px solid #c5221f;
                                color: #c5221f;
                              }
                              .option.normal {
                                background-color: white;
                                border: 1px solid #dadce0;
                              }
                              .question.unanswered {
                                border: 2px solid #c5221f;
                                position: relative;
                              }
                              .option.skipped {
                                background-color: #fff3f3;
                                border: 1px solid #c5221f;
                              }
                              .legend {
                                display: flex;
                                gap: 20px;
                                padding: 15px;
                                background-color: #f8f9fa;
                                border-radius: 8px;
                                margin: 10px 0 20px 0;
                              }
                              .legend p {
                                margin: 0;
                                display: flex;
                                align-items: center;
                              }
                              .icon {
                                margin-right: 8px;
                              }
                            </style>
                          </head>
                          <body>
                            <h1>Quiz Results</h1>
                            <div class="legend">
                              <p><span class="icon">✓</span> Correct Answer</p>
                              <p><span class="icon">✗</span> Incorrect Answer</p>
                              <p><span style="color: #c5221f">■</span> Not Answered</p>
                            </div>
                            ${questions
                              .map(
                                (q, i) => {
                                  const userAnswer = selectedAnswers[i];
                                  const isAnswered = userAnswer !== undefined && userAnswer !== null && userAnswer !== '';
                                  
                                  return `
                                    <div class="question ${!isAnswered ? 'unanswered' : ''}">
                                      <div class="question-text">
                                        <strong>Question ${i + 1}:</strong> ${q.question}
                                      </div>
                                      ${q.options.map(option => {
                                        let optionClass = 'normal';
                                        let icon = '';
                                        
                                        if (option === q.correctOption) {
                                          optionClass = 'correct';
                                          icon = '✓';
                                        } else if (isAnswered && option === userAnswer) {
                                          optionClass = 'incorrect';
                                          icon = '✗';
                                        } else if (!isAnswered) {
                                          optionClass = 'skipped';
                                        }
                                        
                                        return `
                                          <div class="option ${optionClass}">
                                            <span class="icon">${icon}</span>
                                            ${option}
                                          </div>
                                        `;
                                      }).join('')}
                                    </div>
                                  `;
                                }
                              )
                              .join("")}
                          </body>
                        </html>
                      `);
                      resultWindow.document.close();
                      resultWindow.focus();
                    }
                  }}
                >
                  View Results
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="w-1/4 bg-gray-100 p-6 flex flex-col justify-center">
          <h2 className="text-lg font-semibold">Quiz Progress</h2>
          <p className="mt-2">
            {currentBatch + 1 > totalBatches
              ? "Results"
              : `Current Batch: ${currentBatch + 1} / ${totalBatches > 0 ? totalBatches : 0}`}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Wrapper component with Suspense for loading state
 */
export default function GeneratedQuiz() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuizContent />
    </Suspense>
  );
}
