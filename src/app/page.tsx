"use client";

import { useEffect } from "react";
import Methodology from "@/components/Methodology";
import FeaturedWork from "@/components/FeaturedWork";
import Architectures from "@/components/Architectures";
import FAQ from "@/components/FAQ";
import ConversionEngine from "@/components/ConversionEngine";
import Footer from "@/components/Footer";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import Bottlenecks from "@/components/Bottlenecks";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  // Force scroll to top on refresh
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="bg-white text-black selection:bg-black selection:text-white">
      
      {/* Pristine Light-Mode Hero */}
      <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden bg-studio-light">
        
        {/* Soft, Expensive Ambient Glows (Replacing the dark video) */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150vw] md:w-[800px] h-[150vw] md:h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[150vw] md:w-[600px] h-[150vw] md:h-[600px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_60%)] rounded-full pointer-events-none" />
        
        {/* Subtle dot grid for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        {/* Ultra-Clean Swiss Typography Layout */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 mt-20 w-full max-w-[1200px] mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 px-4 py-2 rounded-full border border-black/10 bg-white shadow-sm flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">Elite Digital Architecture</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter leading-[0.95] text-black w-full"
          >
            Digital design & <br className="hidden md:block"/>
            development agency.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 text-lg md:text-2xl text-black/60 font-light max-w-[800px] leading-[1.6]"
          >
            We engineer autonomous systems for high-ticket service brands.
            <br className="hidden md:block"/> Scale your revenue, buy back your time, and dominate your market.
          </motion.p>
          
          {/* Simple, mature CTAs - Inverted for Light Mode */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 flex flex-col sm:flex-row items-center gap-5"
          >
            <Magnetic>
              <Link 
                href="#conversion"
                className="px-10 py-5 rounded-full bg-black text-white text-base md:text-lg font-medium tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex items-center justify-center"
              >
                Command Your Market
              </Link>
            </Magnetic>
            <Link 
              href="#architectures"
              className="px-10 py-5 rounded-full border border-black/10 text-black bg-white/50 backdrop-blur-md text-base md:text-lg font-medium hover:bg-black/5 transition-colors duration-300 flex items-center justify-center"
            >
              See The Blueprints
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 
        The rest of the site alternates between Pitch Black and Pristine White.
        We wrap them in dynamic containers.
      */}
      <div className="relative z-30">
        
        {/* Dark Block 1 */}
        <div className="bg-studio-dark rounded-t-[3rem] overflow-hidden">
          <Methodology />
          <Bottlenecks />
        </div>

        {/* Light Block 1 (Trust / Marquee) */}
        <div className="bg-studio-light py-16">
          <InfiniteMarquee />
        </div>

        {/* Dark Block 2 (The Portfolio) */}
        <div className="bg-studio-dark rounded-t-[3rem] overflow-hidden">
          <FeaturedWork />
        </div>

        {/* Light Block 2 (Services / Architecture) */}
        <div className="bg-studio-light rounded-t-[3rem] overflow-hidden">
          <Architectures />
        </div>

        {/* Dark Footer Block */}
        <div className="bg-black rounded-t-[3rem] overflow-hidden">
          <FAQ />
          <ConversionEngine />
          <Footer />
        </div>

      </div>
    </main>
  );
}
