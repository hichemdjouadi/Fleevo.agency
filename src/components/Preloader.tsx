"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const words = [
  "Architecture",
  "Automation",
  "Performance",
  "Fleevy."
];

export default function Preloader() {
  const pathname = usePathname();
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    // Only run on the root homepage
    if (pathname !== "/") {
      setIsLoaded(true);
      return;
    }

    // Check if user already saw the preloader this session or prefers reduced motion
    const alreadySeen = typeof window !== "undefined" && sessionStorage.getItem("fleevy_preloader_seen");
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadySeen || prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }

    // Mark as seen for subsequent page transitions/refreshes in this session
    sessionStorage.setItem("fleevy_preloader_seen", "true");
    setIsLoaded(false);
  }, [pathname]);

  useEffect(() => {
    if (isLoaded) return;

    if (index === words.length - 1) {
      const exitTimeout = setTimeout(() => {
        setIsLoaded(true);
      }, 450); // Snappy exit hold
      return () => clearTimeout(exitTimeout);
    }

    const nextWordTimeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 320 : 220); // Fast, purposeful rhythm

    return () => clearTimeout(nextWordTimeout);
  }, [index, isLoaded]);

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const slideUp = {
    initial: { y: "100%" },
    enter: { 
      y: "0%", 
      transition: { duration: 0.25, ease: easeCurve } 
    },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.25, ease: easeCurve } 
    }
  };

  const backgroundSlide = {
    initial: { y: 0 },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.7, ease: easeCurve } 
    }
  };

  if (isLoaded) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={backgroundSlide}
        initial="initial"
        exit="exit"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] pointer-events-none"
      >
        {/* Progress counter */}
        <div className="absolute bottom-10 right-10 flex text-white/40 font-mono text-xs tracking-widest overflow-hidden">
          <motion.span 
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            className="inline-block"
          >
            {Math.round(((index + 1) / words.length) * 100)}%
          </motion.span>
        </div>

        {/* Word Sequence */}
        <div className="overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              variants={slideUp}
              initial="initial"
              animate="enter"
              exit="exit"
              className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white"
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
