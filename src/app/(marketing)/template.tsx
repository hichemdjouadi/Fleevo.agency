"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        ease: [0.16, 1, 0.3, 1], 
        duration: 1.2 
      }}
    >
      {children}
    </motion.div>
  );
}
