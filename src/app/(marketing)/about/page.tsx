"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  ShieldCheck, 
  Terminal, 
  Smartphone, 
  Layers, 
  Clock, 
  Database,
  PhoneCall
} from "lucide-react";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import Footer from "@/components/Footer";
import Magnetic from "@/components/Magnetic";

export default function AboutPage() {
  return (
    <main className="bg-white text-black min-h-screen selection:bg-black selection:text-white">
      
      {/* 1. THE MANIFESTO HERO */}
      <section className="relative w-full pt-36 md:pt-48 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-800 font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>THE FLEEVY DOCTRINE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.96] text-black mb-8">
            We exist because most web agencies build ornaments that never earn a dinar.
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-600 max-w-3xl font-light leading-relaxed mb-12">
            Traditional agencies sell pretty templates that look clean in a portfolio but take five seconds to load on local phone connections and dump inquiries into an unmonitored inbox. Fleevy engineers the opposite: sub-second mobile platforms wired directly into WhatsApp order dispatch and automated database pipelines.
          </p>

          {/* Quick Credibility Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-black/10">
            <div className="p-4 rounded-2xl bg-neutral-50 border border-black/5">
              <div className="text-xs font-mono text-neutral-500 uppercase">Speed Standard</div>
              <div className="text-xl font-medium text-black mt-1">&lt; 800ms Edge Loading</div>
              <div className="text-xs text-neutral-500 mt-0.5">Tested on Algerian mobile 4G</div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-black/5">
              <div className="text-xs font-mono text-neutral-500 uppercase">Margin Protection</div>
              <div className="text-xl font-medium text-emerald-700 mt-1">0% Third-Party Cut</div>
              <div className="text-xs text-neutral-500 mt-0.5">Direct WhatsApp & Yalidine dispatch</div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-black/5">
              <div className="text-xs font-mono text-neutral-500 uppercase">Accountability</div>
              <div className="text-xl font-medium text-black mt-1">Direct Engineering Lead</div>
              <div className="text-xs text-neutral-500 mt-0.5">Zero account manager middlemen</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. THE CONTRAST ENGINE (CONVENTIONAL TRAP VS FLEEVY STANDARD) */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04]">
              The conventional agency trap vs. The Fleevy standard.
            </h2>
          </div>
          <p className="text-lg text-neutral-600 font-light max-w-md leading-relaxed">
            Why local businesses burn time and money on standard web agencies, and how our engineering pipeline fixes it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: The Conventional Agency Trap */}
          <div className="lg:col-span-6 rounded-[2.5rem] bg-neutral-50 border border-black/10 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100/70 text-xs font-mono text-red-800 font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>THE CONVENTIONAL AGENCY MODEL</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium text-black tracking-tight mb-6">
                Slow templates, lost leads, and middleman delays.
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-medium text-black">Bloated 5-Second Load Times</h4>
                    <p className="text-sm text-neutral-600 font-light leading-relaxed mt-1">
                      Heavy WordPress themes loaded with 35 plugins that freeze on mobile phones, losing half your potential buyers before the page finishes loading.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-medium text-black">Unmonitored Form Inboxes</h4>
                    <p className="text-sm text-neutral-600 font-light leading-relaxed mt-1">
                      Contact inquiries dumped into forgotten email accounts, leaving warm leads waiting 48 hours until they have already called your competitor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-medium text-black">The 25% Delivery App Tax</h4>
                    <p className="text-sm text-neutral-600 font-light leading-relaxed mt-1">
                      Restaurants and retail stores bleeding a quarter of their revenue to delivery marketplaces because their website has no direct ordering pipeline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-medium text-black">Junior Intern Delegation</h4>
                    <p className="text-sm text-neutral-600 font-light leading-relaxed mt-1">
                      You negotiate with a senior sales rep, only to have your actual website handed off to junior interns learning how to code on your invoice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 text-xs font-mono text-neutral-500">
              Result: High upfront cost, zero measurable sales volume.
            </div>
          </div>

          {/* Right Column: The Fleevy Engineering Standard */}
          <div className="lg:col-span-6 rounded-[2.5rem] bg-neutral-950 text-white border border-white/10 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>THE FLEEVY ENGINEERING STANDARD</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-6">
                Sub-second code, direct WhatsApp dispatch, 100% margin.
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-medium text-white">Sub-800ms Mobile Performance</h4>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed mt-1">
                      Hand-authored Next.js code compiled for the edge. Pages render instantaneously on Algerian mobile networks, keeping buyers engaged.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-medium text-white">Direct WhatsApp Dispatch</h4>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed mt-1">
                      Inquiries, reservations, and orders land straight on your phone in under 5 seconds, letting you close buyers while their intent is hot.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-medium text-white">Zero Marketplace Commissions</h4>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed mt-1">
                      Direct mobile checkout linked to Yalidine cash-on-delivery tracking. You keep 100% of every order with zero platform fees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-medium text-white">Single Point of Accountability</h4>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed mt-1">
                      Every database schema, animation curve, and ad funnel is engineered and verified by Hichem Djouadi directly. No middlemen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs font-mono text-emerald-400">
              Result: Faster customer orders, retained margins, and predictable revenue.
            </div>
          </div>

        </div>
      </section>

      {/* 3. THREE ARCHITECTURAL PILLARS (CONSOLIDATED & AUTHORITATIVE) */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04]">
              Three architectural standards. <br />
              Zero compromise.
            </h2>
          </div>
          <p className="text-lg text-neutral-600 font-light max-w-md leading-relaxed">
            Every platform we build adheres to three core engineering rules that ensure your business stays fast and commercially dominant.
          </p>
        </div>

        {/* Tier 1: Asymmetric Split (7 cols / 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Pillar 01: Speed is Revenue */}
          <div className="lg:col-span-7 rounded-[2.5rem] bg-neutral-50 border border-black/10 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 text-xs font-mono text-neutral-800 font-semibold">
                  <span>PILLAR 01 · EDGE INFRASTRUCTURE</span>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight mb-4">
                Speed is revenue, not decoration.
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed mb-8 max-w-xl">
                Every additional second of load time cuts mobile conversion rates by 10%. We never use generic page builders or heavy WordPress templates. We author clean Next.js code compiled for the edge so your site loads before your buyer thinks about leaving.
              </p>
            </div>

            {/* Visual Specimen: Speed Telemetry */}
            <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-sm font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-black/5">
                <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LOCAL NETWORK BENCHMARK</span>
                </div>
                <span className="text-emerald-700 font-semibold">0.72s VERIFIED</span>
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-neutral-50 p-2.5 rounded-xl border border-black/5">
                  <div className="text-[10px] text-neutral-400 uppercase">Core Web Vitals</div>
                  <div className="font-semibold text-neutral-900 mt-0.5">100 / 100 Score</div>
                </div>
                <div className="bg-neutral-50 p-2.5 rounded-xl border border-black/5">
                  <div className="text-[10px] text-neutral-400 uppercase">Mobile Network</div>
                  <div className="font-semibold text-neutral-900 mt-0.5">Algerian 4G Edge</div>
                </div>
                <div className="bg-neutral-50 p-2.5 rounded-xl border border-black/5">
                  <div className="text-[10px] text-neutral-400 uppercase">Asset Bloat</div>
                  <div className="font-semibold text-emerald-700 mt-0.5">0 KB Unused Code</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 02: Eliminate Middleman Tax */}
          <div className="lg:col-span-5 rounded-[2.5rem] bg-neutral-950 text-white border border-white/10 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono text-neutral-300 font-semibold">
                  <span>PILLAR 02 · DIRECT PIPELINE</span>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-4">
                Eliminate the middleman tax.
              </h3>

              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8">
                Third-party delivery apps take 20% to 25% from every single sale. We route customer orders straight into your WhatsApp kitchen or order desk, complete with customer details and Yalidine delivery options.
              </p>
            </div>

            {/* Visual Specimen: Dispatch Ticket */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs space-y-2.5">
              <div className="flex items-center justify-between text-neutral-400 pb-2 border-b border-white/10">
                <span>Direct WhatsApp Route</span>
                <span className="text-emerald-400 font-semibold">0% Commission Cut</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300">
                <span>Notification Latency</span>
                <span className="text-white font-medium">&lt; 3 Seconds</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300">
                <span>Fulfillment Method</span>
                <span className="text-white font-medium">Yalidine COD Sync</span>
              </div>
            </div>
          </div>

        </div>

        {/* Tier 2: Pillar 03 (Full-Width 12 cols) */}
        <div className="rounded-[2.5rem] bg-neutral-900 text-white border border-white/10 p-8 sm:p-12 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 font-semibold mb-6">
                <span>PILLAR 03 · PRODUCTION BACKEND</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.08] mb-4">
                Architecture that endures.
              </h3>
              <p className="text-base text-neutral-300 font-light leading-relaxed mb-6">
                No third-party plugins that break when WordPress updates. We build custom frontends backed by Supabase PostgreSQL databases with strict row-level security, instant queries, and automatic data retention.
              </p>
              <div className="flex items-center gap-6 text-xs font-mono text-neutral-400">
                <span>Postgres · Auth</span>
                <span>Row-Level Security</span>
                <span>Automated Webhooks</span>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-neutral-400 mb-1">DATA INTEGRITY</div>
                <div className="text-lg font-medium text-white">Zero Data Loss</div>
                <div className="text-[11px] text-neutral-400 mt-2">Every inquiry and order saved directly in secure cloud databases.</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-neutral-400 mb-1">OPERATIONAL UPTIME</div>
                <div className="text-lg font-medium text-white">99.9% Reliable</div>
                <div className="text-[11px] text-neutral-400 mt-2">Serverless edge functions that scale automatically without maintenance downtime.</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 4. LETTER FROM THE BUILDER (FOUNDER EDITORIAL & ACCOUNTABILITY) */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-black/10 shadow-lg bg-neutral-100">
              <Image 
                src="/founder-real.jpg" 
                alt="Hichem Djouadi - Founder & Technical Lead at Fleevy" 
                fill 
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover grayscale contrast-125"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md text-white border border-white/10 font-mono text-xs">
                <div className="font-semibold text-white">Hichem Djouadi</div>
                <div className="text-neutral-400 text-[11px] mt-0.5">Founder & Lead Software Engineer</div>
              </div>
            </div>
          </div>

          {/* Letter Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04] mb-8">
              Letter from the builder.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
              <p>
                "I started Fleevy because I got tired of seeing ambitious local businesses get burned by web agencies. They would pay thousands of dinars for a pretty WordPress theme that took five seconds to load, broke three months later, and never captured a single paying client."
              </p>
              <p>
                "At Fleevy, you never deal with account managers or junior project coordinators playing telephone. When you hire us, you work directly with me. I design the architecture, write the code, and inspect every deployment before it goes live."
              </p>
              <p className="text-black font-normal italic border-l-2 border-black pl-4">
                "Our philosophy is simple: If your digital platform does not help you capture qualified leads, close orders, or protect your margins, it has no reason to exist. That is the standard behind every deployment we build."
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="text-3xl font-serif italic text-black font-medium">
                  H. Djouadi
                </div>
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block mt-1">
                  Direct Engineering Lead · Fleevy
                </span>
              </div>

              <a
                href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-xs font-mono uppercase tracking-wider font-semibold shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Direct WhatsApp Contact</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 5. THE FINAL ACTION (OUTRO CTA) */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10">
        <div className="bg-neutral-950 border border-white/10 rounded-[3rem] p-10 sm:p-16 md:p-24 text-center text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-8 leading-[0.96] text-white">
              Ready to stop losing <br className="hidden md:block" />
              customers to slow websites?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Message us on WhatsApp or book a 15-minute call. We will review your current website, identify where you are losing buyers, and give you an exact quote within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnetic intensity={0.2}>
                <a
                  href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base sm:text-lg transition-all shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Message on WhatsApp</span>
                </a>
              </Magnetic>

              <Magnetic intensity={0.2}>
                <TransitionLink
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black font-semibold text-base sm:text-lg hover:bg-neutral-100 transition-all group"
                >
                  <span>Book a 15-Minute Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                </TransitionLink>
              </Magnetic>
            </div>

            {/* 3-Point Reassurance Strip */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-12 text-xs font-mono tracking-wider text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Zero-obligation audit
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Direct talk with the builder
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Fixed quote in 24 hours
              </span>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
