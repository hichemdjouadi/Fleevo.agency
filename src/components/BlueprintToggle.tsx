"use client";

import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function BlueprintToggle() {
  const [isBlueprint, setIsBlueprint] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on Alt+B
      if (e.altKey && e.key.toLowerCase() === 'b') {
        setIsBlueprint((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isBlueprint) {
      document.documentElement.setAttribute("data-theme", "blueprint");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isBlueprint]);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => setIsBlueprint(!isBlueprint)}
      className="fixed bottom-6 left-6 z-[60] flex items-center justify-center w-12 h-12 rounded-full border border-black/10 bg-white/50 backdrop-blur-md text-black hover:bg-black hover:text-white transition-colors mix-blend-difference"
      title="Toggle Blueprint Mode (Alt+B)"
      data-cursor="WIRE"
    >
      <Terminal className="w-5 h-5" />
    </motion.button>
  );
}
