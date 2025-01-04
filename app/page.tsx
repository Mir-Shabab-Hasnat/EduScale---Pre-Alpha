"use client";
import Image from "next/image";
import { Navbar } from "../components/navbar"
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";


export default function Home() {
  const [theme, setTheme] = useState<Theme>("system");
  useEffect(() => {
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(savedTheme);
    const themeToApply =
      savedTheme === "system" ? systemPreference : savedTheme;
    document.documentElement.classList.toggle("dark", themeToApply === "dark");
  }, []);
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "system") {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.documentElement.classList.toggle(
        "dark",
        systemPreference === "dark",
      );
    } else {
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Footer theme={theme} setTheme={handleThemeChange}/>
    </main>
  );
}



