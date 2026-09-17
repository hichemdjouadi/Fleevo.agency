"use client";

import { useEffect } from "react";
import Methodology from "@/components/Methodology";
import FeaturedWork from "@/components/FeaturedWork";
import Architectures from "@/components/Architectures";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ConversionEngine from "@/components/ConversionEngine";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/HeroVisual";
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
            className="mt-8 text-lg md:text-xl text-black/60 font-light max-w-[600px] leading-[1.6]"
          >
            We engineer autonomous systems for high-ticket service brands. Scale your revenue and buy back your time.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-5"
          >
            <Link 
              href="#conversion"
              className="px-8 py-4 rounded-full bg-black text-white text-base font-medium tracking-wide hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Command Your Market
            </Link>
          </motion.div>

          {/* MASSIVE HERO VISUAL ANCHOR (Like the blue screen or yellow ghost in the inspiration) */}
                    <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 w-full max-w-[1000px] aspect-video md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden"
          >
             <HeroVisual />
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
                <Testimonials />

        {/* Light Block 2 (Services / Architecture) */}
        <div className="bg-studio-light rounded-t-[3rem] overflow-hidden border-t border-black/5">
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
