"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import Lottie from 'react-lottie'; // Import the Lottie library

export default function Home() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/me-anime.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation data:', error));
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    // Logic to handle search, e.g., calling YouTube API
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="min-h-screen text-gray-900">
     <div className="hero-section flex flex-col md:flex-row items-center justify-center px-6 py-12">
      {/* Left side: Text and description */}
      <div className="text-section md:mr-20" style={{maxWidth: "500px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}>Stream Your Learning</h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Enter a unit or text, and get the best educational video fetched directly from YouTube.
          Automatically generate quizzes to test your knowledge!
        </p>
        <button
        onClick={() => signIn("google", { callbackUrl: "/create" })}
          style={{
            backgroundColor: "#05583d",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: "18px"
          }}
        >
          Get Started
        </button>
      </div>

      {/* Right side: Animated illustration */}
      <div className="animation-section" style={{ width: "500px" }}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>

      {/* Explanation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <Image src="/search-icon.jpeg" alt="Search" width={150} height={150} />
              <h3 className="text-xl font-semibold mt-4">Search for Topics</h3>
              <p className="mt-2">Enter the unit or topic you are interested in, and we will find relevant videos for you.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/video-icon.jpeg" alt="Video" width={100} height={100} />
              <h3 className="text-xl font-semibold mt-4">Watch and Learn</h3>
              <p className="mt-2">Watch the selected YouTube videos directly on our platform and read the video script.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/quiz-icon.jpeg" alt="Quiz" width={100} height={100} />
              <h3 className="text-xl font-semibold mt-4">Take Quizzes</h3>
              <p className="mt-2">Test your knowledge with quizzes generated from the video content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-customGreen text-white py-12 bg-gradient-to-r from-green-400 to-black-800 text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Get Started Today!</h2>
        <p className="mb-6">
          Sign up now to explore educational videos and quizzes tailored to your interests.
        </p>
        <Button
          onClick={() => signIn("google", { callbackUrl: "/create" })}
          className="bg-white text-customGreen"
        >
          Sign Up
        </Button>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center"> 
          <p>&copy; 2024 Stream. Made By Likitha Khatri.</p>
        </div>
      </footer>
    </div>
  );
}
