"use client";

import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}
export default function Blog() {
  const featuredPost: BlogPost = {
    title: "Transforming Education Management in the Digital Age",
    excerpt:
      "Discover how modern school management systems are revolutionizing administrative efficiency and improving student outcomes.",
    category: "Education Technology",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    date: "October 15, 2023",
  };
  const blogPosts: BlogPost[] = [
    {
      title: "5 Ways to Streamline School Administrative Tasks",
      excerpt:
        "Learn effective strategies to reduce paperwork and increase productivity in school management.",
      category: "Administration",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "October 12, 2023",
    },
    {
      title: "The Impact of Data Analytics in Education",
      excerpt:
        "How data-driven decisions are shaping the future of education and student success.",
      category: "Data & Analytics",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "October 10, 2023",
    },
    {
      title: "Building Better Parent-School Communication",
      excerpt:
        "Effective strategies for keeping parents engaged in their child's education journey.",
      category: "Communication",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "October 8, 2023",
    },
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest from our Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, stories, and expert perspectives on education management
            and innovation
          </p>
        </div>
        {/* Featured Post */}
        <div className="mb-16">
          <div className="rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-96 md:h-auto relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
                    Read more <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
