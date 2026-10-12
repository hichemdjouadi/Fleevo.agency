"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import TransitionLink from "./TransitionLink";

export default function Testimonials() {
  const clients = [
    {
      name: "Al-Madina Bookstore",
      category: "Headless E-Commerce · Scholarly Publishing",
      icon: Zap,
      accent: "from-amber-500/10 to-orange-500/5",
      badgeColor: "text-amber-800 bg-amber-50 border-amber-200",
      system: "Headless Storefront & Sub-Second Search",
      summary: "Engineered a headless commerce engine with sub-800ms catalog search across their Islamic publications catalog, zero-friction mobile checkout, and automated warehouse routing.",
      shift: {
        before: "Slow WordPress search with dropped mobile shoppers",
        after: "Sub-800ms edge search with +42% mobile checkout completion"
      },
      tag: "Live Production Engine"
    },
    {
      name: "Tawhid & Sunnah Bookstore",
      category: "Publishing & Distribution · Digital Commerce",
      icon: ShieldCheck,
      accent: "from-blue-500/10 to-indigo-500/5",
      badgeColor: "text-blue-800 bg-blue-50 border-blue-200",
      system: "Zero-Latency Mobile Commerce Pipeline",
      summary: "Modernized the digital ordering pipeline for authentic Islamic literature with mobile-first checkout, automated inventory sync, and direct fulfillment dispatch.",
      shift: {
        before: "Manual order confirmation and stock friction",
        after: "Instant customer checkout with automated dispatch"
      },
      tag: "Live Production Engine"
    },
    {
      name: "Adréna Club",
      category: "Elite Athletics · Private Club Memberships",
      icon: CheckCircle2,
      accent: "from-emerald-500/10 to-teal-500/5",
      badgeColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
      system: "High-Ticket Membership Qualification Funnel",
      summary: "Architected a multi-step intake gateway that pre-qualifies athlete commitment, verifies phone numbers, and instantly routes VIP trial inquiries straight to the sales director's WhatsApp.",
      shift: {
        before: "Unscreened DM inquiries wasting hours of staff time",
        after: "100% pre-qualified trials routed within 45 seconds"
      },
      tag: "Live Production Engine"
    }
  ];

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-black/10 bg-[#fafafa] text-black">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 block mb-3 font-semibold">
            Selected Client Deployments
          </span>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-black leading-[0.92]">
            We've worked with.
          </h2>
        </div>
        <p className="text-lg md:text-xl text-neutral-600 font-light max-w-md leading-relaxed">
          Autonomous frontends, custom catalog search engines, and high-ticket qualification pipelines engineered for commercial scale.
        </p>
      </div>

      {/* 3-Column Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {clients.map((client, i) => {
          const Icon = client.icon;
          return (
            <motion.div 
              key={client.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[32px] p-8 md:p-10 flex flex-col justify-between border border-black/10 hover:border-black/25 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] group relative overflow-hidden"
            >
              {/* Subtle top ambient glow */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${client.accent} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className="relative z-10">
                {/* Top Pill & Live Indicator */}
                <div className="flex items-center justify-between mb-8">
                  <span className={`text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border font-semibold flex items-center gap-1.5 ${client.badgeColor}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {client.tag}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Client Name & Niche */}
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-2 group-hover:translate-x-0.5 transition-transform">
                  {client.name}
                </h3>
                <span className="text-xs font-mono text-neutral-500 block mb-6 uppercase tracking-wider">
                  {client.category}
                </span>

                {/* System Deployed */}
                <div className="bg-neutral-50 border border-black/5 rounded-2xl p-4 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                    System Architecture
                  </span>
                  <p className="text-sm font-medium text-neutral-900">
                    {client.system}
                  </p>
                </div>

                {/* Executive Summary */}
                <p className="text-sm md:text-base font-light leading-relaxed text-neutral-600 mb-8">
                  {client.summary}
                </p>
              </div>

              {/* Before vs After Metric Shift */}
              <div className="relative z-10 pt-6 border-t border-black/10 flex flex-col gap-2">
                <div className="flex items-start gap-2 text-xs text-neutral-500 font-light">
                  <span className="font-mono text-rose-500 font-semibold shrink-0">Before:</span>
                  <span>{client.shift.before}</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-medium text-neutral-900">
                  <span className="font-mono text-emerald-600 font-semibold shrink-0">Engine:</span>
                  <span>{client.shift.after}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Proof of Work Sub-banner */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-[28px] bg-white border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0">
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <div>
            <span className="text-sm font-semibold text-black block">
              Want to see detailed case study breakdowns?
            </span>
            <span className="text-xs text-neutral-500">
              Inspect our full portfolio, design systems, and backend pipeline architecture.
            </span>
          </div>
        </div>
        <TransitionLink 
          href="/work" 
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 transition-colors shrink-0"
        >
          View Case Studies
        </TransitionLink>
      </div>
    </section>
  );
}
