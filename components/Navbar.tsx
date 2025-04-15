import React from "react";
import { useUser } from '@clerk/nextjs'; // Import the useUser hook
import Link from "next/link";
import Image from "next/image";
import { UserButton } from '@clerk/nextjs'; // Import the UserButton component for logged-in users
import styles from "@/styles/home.module.css"; // Import your styles

const Navbar: React.FC = () => {
  const { user } = useUser(); // Get the user info from Clerk

  return (
    <div className={`${styles.navbar} bg-[#e84949]`}>
      <Link href={"/Home"} className={styles.logobar}>
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        <div className={styles.logoText}>BrainSpark</div>
      </Link>
      <div className={`${styles.navitems} flex space-x-6`}>
        <Link href="/Home" className={styles.navlist}>
          Home
        </Link>
        <Link href="/Courses" className={styles.navlist}>
          Courses
        </Link>
        <Link href="/Chat" className={styles.navlist}>
          AI
        </Link>
        <Link href="/Profile" className={styles.navlist}>
          Profile
        </Link>
        <Link href="/Contact" className={styles.navlist}>
          Feedback
        </Link>

        {/* Conditionally render the Sign In link based on user authentication */}
        {!user && (
          <Link href="/SignIn" className={styles.navlist}>
            Sign In
          </Link>
        )}

        {/* UserButton to show logged-in user's info */}
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
