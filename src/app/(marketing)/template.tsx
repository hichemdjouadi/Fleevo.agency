"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: ReactNode }) {
  const [isExiting, setIsExiting] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleExit = () => setIsExiting(true);
    window.addEventListener("trigger-page-exit", handleExit);
    return () => window.removeEventListener("trigger-page-exit", handleExit);
  }, []);

  const easeCurve = [0.76, 0, 0.24, 1];
  
  // If we are just loading the site for the first time, don't play the intro overlay 
  // because the Preloader will handle it. We can guess it's not the initial load if 
  // sessionStorage has our flag, or we just rely on Preloader covering it up.
  // Actually, we'll just always run it. The Preloader sits above it anyway.

  return (
    <>
      {/* Outgoing overlay (Slides up from bottom when link clicked) */}
      <motion.div
        className="fixed inset-0 z-[140] bg-black pointer-events-none"
        initial={{ y: "100%" }}
        animate={{ y: isExiting ? "0%" : "100%" }}
        transition={{ duration: 0.6, ease: easeCurve }}
      />
      
      {/* Incoming overlay (Slides up to top when page mounts) */}
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[140] bg-black pointer-events-none"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: easeCurve, delay: 0.1 }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          ease: easeCurve, 
          duration: 1.2,
          delay: 0.2
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
