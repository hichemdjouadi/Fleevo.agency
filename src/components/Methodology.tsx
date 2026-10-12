"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    phase: "Phase 01",
    title: "Sell The Outcome",
    description: "Your buyers don't care about your tech stack. They care about solving their immediate problem. We structure every section to answer the only question that matters: 'Why should I trust you with my money over everyone else?'"
  },
  {
    phase: "Phase 02",
    title: "Cut The Fluff",
    description: "Over-designed websites confuse decision-makers. We strip away decorative clutter. If a graphic, animation, or sentence doesn't clarify the offer or move the user closer to booking or buying, it gets cut."
  },
  {
    phase: "Phase 03",
    title: "Plug Pipeline Leaks",
    description: "Every slow response, dropped inquiry, and clumsy contact form bleeds revenue out of your ad spend. We build automated qualification and instant routing so inbound prospects are engaged while intent is at its peak."
  },
  {
    phase: "Phase 04",
    title: "Live Operations Command",
    description: "We don't deliver a static template and disappear. We wire the frontend directly into your database and a private command dashboard. You see every qualified inquiry, its source, and its status in real time."
  }
];

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black" ref={containerRef}>
      <div className="flex flex-col xl:flex-row gap-16 md:gap-24 relative z-10">
        
        {/* Left: Sticky Header */}
        <div className="w-full xl:w-1/3">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[0.95] mb-6 text-black">
              Our Operating Standards.
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
              We operate as technical growth partners, not order-takers. These are the four core principles governing every platform we engineer.
            </p>
          </div>
        </div>

        {/* Right: The Vertical Timeline */}
        <div className="w-full xl:w-2/3 relative">
          
          {/* Background Line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-black/10" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-black origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-20">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative pl-12 md:pl-20 group">
                {/* Node */}
                <div className="absolute left-[11px] top-2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-black group-hover:scale-150 transition-transform duration-300" />
                
                <span className="text-xs font-mono font-semibold tracking-widest text-neutral-500 block mb-3 group-hover:text-neutral-800 transition-colors uppercase">
                  {step.phase}
                </span>
                <h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-3 text-black group-hover:translate-x-2 transition-transform duration-300">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-xl group-hover:text-neutral-900 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
