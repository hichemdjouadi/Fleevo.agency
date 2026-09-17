"use client";

import { motion } from "framer-motion";

const WORDS = [
  "ZERO FRICTION",
  "HIGHER MARGINS",
  "SCALABLE SYSTEMS",
  "ELITE CONVERSION",
  "PREMIUM BRANDING"
];

const TRACK = [...WORDS, ...WORDS, ...WORDS, ...WORDS];

export default function InfiniteMarquee() {
  return (
    <section className="bg-transparent text-black py-12 border-y border-studio-border-light overflow-hidden">
      <div data-cursor="DRAG" className="relative w-full flex overflow-hidden group items-center">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-studio-light to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-studio-light to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex items-center gap-16 md:gap-24 px-8 w-max opacity-60 hover:opacity-100 transition-opacity duration-500"
        >
          {TRACK.map((word, idx) => (
            <div key={idx} className="flex items-center gap-16 md:gap-24">
              <span className="text-3xl md:text-5xl font-medium tracking-tighter uppercase whitespace-nowrap">
                {word}
              </span>
              <span className="w-3 h-3 rounded-full bg-black/10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
