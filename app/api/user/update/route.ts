import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import { medalIcons } from "@/utils/medals";

export async function PUT(req: NextRequest) {
  try {
    await connectToDatabase();
    const { userId, quizCompleted, quizPoints, medalPoints, totalPoints, medal } = await req.json();

    interface Badge {
      id: string;
      name: string;
      description: string;
      icon: string;
      earnedAt: Date;
    }

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 🏆 Handling Medals & Badges (Ignore "Try Again")
    if (medal && medal !== "💔 Try Again") {
      const medalIcon = medalIcons[medal] || "/icon/default-medal.png";

      const existingBadge = user.badges.find((b: Badge) => b.name === medal);

      if (existingBadge) {
        // Extract count from description
        const countMatch = existingBadge.description.match(/^(\d+)x /);
        const count = countMatch ? parseInt(countMatch[1]) + 1 : 2;

        existingBadge.description = `${count}x ${medal}`;
        existingBadge.icon = medalIcon;
      } else {
        // Assign correct medal icon
        user.badges.push({
          id: new Date().toISOString(),
          name: medal,
          description: `1x ${medal}`,
          icon: medalIcon,
          earnedAt: new Date(),
        });
      }
    }

    // 🕒 Streak Logic
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0]; // YYYY-MM-DD
    const lastUpdated = user.lastStreakUpdate ? new Date(user.lastStreakUpdate) : null;
    const lastUpdatedStr = lastUpdated ? lastUpdated.toISOString().split("T")[0] : null;

    let dailyStreak = user.dailyStreak || 0;

    // ✅ Check if the user missed a day → Reset streak to 1
    if (quizCompleted) {
      if (!lastUpdated || lastUpdatedStr !== getYesterdayDate()) {
        dailyStreak = 1; // Reset if the last streak update was not yesterday
      } else {
        dailyStreak += 1; // Continue streak normally
      }

      // ✅ If streak exceeds 7, reset to 1
      if (dailyStreak > 7) {
        dailyStreak = 1;
      }

      user.dailyStreak = dailyStreak;
      user.lastStreakUpdate = today;
    }

    // 🏆 Apply Streak Multiplier
    let streakMultiplier = 1;
    if (dailyStreak === 1) streakMultiplier = 1.1;
    else if (dailyStreak === 2) streakMultiplier = 1.2;
    else if (dailyStreak === 3) streakMultiplier = 1.4;
    else if (dailyStreak === 4) streakMultiplier = 1.6;
    else if (dailyStreak === 5) streakMultiplier = 1.8;
    else if (dailyStreak >= 6) streakMultiplier = 2;

    // ✅ Multiply total points and round to ensure no decimals
    user.totalPoints = Math.round(totalPoints * streakMultiplier);

    // 🏆 Update Points
    user.points += quizPoints + medalPoints;

    await user.save();

    return NextResponse.json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// 🗓️ Helper Function to Get Yesterday's Date as "YYYY-MM-DD"
function getYesterdayDate() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0];
}