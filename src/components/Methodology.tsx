"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    phase: "Code 01",
    title: "Conversion-First Architecture",
    description: "Design must serve a measurable business objective. Every interaction, micro-animation, and layout is engineered to eliminate friction and drive lead acquisition."
  },
  {
    phase: "Code 02",
    title: "Operational Automation",
    description: "Manual workflows create overhead and throttle growth. Our systems integrate booking, CRM, and inventory to run your operations autonomously."
  },
  {
    phase: "Code 03",
    title: "The Latency Standard",
    description: "A 3-second delay loses 53% of mobile traffic. We deploy exclusively on Next.js edge networks to guarantee instantaneous response times, capturing the audience your competitors lose."
  },
  {
    phase: "Code 04",
    title: "Premium Market Positioning",
    description: "Trust is visual. We engineer bespoke, high-fidelity interfaces that immediately separate you from market competitors and justify premium pricing."
  }
];

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="bg-white text-black py-32 md:py-48 px-6 md:px-16" ref={containerRef}>
      <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row gap-24">
        
        {/* Left: Sticky Header */}
        <div className="w-full xl:w-1/3">
          <div className="sticky top-40">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-black/40 block mb-6">
              The Blueprint
            </span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8">
              Our Operating Codes.
            </h2>
            <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed">
              We do not act as order-takers. We act as technical growth partners. These are the four strict architectural rules we apply to every platform we deploy.
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

          <div className="flex flex-col gap-32">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative pl-16 md:pl-24">
                {/* Node */}
                <div className="absolute left-[11px] top-2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-black" />
                
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-black/40 block mb-4">
                  {step.phase}
                </span>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                  {step.title}
                </h3>
                <p className="text-xl md:text-2xl text-black/70 font-light leading-relaxed max-w-2xl">
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
