"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center mt-[7rem] mb-[3rem] p-3">
      <Logo />
      <h1 className="scroll-m-20 text-3xl sm:text-3xl md:text-5xl font-semibold tracking-tight lg:text-5xl text-center max-w-[750px]">
        Mordern Education Management{" "}
        <span className="text-cyan-400">Made Simple</span>
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg text-sm text-center mt-2 dark:text-gray-400">
        An education management platform fit for all educational institutions.
      </p>
      <div className="flex gap-3">
        <Link href="/get-started" className="mt-5">
          
          <Button
            size="sm"
            className="animate-buttonheartbeat rounded-md bg-blue-600 hover:bg-blue-400 text-sm font-semibold text-white"
          >
            Get Started
          </Button>
        </Link>
        <Link href="/blog" className="mt-5">
          <Button
            size="sm"
            variant="ghost"
            className="flex gap-1 text-md text-blue-600 hover:text-blue-600 hover:bg-blue-100"
          >
            Blog
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <div>
        <div className="relative flex max-w-4xl justify-center overflow-hidden">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 3 }}
            className="relative flex max-w-4xl justify-center overflow-hidden"
          >
            <div className="relative flex max-w-4xl justify-center overflow-hidden mt-7">
              <div className="relative rounded-xl">
                <img
                  src="/hero.png"
                  alt="Hero Image"
                  className="block w-[1400px] rounded-[inherit] border object-contain shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
