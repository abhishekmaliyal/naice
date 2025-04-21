"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDarkMode =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="right flex items-end right w-40">
      <div className="darkmode h-full w-full flex items-center justify-center">
        <button
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          className="darkmode text-lg select-none cursor-crosshair font-bold transition-colors hover:text-primary/80 h-12 w-40 border rounded-xl border-gray-500"
          onClick={toggleTheme}
        >
          {isDarkMode ? "light mode." : "dark mode."}
        </button>
      </div>
    </div>
  );
}
