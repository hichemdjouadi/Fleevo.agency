"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 right-0 w-[2px] h-screen bg-white/10 z-[100] mix-blend-difference hidden md:block">
      <motion.div
        className="w-full bg-white origin-top"
        style={{ scaleY, height: "100%" }}
      />
    </div>
  );
}
