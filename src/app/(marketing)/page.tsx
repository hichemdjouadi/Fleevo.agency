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
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Smartphone, Layers, TrendingUp, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white text-black selection:bg-black selection:text-white min-h-screen">
      
      {/* Cinematic White Hero (Cuberto Style) */}
      <section className="relative w-full flex flex-col items-center pt-32 md:pt-48 pb-20 overflow-hidden bg-white text-black">
        {/* Subtle architectural background grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none transform-gpu" />
        
        <div className="relative z-20 flex flex-col items-start md:items-center justify-start text-left md:text-center px-6 md:px-12 w-full max-w-[1400px] mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-mono text-neutral-800 font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>AVAILABLE FOR NEW PROJECTS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[96px] font-medium tracking-[-0.03em] leading-[0.92] text-black w-full max-w-5xl"
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
          
          {/* Photorealistic Floating Device Stage */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-16 w-full max-w-[1300px] relative z-20"
          >
             <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* The Reality (White / Editorial) */}
      <section className="py-24 md:py-32 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 flex flex-col md:flex-row gap-8 md:gap-16 items-start bg-white text-black">
        <div className="w-full md:w-1/3">
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

      {/* Architectural Capabilities (Asymmetric Luxury Bento) */}
      <section className="py-24 md:py-36 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black">
        {/* Section Header: Confident, No Banned Eyebrow */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04]">
              What we engineer. <br />
              How we fill it with buyers.
            </h2>
          </div>
          <p className="text-lg text-neutral-600 font-light max-w-md leading-relaxed">
            Front-end speed gets attention. Reliable database architecture holds the data. Targeted acquisition turns traffic into revenue from day one.
          </p>
        </div>

        {/* Tier 1: Asymmetric Split (7 cols / 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Panel A (7 cols): Digital Flagships & Direct Commerce */}
          <div className="lg:col-span-7 rounded-[2.5rem] bg-neutral-50/80 border border-black/10 p-8 sm:p-12 flex flex-col justify-between hover:border-black/20 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 text-xs font-mono text-neutral-800 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>NEXT.JS APP ROUTER · DIRECT COMMERCE</span>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight leading-snug mb-4">
                Sub-second sales engines that bypass delivery app cuts.
              </h3>
              
              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed mb-8 max-w-xl">
                Most retail and restaurant sites lose customers to five-second load times or bleed 20% to 25% of their margins to delivery platforms. We engineer standalone web stores that load in under 800ms on Algerian mobile networks, routing orders directly into WhatsApp and local Yalidine fulfillment.
              </p>
            </div>

            {/* Architectural Telemetry: Direct Dispatch Pipeline */}
            <div className="pt-6 border-t border-black/10 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-neutral-900 tracking-wider">DISPATCH PIPELINE</span>
                </div>
                <span className="text-emerald-700 font-semibold">0.3s RESPONSE</span>
              </div>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-black/5">
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase">Routing Target</div>
                  <div className="font-semibold text-neutral-900 mt-1">WhatsApp Direct</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase">Platform Fee</div>
                  <div className="font-semibold text-emerald-700 mt-1">0 DZD (0% Cut)</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase">Fulfillment</div>
                  <div className="font-semibold text-neutral-900 mt-1">Yalidine COD</div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel B (5 cols): Custom Web Apps & Software MVPs */}
          <div className="lg:col-span-5 rounded-[2.5rem] bg-neutral-950 text-white border border-white/10 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono text-neutral-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>SUPABASE · POSTGRESQL · AUTH</span>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 text-white flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug mb-4">
                Custom client portals & operational MVPs.
              </h3>
              
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8">
                When off-the-shelf software breaks under your business rules, we architect custom web applications. Client dashboards, multi-role booking gateways, and automated database sync with strict row-level security.
              </p>
            </div>

            {/* Visual Specimen: Stack Pipeline */}
            <div>
              <div className="divide-y divide-white/10 font-mono text-xs mb-6 border-t border-white/10">
                <div className="py-3 flex items-center justify-between">
                  <span className="text-neutral-400">Intake & SMS Verification</span>
                  <span className="text-emerald-400 font-medium">OTP Verified</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-neutral-400">Database Layer</span>
                  <span className="text-blue-300 font-medium">Supabase / Postgres</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-neutral-400">Role-Based Access</span>
                  <span className="text-neutral-200 font-medium">Multi-Tenant RLS</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Production MVP</span>
                <span className="text-white font-semibold">2–4 Week Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: The Acquisition Horizon (12 cols full width) */}
        <div className="rounded-[2.5rem] bg-neutral-900 text-white border border-white/10 p-8 sm:p-12 md:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 5 cols: Value Thesis */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>ACQUISITION ADD-ON</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.08] mb-4">
                The Launch & Growth Engine.
              </h3>
              <p className="text-base text-neutral-300 font-light leading-relaxed mb-8">
                Building the system is half the battle. Filling it with qualified buyers is the other half. We pair every build with targeted Meta ad campaigns and Alex Hormozi-style offer structuring so your platform produces revenue on day one.
              </p>
              <TransitionLink
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-semibold shadow-lg"
              >
                <span>Explore growth deliverables</span>
                <ArrowRight className="w-4 h-4" />
              </TransitionLink>
            </div>

            {/* Right 7 cols: 3 Concrete Acquisition Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-medium text-white mb-2">Targeted Meta Ads</h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Scroll-stopping creatives and local targeting routing buyers into WhatsApp, not dead links.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-xs font-mono text-emerald-400">
                  Direct Inquiries
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-medium text-white mb-2">Offer Structuring</h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Pricing tiers and risk-reversal guarantees structured so prospects feel unreasonable saying no.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-xs font-mono text-emerald-400">
                  Higher Order Values
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-medium text-white mb-2">Launch Analytics</h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Server-side Meta Conversions API tracking cost per qualified customer instead of vanity clicks.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-xs font-mono text-emerald-400">
                  Clean Conversion Data
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Selected Deployments (Cuberto Luxury White Showcase) */}
      <section className="bg-white text-black py-24 md:py-36 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-7xl font-medium text-black tracking-[-0.03em] leading-[0.92]">
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
      <section className="relative w-full bg-black text-white py-40 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10">
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
            className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] leading-[0.95] mb-6"
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
