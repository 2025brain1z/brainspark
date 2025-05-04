"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "@/styles/home.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const registerUser = async () => {
      if (!user || !isLoaded) return;

      try {
        const response = await fetch('/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user.primaryEmailAddress?.emailAddress,
          }),
        });

        if (!response.ok) {
          throw new Error('Registration failed');
        }

        const data = await response.json();
        console.log('User registered:', data);
      } catch (error) {
        console.error('Registration error:', error);
        toast.error('Failed to register user');
      }
    };

    registerUser();
  }, [user, isLoaded]);

  return (
    <div className={styles.homeContainer}>
      <Toaster />
      <div>
      <Navbar /> {/* Render the Navbar component */}
      {/* Other content */}
      </div>
      <div className={`${styles.herosection} mt-20`}>
        <div className={styles.herocontent}>
          <div className={styles.heroheading}>
            <h1 className={styles.h1}>
              <Typewriter
                words={["What is BrainSpark", "Gamified LMS", "AI Powered", "Fun to Learn"]}
                loop={1000}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </div>
          <div className={styles.wrapper}>
            <p className={`${styles.heroheading} ${styles.herosubheading}`}>
            BrainSpark is a gamified learning experience that makes studying 
            fun and engaging for students. Through interactive challenges, 
            rewards, and personalized learning paths, it sparks curiosity 
            and enhances academic performance.
            </p>
            <Link href="/Courses">
              <button className={styles.btnArrow}>Select a Field to Explore</button>
            </Link>
          </div>
        </div>

        {/* Flex wrapper containing the four rectangular tabs */}
        <div className={`${styles.flexwrapper} flex flex-col gap-4 p-5`}>
          <Link href="/Courses/">
            <div className={`${styles.tab} p-4 text-center bg-gray-200 rounded-md hover:bg-gray-300 transition`}>
              Informatics
            </div>
          </Link>
          <Link href="/Courses/">
            <div className={`${styles.tab} p-4 text-center bg-gray-200 rounded-md hover:bg-gray-300 transition`}>
              Communications
            </div>
          </Link>
          <Link href="/Courses/">
            <div className={`${styles.tab} p-4 text-center bg-gray-200 rounded-md hover:bg-gray-300 transition`}>
              Engineering
            </div>
          </Link>
          <Link href="/Courses/">
            <div className={`${styles.tab} p-4 text-center bg-gray-200 rounded-md hover:bg-gray-300 transition`}>
              Business
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
