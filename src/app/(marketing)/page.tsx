"use client";

import FeaturedWork from "@/components/FeaturedWork";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/HeroVisual";
import Methodology from "@/components/Methodology";
import ValueProps from "@/components/ValueProps";
import Metrics from "@/components/Metrics";

import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";
import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, MessageCircle, Smartphone, ShoppingBag, Layers, TrendingUp } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <main className="bg-white text-black selection:bg-black selection:text-white min-h-screen">
      
      {/* Cinematic White Hero (Cuberto Style) */}
      <section 
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative w-full flex flex-col items-center pt-32 md:pt-48 pb-20 overflow-hidden bg-white text-black"
      >
        {/* Subtle architectural background grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none transform-gpu" />
        
        {/* Interactive Subtle Ambient Spotlight */}
        <motion.div 
          className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300"
          style={{
            background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.08), transparent 70%)`
          }}
        />
        
        <div className="relative z-20 flex flex-col items-start md:items-center justify-start text-left md:text-center px-6 md:px-12 w-full max-w-[1400px] mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-mono text-neutral-800 font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR NEW PROJECTS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[96px] font-medium tracking-tighter leading-[0.92] text-black w-full max-w-5xl"
          >
            Websites, apps & stores <br className="hidden md:block"/>
            <span className="font-serif italic font-light">built to run and scale.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-8 text-lg md:text-2xl text-neutral-600 font-light max-w-[760px] leading-relaxed">
            We build fast, custom websites, e-commerce storefronts, and web applications. Then we equip them to scale with Meta ads and offer strategy. Delivered in weeks, wired directly to your WhatsApp.
          </motion.p>
          
          {/* Hero CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 z-30"
          >
            <Magnetic intensity={0.2}>
              <a
                href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base transition-all shadow-xl text-center max-w-full"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                Chat on WhatsApp
              </a>
            </Magnetic>
            <Magnetic intensity={0.2}>
              <TransitionLink 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black text-white font-semibold text-sm sm:text-base hover:bg-neutral-800 transition-all shadow-sm text-center max-w-full"
              >
                Book a 15-Minute Call
                <ArrowRight className="w-4 h-4 shrink-0" />
              </TransitionLink>
            </Magnetic>
            <TransitionLink 
              href="/work" 
              className="inline-flex items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-black/15 text-black font-medium text-sm sm:text-base hover:bg-black/5 transition-colors"
            >
              View Work
            </TransitionLink>
          </motion.div>
          
          {/* Interactive Pipeline Showcase (Obsidian Terminal on White Stage) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 w-full max-w-[1400px] min-h-[580px] rounded-[32px] md:rounded-[40px] relative overflow-hidden bg-[#070709] border border-black/10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.2)]"
          >
             <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* The Reality (White / Editorial) */}
      <section className="py-24 md:py-32 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 flex flex-col md:flex-row gap-8 md:gap-16 items-start bg-white text-black">
        <div className="w-full md:w-1/3">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 block mb-3 font-semibold">
            The Reality
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-black leading-tight">
            Aesthetics mean nothing if your pipeline drops the buyer.
          </h2>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg md:text-2xl font-light leading-relaxed text-neutral-600">
            Most agencies sell static pages that look clean in a portfolio but dump inquiries into an unmonitored inbox. We build the frontend that earns immediate trust and the automated plumbing that turns visits into booked appointments and confirmed orders.
          </p>
        </div>
      </section>

      {/* What We Build & How We Scale (The 4 Capabilities) */}
      <section className="py-24 md:py-32 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 block mb-3 font-semibold">
              Full-Stack Scope
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.02]">
              What we build. <br className="hidden sm:inline" />
              How we scale.
            </h2>
          </div>
          <p className="text-lg text-neutral-600 font-light max-w-md leading-relaxed">
            From single-page sales engines to custom web apps and direct Meta ad campaigns. Every deliverable is built for commercial performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-3xl bg-neutral-50 border border-black/10 flex flex-col justify-between hover:border-black/30 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase text-neutral-400 font-bold block mb-2">BUILD // 01</span>
              <h3 className="text-xl font-medium text-black mb-3">Custom Web Platforms</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                Brand websites with sub-second mobile speeds and direct WhatsApp lead capture. Zero generic templates.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>Next.js · WhatsApp</span>
              <span className="text-emerald-700 font-semibold">&lt; 1s Load</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-50 border border-black/10 flex flex-col justify-between hover:border-black/30 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase text-neutral-400 font-bold block mb-2">BUILD // 02</span>
              <h3 className="text-xl font-medium text-black mb-3">E-Commerce & Stores</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                Fast online storefronts with local Algerian delivery checkout and zero third-party commission cuts.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>Catalog · Yalidine</span>
              <span className="text-emerald-700 font-semibold">100% Margin</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-50 border border-black/10 flex flex-col justify-between hover:border-black/30 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase text-neutral-400 font-bold block mb-2">BUILD // 03</span>
              <h3 className="text-xl font-medium text-black mb-3">Web Apps & Software</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                Custom client portals, SaaS MVPs, and operational dashboards on Next.js and Supabase databases.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>Supabase · Auth</span>
              <span className="text-neutral-700 font-semibold">Custom Stack</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-emerald-50/60 border border-emerald-200/80 flex flex-col justify-between hover:border-emerald-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-emerald-700 font-bold">SCALE // ADD-ON</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-200/80 text-emerald-800 font-bold">
                  Launch
                </span>
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Launch & Growth Suite</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                Meta ad campaigns, offer restructuring, and conversion audits to drive immediate inquiries from day one.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-emerald-200/50 flex items-center justify-between text-xs font-mono text-emerald-800">
              <span>Meta Ads · Offers</span>
              <span className="font-semibold">Day-One Ready</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <TransitionLink
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-emerald-700 transition-colors border-b border-black pb-0.5"
          >
            <span>Explore full service specifications & deliverables</span>
            <ArrowRight className="w-4 h-4" />
          </TransitionLink>
        </div>
      </section>

      {/* Selected Deployments (Cuberto Luxury White Showcase) */}
      <section className="bg-white text-black py-24 md:py-36 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 block mb-3 font-semibold">
                Demonstrated Proof
              </span>
              <h2 className="text-4xl md:text-7xl font-medium text-black tracking-tighter leading-[0.92]">
                Selected deployments.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <p className="text-lg text-neutral-600 font-light max-w-md leading-relaxed">
                Autonomous frontends, custom catalog search engines, and qualification pipelines engineered for commercial scale.
              </p>
              <TransitionLink 
                href="/work" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition-all text-sm font-semibold shadow-sm shrink-0"
              >
                View all deployments <ArrowRight className="w-4 h-4" />
              </TransitionLink>
            </div>
          </div>
          <FeaturedWork />
        </div>
      </section>

      <ValueProps />

      <Methodology />

      <Metrics />

      <FAQ />

      {/* Cinematic Outro */}
      <section className="relative w-full text-white py-40 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-25 scale-105">
            <source src="/video-erasio-1.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark gradient overlay so text is super readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-0" />
        
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter leading-[0.95] mb-6"
          >
            Stop losing qualified leads <br className="hidden sm:block" />
            to slow follow-ups.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/70 font-light max-w-2xl mx-auto mb-12"
          >
            We build the high-converting frontends and automated pipelines that qualify and route buyers while interest is at its peak.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-30">
            <Magnetic intensity={0.2}>
              <a 
                href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-base sm:text-xl font-semibold overflow-hidden group transition-transform shadow-2xl text-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Message on WhatsApp</span>
              </a>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <TransitionLink 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black text-base sm:text-xl font-semibold overflow-hidden group transition-transform hover:scale-[1.02] active:scale-95 shadow-2xl text-center gap-2"
              >
                <span>Book a 15-Minute Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </TransitionLink>
            </Magnetic>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
