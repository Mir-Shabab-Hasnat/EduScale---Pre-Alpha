import React, { useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.remove("light", "dark");
      root.classList.add(prefersDark ? "dark" : "light");
    } else {
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Appearance</span>
      <div className="flex bg-gray-200 dark:bg-gray-800 rounded-full p-1">
        <button
          onClick={() => setTheme("light")}
          className={`p-1 rounded-full ${theme === "light" ? "bg-white shadow-sm" : ""}`}
          aria-label="Light mode"
        >
          <Sun className="h-4 w-4" />
        </button>
        <button
          onClick={() => setTheme("system")}
          className={`p-1 rounded-full ${theme === "system" ? "bg-white shadow-sm dark:bg-gray-700" : ""}`}
          aria-label="System theme"
        >
          <Monitor className="h-4 w-4" />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`p-1 rounded-full ${theme === "dark" ? "bg-gray-700 shadow-sm" : ""}`}
          aria-label="Dark mode"
        >
          <Moon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
