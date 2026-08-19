"use client";

import { Moon, Sun } from "lucide-react";
import { usePreferences } from "@/components/a11y/PreferencesProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = usePreferences();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-ink/15 text-ink hover:bg-ink/5 ${className}`}
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-pressed={dark}
    >
      {dark ? <Sun className="h-5 w-5" aria-hidden /> : <Moon className="h-5 w-5" aria-hidden />}
      <span className="sr-only">
        {dark ? "Activar versión clara" : "Activar versión oscura"}
      </span>
    </button>
  );
}
