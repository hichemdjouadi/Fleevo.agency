"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Clock, Users, Zap, Shield } from "lucide-react";

interface VectorItem {
  id: string;
  tag: string;
  icon: typeof Clock;
  direction: "down" | "up";
  trend: string;
  title: string;
  before: string;
  after: string;
}

const VECTORS: VectorItem[] = [
  {
    id: "01",
    tag: "METRIC 01",
    icon: Clock,
    direction: "down",
    trend: "Lead Response Speed",
    title: "14h Delay → Sub-60s Dispatch",
    before: "Prospects submit contact forms that sit in a shared inbox until the next business morning.",
    after: "Instant qualification routes high-value inquiries straight to sales reps via WhatsApp and SMS within 60 seconds."
  },
  {
    id: "02",
    tag: "METRIC 02",
    icon: Users,
    direction: "down",
    trend: "Pre-Screened Intake",
    title: "Dead Leads → Pre-Screened Intent",
    before: "Founders spend hours on the phone with prospects who are just browsing or have no clear project.",
    after: "Multi-step intake screens for project requirements and timeline before calendar booking."
  },
  {
    id: "03",
    tag: "METRIC 03",
    icon: Zap,
    direction: "up",
    trend: "Sub-Second Mobile Conversion",
    title: "Bloated Load → Instant Mobile Speed",
    before: "Heavy WordPress themes take 4+ seconds to load, losing mobile visitors before the page even renders.",
    after: "Clean custom Next.js builds load in under 1 second, keeping visitors focused on the offer."
  },
  {
    id: "04",
    tag: "METRIC 04",
    icon: Shield,
    direction: "up",
    trend: "Deal Margin & Authority",
    title: "Price Discounts → Premium Authority",
    before: "Generic templates look cheap and invite fee negotiation, pushing you into discount wars against competitors.",
    after: "A clean, custom digital presence protects your pricing and establishes immediate trust."
  }
];

export default function Metrics() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 border-t border-black/10 relative overflow-hidden max-w-[1400px] mx-auto bg-[#fafafa] text-black">
      
      {/* Header */}
      <div className="flex flex-col xl:flex-row justify-between items-start mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[0.95] text-black">
            Measurable shifts, <br className="hidden md:block" />
            not vanity statistics.
          </h2>
        </div>
        
        <div className="max-w-md pt-2 xl:pt-4">
          <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
            We don’t pitch arbitrary follower numbers or pageviews. We engineer systems that improve conversion velocity, response speed, and deal margins.
          </p>
        </div>
      </div>

      {/* 2x2 Metric Shift Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {VECTORS.map((vector, i) => {
          const IconComponent = vector.icon;
          const isDown = vector.direction === "down";
          return (
            <motion.div
              key={vector.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-black/10 hover:border-black/30 rounded-[32px] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.03)] group"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black">
                    <IconComponent className="w-5 h-5 text-neutral-800" />
                  </div>
                  <div>
                    <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block font-medium">
                      {vector.tag}
                    </span>
                    <span className="text-xs font-mono font-medium text-neutral-800">
                      {vector.trend}
                    </span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-black/5 group-hover:bg-black group-hover:text-white transition-colors">
                  {isDown ? (
                    <ArrowDownRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                {vector.title}
              </h3>

              {/* Before vs After comparison */}
              <div className="space-y-3 pt-6 border-t border-black/10 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono uppercase text-neutral-500 font-semibold shrink-0 mt-0.5 w-24">
                    BEFORE
                  </span>
                  <p className="text-neutral-500 font-light leading-relaxed">
                    {vector.before}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono uppercase text-black font-semibold shrink-0 mt-0.5 w-24">
                    WITH FLEEVY
                  </span>
                  <p className="text-neutral-900 font-normal leading-relaxed">
                    {vector.after}
                  </p>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
