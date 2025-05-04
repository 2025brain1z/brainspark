import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  id: { type: String, required: true }, // Unique identifier for React keys
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: "🏅" }
});

const badgeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, sparse: true }, // Add sparse: true
  name: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  earnedAt: { type: Date, default: Date.now } // Optional: track when the user earned it
});

const UserSchema = new mongoose.Schema(
  {
    clerkId: { type: String, unique: true, required: true }, // Clerk's user ID
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true }, // Add first name
    lastName: { type: String, required: true },  // Add last name
    badges: { type: [badgeSchema], default: [] }, // Store badges as objects
    points: { type: Number, default: 0 },
    dailyStreak: { type: Number, default: 0 },
    achievements: { type: [achievementSchema], default: [] }, // Store achievements as objects
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
