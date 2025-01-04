"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";


export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">
                <Link href="/">EduScale</Link></span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-300 hover:text-white flex items-center">
              Features <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <a href="#" className="text-gray-300 hover:text-white">
              Pricing
            </a>
            <Link href="/blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>
            <a href="/support" className="text-gray-300 hover:text-white">
              Support
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white px-3 py-2">
              Log In
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
