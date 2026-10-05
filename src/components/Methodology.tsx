"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    phase: "Code 01",
    title: "Sell The Outcome",
    description: "Your customers do not care about your tech stack. They care about their problem. We design every page to answer one specific question: 'Why should I give you money instead of the other guy?'"
  },
  {
    phase: "Code 02",
    title: "Cut The Fat",
    description: "Over-engineered websites confuse buyers. We strip away the noise. If an animation, image, or paragraph doesn't push a user closer to booking a call or buying a product, we delete it."
  },
  {
    phase: "Code 03",
    title: "Stop Money Bleeding",
    description: "Every dropped cart, ignored DM, and manual follow-up is revenue bleeding out of your business. We build frameworks that plug the holes in your sales process, ensuring the traffic you pay for actually converts into cash."
  },
  {
    phase: "Code 04",
    title: "The Operating System",
    description: "We don't hand you a website and leave. We plug the frontend directly into a private admin dashboard. You see exactly how many leads came in, who they are, and where they sit in your pipeline."
  }
];

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="bg-transparent text-black py-24 md:py-32 px-6 md:px-12" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto flex flex-col xl:flex-row gap-16 md:gap-24">
        
        {/* Left: Sticky Header */}
        <div className="w-full xl:w-1/3">
          <div className="sticky top-32">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-black/60 block mb-6">
              The Blueprint
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[0.9] mb-8">
              Our Operating Codes.
            </h2>
            <p className="text-lg md:text-xl text-black/70 font-medium leading-relaxed">
              We do not act as order-takers. We act as technical growth partners. These are the four strict rules we apply to every system we deploy.
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
              <div key={idx} className="relative pl-12 md:pl-20">
                {/* Node */}
                <div className="absolute left-[11px] top-2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-black" />
                
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-black/50 block mb-4">
                  {step.phase}
                </span>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-lg md:text-xl text-black/70 font-medium leading-relaxed max-w-xl">
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
