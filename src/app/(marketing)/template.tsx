"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => setIsNavigating(true);
    window.addEventListener("trigger-page-exit", handleStart);
    return () => window.removeEventListener("trigger-page-exit", handleStart);
  }, []);

  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  return (
    <>
      {/* Top Ambient Loading Beam */}
      {isNavigating && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] z-[200] bg-gradient-to-r from-emerald-500 via-white to-emerald-400 pointer-events-none shadow-[0_0_12px_rgba(52,211,153,0.8)]"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      {/* Silky Page Entrance */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
