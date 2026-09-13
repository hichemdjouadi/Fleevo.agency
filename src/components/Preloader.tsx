"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [counter, setCounter] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Elegant, premium loading curve
    let current = 0;
    const interval = setInterval(() => {
      // Slow down significantly as it approaches 100 to build anticipation
      const increment = current < 80 ? Math.random() * 4 + 1 : Math.random() * 1.5;
      current += increment;
      
      if (current >= 100) {
        current = 100;
        setCounter(100);
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 600); // Dramatic pause at 100
      } else {
        setCounter(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Complex Awwwards-style cubic bezier easing
  const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-12 bg-[#050505] overflow-hidden"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* Top Row: Brand & Status */}
          <div className="flex justify-between items-start w-full relative z-10 text-white/50 uppercase tracking-widest text-xs font-medium">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Fleevo Agency
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              Initializing Architecture
            </motion.div>
          </div>

          {/* Center: Massive Percentage & Branding */}
          <div className="flex flex-col items-center justify-center relative z-10 w-full flex-1">
            <motion.div className="overflow-hidden relative flex items-center justify-center">
              
              {/* Massive Percentage Background (Faded) */}
              <motion.div 
                exit={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
                className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none"
              >
                <span className="text-[40vw] font-bold tracking-tighter text-white leading-none">
                  {counter}
                </span>
              </motion.div>

              {/* The Wordmark */}
              <motion.h1 
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                exit={{ scale: 1.05, opacity: 0, filter: "blur(5px)" }}
                transition={{ duration: 1.5, ease: easeOutExpo }}
                className="text-5xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter leading-none text-white relative z-20 mix-blend-difference"
              >
                FLEEVO.
              </motion.h1>
            </motion.div>
          </div>

          {/* Bottom Row: Loading Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full relative z-10 flex flex-col gap-4"
          >
            <div className="flex justify-between items-end text-white/50 text-xs font-mono uppercase tracking-widest">
              <span>Loading Systems</span>
              <span className="text-white">{counter}%</span>
            </div>
            
            {/* Impeccable Loading Track */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-white"
                style={{ width: `${counter}%` }}
                layout
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
