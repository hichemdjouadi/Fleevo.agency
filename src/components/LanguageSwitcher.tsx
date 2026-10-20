"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Locale } from "@/lib/i18n/types";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  variant?: "navbar" | "mobile" | "footer";
  className?: string;
}

const LANGUAGES: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "ar", label: "العربية", short: "عربي" },
];

export default function LanguageSwitcher({
  variant = "navbar",
  className = "",
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();

  if (variant === "mobile") {
    return (
      <div className={`w-full flex items-center justify-between gap-1.5 p-1.5 rounded-2xl bg-white/5 border border-white/10 ${className}`}>
        {LANGUAGES.map((lang) => {
          const isActive = locale === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLocale(lang.code)}
              aria-pressed={isActive}
              className={`relative z-10 flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-black font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeLangMobile"
                  className="absolute inset-0 bg-white rounded-xl -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              {lang.label}
            </button>
          );
        })}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`inline-flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono ${className}`}>
        <span className="sr-only">Switch language</span>
        <Globe className="w-3.5 h-3.5 text-white/40 ml-2 mr-1 shrink-0" />
        {LANGUAGES.map((lang) => {
          const isActive = locale === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLocale(lang.code)}
              aria-pressed={isActive}
              className={`relative z-10 px-2.5 py-1 rounded-full transition-colors duration-200 ${
                isActive
                  ? "text-black font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeLangFooter"
                  className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              {lang.short}
            </button>
          );
        })}
      </div>
    );
  }

  // Desktop Navbar default
  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`relative inline-flex items-center gap-0.5 p-0.5 rounded-full bg-black/[0.04] border border-black/5 text-[12px] font-medium text-neutral-600 ${className}`}
    >
      {LANGUAGES.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLocale(lang.code)}
            aria-pressed={isActive}
            className={`relative z-10 px-2.5 py-1 rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
              isActive
                ? "text-white font-semibold"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeLangNavbar"
                className="absolute inset-0 bg-black rounded-full -z-10 shadow-xs"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}
            {lang.short}
          </button>
        );
      })}
    </div>
  );
}
