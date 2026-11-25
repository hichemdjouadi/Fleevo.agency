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
      {isNavigating && (
        <motion.div
          className="fixed top-0 inset-x-0 h-[2px] z-[200] bg-[#0b0b0c] pointer-events-none"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      {children}
    </>
  );
}
