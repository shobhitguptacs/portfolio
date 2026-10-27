"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="icon-button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
    >
      {isDark ? (
        <Sun aria-hidden="true" size={18} />
      ) : (
        <Moon aria-hidden="true" size={18} />
      )}
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}
