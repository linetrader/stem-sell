"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import ko from "./dictionaries/ko.json";
import en from "./dictionaries/en.json";
import ja from "./dictionaries/ja.json";
import vi from "./dictionaries/vi.json";
import zh from "./dictionaries/zh.json";

export type Language = "ko" | "en" | "ja" | "vi" | "zh";

const dictionaries = {
  ko,
  en,
  ja,
  vi,
  zh,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load saved language from localStorage on client-side mount
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedLang && dictionaries[savedLang]) {
      // eslint-disable-next-line
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app_lang", lang);
  };

  const t = (key: string): string => {
    // Split key by dot notation (e.g., 'nav.home')
    const keys = key.split(".");
    // eslint-disable-next-line
    let current: any = dictionaries[language];

    // Fallback to English if key is missing in target language
    // eslint-disable-next-line
    let fallback: any = dictionaries["en"];

    for (const k of keys) {
      if (current && typeof current === "object") {
        current = current[k];
      } else {
        current = undefined;
      }
      
      if (fallback && typeof fallback === "object") {
        fallback = fallback[k];
      } else {
        fallback = undefined;
      }
    }

    if (current !== undefined) return current;
    if (fallback !== undefined) return fallback;
    return key; // Return the key itself if not found
  };

  // Prevent hydration mismatch by optionally rendering children only after mount, 
  // but since we want SEO/faster initial load, we render default language until hydrated.
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div key={language} style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
