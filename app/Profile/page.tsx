"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from '@clerk/nextjs'; // Import the UserButton component for logged-in users
import styles from "@/styles/home.module.css";

// Define TypeScript interfaces
interface Achievement {
  id: string;
  icon?: string;
  title: string;
  description: string;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon?: string;
  earnedAt?: string; // Date badge was earned
}

interface ProfileData {
  streak: number;
  achievements: Achievement[];
  badges: Badge[];
}

interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
}

const Profile: React.FC = () => {
  const { user } = useUser();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (!user) return;

    const checkAndRegisterUser = async () => {
      // First check if user exists
      const checkRes = await fetch(`/api/userprofile?userId=${user.id}`);
      const checkData = await checkRes.json();
      
      if (checkData.error) {
        // Only register if user doesn't exist
        await fetch("/api/user/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.primaryEmailAddress?.emailAddress }),
        });
      } else {
        setProfileData(checkData);
      }
      setIsRegistered(true);
    };

    const fetchData = async () => {
      if (!isRegistered) {
        await checkAndRegisterUser();
      } else {
        const res = await fetch(`/api/userprofile?userId=${user.id}`);
        const data = await res.json();
        if (!data.error) {
          setProfileData(data);
        }
      }

      // Fetch leaderboard
      const leaderRes = await fetch(`/api/leaderboard`);
      const leaderData = await leaderRes.json();
      if (!leaderData.error) {
        setLeaderboard(leaderData);
      }
    };

    fetchData();
  }, [user, isRegistered]);

  if (!user || !profileData) {
    return (
      <div className={styles.loadingContainer}>
        <Image
          src="/loading.gif"
          alt="Loading..."
          className={styles.loadingAnimation}
          width={150}
          height={150}
          priority
        />
      </div>
    );
  }

  // Safely access user and profileData properties
  return (
    <div className="max-w-4xl mx-auto p-6 pt-24">
      {/* Navbar */}
      <div className={`${styles.navbar} bg-[#e84949] w-full fixed top-0 left-0`}>
        <Link href={"/Home"} className={styles.logobar}>
          <Image src="/logo.png" width={40} height={40} alt="logo" />
          <div className={styles.logoText}>BrainSpark</div>
        </Link>
        <div className={`${styles.navitems} flex space-x-6`}>
          <Link href="/Home" className={styles.navlist}>Home</Link>
          <Link href="/Courses" className={styles.navlist}>Courses</Link>
          <Link href="/Chat" className={styles.navlist}>AI</Link>
          <Link href="/Profile" className={styles.navlist}>Profile</Link>
          <Link href="/Contact" className={styles.navlist}>Feedback</Link>

          {!user && (
            <Link href="/SignIn" className={styles.navlist}>
              Sign In
            </Link>
          )}

          <UserButton />
        </div>
      </div>

      {/* Profile Section */}
      <div className="text-center mb-6 mt-6">
        <h1 className="text-3xl font-bold">{user?.fullName || "Guest"}&apos;s Profile</h1>
        <p className="text-gray-500">Track your progress and achievements</p>
      </div>

      {/* Daily Streak */}
      <div className="bg-yellow-100 p-4 rounded-lg mb-4 text-center">
        <h2 className="text-xl font-semibold">🔥 Daily Streak: {profileData?.streak || 0} Days</h2>
        <p className="text-gray-600">Keep going! Complete a challenge every day.</p>
      </div>

      {/* Achievements */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">🏆 Achievements</h2>

        {profileData?.achievements && profileData.achievements.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {profileData.achievements.map((ach: Achievement, index: number) => (
              <div key={ach.id || index} className="bg-gray-100 p-3 rounded-lg shadow-md flex items-center">
                <span className="text-3xl mr-3">{ach.icon || "🏅"}</span>
                <div>
                  <h3 className="font-semibold">{ach.title || "Unknown Achievement"}</h3>
                  <p className="text-sm text-gray-600">{ach.description || "No description available."}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No achievements yet.</p>
        )}
      </div>

      {/* Badges */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">🏅 Medals</h2>
        {profileData?.badges?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {profileData.badges.map((badge: Badge) => (
              <div key={badge.id} className="medal-badge">
                <img src={badge.icon} alt={badge.name} width={40} height={40} />
                <div>
                  <h3 className="font-semibold">{badge.name}</h3>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                  {badge.earnedAt && (
                    <p className="text-xs text-gray-500">Latest on {new Date(badge.earnedAt).toLocaleDateString()}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No badges yet.</p>
        )}
      </div>

      {/* Leaderboard */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">📊 Leaderboard</h2>
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="p-3 text-left">Rank</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry: LeaderboardEntry, index: number) => (
              <tr key={entry.id || entry.name || index} className={entry.id === user?.id ? "bg-green-100" : ""}>
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{entry.name}</td>
                <td className="p-3">{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
