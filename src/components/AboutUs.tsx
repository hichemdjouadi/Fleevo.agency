"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="w-full py-32 px-6 bg-brand-dark border-t border-white/5">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        
        {/* Abstract Graphic Column */}
        <div className="relative w-full aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden border border-white/10 flex items-center justify-center bg-black group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-[#080C16] pointer-events-none z-10" />
          <Image 
            src="/agency-abstract.jpg" 
            alt="Digital Architecture"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover scale-110 group-hover:scale-105 transition-transform duration-1000 ease-out grayscale hover:grayscale-0 contrast-125"
          />
        </div>

        {/* Agency Copy Column */}
        <div className="flex flex-col justify-center">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/60 mb-6 block">The Institution</span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-10 leading-[0.9]">
            We engineer unfair digital advantages.
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-light mb-12 leading-relaxed">
            Fleevo is a global digital product agency. We replace slow, static brochures with autonomous infrastructure. We partner with high-ticket service businesses to build lead engines that capture, qualify, and convert while you sleep.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-12 border-y border-white/10 py-10">
            <div>
              <h4 className="text-white/60 uppercase tracking-[0.2em] text-xs font-bold mb-3">Performance</h4>
              <p className="font-medium text-lg md:text-xl tracking-tight">Sub-Second Latency</p>
            </div>
            <div>
              <h4 className="text-white/60 uppercase tracking-[0.2em] text-xs font-bold mb-3">Operations</h4>
              <p className="font-medium text-lg md:text-xl tracking-tight">Autonomous Routing</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://www.facebook.com/profile.php?id=61594431896792" target="_blank" rel="noreferrer" className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full transition-colors font-medium tracking-wide">
              Facebook <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
