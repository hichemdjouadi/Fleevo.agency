"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Globe, Mail, MessageSquare, Share2 } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { timeZone: "Africa/Algiers", hour12: false }) + " DZ");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-32 pb-8 px-6 md:px-16 overflow-hidden border-t border-white/5">
      
      {/* Background Subtle Gradient Pyramid/Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[1000px] pointer-events-none z-0 opacity-40 flex justify-center">
        <div className="w-0 h-0 border-l-[600px] border-l-transparent border-r-[600px] border-r-transparent border-b-[800px] border-b-white/5 blur-3xl mix-blend-screen" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Massive Top CTA */}
        <div className="w-full flex flex-col items-center text-center mb-32">
          <h2 className="text-[10vw] md:text-[6vw] font-medium tracking-tighter leading-[1.1]">
            Ready to scale?
          </h2>
          <div className="relative inline-block">
            <h2 
              onClick={() => document.getElementById("intake")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[10vw] md:text-[6vw] font-light text-white/80 tracking-tighter leading-[1.1] cursor-pointer hover:text-white transition-colors"
            >
              Deploy your engine
            </h2>
            <div className="absolute bottom-2 md:bottom-4 left-0 w-full h-[2px] bg-white/40" />
          </div>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Left Side: Contacts & Offices */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Contact Pills */}
            <div className="flex flex-wrap gap-4">
              <Magnetic intensity={0.2}>
                <a href="mailto:contact@fleevo.com" className="inline-flex items-center px-8 py-4 rounded-full border border-white/30 hover:border-white transition-colors text-lg tracking-wide font-light">
                  contact@fleevo.com
                </a>
              </Magnetic>
              <Magnetic intensity={0.2}>
                <a href="https://wa.me/213655934124" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-4 rounded-full border border-white/30 hover:border-white transition-colors text-lg tracking-wide font-light">
                  +213 655 934 124
                </a>
              </Magnetic>
            </div>

            {/* Offices */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">MENA HQ</span>
                <span className="font-medium text-lg">Algiers, Algeria</span>
                <span className="text-white/60 font-light">{time}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Global</span>
                <span className="font-medium text-lg">Remote Distribution</span>
                <span className="text-white/60 font-light">Available 24/7</span>
              </div>
            </div>

          </div>

          {/* Right Side: Links */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-lg font-light tracking-wide">
              <Link href="/systems" className="hover:text-white/50 transition-colors">Systems</Link>
              <Link href="/work" className="hover:text-white/50 transition-colors">Proof of Concept</Link>
              <Link href="/about" className="hover:text-white/50 transition-colors">The Agency</Link>
              <Link href="/#intake" className="hover:text-white/50 transition-colors">Workflow</Link>
              <Link href="#" className="hover:text-white/50 transition-colors">Blog</Link>
              <Link href="#" className="hover:text-white/50 transition-colors">Contacts</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-8">
          <div className="flex items-center gap-8 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>&copy; {new Date().getFullYear()}, Fleevo</span>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Magnetic intensity={0.3}>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                <Globe className="w-5 h-5 text-white/80" />
              </a>
            </Magnetic>
            <Magnetic intensity={0.3}>
              <a href="https://wa.me/213655934124" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                <MessageSquare className="w-5 h-5 text-white/80" />
              </a>
            </Magnetic>
            <Magnetic intensity={0.3}>
              <a href="mailto:contact@fleevo.com" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5 text-white/80" />
              </a>
            </Magnetic>
            <Magnetic intensity={0.3}>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                <Share2 className="w-5 h-5 text-white/80" />
              </a>
            </Magnetic>
          </div>
        </div>

      </div>
    </footer>
  );
}
