"use client";

import Architectures from "@/components/Architectures";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Megaphone, Target, BarChart3, LineChart, Globe2, MousePointerClick, Zap, Users, Play, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";

function ServicePillar({ title, description, icon: Icon, color, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
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
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6 md:px-12 bg-[#020202] text-white rounded-[3rem] mx-auto max-w-[1400px] my-24 overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent opacity-60 z-0" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 w-fit flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest">
              <Megaphone className="w-4 h-4" /> Paid Acquisition
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.95]">
              Traffic is <span className="text-indigo-400 font-serif italic pr-2">liability</span> <br/> without infrastructure.
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-medium max-w-lg leading-relaxed mt-4">
              We strip out vanity metrics. If a campaign doesn't lower your cost of acquisition or put a qualified meeting on your calendar, we kill it. We run Meta and Google traffic directly into automated sales pipelines.
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

            <motion.div style={{ y: y3 }} className="absolute right-10 bottom-10 bg-white/5 border border-white/10 p-5 rounded-3xl shadow-xl w-[220px] z-10 backdrop-blur-xl">
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center"><Target className="w-4 h-4 text-blue-400"/></div>
                 <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">Google Ads</span>
               </div>
               <div className="text-2xl font-bold tracking-tight text-white mb-1">12.4% <span className="text-xs text-white/40 font-normal">CTR</span></div>
               <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                 <div className="w-[85%] h-full bg-blue-400 rounded-full" />
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function StrategySection() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#020202] text-white rounded-[3rem] mx-auto max-w-[1400px] overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/30 via-transparent to-transparent opacity-60 z-0" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 w-fit flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Strategy
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.95]">
              Positioning & <br/> Offer Architecture.
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-medium max-w-lg leading-relaxed mt-4">
              Most ad campaigns fail because the underlying offer is a commodity. We rebuild your pricing model, guarantees, and sales argument before spending a single dollar on traffic.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {["High-Ticket Offer Design", "Frictionless Sales Funnels", "Competitor Neutralization", "Direct-Response Copywriting"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <Sparkles className="w-5 h-5 text-orange-400" />
                  <span className="font-semibold text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center">
            {/* Old Commodity Offer */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute left-0 top-10 bg-[#0a0a0a] border border-white/10 p-6 rounded-3xl shadow-xl w-[260px] z-10 grayscale opacity-60">
              <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest mb-3">Commodity Offer</p>
              <p className="text-white text-lg line-through font-medium leading-tight mb-6 text-white/50">"Facebook Ads Management"</p>
              <p className="text-white/50 font-bold text-xl">$500/mo</p>
            </motion.div>

            {/* Connecting visual element */}
            <motion.div initial={{ height: 0 }} whileInView={{ height: 80 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }} className="absolute left-[130px] top-[160px] w-[2px] bg-gradient-to-b from-white/10 to-orange-500/50 z-0" />

            {/* The Grand Slam Offer */}
            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, type: "spring", bounce: 0.5 }} className="absolute right-0 bottom-16 bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-3xl shadow-[0_20px_50px_rgba(249,115,22,0.3)] w-[320px] z-20">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full shadow-[0_0_20px_rgba(249,115,22,1)]" />
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 p-2 rounded-xl"><Sparkles className="w-5 h-5 text-white" /></div>
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">Grand Slam Offer</span>
              </div>
              <p className="text-white font-medium text-2xl leading-[1.1] mb-8">"Guaranteed Patient Acquisition System"</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/70 text-[10px] uppercase font-bold tracking-wider mb-2">Setup + Rev Share</p>
                  <p className="text-white font-bold text-4xl tracking-tight">$5,000</p>
                </div>
              </div>
            </motion.div>
            
            {/* Floating feature badge 1 */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="absolute -right-4 top-28 bg-[#0a0a0a] border border-white/10 px-5 py-4 rounded-2xl shadow-2xl z-30 flex items-center gap-3 backdrop-blur-xl hover:border-emerald-500/30 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-emerald-400"/> 
              <span className="text-white text-sm font-bold uppercase tracking-wider">Risk Reversal</span>
            </motion.div>

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
          className="text-6xl md:text-8xl lg:text-[110px] font-semibold tracking-tighter leading-[0.9]"
        >
          Growth is an <br/>
          <span className="font-serif italic font-light">engineering</span> problem.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-xl md:text-2xl text-black/60 font-medium max-w-[800px] leading-[1.4]"
        >
          We fix the systems that leak revenue. From pipelines that disqualify time-wasters, to paid acquisition built purely for cost-per-lead, to offers that separate you from competitors.
        </motion.p>
      </section>

      {/* QUICK PILLARS OVERVIEW */}
      <section className="py-12 px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServicePillar 
          delay={0.2}
          color="text-emerald-500"
          icon={Zap}
          title="Digital Infrastructure" 
          description="Pipelines that filter out time-wasters and route highly qualified buyers directly to your calendar." 
        />
        <ServicePillar 
          delay={0.3}
          color="text-indigo-500"
          icon={Target}
          title="Paid Traffic" 
          description="Meta and Google campaigns optimized for a single metric: driving down your Cost Per Acquisition." 
        />
        <ServicePillar 
          delay={0.4}
          color="text-orange-500"
          icon={Users}
          title="Offer Design" 
          description="Pricing models, guarantees, and sales arguments that force prospects to choose you over commodity alternatives." 
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
        <div className="max-w-[1200px] mx-auto px-6 mb-12">
          <h2 className="text-5xl font-medium tracking-tight">2. Paid Ads.</h2>
        </div>
        <MarketingAdsSection />
      </div>

      {/* 3. Strategy */}
      <div className="mt-12 mb-32">
        <div className="max-w-[1200px] mx-auto px-6 mb-12">
          <h2 className="text-5xl font-medium tracking-tight">3. Strategy.</h2>
        </div>
        <StrategySection />
      </div>

      {/* Cinematic Outro CTA */}
      <section className="relative w-full text-white py-48 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 scale-105">
            <source src="/video-erasio-1.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark gradient overlay so text is super readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[80px] font-medium tracking-tighter leading-[0.9] mb-6"
          >
            Stop leaking <br className="md:hidden" /> revenue.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/60 font-medium max-w-xl mx-auto mb-14"
          >
            Your current infrastructure is costing you clients. We build the systems that capture them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-[40px] z-50"
          >
            <Magnetic intensity={0.2}>
            <TransitionLink 
              href="/contact" 
              className="relative inline-flex items-center justify-center px-12 py-6 rounded-full bg-white text-black text-xl font-semibold overflow-hidden group transition-transform z-50 hover:scale-[1.02] active:scale-95"
            >
              <motion.span 
                className="relative z-10 flex items-center gap-2"
              >
                Audit Your Infrastructure
                <motion.span 
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  →
                </motion.span>
              </motion.span>
              
              {/* Premium clean sweep hover effect */}
              <div className="absolute inset-0 w-full h-full bg-neutral-200 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full z-0" />
            </TransitionLink>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
