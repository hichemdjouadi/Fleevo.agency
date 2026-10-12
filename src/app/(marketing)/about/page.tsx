"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import Footer from "@/components/Footer";
import Magnetic from "@/components/Magnetic";

export default function AboutPage() {
  const standards = [
    {
      num: "01",
      badge: "Custom Architecture",
      title: "Craft Over Templates",
      desc: "Every layout and conversion flow is built from scratch for your business model."
    },
    {
      num: "02",
      badge: "Mobile Velocity",
      title: "Performance as Luxury",
      desc: "Edge-compiled pages load in under 800ms on mobile 4G networks with zero lag."
    },
    {
      num: "03",
      badge: "Production Longevity",
      title: "Enduring Codebases",
      desc: "Built on strict TypeScript, Next.js, and PostgreSQL so nothing breaks during updates."
    }
  ];

  const stack = [
    {
      num: "01",
      name: "Next.js App Router",
      category: "Frontend & Edge Runtime",
      detail: "Fast server rendering for mobile speed."
    },
    {
      num: "02",
      name: "TypeScript",
      category: "Language & Type Safety",
      detail: "Strict type safety across every module."
    },
    {
      num: "03",
      name: "PostgreSQL & Supabase",
      category: "Database & Authentication",
      detail: "Secure cloud databases with live sync."
    },
    {
      num: "04",
      name: "Tailwind CSS",
      category: "Design System Tokens",
      detail: "Clean styling with zero CSS bloat."
    },
    {
      num: "05",
      name: "Framer Motion",
      category: "Kinetic Choreography",
      detail: "Smooth physics for responsive interface motion."
    },
    {
      num: "06",
      name: "Automated Bot Webhooks",
      category: "Intake & Logistics Sync",
      detail: "Instant WhatsApp or Telegram lead alerts."
    }
  ];

  return (
    <main className="bg-white text-black min-h-screen selection:bg-black selection:text-white">

      {/* 1. THE MANIFESTO HERO */}
      <section className="relative w-full pt-36 md:pt-44 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium tracking-[-0.035em] leading-[1.02] text-black mb-8">
            We exist because most agencies build{" "}
            <span className="font-serif italic font-light">ornaments without acquisition plumbing.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed mb-12">
            We replace slow brochure websites with fast acquisition platforms, automated bot intake, and targeted Meta ads.
          </p>

          {/* Credibility Hairline Ledger */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/15 border-y border-black/15">
            <div className="py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <div className="text-xs font-mono text-neutral-500">Speed Standard</div>
              <div className="text-xl font-medium text-black mt-1">Sub-800ms Edge Loading</div>
              <div className="text-xs text-neutral-600 mt-1">Engineered for mobile 4G networks</div>
            </div>
            <div className="py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <div className="text-xs font-mono text-neutral-500">Margin Protection</div>
              <div className="text-xl font-medium text-black mt-1">0% Third-Party Cut</div>
              <div className="text-xs text-neutral-600 mt-1">Direct customer ordering &amp; bot dispatch</div>
            </div>
            <div className="py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <div className="text-xs font-mono text-neutral-500">Asset Sovereignty</div>
              <div className="text-xl font-medium text-black mt-1">100% Codebase Ownership</div>
              <div className="text-xs text-neutral-600 mt-1">Zero proprietary platform lock-in</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. THREE ARCHITECTURAL STANDARDS */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04]">
              Three architectural standards.{" "}
              <span className="font-serif italic font-light">Zero compromise.</span>
            </h2>
          </div>
          <p className="text-lg text-neutral-600 font-light max-w-sm leading-relaxed">
            Non-negotiable standards that keep every build fast and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black/15 border-y border-black/15">
          {standards.map((std) => (
            <div
              key={std.num}
              className="py-10 lg:py-12 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between gap-8"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-xs font-mono font-bold text-neutral-500">
                    Standard {std.num}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#f4f4f5] text-neutral-800 font-medium">
                    {std.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-black tracking-tight mb-3">
                  {std.title}
                </h3>
                <p className="text-base text-neutral-600 font-light leading-relaxed">
                  {std.desc}
                </p>
              </div>
              <div className="pt-6 border-t border-black/10 text-xs font-mono text-neutral-500">
                Verified Production Requirement
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FULL ENGINEERING STACK */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#050505] text-white border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.04]">
                Production-grade <span className="font-serif italic font-light">stack.</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-white/75 font-light max-w-sm leading-relaxed">
              Modern technologies built for speed and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/15">
            {stack.map((item) => (
              <div
                key={item.num}
                className="p-8 sm:p-10 border-r border-b border-white/15 flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6 text-xs font-mono text-white/60">
                    <span>{item.num}</span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE CREATIVE & TECHNICAL LEADERSHIP */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-black/10 bg-[#f4f4f5]">
              <Image
                src="/founder-real.jpg"
                alt="Hichem Djouadi - Founder & Principal Systems Architect at Fleevy"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover grayscale contrast-125"
              />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#050505] text-white border border-white/15 font-mono text-xs">
                <div className="font-semibold text-white text-sm">Hichem Djouadi</div>
                <div className="text-white/75 text-xs mt-0.5">Founder &amp; Principal Systems Architect</div>
              </div>
            </div>
          </div>

          {/* Executive Statement Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04] mb-8">
              Direct engineering <span className="font-serif italic font-light">accountability.</span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-neutral-700 font-light leading-relaxed max-w-[58ch]">
              <p>
                Fleevy connects clean product design with automated sales systems. You work directly with principal engineering from day one, with no middlemen or account managers.
              </p>
              <blockquote className="text-black font-normal italic border-l border-black/30 pl-5 py-1">
                &ldquo;If a platform does not bring in customers or save your team hours, it is unfinished.&rdquo;
              </blockquote>
            </div>

            <div className="mt-10 pt-8 border-t border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="text-3xl font-serif italic text-black font-medium">
                  H. Djouadi
                </div>
                <span className="font-mono text-xs text-neutral-600 block mt-1">
                  Founder &amp; Principal Systems Architect · Fleevy
                </span>
              </div>

              <TransitionLink
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-xs font-mono font-semibold shrink-0"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </TransitionLink>
            </div>
          </div>

        </div>
      </section>

      {/* 5. OUTRO COLLABORATION GATEWAY */}
      <section className="py-28 md:py-40 px-6 md:px-12 bg-[#050505] text-white border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] mb-8 leading-[0.96] text-white">
            Let&apos;s engineer your next <br className="hidden md:block" />
            acquisition platform.
          </h2>
          <p className="text-lg sm:text-xl text-white/75 mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Book a 15-minute call or send your request. We reply within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black font-semibold text-base sm:text-lg hover:bg-neutral-200 transition-all group"
              >
                <span>Book a 15-Minute Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </TransitionLink>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <a
                href="mailto:contact@fleevo.net"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 hover:border-white text-white font-medium text-base sm:text-lg transition-all"
              >
                <span>contact@fleevo.net</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
