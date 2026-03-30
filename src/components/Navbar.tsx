"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "@/i18n/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
      <div className="flex justify-between items-center px-6 md:px-12 h-24 max-w-[1440px] mx-auto relative">
        <div className="text-2xl font-black text-teal-900 dark:text-white uppercase tracking-widest font-headline">
          <Link href="/">StemLink</Link>
        </div>
        
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8">
          <Link className={isActive("/") ? activeClasses : inactiveClasses} href="/">{t("nav.home")}</Link>
          <Link className={isActive("/about") ? activeClasses : inactiveClasses} href="/about">{t("nav.about")}</Link>
          <Link className={isActive("/research") ? activeClasses : inactiveClasses} href="/research">{t("nav.research")}</Link>
          <Link className={isActive("/global-strategy") ? activeClasses : inactiveClasses} href="/global-strategy">{t("nav.globalStrategy")}</Link>
          <Link className={isActive("/dashboard") ? activeClasses : inactiveClasses} href="/dashboard">DASHBOARD</Link>
          <Link className={isActive("/rwa-token") ? activeClasses : inactiveClasses} href="/rwa-token">RWA TOKEN</Link>
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
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center p-2 text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 shadow-2xl px-6 py-8 flex flex-col gap-6 z-40 h-[calc(100vh-6rem)] overflow-y-auto">
          <Link onClick={() => setMobileMenuOpen(false)} className={isActive("/") ? activeClasses : inactiveClasses} href="/">{t("nav.home")}</Link>
          <Link onClick={() => setMobileMenuOpen(false)} className={isActive("/about") ? activeClasses : inactiveClasses} href="/about">{t("nav.about")}</Link>
          <Link onClick={() => setMobileMenuOpen(false)} className={isActive("/research") ? activeClasses : inactiveClasses} href="/research">{t("nav.research")}</Link>
          <Link onClick={() => setMobileMenuOpen(false)} className={isActive("/global-strategy") ? activeClasses : inactiveClasses} href="/global-strategy">{t("nav.globalStrategy")}</Link>
          <Link onClick={() => setMobileMenuOpen(false)} className={isActive("/dashboard") ? activeClasses : inactiveClasses} href="/dashboard">DASHBOARD</Link>
          <Link onClick={() => setMobileMenuOpen(false)} className={isActive("/rwa-token") ? activeClasses : inactiveClasses} href="/rwa-token">RWA TOKEN</Link>
          <Link onClick={() => setMobileMenuOpen(false)} className={isActive("/contact") ? activeClasses : inactiveClasses} href="/contact">{t("nav.contact")}</Link>
        </div>
      )}
    </nav>
  );
}
