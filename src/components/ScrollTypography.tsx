"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = "We do not build generic websites. We engineer autonomous digital infrastructure designed to multiply your profit, eliminate manual effort, and scale your brand effortlessly.";

export default function ScrollTypography() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  const words = text.split(" ");

  return (
    <div ref={container} className="w-full flex items-center justify-center py-40 px-6 md:px-16 bg-black text-white">
      <p className="max-w-6xl text-[7vw] md:text-[4.5vw] font-medium leading-[1.1] tracking-tighter flex flex-wrap gap-x-[1.2vw] gap-y-2 md:gap-y-4">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return (
            <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
          );
        })}
      </p>
    </div>
  );
}

const Word = ({ word, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }} className="relative">
      {word}
    </motion.span>
  );
};
