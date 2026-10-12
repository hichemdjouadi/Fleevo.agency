"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import Footer from "@/components/Footer";
import { useRef } from "react";
import Magnetic from "@/components/Magnetic";
import ArchitecturalEngine from "@/components/ArchitecturalEngine";

const OPERATING_CODES = [
  {
    code: "01",
    title: "Profit Over Pixels",
    subtitle: "Built to Convert",
    description:
      "Aesthetics only matter if they make your customers buy or book. We do not design for agency design awards; we build clear, high-converting platforms that bring in revenue.",
    guarantee: "Every page is engineered to move visitors closer to an order or booking."
  },
  {
    code: "02",
    title: "Sub-Second Mobile Speed",
    subtitle: "Fast on 4G Networks",
    description:
      "Most business websites take 4 to 5 seconds to load on a mobile phone, losing half their visitors. We write 100% custom Next.js code that loads in under a second on local networks.",
    guarantee: "Sub-second load times with zero heavy WordPress template bloat."
  },
  {
    code: "03",
    title: "Direct WhatsApp Plumbing",
    subtitle: "Zero Middleman Cuts",
    description:
      "Waiting hours for an email response loses sales. We wire orders and inquiries straight into your WhatsApp or phone in seconds, so you never pay third-party app commissions.",
    guarantee: "Immediate customer notifications delivered directly to your device."
  },
  {
    code: "04",
    title: "The 50/50 Milestone Guarantee",
    subtitle: "Transparent Delivery",
    description:
      "You pay 50% advance to start work. You only pay the remaining 50% after you test and approve the working website on our private staging link before public launch.",
    guarantee: "Zero surprise fees. You inspect the product before final payment."
  }
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.4], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <main ref={containerRef} className="bg-white text-black min-h-screen selection:bg-black selection:text-white">
      
      {/* 1. HERO - THE MANIFESTO */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto pt-32 pb-20">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="px-4 py-1.5 rounded-full border border-black/10 bg-black/[0.03] text-xs font-mono uppercase tracking-[0.2em] font-medium mb-8 text-neutral-700 w-fit"
          >
            About Fleevo
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-black"
          >
            Digital platforms <br className="hidden sm:inline"/>
            <span className="font-serif italic font-light">that bring in revenue.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 text-lg sm:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed"
          >
            We are a boutique design and engineering studio based in Algiers. We replace slow, outdated websites with fast mobile storefronts and WhatsApp ordering systems that work.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.8, duration: 0.8 }}
          className="pt-16 flex items-center gap-3 text-neutral-500 uppercase text-xs font-mono tracking-[0.2em]"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-black" />
          </motion.div>
          Scroll to explore standards
        </motion.div>
      </section>

      {/* 2. THE BLUEPRINT VISUAL */}
      <ArchitecturalEngine />

      {/* 3. OPERATING CODES */}
      <section className="py-28 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10 text-black">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95] text-black">
              The Four <br />
              <span className="text-black/40 italic font-light">Operating Codes.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-neutral-600 max-w-md font-light leading-relaxed">
            Strict standards governing every system we deploy. Built to protect your customer experience and ensure every visitor turns into a buyer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {OPERATING_CODES.map((codeItem) => (
            <motion.div 
              key={codeItem.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6 }}
              className="border border-black/10 rounded-[2.5rem] p-8 sm:p-12 bg-white flex flex-col justify-between hover:border-black/30 transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-black/10 mb-8">
                  <span className="font-mono text-sm tracking-[0.2em] font-bold text-neutral-400">
                    CODE {codeItem.code}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-600 font-semibold">
                    {codeItem.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4 text-black">
                  {codeItem.title}
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed text-base sm:text-lg">
                  {codeItem.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-mono text-neutral-700 leading-snug">
                  {codeItem.guarantee}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. THE FOUNDER (EDITORIAL & ACCOUNTABILITY) */}
      <section className="py-28 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10 text-black">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative aspect-[3/4] rounded-[3rem] overflow-hidden group border border-black/10"
          >
            <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            <Image 
              src="/founder-real.jpg" 
              alt="Hichem Djouadi - Founder & Technical Architect" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </motion.div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-2">
                Hichem Djouadi
              </h3>
              <p className="text-neutral-500 font-mono uppercase tracking-widest text-xs">
                Founder & Technical Lead
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="space-y-6 text-lg sm:text-xl text-neutral-700 font-light leading-relaxed"
            >
              <p>
                "I started Fleevo because local businesses were burning money on slow WordPress templates that took 5 seconds to load and did nothing to bring in sales."
              </p>
              <p>
                We build custom, modern platforms with zero bloat. Every project connects directly to where your customers actually are—whether that's an instant mobile search or direct WhatsApp ordering.
              </p>
              <p className="text-black font-medium italic border-l-2 border-black pl-4">
                If the platform does not help you get more orders or clients, it has no reason to exist.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="pt-6 flex items-center justify-between border-t border-black/10"
            >
              <div className="text-3xl font-serif italic text-black font-medium">
                H. Djouadi
              </div>
              <span className="font-mono text-xs text-neutral-500 tracking-wider font-semibold">
                Direct Engineering Lead
              </span>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 5. THE CHALLENGE (CTA & REASSURANCE) */}
      <section className="py-28 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto text-center border-t border-black/10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black border border-black rounded-[3rem] p-10 sm:p-16 md:p-24 relative overflow-hidden text-white"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-8 leading-[0.95] text-white">
              Ready to modernize <br className="hidden md:block" />
              your business?
            </h2>
            <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Message us on WhatsApp or book a 15-minute call. We'll give you honest advice, a realistic timeframe, and an exact quote within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnetic intensity={0.2}>
                <a
                  href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4.5 sm:py-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base sm:text-lg transition-all shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Message on WhatsApp</span>
                </a>
              </Magnetic>

              <Magnetic intensity={0.2}>
                <TransitionLink
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4.5 sm:py-5 rounded-full bg-white text-black font-semibold text-base sm:text-lg hover:bg-neutral-100 transition-all group"
                >
                  Book a 15-Minute Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                </TransitionLink>
              </Magnetic>
            </div>

            {/* 3-Point Reassurance Strip */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-10 text-xs font-mono tracking-wider text-white/60">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                Zero-obligation advice
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                Direct talk with the builder
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                Fixed quote in 24 hours
              </span>
            </div>

          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
