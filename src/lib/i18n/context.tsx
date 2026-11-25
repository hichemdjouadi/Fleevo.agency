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

const STORAGE_KEY = "fleevy_lang";
const FALLBACK_STORAGE_KEY = "fleevo_lang";
const COOKIE_KEY = "fleevy_locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const langParam = searchParams.get("lang");
    if (langParam === "ar" || langParam === "fr" || langParam === "en") {
      setLocaleState(langParam);
      try {
        localStorage.setItem(STORAGE_KEY, langParam);
        document.cookie = `${COOKIE_KEY}=${langParam}; path=/; max-age=31536000; SameSite=Lax`;
      } catch {
        // ignore storage errors
      }
      return;
    }

    try {
      const saved = (localStorage.getItem(STORAGE_KEY) ||
        localStorage.getItem(FALLBACK_STORAGE_KEY)) as Locale | null;
      if (saved === "ar" || saved === "fr" || saved === "en") {
        setLocaleState(saved);
        return;
      }
    } catch {
      // ignore storage errors
    }

    try {
      const match = document.cookie.match(/(?:^|; )(?:fleevy_locale|fleevo_locale)=([^;]*)/);
      if (match) {
        const val = decodeURIComponent(match[1]) as Locale;
        if (val === "ar" || val === "fr" || val === "en") {
          setLocaleState(val);
          return;
        }
      }
    } catch {
      // ignore cookie errors
    }

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
    } catch {
      // ignore storage errors
    }

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

      const titles: Record<string, Record<Locale, string>> = {
        "/": {
          en: "Fleevy | Customer Acquisition Systems & Digital Infrastructure",
          fr: "Fleevy | Systèmes d'Acquisition Client & Infrastructure Digitale",
          ar: "فليفي | أنظمة اكتساب العملاء والبنية التحتية الرقمية",
        },
        "/services": {
          en: "Services & Packages | Fleevy",
          fr: "Services & Offres | Fleevy",
          ar: "الخدمات والباقات | فليفي",
        },
        "/work": {
          en: "Selected Work & Case Studies | Fleevy",
          fr: "Projets & Études de Cas | Fleevy",
          ar: "أعمالنا ودراسات الحالة | فليفي",
        },
        "/about": {
          en: "About & Engineering Standards | Fleevy",
          fr: "À Propos & Standards d'Ingénierie | Fleevy",
          ar: "عن فليفي والمعايير الهندسية | فليفي",
        },
        "/contact": {
          en: "Contact & Free 48h Audit | Fleevy",
          fr: "Contact & Audit Vidéo 48h Gratuit | Fleevy",
          ar: "تواصل معنا والتدقيق المجاني | فليفي",
        },
        "/privacy": {
          en: "Privacy Policy | Fleevy",
          fr: "Politique de Confidentialité | Fleevy",
          ar: "سياسة الخصوصية | فليفي",
        },
      };

      const matched =
        titles[pathname] ||
        (pathname?.startsWith("/work/")
          ? titles["/work"]
          : pathname?.startsWith("/admin")
            ? null
            : titles["/"]);
      if (matched) {
        document.title = matched[locale];
      }
    }
  }, [locale, direction, isRTL, pathname]);

  const value = useMemo(
    () => ({
      locale,
      direction,
      isRTL,
      setLocale,
      t: translations[locale] || en,
    }),
    [locale, direction, isRTL]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
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
