"use client";

import { motion } from "framer-motion";
import { Zap, Database, Globe, ArrowUpRight } from "lucide-react";

export default function Capabilities() {
  return (
    <section className="w-full py-32 px-6 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The Arsenal.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl font-light">
            We don't build generic websites. We engineer specialized B2B infrastructure divided into two distinct capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="group relative bg-brand-card border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-white/20 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
              <ArrowUpRight className="w-8 h-8 text-white/40" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Digital Flagships</h3>
            <p className="text-white/60 mb-8 max-w-sm">
              Blazing-fast Next.js web applications engineered for the Cuberto-tier luxury aesthetic. 100/100 Lighthouse performance, absolute zero latency.
            </p>
            <ul className="space-y-3 text-sm font-medium text-white/80">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/30" /> Custom Motion Design (Framer)</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/30" /> Sub-1s Load Times</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/30" /> Advanced SEO Architecture</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-brand-card border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-white/20 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
              <ArrowUpRight className="w-8 h-8 text-white/40" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Lead Engines</h3>
            <p className="text-white/60 mb-8 max-w-sm">
              Custom Supabase and Webhook integrations that route leads instantly. Stop copying and pasting emails; start selling while you sleep.
            </p>
            <ul className="space-y-3 text-sm font-medium text-white/80">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" /> Instant WhatsApp/Telegram Routing</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" /> Secure PostgreSQL Databases</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" /> Zero Manual Data Entry</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
