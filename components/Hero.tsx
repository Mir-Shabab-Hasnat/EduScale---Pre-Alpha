import React from "react";

export function Hero() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 inline-flex items-center mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-black dark:border-white"
                  src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                  alt=""
                />
              ))}
            </div>
            <span className="ml-3 text-gray-400">1,254 happy schools</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
            Modern Education Management{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            EduScale is a comprehensive school management system that
            streamlines administration, enhances communication, and empowers
            educational excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-md text-lg font-medium">
              Request Demo
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-8 py-4 rounded-md text-lg font-medium">
              Get Started
            </button>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-8">
            Join 4,000+ schools already growing with EduScale
          </p>
        </div>
      </div>
    </div>
  );
}
