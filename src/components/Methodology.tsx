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
    <div className="px-4 md:px-8 my-16">
      <section className="bg-[#050505] text-white py-24 md:py-32 px-6 md:px-16 rounded-[40px] relative overflow-hidden" ref={containerRef}>
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto flex flex-col xl:flex-row gap-16 md:gap-24 relative z-10">
          
          {/* Left: Sticky Header */}
          <div className="w-full xl:w-1/3">
            <div className="sticky top-32">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/50 block mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-white/30" />
                The Blueprint
              </span>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[0.9] mb-8 text-white">
                Our Operating Codes.
              </h2>
              <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed">
                We do not act as order-takers. We act as technical growth partners. These are the four strict rules we apply to every system we deploy.
              </p>
            </div>
          </div>

          {/* Right: The Vertical Timeline */}
          <div className="w-full xl:w-2/3 relative">
            
            {/* Background Line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-white/10" />
            
            {/* Animated Progress Line */}
            <motion.div 
              className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-white origin-top"
              style={{ scaleY: scrollYProgress }}
            />

            <div className="flex flex-col gap-24">
              {STEPS.map((step, idx) => (
                <div key={idx} className="relative pl-12 md:pl-20 group">
                  {/* Node */}
                  <div className="absolute left-[11px] top-2 w-[10px] h-[10px] rounded-full bg-[#050505] border-[2px] border-white group-hover:scale-150 transition-transform duration-300" />
                  
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 block mb-4 group-hover:text-white/60 transition-colors">
                    {step.phase}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white group-hover:translate-x-2 transition-transform duration-300">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl group-hover:text-white/80 transition-colors">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
