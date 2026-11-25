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
  const { locale, setLocale } = useLanguage();

  if (variant === "mobile") {
    return (
      <div
        role="group"
        aria-label="Language selector"
        className={`w-full grid grid-cols-3 gap-1.5 p-1 rounded-full bg-white/10 ${className}`}
      >
        {LANGUAGES.map((lang) => {
          const isActive = locale === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLocale(lang.code)}
              aria-pressed={isActive}
              className={`min-h-[44px] flex items-center justify-center px-3 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                isActive
                  ? "bg-white text-[#0b0b0c]"
                  : "text-white/75 hover:text-white"
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
      <div
        role="group"
        aria-label="Language selector"
        className={`inline-flex items-center gap-1 p-1 rounded-full bg-white/10 border border-white/12 text-xs ${className}`}
      >
        <Globe className="w-3.5 h-3.5 text-white/60 ms-2 me-1 shrink-0" aria-hidden="true" />
        {LANGUAGES.map((lang) => {
          const isActive = locale === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLocale(lang.code)}
              aria-pressed={isActive}
              className={`min-h-[38px] px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer ${
                isActive
                  ? "bg-white text-[#0b0b0c]"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {lang.short}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center gap-0.5 p-1 rounded-full bg-[#f4f4f6] border border-black/[0.06] text-xs ${className}`}
    >
      {LANGUAGES.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLocale(lang.code)}
            aria-pressed={isActive}
            className={`min-h-[38px] px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
              isActive
                ? "bg-[#0b0b0c] text-white"
                : "text-neutral-600 hover:text-[#0b0b0c]"
            }`}
          >
            {lang.short}
          </button>
        );
      })}
    </div>
  );
}
