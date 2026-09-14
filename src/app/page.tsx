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
    <main className="bg-black text-white selection:bg-white/20">
      
      {/* Sticky Cinematic Hero */}
      <section className="relative h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/video-erasio.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Ultra-Clean Typography Layout */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 mt-20 w-full max-w-[1200px] mx-auto">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.05] text-white w-full drop-shadow-2xl"
          >
            Digital performance & <br className="hidden md:block"/>
            automation agency.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-base md:text-xl text-white/80 font-normal max-w-[800px] leading-[1.6]"
          >
            We engineer autonomous systems for high-ticket service brands.
            <br className="hidden md:block"/> Scale your revenue, buy back your time, and dominate your market.
          </motion.p>
          
          {/* Simple, mature CTAs - SCALED UP */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 flex flex-col sm:flex-row items-center gap-5"
          >
            <Magnetic>
              <Link 
                href="#conversion"
                className="px-10 py-5 rounded-full bg-white text-black text-base md:text-lg font-bold tracking-wide hover:scale-105 hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center"
              >
                Command Your Market
              </Link>
            </Magnetic>
            <Link 
              href="#architectures"
              className="px-10 py-5 rounded-full border border-white/20 text-white text-base md:text-lg font-medium hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm flex items-center justify-center"
            >
              See The Blueprints
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The rest of the site scrolls OVER the hero */}
      <div className="relative z-30 bg-black">
        <Methodology />
        <InfiniteMarquee />
        <Bottlenecks />
        <FeaturedWork />
        <Architectures />
        <FAQ />
        <ConversionEngine />
        <Footer />
      </div>
    </main>
  );
}
