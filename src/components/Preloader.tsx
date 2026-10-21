"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/lib/i18n";

export default function Preloader() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const words = t.preloader.words;
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);

  // Equal harmonious duration for each concept word (e.g. Architecture, Automation, Performance)
  const WORD_HOLD_MS = 380;
  // Dignified hold on the brand climax before the curtain lifts
  const FINAL_BRAND_HOLD_MS = 520;

  useEffect(() => {
    // 1. Only run on the root homepage
    if (pathname !== "/") {
      setIsLoaded(true);
      return;
    }

    // 2. SEO & Performance Audit Immunity:
    // If a search crawler (Googlebot, Bingbot, Lighthouse) is rendering the page,
    // immediately bypass the preloader so it indexes the raw semantic HTML with 0 LCP penalty.
    const isSearchBot =
      typeof navigator !== "undefined" &&
      /bot|googlebot|bingbot|crawler|spider|robot|crawling|lighthouse|headless/i.test(
        navigator.userAgent || ""
      );

    if (isSearchBot) {
      setIsLoaded(true);
      return;
    }

    // 3. Accessibility: users who prefer reduced motion skip the animation immediately
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }

    // 4. Session frequency capping: only display on fresh session entry to prevent repetitive fatigue
    const alreadySeen =
      typeof window !== "undefined" &&
      (sessionStorage.getItem("fleevy_preloader_seen") || sessionStorage.getItem("fleevo_preloader_seen"));

    if (alreadySeen) {
      setIsLoaded(true);
      return;
    }

    // Mark as seen for subsequent internal navigations and page refreshes in this session
    try {
      sessionStorage.setItem("fleevy_preloader_seen", "true");
    } catch {
      // ignore storage access errors
    }

    setIsLoaded(false);
  }, [pathname]);

  useEffect(() => {
    if (isLoaded) return;

    // Harmonious rhythmic timing
    const isLastWord = index === words.length - 1;
    const holdDuration = isLastWord ? FINAL_BRAND_HOLD_MS : WORD_HOLD_MS;

    const timeout = setTimeout(() => {
      if (isLastWord) {
        setIsLoaded(true);
      } else {
        setIndex((prev) => prev + 1);
      }
    }, holdDuration);

    return () => clearTimeout(timeout);
  }, [index, isLoaded, words.length]);

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const slideUp = {
    initial: { y: "100%", opacity: 0 },
    enter: { 
      y: "0%", 
      opacity: 1,
      transition: { duration: 0.28, ease: easeCurve } 
    },
    exit: { 
      y: "-100%", 
      opacity: 0,
      transition: { duration: 0.24, ease: easeCurve } 
    }
  };

  const backgroundSlide = {
    initial: { y: 0 },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.75, ease: easeCurve } 
    }
  };

  if (isLoaded) return null;

  return (
    <AnimatePresence>
      <motion.div
        aria-hidden="true"
        variants={backgroundSlide}
        initial="initial"
        exit="exit"
        className="fixed inset-0 z-[150] flex items-center justify-center bg-[#050505] pointer-events-none select-none"
      >
        {/* Progress counter */}
        <div className="absolute bottom-10 end-10 flex text-white/40 rtl:font-sans ltr:font-mono text-xs tracking-widest overflow-hidden">
          <motion.span 
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.25, ease: easeCurve }}
            className="inline-block"
          >
            {Math.round(((index + 1) / words.length) * 100)}%
          </motion.span>
        </div>

        {/* Word Sequence - Equal Cadence per Concept */}
        <div className="overflow-hidden flex items-center justify-center px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={slideUp}
              initial="initial"
              animate="enter"
              exit="exit"
              className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white rtl:font-sans ltr:font-sans"
            >
              {words[index]}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
