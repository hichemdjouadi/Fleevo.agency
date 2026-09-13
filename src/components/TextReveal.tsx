"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TextReveal({ text }: { text: string }) {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"]
  });

  const words = text.split(" ");

  return (
    <h2 
      ref={container} 
      className="text-[10vw] md:text-[7vw] font-medium tracking-tighter leading-[0.9] text-black w-full lg:w-4/5 flex flex-wrap gap-x-4 md:gap-x-8"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h2>
  );
}

function Word({ children, progress, range }: { children: string, progress: any, range: number[] }) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}
