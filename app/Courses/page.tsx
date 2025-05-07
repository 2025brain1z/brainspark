"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Courses() {
  // State to track expanded courses
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  // Function to toggle course expansion
  const toggleCourse = (course: string) => {
    setExpanded((prev) => ({ ...prev, [course]: !prev[course] }));
  };

  // Department, Course, and Subject Structure
  const departments = {
    "Computational Science and Informatics": {
      "Information Technology": ["Python", "Data Structures and Algorithms", "Introduction to Data Science", "Internet of Things"],
      "Computer Science": ["Physical Science", "Object Oriented Programming with C++", "Computer Networks", "Computer System Programming"],
      "Artificial Intelligence": ["Data Analysis using Excel", "AI Representation and Problem Solving", "Digital Signal Processing", "Design of AI Products"],
    },
    "Business": {
      "Accounting": ["Introduction to Doing Business in Africa", "Database Management System", "Business Finance", "Corporate Finance"],
      "Banking and Finance": ["Essential Maths for Business", "Banking Law and Practice", "Management and Organizational Behaviour", "Fixed Income Analysis"],
      "Entrepreneurship": ["Fundamentals of Innovation and Entrepreneurship", "Financial Statement for Decision Making", "E-commerce for Entrepreneurship", "Customer Experience for Design"],
    },
    "Engineering": {
      "Computer Engineering": ["Intro to Engineering", "Computer Systems Engineering", "Microprocessors and Microcontrollers", "Computer Security"],
      "BioMedical Engineering": ["Intro to BioMedical Engineering", "Circuit Theory", "Biochemistry", "Medical Devices and Technologies"],
      "Robotics": ["Engineering Mechanics", "Sensors, Measurements and Instrumentations", "Signals and Systems", "Computer Vision"],
    },
    "Communication Arts": {
      "Journalism and Mass Communication": ["Writing for Media", "Online Journalism", "Media Research", "Media Culture and Society"],
      "Advertisement and Public Relations": ["History of Media", "Internet and New Media", "Public Relations Writing", "Events Planning and Management"],
    },
  };

  return (
    <div className={styles.container}>
      {/* Navbar/Header */}
      <div>
        <Navbar />
      </div>

      {/* Course List Section */}
      <div className={styles.herosection}>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Available Courses</h1>
          <Image src="/courses-banner.png" width={400} height={200} alt="Courses" className="mx-auto" />
        </div>

        {/* Added Image Below "Available Courses" */}

        {/* Departments and Courses */}
        <div className="max-w-2xl mx-auto space-y-6 mt-6">
          {Object.entries(departments).map(([department, courses]) => (
            <div key={department} className="border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">{department}</h2>
              
              {/* Courses List */}
              <div className="ml-4 mt-2 space-y-2">
                {Object.entries(courses).map(([course, subjects]) => (
                  <div key={course}>
                    {/* Course Name (Clickable) */}
                    <button 
                      onClick={() => toggleCourse(course)}
                      className="text-xl font-semibold text-blue-600 hover:underline"
                    >
                      {course}
                    </button>

                    {/* Subjects List (Shown if expanded) */}
                    {expanded[course] && (
                      <ul className="ml-6 mt-1 space-y-1 text-gray-700">
                        {subjects.map((subject) => (
                          <li key={subject}>
                            <Link 
                              href={`/Questions/${subject.replace(/\s+/g, "-").toLowerCase()}`} 
                              className="text-lg text-blue-500 hover:underline"
                            >
                              {subject}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Can't Find a Course? */}
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold text-gray-800">Can&apos;t find a course?</h2>
          <Link href="/UploadNotes">
            <button className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
              Get Custom Questions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
