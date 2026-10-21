"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";

export default function Template({ children }: { children: ReactNode }) {
  const [isExiting, setIsExiting] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const pathname = usePathname();

  let brandName = "Fleevo.";
  try {
    const lang = useLanguage();
    if (lang?.locale === "ar") {
      brandName = "فليفو.";
    }
  } catch {
    // fallback
  }

  useEffect(() => {
    const handleExit = () => setIsExiting(true);
    window.addEventListener("trigger-page-exit", handleExit);
    return () => window.removeEventListener("trigger-page-exit", handleExit);
  }, []);

  const easeCurve: [number, number, number, number] = [0.76, 0, 0.24, 1];
  
  return (
    <>
      {/* Outgoing overlay (Slides up from bottom when link clicked) */}
      {isExiting && (
        <motion.div
          className="fixed inset-0 z-[140] bg-[#050505] flex items-center justify-center pointer-events-none text-white select-none"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.55, ease: easeCurve }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight rtl:font-sans ltr:font-sans text-white">
              {brandName}
            </span>
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>
        </motion.div>
      )}
      
      {/* Incoming overlay (Reveals brand mark, then slides up to top) */}
      {!isExiting && !hasEntered && (
        <motion.div
          className="fixed inset-0 z-[140] bg-[#050505] flex items-center justify-center pointer-events-none text-white select-none"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: easeCurve, delay: 0.22 }}
          onAnimationComplete={() => setHasEntered(true)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight rtl:font-sans ltr:font-sans text-white">
              {brandName}
            </span>
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          ease: easeCurve, 
          duration: 0.9,
          delay: 0.15
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
