"use client";

import React from "react";
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
  const { locale, setLocale, isRTL } = useLanguage();

  if (variant === "mobile") {
    return (
      <div className={`w-full flex items-center justify-between gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 ${className}`}>
        {LANGUAGES.map((lang) => {
          const isActive = locale === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLocale(lang.code)}
              aria-pressed={isActive}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
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
              className={`px-2.5 py-1 rounded-full transition-all ${
                isActive
                  ? "bg-white text-black font-semibold"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
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
      className={`inline-flex items-center gap-0.5 p-0.5 rounded-full bg-black/[0.04] border border-black/5 text-[12px] font-medium text-neutral-600 ${className}`}
    >
      {LANGUAGES.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLocale(lang.code)}
            aria-pressed={isActive}
            className={`px-2.5 py-1 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
              isActive
                ? "bg-black text-white font-semibold shadow-xs"
                : "text-neutral-600 hover:text-black hover:bg-black/[0.04]"
            }`}
          >
            {lang.short}
          </button>
        );
      })}
    </div>
  );
}
