"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type ThemeChoice = "light" | "dark";

type Preferences = {
  largeText: boolean;
  setLargeText: (value: boolean) => void;
  theme: ThemeChoice;
  setTheme: (value: ThemeChoice) => void;
};

const PreferencesContext = createContext<Preferences | null>(null);
const STORAGE_KEY = "sa-large-text";
const THEME_KEY = "sa-theme";
const EVENT = "sa-pref";

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getLargeText() {
  return window.localStorage.getItem(STORAGE_KEY) === "1";
}

function systemDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getTheme(): ThemeChoice {
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return systemDark() ? "dark" : "light";
}

function applyTheme(theme: ThemeChoice) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const largeText = useSyncExternalStore(subscribe, getLargeText, () => false);
  const theme = useSyncExternalStore(subscribe, getTheme, (): ThemeChoice => "light");

  useEffect(() => {
    document.documentElement.dataset.largeText = largeText ? "true" : "false";
  }, [largeText]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!window.localStorage.getItem(THEME_KEY)) {
        window.dispatchEvent(new Event(EVENT));
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const setLargeText = useCallback((value: boolean) => {
    window.localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const setTheme = useCallback((value: ThemeChoice) => {
    window.localStorage.setItem(THEME_KEY, value);
    applyTheme(value);
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const value = useMemo(
    () => ({ largeText, setLargeText, theme, setTheme }),
    [largeText, setLargeText, theme, setTheme],
  );

  return (
    <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
  );
}

export function usePreferences(): Preferences {
  const ctx = useContext(PreferencesContext);
  if (!ctx) {
    throw new Error("usePreferences debe usarse dentro de PreferencesProvider");
  }
  return ctx;
}
