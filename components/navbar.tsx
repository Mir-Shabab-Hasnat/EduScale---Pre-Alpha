"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useUser, useClerk } from "@clerk/nextjs"; // Clerk hooks for authentication
import Image from "next/image"; // Next.js Image component
import Defaultpfp from "../png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user, isLoaded } = useUser(); // Get the current user
  const { signOut, openSignIn } = useClerk(); // Clerk methods for sign out and open sign-in modal

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 bg-white dark:bg-black">
      <div className="relative inset-0 bg-gradient-to-b from-purple-900/20 to-black/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="dark:text-white light:text-black text-xl font-bold">
              <Link href="/">EduScale</Link>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button className="dark:text-gray-300 light:text-gray-600 hover:text-white flex items-center">
              Features <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <a href="#" className="dark:text-gray-300 light:text-gray-600 hover:text-white">
              Pricing
            </a>
            <Link href="/blog" className="dark:text-gray-300 light:text-gray-600 hover:text-white">
              Blog
            </Link>
            <a href="/support" className="dark:text-gray-300 light:text-gray-600 hover:text-white">

              Support
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {!isLoaded ? (
              <button className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Loading...
              </button>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <Image
                  src={Defaultpfp} // Use user.profileImage instead of profileImageUrl
                  alt="Profile"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <button
                  onClick={() => signOut()}
                  className="dark:text-gray-300 light:text-gray-600 hover:text-white px-3 py-2"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => openSignIn()} // Open Clerk's sign-in modal
                className="dark:text-gray-300 light:text-gray-600 hover:text-white px-3 py-2"
              >
                Log In
              </button>
            )}
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
            >
              Get Started Today
            </button>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
            >
              {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}

            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
