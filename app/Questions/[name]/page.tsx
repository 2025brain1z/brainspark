// @ts-nocheck
"use client";
import { useParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Confetti from "@/components/Confetti";
import styles from "@/styles/styles.module.css";

export default function Page() {
  const params = useParams();
  const name = params.name as string;

  const { user } = useUser();
  const userId = user?.id;  // Ensure this is defined
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [questions, setQuestions] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState("");
  const [output, setOutput] = useState("The response will appear here...");
  const [currentBatch, setCurrentBatch] = useState(0);
  const questionsPerPage = 10;
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});

  const saveQuestionsToFile = async (questions) => {
    try {
      await fetch("/api/save-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questions }),
      });
    } catch (error) {
      console.error("Error saving questions:", error);
    }
  };

  const startQuiz = async () => {
    setLoadingQuestions(true);
    setDifficulty(selectedDifficulty);

    try {
      const data = await import(`@/data/${name}.d.ts`);
      const filteredQuestions = data.questions.filter(q => q.difficulty === selectedDifficulty);
      const shuffledQuestions = filteredQuestions.sort(() => Math.random() - 0.5);
      const selectedQuestions = shuffledQuestions.slice(0, 40);

      setQuestions(selectedQuestions);
      await saveQuestionsToFile(selectedQuestions);
    } catch (error) {
      console.error("Error loading questions:", error);
    } finally {
      setLoadingQuestions(false);
    }
  };

  const totalBatches = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    currentBatch * questionsPerPage,
    (currentBatch + 1) * questionsPerPage
  );

  const onNext = () => {
    if (currentBatch + 1 < totalBatches) {
      setCurrentBatch(currentBatch + 1);
    }
  };

  const onPrevious = () => {
    if (currentBatch > 0) {
      setCurrentBatch(currentBatch - 1);
    }
  };


  const onSubmit = async () => {
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
  
    // Difficulty Multiplier
    const difficultyMultiplier = difficulty === "beginner" ? 1 : difficulty === "intermediate" ? 2 : 3;
  
    // Quiz Points Calculation
    const quizPoints = newScore * difficultyMultiplier;
  
    // Medal Determination
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
  
    // Total Points Calculation
    let totalPoints = quizPoints + medalPoints;
  
    if (!userId) {
      console.error("User ID is missing!");
      return;
    }

    try {
      
      // ✅ Send final update request
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
  
    // Fetch learning path suggestion
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userPrompt: `Hello, I scored ${newScore}/${questions.length} in ${name}. Can you suggest a learning path for ${name}?`,
        }),
      });
  
      const data = await response.json();
      setResponse(data.text);
    } catch (error) {
      console.error("Error fetching learning path:", error);
      setResponse("Failed to load learning path.");
    }
  };
  
  

  useEffect(() => {
    if (response.length === 0) return;
    setOutput("");
    response.split("").forEach((char, i) => {
      setTimeout(() => setOutput(prev => prev + char), i * 10);
    });
  }, [response]);

  const viewAnswers = () => {
    window.open("/quiz/results", "_blank");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar on Top */}
      <div className="w-full bg-gray-200">
        <Navbar />
      </div>
  
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left section */}
        <div className="w-1/4 bg-gray-100 p-6 flex flex-col justify-center">
          <h2 className="text-lg font-semibold">Quiz Navigation</h2>
          <p className="mt-2">
            You are answering questions for: <strong>{name ? name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').replace(/%2C/g, ',') : ""}</strong>
          </p>
          <p>
            Difficulty: <strong>{difficulty ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1) : "Not Selected"}</strong>
          </p>
        </div>
  
        {/* Main section */}
        <div className="w-1/2 flex flex-col justify-start items-center p-8 pt-10 overflow-y-auto max-h-screen">
          {difficulty === null ? (
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-2xl font-bold">Select Difficulty</h1>
  
              <RadioGroup value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner">Beginner</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">Intermediate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="advanced" id="advanced" />
                    <Label htmlFor="advanced">Advanced</Label>
                  </div>
                </div>
              </RadioGroup>
  
              <Button onClick={startQuiz} disabled={!selectedDifficulty}>
                Start Quiz
              </Button>
            </div>
          ) : loadingQuestions ? (
            <h1 className="text-2xl font-bold">Loading questions...</h1>
          ) : currentBatch < totalBatches ? (
            <div className="flex flex-col items-center w-full">
              <h2 className="text-lg font-semibold mb-4">
                Question {currentBatch * 10 + 1}-{Math.min((currentBatch + 1) * 10, questions.length)} of {questions.length}
              </h2>
              <div className="w-full max-w-2xl pb-10">
                {currentQuestions.map((question, index) => {
                  const absoluteIndex = currentBatch * questionsPerPage + index;
                  return (
                    <div key={absoluteIndex} className="mb-6">
                      <h1 className="text-xl font-bold">{question.question}</h1>
                      <RadioGroup 
                        value={selectedAnswers[absoluteIndex] || ""}
                        onValueChange={(value) => setSelectedAnswers(prev => ({ 
                          ...prev, 
                          [absoluteIndex]: value 
                        }))}
                      >
                        {question.options.map((option, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <RadioGroupItem
                              value={option}
                              id={`q${absoluteIndex}-r${idx}`}
                            />
                            <Label htmlFor={`q${absoluteIndex}-r${idx}`}>{option}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 mt-6">
                <Button onClick={onPrevious} disabled={currentBatch === 0}>Previous</Button>
                {currentBatch + 1 < totalBatches ? (
                  <Button onClick={onNext}>Next</Button>
                ) : (
                  <Button onClick={onSubmit}>Submit</Button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-2xl mt-2 font-bold">You scored {score} out of {questions.length}</h1>
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
                  <Markdown>{response || output}</Markdown>
                </div>
              </div>
  
              <div className="flex gap-4">
              <Button onClick={() => window.location.reload()}>Restart</Button>
                <Button
                  onClick={() => {
                    const resultWindow = window.open("", "_blank");
                    if (resultWindow) {
                      resultWindow.document.write(`
                        <html>
                          <head>
                            <title>Quiz Results</title>
                            <style>
                              body { font-family: Arial, sans-serif; padding: 20px; }
                              h1 { font-size: 24px; }
                              .question { margin-bottom: 15px; }
                              .correct { color: green; font-weight: bold; }
                            </style>
                          </head>
                          <body>
                            <h1>Quiz Results</h1>
                            ${questions
                              .map(
                                (q, i) => {
                                  const userAnswer = selectedAnswers[i];
                                  const isAnswered = userAnswer !== undefined && userAnswer !== null && userAnswer !== '';
                                  const isCorrect = isAnswered && userAnswer?.toString().toLowerCase() === q.correctOption?.toString().toLowerCase();
                                  
                                  return `
                                    <div class="question">
                                      <p><strong>Question ${i + 1}:</strong> ${q.question}</p>
                                      <p class="answer-status ${!isAnswered ? 'unanswered' : isCorrect ? 'correct' : 'incorrect'}">
                                        Your Answer: ${!isAnswered ? 'Not answered' : userAnswer}
                                        ${!isAnswered ? ' ⚠️' : isCorrect ? ' ✅' : ' ❌'}
                                      </p>
                                      <p class="correct-answer correct">
                                        Correct Answer: ${q.correctOption}
                                      </p>
                                    </div>
                                  `;
                                }
                              )
                              .join("")}
                            <div style="margin-top: 20px; padding: 10px; background-color: #f0f0f0; border-radius: 4px;">
                              <p><strong>Legend:</strong></p>
                              <p>✅ Correct Answer</p>
                              <p>❌ Incorrect Answer</p>
                              <p>⚠️ Question Not Answered</p>
                            </div>
                          </body>
                        </html>
                      `);
                      resultWindow.document.close();
                      resultWindow.focus();
                    }
                  }}
                >
                  View Answers
                </Button>
              </div>
            </div>
          )}
        </div>
  
        {/* Right section */}
        <div className="w-1/4 bg-gray-100 p-6 flex flex-col justify-center">
          <h2 className="text-lg font-semibold">Quiz Progress</h2>
          <p className="mt-2">
            {difficulty === null
              ? "Difficulty Selection"
              : currentBatch + 1 > totalBatches
              ? "Results"
              : `Current Batch: ${currentBatch + 1} / ${totalBatches > 0 ? totalBatches : 0}`}
          </p>
        </div>
      </div>
    </div>
  );  
}