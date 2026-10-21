"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { Locale, Direction, TranslationDictionary } from "./types";
import { en } from "./translations/en";
import { fr } from "./translations/fr";
import { ar } from "./translations/ar";

const translations: Record<Locale, TranslationDictionary> = {
  en,
  fr,
  ar,
};

interface LanguageContextType {
  locale: Locale;
  direction: Direction;
  isRTL: boolean;
  setLocale: (locale: Locale) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  direction: "ltr",
  isRTL: false,
  setLocale: () => {},
  t: en,
});

const STORAGE_KEY = "fleevo_lang";
const COOKIE_KEY = "fleevo_locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // 1. Check query param
    const searchParams = new URLSearchParams(window.location.search);
    const langParam = searchParams.get("lang");
    if (langParam === "ar" || langParam === "fr" || langParam === "en") {
      setLocaleState(langParam as Locale);
      try {
        localStorage.setItem(STORAGE_KEY, langParam);
        document.cookie = `${COOKIE_KEY}=${langParam}; path=/; max-age=31536000; SameSite=Lax`;
      } catch (e) {
        // ignore storage errors
      }
      return;
    }

    // 2. Check localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "ar" || saved === "fr" || saved === "en") {
        setLocaleState(saved);
        return;
      }
    } catch (e) {
      // ignore
    }

    // 3. Check document cookie
    try {
      const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`));
      if (match) {
        const val = decodeURIComponent(match[1]) as Locale;
        if (val === "ar" || val === "fr" || val === "en") {
          setLocaleState(val);
          return;
        }
      }
    } catch (e) {
      // ignore
    }

    // 4. Default: browser language or 'en'
    if (typeof navigator !== "undefined" && navigator.language) {
      const navLang = navigator.language.toLowerCase();
      if (navLang.startsWith("ar")) {
        setLocaleState("ar");
      } else if (navLang.startsWith("fr")) {
        setLocaleState("fr");
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.cookie = `${COOKIE_KEY}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    } catch (e) {
      // ignore
    }

    // Update URL param smoothly if desired without full reload
    if (typeof window !== "undefined" && window.history) {
      const url = new URL(window.location.href);
      if (newLocale === "en") {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", newLocale);
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  const pathname = usePathname();
  const direction: Direction = locale === "ar" ? "rtl" : "ltr";
  const isRTL = direction === "rtl";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = direction;
      if (isRTL) {
        document.documentElement.classList.add("locale-ar");
        document.body?.setAttribute("dir", "rtl");
      } else {
        document.documentElement.classList.remove("locale-ar");
        document.body?.setAttribute("dir", "ltr");
      }

      // Localized dynamic page title across all routes and languages
      const titles: Record<string, Record<Locale, string>> = {
        "/": {
          en: "Fleevo | Customer Acquisition Systems & Digital Infrastructure",
          fr: "Fleevo | Systèmes d'Acquisition Client & Infrastructure Digitale",
          ar: "فليفو | أنظمة اكتساب العملاء والبنية التحتية الرقمية",
        },
        "/services": {
          en: "Services & Systems Architecture | Fleevo",
          fr: "Services & Architecture de Systèmes | Fleevo",
          ar: "الخدمات وهندسة الأنظمة | فليفو",
        },
        "/work": {
          en: "Selected Case Studies & Systems | Fleevo",
          fr: "Études de Cas & Réalisations | Fleevo",
          ar: "دراسات الحالة ونماذج الأنظمة | فليفو",
        },
        "/about": {
          en: "About & Engineering Standards | Fleevo",
          fr: "À Propos & Standards d'Ingénierie | Fleevo",
          ar: "عن الوكالة والمعايير الهندسية | فليفو",
        },
        "/contact": {
          en: "Direct Contact & Technical Review | Fleevo",
          fr: "Contact Direct & Audit Technique | Fleevo",
          ar: "طلب استشارة وبدء المشروع | فليفو",
        },
        "/start": {
          en: "System Configurator & Scope | Fleevo",
          fr: "Configurateur de Système | Fleevo",
          ar: "مُهيئ المنظومة الرقمية | فليفو",
        },
      };

      const matched = titles[pathname] || (pathname?.startsWith("/admin") ? null : titles["/"]);
      if (matched) {
        document.title = matched[locale];
      }
    }
  }, [locale, direction, isRTL, pathname]);

  const value = useMemo(() => {
    return {
      locale,
      direction,
      isRTL,
      setLocale,
      t: translations[locale] || en,
    };
  }, [locale, direction, isRTL]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslation() {
  const { t, locale, direction, isRTL, setLocale } = useLanguage();
  return { t, locale, direction, isRTL, setLocale };
}
