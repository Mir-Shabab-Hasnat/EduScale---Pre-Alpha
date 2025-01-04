"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  X,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  User,
} from "lucide-react";
export default function Support() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  const faqs = {
    general: [
      {
        question: "What is EduScale?",
        answer:
          "EduScale is a comprehensive school management system that helps educational institutions streamline their administrative processes, enhance communication, and improve overall efficiency.",
      },
      {
        question: "How do I get started with EduScale?",
        answer:
          "Getting started is easy! Simply click the 'Get Started' button and follow our guided setup process. Our team will help you onboard and configure the system according to your needs.",
      },
    ],
    billing: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, bank transfers, and institutional purchase orders for annual subscriptions.",
      },
      {
        question: "Can I change my subscription plan?",
        answer:
          "Yes, you can upgrade or downgrade your subscription plan at any time through your account settings.",
      },
    ],
  };
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our support team is here to help you with any questions or concerns
          </p>
        </div>
        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Phone Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              +1 (888) 123-4567
            </p>
            <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Email Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              support@eduscale.com
            </p>
            <p className="text-sm text-gray-500">24/7 Email Support</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Office Location
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              123 Education St.
            </p>
            <p className="text-sm text-gray-500">Boston, MA 02108</p>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveCategory("general")}
              className={`px-4 py-2 rounded-full ${activeCategory === "general" ? "bg-purple-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`}
            >
              General
            </button>
            <button
              onClick={() => setActiveCategory("billing")}
              className={`px-4 py-2 rounded-full ${activeCategory === "billing" ? "bg-purple-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`}
            >
              Billing
            </button>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => {}}
                >
                  <span className="text-gray-900 dark:text-white font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Send us a message
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Chat Widget */}
      <button
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all ${isChatOpen ? "scale-0" : "scale-100"}`}
      >
        <MessageSquare className="h-6 w-6" />
      </button>
      {/* Chat Popup */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white dark:bg-gray-900 rounded-xl shadow-xl flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Live Chat
              </h3>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-900 dark:text-white">
                  Hello! How can I help you today?
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}