"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Architecture",
  "Automation",
  "Performance",
  "Fleevo."
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Total preloader duration should feel snappy but readable
    if (index === words.length - 1) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 800); // Hold on "Fleevo." before exiting
      return;
    }

    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 600 : 400); // Hold first word slightly longer, then snap through

    return () => clearTimeout(timeout);
  }, [index]);

  const easeCurve: [number, number, number, number] = [0.76, 0, 0.24, 1];

  const slideUp = {
    initial: { y: "100%" },
    enter: { 
      y: "0%", 
      transition: { duration: 0.4, ease: easeCurve } 
    },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.4, ease: easeCurve } 
    }
  };

  const backgroundSlide = {
    initial: { y: 0 },
    exit: { 
      y: "-100%", 
      transition: { duration: 1, ease: easeCurve, delay: 0.2 } 
    }
  };

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          variants={backgroundSlide}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          {/* Subtle percentage counter tracking the array index */}
          <div className="absolute bottom-10 right-10 flex text-white/60 font-mono text-sm tracking-widest overflow-hidden">
            <motion.span 
              key={index}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              className="inline-block"
            >
              {Math.round(((index + 1) / words.length) * 100)}%
            </motion.span>
          </div>

          {/* The Word Sequence */}
          <div className="overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                variants={slideUp}
                initial="initial"
                animate="enter"
                exit="exit"
                className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tighter text-white drop-shadow-2xl"
              >
                {words[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
