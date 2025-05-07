"use client";

// Import necessary dependencies for file upload and UI components
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/Navbar";

/**
 * UploadNotes Component
 * Handles file upload, topic selection, and quiz generation
 * Supports PDF and PPTX files with difficulty selection
 */
export default function UploadNotes() {
  // State management for file upload and form data
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [topic, setTopic] = useState<string>("");

  /**
   * Handles topic input changes with character limit
   * @param e - Input change event
   */
  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, 100); // Enforce 100-char limit
    setTopic(value);
  };

  /**
   * Handles file selection and validation
   * Validates file type (PDF or PPTX)
   * @param event - File input change event
   */
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.presentationml.presentation"];
      if (!allowedTypes.includes(file.type)) {
        setError("Invalid file type. Only PDF and PowerPoint (PPTX) files are allowed.");
        setSelectedFile(null);
      } else {
        setError(null);
        setSelectedFile(file);
      }
    }
  };

  /**
   * Handles form submission
   * Validates inputs, uploads file, and generates quiz
   */
  const handleSubmit = async () => {
    // Validate form inputs
    if (!selectedFile || !selectedDifficulty) {
      setError("Please select a file and difficulty level.");
      return;
    }

    if (!topic.trim()) {
      setError("Please enter a course or topic name.");
      return;
    }

    // Reset error state and show loading
    setError(null);
    setLoading(true);

    // Prepare form data for upload
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("difficulty", selectedDifficulty);

    // Log upload details for debugging
    console.log("Uploading file:", selectedFile.name);
    console.log("Selected difficulty:", selectedDifficulty);
    console.log("Topic:", topic);

    try {
      // Send file to API for processing
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("API Response:", data);

      // Handle API errors
      if (!response.ok) throw new Error(data.error || "Failed to generate questions");

      // Store generated questions in localStorage
      localStorage.setItem("generatedQuiz", JSON.stringify(data.questions));

      // Redirect to quiz page
      router.push(`/quiz/generated?topic=${encodeURIComponent(topic)}`);
    } catch (err) {
      // Handle and display errors
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
      console.error("Upload error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Render component UI
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content container */}
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col items-center p-6 border rounded-lg shadow-md bg-white w-full max-w-md">
          {/* Form title */}
          <h2 className="text-lg font-semibold mb-4">Upload Lecture Notes</h2>

          {/* File upload section */}
          <div className="w-full mb-3">
            <Label htmlFor="fileUpload" className="font-semibold block mb-2">Select File (PDF or PPTX)</Label>
            <input 
              id="fileUpload"
              type="file" 
              accept=".pdf,.pptx" 
              onChange={handleFileChange} 
              className="w-full border rounded p-2"
            />
          </div>
          
          {/* Selected file preview */}
          {selectedFile && (
            <div className="w-full mb-3 p-2 bg-blue-50 rounded-md">
              <p className="text-sm text-gray-700 flex items-center">
                <span className="mr-1">📄</span> 
                {selectedFile.name}
                <span className="ml-auto text-xs text-gray-500">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </p>
            </div>
          )}
          
          {/* Error message display */}
          {error && <p className="text-sm text-red-500 w-full mb-3">{error}</p>}

          {/* Topic input section */}
          <div className="mt-1 w-full">
            <Label htmlFor="topicName" className="font-semibold">Course/Topic Name</Label>
            <input
              id="topicName"
              type="text"
              value={topic}
              onChange={handleTopicChange}
              maxLength={100}
              placeholder="Enter course or topic name"
              className="w-full mt-1 p-2 border rounded-lg"
            />
            <p className="text-xs text-gray-500 mt-1">{topic.length}/100 characters</p>
          </div>

          {/* Difficulty selection */}
          <div className="mt-3">
            <Label className="font-semibold">Select Difficulty</Label>
            <RadioGroup value={selectedDifficulty || undefined} onValueChange={setSelectedDifficulty} className="mt-2">
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
          </div>

          {/* Loading spinner or submit button */}
          {loading ? (
            <div className="mt-4 flex flex-col items-center">
              <div className="w-6 h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              <p className="text-sm text-blue-500 mt-2">Getting your questions ready...</p>
            </div>
          ) : (
            <Button 
              onClick={handleSubmit} 
              className="mt-4 w-full" 
              disabled={loading || !selectedFile || !selectedDifficulty || !topic.trim()}
            >
              Generate Quiz
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}