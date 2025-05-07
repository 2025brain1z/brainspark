// models/User.ts
import mongoose from "mongoose";

/**
 * Achievement Schema Definition
 * Represents user achievements in the system
 */
const achievementSchema = new mongoose.Schema({
  id: { type: String, required: true },      // Unique identifier for the achievement
  title: { type: String, required: true },    // Display title of the achievement
  description: { type: String, required: true }, // Detailed description of how to earn
  icon: { type: String, default: "🏅" }      // Emoji or icon representation
});

/**
 * Badge Schema Definition
 * Represents badges that users can earn
 */
const badgeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, sparse: true }, // Unique badge identifier
  name: { type: String, required: true },     // Display name of the badge
  description: { type: String, required: true }, // Badge earning criteria
  icon: { type: String, required: true },     // Visual representation of badge
  earnedAt: { type: Date, default: Date.now } // Timestamp when badge was earned
});

/**
 * Quiz History Entry Schema
 * Tracks individual quiz attempts and scores
 */
const historyEntrySchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },    // When the quiz was taken
  courseName: { type: String, required: true }, // Name of the course/topic
  score: { type: String, required: true }      // Quiz score achieved
});

/**
 * Main User Schema Definition
 * Stores user profile data and related collections
 */
const UserSchema = new mongoose.Schema(
  {
    clerkId: { type: String, unique: true, required: true }, // External auth provider ID
    email: { type: String, unique: true, required: true },   // User's email address
    firstName: { type: String, required: true },             // User's first name
    lastName: { type: String, required: true },              // User's last name
    badges: { type: [badgeSchema], default: [] },           // Collection of earned badges
    points: { type: Number, default: 0 },                   // Total points accumulated
    dailyStreak: { type: Number, default: 0 },             // Consecutive days active
    achievements: { type: [achievementSchema], default: [] }, // Unlocked achievements
    quizHistory: {                                         // Record of quiz attempts
      type: [historyEntrySchema], 
      default: []                                          // Initialize as empty array
    },
  },
  { timestamps: true }                                      // Adds createdAt and updatedAt
);

/**
 * Model Creation with Hot Reload Support
 * Prevents model recompilation errors in development
 */
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;