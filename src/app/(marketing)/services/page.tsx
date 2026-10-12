"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { 
  ArrowRight, 
  ArrowUpRight,
  Check, 
  MessageCircle, 
  ShieldCheck, 
  Smartphone,
  Layers,
  ShoppingBag,
  TrendingUp,
  Target,
  BarChart3,
  Cpu,
  Sparkles
} from "lucide-react";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";

export default function ServicesPage() {
  const [activeSuite, setActiveSuite] = useState<"build" | "scale">("build");

  const buildServices = [
    {
      id: "01",
      badge: "Core Engineering",
      icon: Smartphone,
      title: "Custom Web Platforms & Flagships",
      desc: "High-speed brand platforms for restaurants and service businesses. Built with Next.js for sub-second page loads on Algerian mobile networks. Direct WhatsApp order and appointment routing with zero manual delay.",
      tags: ["Sub-Second Mobile", "Direct WhatsApp Routing", "Zero Templates", "Admin Lead Inbox"],
      metric: "< 1s Load Time"
    },
    {
      id: "02",
      badge: "E-Commerce",
      icon: ShoppingBag,
      title: "Direct E-Commerce & Ordering Stores",
      desc: "Tailored online storefronts that cut out third-party platform fees. Instant catalog search across thousands of products. Frictionless mobile checkout built specifically for local and national Algerian delivery.",
      tags: ["0% Commission Cuts", "High-Volume Search", "Local Delivery Ready", "Cart Abandonment Fixes"],
      metric: "100% Margin Kept"
    },
    {
      id: "03",
      badge: "Applications",
      icon: Layers,
      title: "Web Apps, SaaS & Mobile Software",
      desc: "Client portals, SaaS platforms, and operational tools. Interactive web applications powered by Next.js and Supabase. Clean role-based dashboards and user authentication tailored to your workflow.",
      tags: ["Supabase Database", "User Authentication", "Client Dashboards", "Mobile PWA / Apps"],
      metric: "Full Ownership"
    }
  ];

  const scaleServices = [
    {
      id: "01",
      badge: "Paid Acquisition",
      icon: Target,
      title: "Performance Media Kickoff (Meta Ads)",
      desc: "Targeted Instagram and Facebook campaigns to drive immediate traffic. We configure tracking pixels, set up localized ad campaigns, and test creative ad angles to send buyers directly to your platform or WhatsApp line.",
      tags: ["Pixel & Event Setup", "Targeted Local Reach", "Direct WhatsApp Ads", "Creative Testing"],
      metric: "Direct Inquiries"
    },
    {
      id: "02",
      badge: "Conversion Strategy",
      icon: TrendingUp,
      title: "Offer & Value Architecture",
      desc: "Structuring your pricing tiers and product bundles so visitors actually convert. We analyze your pricing structure, introduce order bumps and post-purchase offers, and refine your messaging to increase your average order value.",
      tags: ["Pricing Psychology", "Order Bumps & AOV", "Guarantees & Reversals", "Objection Handling"],
      metric: "Higher Basket Size"
    },
    {
      id: "03",
      badge: "Diagnostic",
      icon: BarChart3,
      title: "Revenue & Margin Teardown (Audit)",
      desc: "A complete audit of where money and leads leak from your sales process. We evaluate your checkout drop-offs and pricing leaks to deliver a concrete teardown report showing how to fix your unit economics.",
      tags: ["Unit Economics Audit", "Checkout Leak Analysis", "Conversion Teardown", "10-Point Action Plan"],
      metric: "Zero Leakage"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "15-Minute Quick Chat",
      desc: "We look at what you have, understand what you want to sell, and see if we can help. No pressure, no technical jargon."
    },
    {
      num: "02",
      title: "Fixed Quote in 24 Hours",
      desc: "We give you a transparent, fixed price and exact timeline based on your project. Zero hidden fees, zero surprise costs."
    },
    {
      num: "03",
      title: "50% Staging Milestone",
      desc: "50% advance to begin. You only pay the remaining 50% after you test and approve the working website on our private staging link."
    },
    {
      num: "04",
      title: "Launch in 2 to 3 Weeks",
      desc: "Tested on real mobile phones across local 4G networks. We connect your domain, wire your WhatsApp, and hand over the keys."
    }
  ];

  return (
    <main className="bg-[#fff] text-black min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-48 pb-16 md:pt-56 md:pb-24 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col items-center text-center">
        {/* Subtle Pill */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="px-4 py-1.5 rounded-full border border-black/10 bg-black/[0.03] text-xs font-mono uppercase tracking-[0.2em] font-medium mb-8 text-neutral-700"
        >
          Engineering & Growth Studio
        </motion.div>

        {/* Hero Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[95px] font-semibold tracking-tighter leading-[0.95] max-w-4xl"
        >
          Websites & sales engines <br className="hidden sm:inline" />
          <span className="font-serif italic font-light">built to run and scale.</span>
        </motion.h1>

        {/* Human Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-2xl text-neutral-600 font-light max-w-2xl leading-relaxed"
        >
          We build the platforms that run your business. Then we equip them to scale. From fast custom websites and e-commerce storefronts to Meta ads and offer strategy.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Magnetic intensity={0.2}>
            <a
              href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-base md:text-lg font-semibold transition-all shadow-xl flex items-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Chat on WhatsApp</span>
            </a>
          </Magnetic>

          <Magnetic intensity={0.2}>
            <TransitionLink
              href="/contact"
              className="px-8 py-4.5 rounded-full bg-black text-white text-base md:text-lg font-semibold hover:bg-neutral-800 transition-all shadow-sm flex items-center gap-2 group"
            >
              <span>Book a 15-Minute Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </TransitionLink>
          </Magnetic>
        </motion.div>

        {/* Genuine Proof Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="mt-16 pt-8 border-t border-black/10 w-full max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono"
        >
          <span className="uppercase tracking-widest text-neutral-400">Live Demonstrations:</span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium text-neutral-800">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Mo Pizza Restaurants</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Almadina Bookstore</span>
          </div>
        </motion.div>
      </section>

      {/* 2. THE TWO-WING SERVICE SUITE (BUILD & SCALE) */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1300px] mx-auto border-t border-black/10">
        
        {/* Section Header & Interactive Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-semibold mb-3 block">
              Core Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.02]">
              Two disciplines. <br className="hidden sm:inline" />
              One connected system.
            </h2>
          </div>

          {/* Interactive Suite Switcher */}
          <div className="flex items-center p-1.5 bg-neutral-100 rounded-full border border-black/10 self-start lg:self-auto">
            <button
              onClick={() => setActiveSuite("build")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeSuite === "build"
                  ? "bg-black text-white shadow-md"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              01. The Build Suite
            </button>
            <button
              onClick={() => setActiveSuite("scale")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeSuite === "scale"
                  ? "bg-black text-white shadow-md"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <span>02. The Launch Suite</span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 font-bold">
                Add-On
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Service Grid */}
        <AnimatePresence mode="wait">
          {activeSuite === "build" ? (
            <motion.div
              key="build"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-2xl bg-neutral-50 border border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-neutral-600 font-light">
                <span className="font-medium text-black">
                  The Build Suite: Production-grade engineering for businesses ready for real software.
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  Fixed quotes · 50/50 guarantee · 2-3 week delivery
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {buildServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.id}
                      className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-8">
                          <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
                            BUILD // {service.id}
                          </span>
                          <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 font-medium">
                            {service.badge}
                          </span>
                        </div>

                        <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>

                        <h3 className="text-2xl font-medium tracking-tight text-black mb-4">
                          {service.title}
                        </h3>

                        <p className="text-neutral-600 font-light text-base leading-relaxed mb-8">
                          {service.desc}
                        </p>
                      </div>

                      <div>
                        <div className="pt-6 border-t border-black/5 mb-6">
                          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                            Key Standards:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={`https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20${encodeURIComponent(service.title)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-emerald-700 transition-colors pt-2"
                        >
                          <span>Discuss on WhatsApp</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="scale"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-2xl bg-neutral-50 border border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-neutral-600 font-light">
                <span className="font-medium text-black">
                  The Launch Suite: Traffic, offer restructuring, and pipeline audits to turn visits into cash.
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold">
                  Offered as a Launch Add-On with every platform build
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {scaleServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.id}
                      className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-8">
                          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase">
                            SCALE // {service.id}
                          </span>
                          <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-medium border border-emerald-200">
                            {service.badge}
                          </span>
                        </div>

                        <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>

                        <h3 className="text-2xl font-medium tracking-tight text-black mb-4">
                          {service.title}
                        </h3>

                        <p className="text-neutral-600 font-light text-base leading-relaxed mb-8">
                          {service.desc}
                        </p>
                      </div>

                      <div>
                        <div className="pt-6 border-t border-black/5 mb-6">
                          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                            Key Deliverables:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={`https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20${encodeURIComponent(service.title)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition-colors pt-2"
                        >
                          <span>Ask about this add-on</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Launch Bundle Callout */}
        <div className="mt-16 p-8 sm:p-10 rounded-[2.5rem] bg-neutral-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 border border-white/10 shadow-2xl">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>The Complete Launch Package</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Pair your new platform with an active launch campaign.
            </h3>
            <p className="text-neutral-400 font-light text-base leading-relaxed">
              When we build your website or store, you can add our Launch Package: tracking pixels installed, offer tiers structured, and initial Meta ad campaigns configured to drive direct WhatsApp inquiries from day one.
            </p>
          </div>
          <Magnetic intensity={0.2}>
            <a
              href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20ask%20about%20the%20Build%20%2B%20Launch%20Package."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-base shrink-0 transition-transform shadow-lg"
            >
              Ask on WhatsApp
            </a>
          </Magnetic>
        </div>

      </section>

      {/* 3. REAL VISUAL DEMONSTRATIONS (SHOW, DON'T TELL) */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1300px] mx-auto space-y-24 md:space-y-36 border-t border-black/10">
        
        {/* DEMO 1: MO PIZZA RESTAURANTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left: Explanation */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                01 / Direct Mobile Ordering
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black leading-[1.08]">
              Mo Pizza: Direct orders with zero commission cuts.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Third-party food apps take up to 25% on every delivery. We built Mo Pizza a custom mobile web app where customers order directly from their phone. The order items and delivery address land straight in the restaurant’s WhatsApp in seconds.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Instant WhatsApp ticket with customer address & cart details",
                "0% third-party commission fees — 100% profit stays with the restaurant",
                "Sub-second mobile ordering without forcing customers to download an app",
                "Custom live menu with instant pizza modifications"
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-neutral-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-700" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="https://mopizzarestaurants.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-emerald-700 transition-colors border-b border-black pb-0.5"
              >
                <span>Test Live Site: mopizzarestaurants.netlify.app</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Visual display */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="rounded-[2.5rem] bg-neutral-950 p-4 sm:p-8 border border-black/10 shadow-2xl relative overflow-hidden group">
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                <Image
                  src="/project-mopizza2.png"
                  alt="Mo Pizza Mobile Ordering Interface"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Live Overlay Badge */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
                <span className="flex items-center gap-2 text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Deployment
                </span>
                <span>WhatsApp Engine · Mobile Web App</span>
              </div>
            </div>
          </div>
        </div>

        {/* DEMO 2: ALMADINA BOOKSTORE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left: Visual display */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] bg-neutral-950 p-4 sm:p-8 border border-black/10 shadow-2xl relative overflow-hidden group">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                <Image
                  src="/project-almadina.png"
                  alt="Almadina Bookstore Platform"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Live Overlay Badge */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
                <span className="flex items-center gap-2 text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Production Store
                </span>
                <span>Headless Catalog · Yalidine / Local Delivery</span>
              </div>
            </div>
          </div>

          {/* Right: Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                02 / Fast Digital Storefronts
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black leading-[1.08]">
              Almadina Bookstore: Scholarly catalog, zero search lag.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Old WordPress stores freeze up when searching through large catalogs on phone connections. We built Almadina a modern headless e-commerce store with instant sub-second search, clean typography, and a frictionless mobile checkout tailored for Algerian delivery.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Instant catalog search across thousands of book titles",
                "Loads in under 1 second on Algerian mobile 4G",
                "Mobile-first checkout flow reducing abandoned carts",
                "Clean, uncluttered presentation that commands respect"
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-neutral-800">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-blue-700" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="https://almadinabookstore.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-blue-700 transition-colors border-b border-black pb-0.5"
              >
                <span>Test Live Site: almadinabookstore.com</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* 4. TRANSPARENT PRICING & DELIVERY TERMS */}
      <section className="py-24 px-6 md:px-12 bg-neutral-50/70 border-t border-b border-black/10">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-3 block">
                How Pricing Works
              </span>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black">
                Transparent delivery. <br className="hidden sm:inline" />
                Zero surprise bills.
              </h2>
            </div>
            <p className="text-sm md:text-base text-neutral-600 max-w-md font-light leading-relaxed">
              Every business has unique requirements. We don't use arbitrary pricing packages—we review your exact scope and give you an honest, binding quote within 24 hours.
            </p>
          </div>

          {/* 4 Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-3xl border border-black/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-400 block mb-6">
                    STEP {step.num}
                  </span>
                  <h3 className="text-xl font-medium text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5 flex items-center gap-2 text-xs font-mono text-neutral-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Honest Terms</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Reassurance Callout */}
          <div className="mt-12 p-8 rounded-3xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-lg font-medium text-white">The 50/50 Milestone Guarantee</p>
              <p className="text-sm text-white/70 font-light">
                You pay a 50% deposit to begin work. You only pay the final 50% after testing the complete, working site on our staging server.
              </p>
            </div>
            <a 
              href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20ask%20about%20the%2050/50%20milestone%20guarantee."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors shrink-0"
            >
              Ask on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* 5. CINEMATIC OUTRO CTA */}
      <section className="relative w-full text-white py-40 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-25 scale-105">
            <source src="/video-erasio-1.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-0" />
        
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter leading-[0.98] mb-6"
          >
            Have a project in mind? <br className="hidden sm:block" />
            Let's talk.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/70 font-light max-w-xl mx-auto mb-12"
          >
            Send us a message on WhatsApp or book a quick 15-minute call. We'll give you honest advice, a realistic timeframe, and an exact quote within 24 hours.
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
