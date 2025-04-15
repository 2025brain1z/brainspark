"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs"; // Import Clerk's SignIn component
import Link from "next/link";

const SignInPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Clerk Sign-In Component */}
        <SignIn />

        {/* Footer Links */}
        <div className="mt-4 text-center">
          <Link href="/Home" className="text-blue-500 underline font-medium">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
