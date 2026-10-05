"use client";

import Architectures from "@/components/Architectures";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Megaphone, Target, BarChart3, LineChart, Globe2, MousePointerClick, Zap, Users, Play, Sparkles, TrendingUp } from "lucide-react";
import { useRef } from "react";

function ServicePillar({ title, description, icon: Icon, color, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 p-8 rounded-[2rem] bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-shadow group"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-2 ${color} bg-opacity-10 text-current`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-2xl font-bold tracking-tight text-black">{title}</h3>
      <p className="text-black/60 font-medium leading-relaxed">{description}</p>
    </motion.div>
  );
}

function MarketingAdsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6 md:px-12 bg-[#020202] text-white rounded-[3rem] mx-auto max-w-[1400px] my-24 overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent opacity-60 z-0" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 w-fit flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest">
              <Megaphone className="w-4 h-4" /> Paid Acquisition
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.95]">
              Ads that <br/> actually <span className="text-indigo-400 font-serif italic pr-2">convert.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-medium max-w-lg leading-relaxed mt-4">
              We don't optimize for vanity metrics. We deploy aggressive, data-driven ad campaigns across Meta, TikTok, and Google that directly feed your sales infrastructure.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <Target className="w-6 h-6 text-indigo-400" />
                <span className="font-semibold">Hyper-Targeting</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <BarChart3 className="w-6 h-6 text-indigo-400" />
                <span className="font-semibold">CPA Optimization</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <MousePointerClick className="w-6 h-6 text-indigo-400" />
                <span className="font-semibold">Conversion Tracking</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <Play className="w-6 h-6 text-indigo-400" />
                <span className="font-semibold">UGC Creatives</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center">
            {/* Floating Visual Elements */}
            <motion.div style={{ y: y1 }} className="absolute right-0 top-10 bg-[#111] border border-white/10 p-6 rounded-3xl shadow-2xl w-[280px] z-20 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-wider">
                  <Globe2 className="w-4 h-4 text-indigo-400" /> Facebook Ads
                </div>
                <span className="text-green-400 text-xs font-bold bg-green-400/10 px-2 py-1 rounded-full">ACTIVE</span>
              </div>
              <div className="text-3xl font-bold tracking-tight mb-1">2,450 <span className="text-sm text-white/50 font-normal">Leads</span></div>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" /> -12% Cost Per Lead
              </div>
            </motion.div>

            <motion.div style={{ y: y2 }} className="absolute left-0 bottom-20 bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-3xl shadow-[0_20px_50px_rgba(79,70,229,0.3)] w-[260px] z-30">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 p-2 rounded-xl"><LineChart className="w-5 h-5 text-white" /></div>
                <span className="text-white text-sm font-bold tracking-wider uppercase">ROAS</span>
              </div>
              <div className="text-6xl font-light text-white tracking-tighter mb-2">4.8x</div>
              <p className="text-white/80 font-medium text-sm">Return on Ad Spend this month.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function StrategySection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-16 items-center bg-[#f8f8f8] rounded-[3rem] p-8 md:p-16 border border-black/5 relative overflow-hidden group">
        
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-orange-400/20 blur-[100px] rounded-full group-hover:bg-orange-400/30 transition-colors duration-700" />

        <div className="w-full md:w-1/2 relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight text-black mb-6">
            Marketing Strategy & <br/> Brand Positioning
          </h2>
          <p className="text-lg text-black/60 font-medium leading-relaxed mb-8">
            Tactics without strategy is the noise before defeat. We don't just run ads; we architect your entire market positioning, offer creation, and funnels to ensure you dominate your niche.
          </p>
          <ul className="flex flex-col gap-4">
            {["High-Ticket Offer Creation", "Sales Funnel Architecture", "Competitor Market Analysis", "Brand Voice & Copywriting"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-black/80 font-semibold text-lg">
                <Sparkles className="w-5 h-5 text-orange-500" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/2 relative z-10">
          <div className="aspect-square bg-white rounded-3xl shadow-xl border border-black/5 p-8 flex flex-col justify-center gap-6">
            <div className="h-1/3 bg-orange-50 rounded-2xl flex items-center px-6 gap-4 border border-orange-100">
               <div className="w-10 h-10 rounded-full bg-orange-500 flex justify-center items-center text-white font-bold">1</div>
               <span className="text-xl font-bold">The Offer</span>
            </div>
            <div className="h-1/3 bg-black rounded-2xl flex items-center px-6 gap-4 shadow-lg scale-105 z-10">
               <div className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center text-white font-bold">2</div>
               <span className="text-xl font-bold text-white">The System</span>
            </div>
            <div className="h-1/3 bg-orange-50 rounded-2xl flex items-center px-6 gap-4 border border-orange-100">
               <div className="w-10 h-10 rounded-full bg-orange-500 flex justify-center items-center text-white font-bold">3</div>
               <span className="text-xl font-bold">The Traffic</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-[#fff] text-black min-h-screen">
      
      {/* GRAND HERO */}
      <section className="pt-56 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto text-left flex flex-col justify-center items-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="px-4 py-2 rounded-full border border-black/10 bg-black/5 font-bold text-xs uppercase tracking-[0.2em] mb-8">
          Our Capabilities
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[120px] font-semibold tracking-tighter leading-[0.9]"
        >
          We don't <span className="font-serif italic font-light">just</span> build. <br/>
          We scale.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-xl md:text-2xl text-black/60 font-medium max-w-[800px] leading-[1.4]"
        >
          A full-stack growth agency. From battle-tested backend architecture and automated workflows, to aggressive paid acquisition and elite market strategy.
        </motion.p>
      </section>

      {/* QUICK PILLARS OVERVIEW */}
      <section className="py-12 px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServicePillar 
          delay={0.2}
          color="text-emerald-500"
          icon={Zap}
          title="Digital Infrastructure" 
          description="Automated CRM pipelines, frictionless checkouts, and AI assistants that eliminate revenue bleed." 
        />
        <ServicePillar 
          delay={0.3}
          color="text-indigo-500"
          icon={Target}
          title="Paid Acquisition" 
          description="High-converting ad campaigns across Meta and Google, engineered purely for ROAS and low CPA." 
        />
        <ServicePillar 
          delay={0.4}
          color="text-orange-500"
          icon={Users}
          title="Growth Strategy" 
          description="High-ticket offer creation, brand positioning, and elite sales funnels that dominate your niche." 
        />
      </section>

      {/* THE 3 DEEP DIVES */}
      
      {/* 1. Infrastructure / Growth Engines (The component we built) */}
      <div className="mt-32">
        <div className="max-w-[1200px] mx-auto px-6 mb-12">
          <h2 className="text-5xl font-medium tracking-tight">1. Infrastructure.</h2>
        </div>
        <Architectures />
      </div>

      {/* 2. Paid Acquisition */}
      <div className="mt-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-medium tracking-tight">2. Paid Ads.</h2>
        </div>
        <MarketingAdsSection />
      </div>

      {/* 3. Strategy */}
      <div className="mt-12 mb-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-medium tracking-tight">3. Strategy.</h2>
        </div>
        <StrategySection />
      </div>

      <Footer />
    </main>
  );
}
