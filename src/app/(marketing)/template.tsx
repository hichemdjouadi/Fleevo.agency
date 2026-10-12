"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: ReactNode }) {
  const [isExiting, setIsExiting] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const pathname = usePathname();

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
          className="fixed inset-0 z-[140] bg-black pointer-events-none"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.6, ease: easeCurve }}
        />
      )}
      
      {/* Incoming overlay (Slides up to top when page mounts, then unmounts) */}
      {!isExiting && !hasEntered && (
        <motion.div
          className="fixed inset-0 z-[140] bg-black pointer-events-none"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: easeCurve, delay: 0.1 }}
          onAnimationComplete={() => setHasEntered(true)}
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
