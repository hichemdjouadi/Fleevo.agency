"use client";

import FeaturedWork from "@/components/FeaturedWork";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/HeroVisual";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  MessageCircle, 
  Smartphone, 
  Check, 
  Calendar, 
  ShoppingBag, 
  ShieldCheck, 
  Clock, 
  Zap, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white text-black selection:bg-black selection:text-white min-h-screen">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full flex flex-col items-center pt-32 md:pt-44 pb-20 overflow-hidden bg-white text-black">
        {/* Subtle architectural background grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none transform-gpu" />
        
        <div className="relative z-20 flex flex-col items-start md:items-center justify-start text-left md:text-center px-6 md:px-12 w-full max-w-[1400px] mx-auto">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[96px] font-medium tracking-[-0.03em] leading-[0.92] text-black w-full max-w-5xl"
          >
            Websites that turn visitors <br className="hidden md:block"/>
            <span className="font-serif italic font-light">into paying clients.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-8 text-lg md:text-2xl text-black/70 font-light max-w-[760px] leading-relaxed"
          >
            Stop losing sales to slow Instagram DMs and missed phone calls. We design and launch custom, high-speed websites for your business in 14 days — wired directly to your WhatsApp.
          </motion.p>
          
          {/* Hero CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 z-30"
          >
            <Magnetic intensity={0.2}>
              <a
                href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base transition-colors shadow-lg text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                Chat on WhatsApp
              </a>
            </Magnetic>
            <Magnetic intensity={0.2}>
              <TransitionLink 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black text-white font-semibold text-sm sm:text-base hover:bg-neutral-800 transition-colors shadow-sm text-center"
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

          {/* Micro Reassurances */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-black/60 uppercase tracking-wider"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>14-Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct WhatsApp Routing</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>50% Paid on Delivery</span>
            </div>
          </motion.div>
          
          {/* Photorealistic Floating Device Stage */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-18 w-full max-w-[1300px] relative z-20"
          >
             <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* 2. THE COST OF INACTION (THE REALITY) */}
      <section className="py-24 md:py-36 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black leading-[1.05]">
              Why businesses without a website lose half their sales.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-black/70 font-light max-w-md leading-relaxed">
            Most businesses lose half their customers before they ever make contact. Visitors click an Instagram link, wait four seconds for a slow page to open, or ask &apos;Prix svp&apos; in the comments and never get an answer. We replace that with websites that load instantly, answer every question up front, and send verified orders and inquiries straight to your phone.
          </p>
        </div>

        {/* Side-by-side: The Trap vs The Fleevo Standard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card A: The DM Trap */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-neutral-50 border border-black/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
                <span className="text-xs font-mono text-red-600 font-semibold tracking-wider uppercase">The DM Trap</span>
                <span className="text-xs font-mono text-black/50">Running on social media alone</span>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">✕</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-black">&apos;Prix svp&apos; comments sitting unanswered</h3>
                    <p className="text-sm text-black/60 font-light mt-1">Prospective buyers ask for pricing, wait four hours for a reply, and buy from your competitor instead.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">✕</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-black">Four-second mobile load times</h3>
                    <p className="text-sm text-black/60 font-light mt-1">Slow bio links and clunky catalog pages lose over 50% of mobile visitors before the first picture finishes loading.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">✕</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-black">Manual orders typed by hand</h3>
                    <p className="text-sm text-black/60 font-light mt-1">Typing out prices, delivery fees, and order confirmation messages on a phone keyboard all evening.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">✕</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-black">Zero tracking on ad spend</h3>
                    <p className="text-sm text-black/60 font-light mt-1">Boosting posts blindly without knowing which image or video brought in paying clients.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Card B: The Fleevo Standard */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-neutral-950 text-white border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">The Fleevo Standard</span>
                <span className="text-xs font-mono text-white/50">Custom High-Speed Infrastructure</span>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">✓</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-white">Under 800ms mobile speed</h3>
                    <p className="text-sm text-white/70 font-light mt-1">Pages load instantly on local 4G connections. No spinners, no lag, zero abandoned visits.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">✓</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-white">Direct WhatsApp ordering</h3>
                    <p className="text-sm text-white/70 font-light mt-1">Shoppers pick their items or services and click one button. All details arrive formatted in your WhatsApp.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">✓</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-white">Upfront credibility & answers</h3>
                    <p className="text-sm text-white/70 font-light mt-1">High-resolution visuals, clear service breakdowns, and answers that qualify buyers before they message you.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">✓</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-white">100% asset ownership</h3>
                    <p className="text-sm text-white/70 font-light mt-1">You own your custom domain, codebase, and customer database. No 20% platform commission cuts.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHAT WE BUILD (THE 3 CORE SYSTEMS) */}
      <section className="py-24 md:py-36 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black leading-[1.05]">
              Three systems engineered for real revenue.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-black/70 font-light max-w-md leading-relaxed">
            What we build for growing businesses. Three battle-tested website architectures designed to capture customers and save your staff hours of manual follow-up.
          </p>
        </div>

        {/* The 3 Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Mobile Storefronts */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-neutral-50/80 border border-black/10 flex flex-col justify-between hover:border-black/20 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono text-black/80 font-medium uppercase">
                  Retail & E-commerce
                </span>
                <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-2xl font-medium text-black tracking-tight mb-3">
                High-Speed Mobile Storefronts
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed mb-6">
                Built for brands selling physical goods, food, or products. Load catalogs in under 800 milliseconds on 4G phones, let customers pick variations with one tap, and receive complete order details directly on WhatsApp.
              </p>
            </div>

            <div className="pt-6 border-t border-black/10 font-mono text-xs space-y-2">
              <div className="flex justify-between text-black/70">
                <span>Speed Target</span>
                <span className="font-semibold text-emerald-700">&lt; 800ms Mobile</span>
              </div>
              <div className="flex justify-between text-black/70">
                <span>Checkout Route</span>
                <span className="font-semibold text-black">WhatsApp & Yalidine COD</span>
              </div>
            </div>
          </div>

          {/* Card 2: High-Ticket Booking */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-neutral-50/80 border border-black/10 flex flex-col justify-between hover:border-black/20 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono text-black/80 font-medium uppercase">
                  Clinics & Services
                </span>
                <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-2xl font-medium text-black tracking-tight mb-3">
                High-Ticket Client Booking
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed mb-6">
                Built for clinics, real estate agencies, and professional services. Establish authority with editorial design, filter out unqualified tire-kickers with smart questionnaires, and book serious prospects directly into your calendar.
              </p>
            </div>

            <div className="pt-6 border-t border-black/10 font-mono text-xs space-y-2">
              <div className="flex justify-between text-black/70">
                <span>Inbound Flow</span>
                <span className="font-semibold text-emerald-700">Pre-Qualified Leads</span>
              </div>
              <div className="flex justify-between text-black/70">
                <span>Confirmation</span>
                <span className="font-semibold text-black">Automated Calendar & SMS</span>
              </div>
            </div>
          </div>

          {/* Card 3: Custom Portals & Operations */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-neutral-50/80 border border-black/10 flex flex-col justify-between hover:border-black/20 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono text-black/80 font-medium uppercase">
                  Operations & Web Apps
                </span>
                <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-2xl font-medium text-black tracking-tight mb-3">
                Custom Portals & Operations
              </h3>
              <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed mb-6">
                Built for companies with unique workflows that outgrew basic spreadsheets. Track deliveries, manage client files, and automate customer updates without paying recurring software fees every month.
              </p>
            </div>

            <div className="pt-6 border-t border-black/10 font-mono text-xs space-y-2">
              <div className="flex justify-between text-black/70">
                <span>Database</span>
                <span className="font-semibold text-emerald-700">Custom & Private</span>
              </div>
              <div className="flex justify-between text-black/70">
                <span>Ownership</span>
                <span className="font-semibold text-black">100% Client Owned</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SELECTED DEPLOYMENTS */}
      <section className="bg-white text-black py-24 md:py-36 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-7xl font-medium text-black tracking-[-0.03em] leading-[0.92]">
                Selected deployments.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <p className="text-lg text-black/70 font-light max-w-md leading-relaxed">
                Live websites and custom systems built for real businesses. Engineered to convert traffic into paying clients from day one.
              </p>
              <TransitionLink 
                href="/work" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-sm font-semibold shadow-sm shrink-0"
              >
                View all deployments <ArrowRight className="w-4 h-4" />
              </TransitionLink>
            </div>
          </div>
          <FeaturedWork />
        </div>
      </section>

      {/* 5. 14-DAY ROADMAP & 50/50 GUARANTEE */}
      <section className="py-24 md:py-36 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-white text-black">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black leading-[1.05]">
              From your first call to a live website in 14 business days.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-black/70 font-light max-w-md leading-relaxed">
            We launch fast so you can start taking orders this month. No three-month delays, no ghosting, and no technical headaches.
          </p>
        </div>

        {/* 3 Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-neutral-50/80 border border-black/10">
            <div className="text-xs font-mono text-emerald-700 font-semibold tracking-wider uppercase mb-6">
              Days 1 to 3
            </div>
            <h3 className="text-2xl font-medium text-black mb-3">
              Structure & Strategy
            </h3>
            <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed">
              We review your pricing, write clear copy, and map out how visitors contact your WhatsApp.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-neutral-50/80 border border-black/10">
            <div className="text-xs font-mono text-emerald-700 font-semibold tracking-wider uppercase mb-6">
              Days 4 to 10
            </div>
            <h3 className="text-2xl font-medium text-black mb-3">
              Design & Build
            </h3>
            <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed">
              We design and code your custom website. We test mobile speed on 4G networks and connect your forms.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-neutral-50/80 border border-black/10">
            <div className="text-xs font-mono text-emerald-700 font-semibold tracking-wider uppercase mb-6">
              Days 11 to 14
            </div>
            <h3 className="text-2xl font-medium text-black mb-3">
              Testing & Handover
            </h3>
            <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed">
              We hook up your domain, verify links on real phones, train your staff, and launch.
            </p>
          </div>

        </div>

        {/* The 50/50 Guarantee Box */}
        <div className="p-8 sm:p-12 md:p-14 rounded-[2.5rem] bg-neutral-950 text-white border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4 uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The 50/50 Milestone Guarantee</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-3">
              You pay 50% upfront. The other 50% only after live approval.
            </h3>
            <p className="text-base text-white/70 font-light leading-relaxed">
              We never ask for full payment upfront. You pay 50 percent to start the build. The remaining 50 percent is only paid after your website is live and approved.
            </p>
          </div>

          <div className="shrink-0">
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-neutral-200 transition-colors shadow-lg"
              >
                <span>Reserve Your 14-Day Build</span>
                <ArrowRight className="w-4 h-4" />
              </TransitionLink>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQ />

      {/* 7. CINEMATIC OUTRO */}
      <section className="relative w-full bg-black text-white py-40 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-25 scale-105">
            <source src="/video-erasio-1.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-0" />
        
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] leading-[0.95] mb-6"
          >
            Ready to turn visitors <br className="hidden sm:block" />
            into paying clients?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/70 font-light max-w-2xl mx-auto mb-12"
          >
            Message us on WhatsApp or book a short call. We will review your business and show you what a custom website can do for your sales.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-30">
            <Magnetic intensity={0.2}>
              <a 
                href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-base sm:text-xl font-semibold transition-colors shadow-2xl text-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Message on WhatsApp</span>
              </a>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <TransitionLink 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black text-base sm:text-xl font-semibold transition-colors hover:bg-neutral-200 shadow-2xl text-center gap-2"
              >
                <span>Book a 15-Minute Call</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </TransitionLink>
            </Magnetic>
          </div>

          {/* Outro Reassurance Strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-white/60 uppercase tracking-wider">
            <span>Direct WhatsApp reply within 2 hours</span>
            <span>·</span>
            <span>14-day turnaround</span>
            <span>·</span>
            <span>50% paid after live approval</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
