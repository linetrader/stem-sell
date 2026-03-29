"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "@/i18n/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => pathname === path;

  const activeClasses = "text-teal-600 dark:text-teal-400 border-b-2 border-teal-500 pb-1 font-headline font-bold tracking-tighter whitespace-nowrap";
  const inactiveClasses = "text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-all font-headline font-bold tracking-tighter whitespace-nowrap";

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "ko", label: "한국어" },
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文" },
    { code: "vi", label: "Tiếng Việt" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl shadow-xl shadow-teal-950/5">
      <div className="flex justify-between items-center px-6 md:px-12 h-24 max-w-[1440px] mx-auto">
        <div className="text-2xl font-black text-teal-900 dark:text-white uppercase tracking-widest font-headline">
          <Link href="/">RevaCell Bio</Link>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <Link className={isActive("/") ? activeClasses : inactiveClasses} href="/">{t("nav.home")}</Link>
          <Link className={isActive("/about") ? activeClasses : inactiveClasses} href="/about">{t("nav.about")}</Link>
          <Link className={isActive("/research") ? activeClasses : inactiveClasses} href="/research">{t("nav.research")}</Link>
          <Link className={isActive("/global-strategy") ? activeClasses : inactiveClasses} href="/global-strategy">{t("nav.globalStrategy")}</Link>
          <Link className={isActive("/contact") ? activeClasses : inactiveClasses} href="/contact">{t("nav.contact")}</Link>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300 transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Select Language"
            >
              <span className="material-symbols-outlined text-[20px]">language</span>
              <span className="font-headline font-semibold text-xs uppercase hidden sm:block">{language}</span>
            </button>
            
            {langMenuOpen && (
              <div className="absolute top-12 right-0 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl rounded-xl py-2 w-40 flex flex-col z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 font-headline text-sm transition-colors flex items-center justify-between ${
                      language === lang.code ? "text-teal-600 dark:text-teal-400 font-bold bg-teal-50 dark:bg-teal-900/10" : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {lang.label}
                    {language === lang.code && <span className="material-symbols-outlined text-[16px]">check</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link className="text-slate-600 dark:text-slate-300 hover:opacity-80 transition-all font-headline font-bold tracking-tight whitespace-nowrap" href="/login">{t("nav.login")}</Link>
          <Link className="bg-primary text-on-primary px-6 py-2 rounded-xl hover:opacity-80 transition-all scale-95 active:scale-90 font-headline font-bold tracking-tight inline-block whitespace-nowrap hidden sm:inline-block" href="/signup">{t("nav.signUp")}</Link>
        </div>
      </div>
    </nav>
  );
}
