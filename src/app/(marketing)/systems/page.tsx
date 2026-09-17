"use client";

import { motion } from "framer-motion";
import { Server, Database, Zap, Shield, Globe, Workflow, Activity, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

export default function SystemsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCurve } }
  };

  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-24 selection:bg-white/20 overflow-hidden">
      
      {/* Background Technical Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10 px-6 md:px-16">
        
        {/* Cinematic Hero */}
        <div className="flex flex-col items-start mb-32 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-white/70">Systems Status: Online</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter leading-[0.9] text-white mb-8"
          >
            The Engine <br/> Under the Hood.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-white/50 font-light max-w-3xl leading-relaxed"
          >
            We don’t build websites. We deploy bespoke digital infrastructure engineered for absolute speed, military-grade security, and autonomous conversion.
          </motion.p>
        </div>

        {/* The Bento Grid Architecture */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32"
        >
          
          {/* Card 1: The Edge Network (Large) */}
          <motion.div variants={itemVariants} className="md:col-span-8 bg-[#050505] rounded-3xl border border-white/10 p-10 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-12 border border-white/10 relative z-10">
              <Globe className="w-6 h-6 text-white" />
            </div>
            
            <div className="mt-auto relative z-10">
              <h3 className="text-3xl font-medium tracking-tight mb-4">The Edge Network</h3>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
                <strong className="text-white font-medium">0.8s Global Latency.</strong> Your platform is deployed across 100+ global edge servers. It loads instantly everywhere, preventing client drop-off and maximizing your ad-spend ROI before competitors even finish loading.
              </p>
            </div>
            
            {/* Decorative Tech Graphic */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />
          </motion.div>

          {/* Card 2: Security (Small) */}
          <motion.div variants={itemVariants} className="md:col-span-4 bg-[#050505] rounded-3xl border border-white/10 p-10 flex flex-col relative overflow-hidden group">
            <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-12 border border-white/10">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-medium tracking-tight mb-3">Enterprise Security</h3>
              <p className="text-white/50 text-base leading-relaxed">
                Bank-level encryption. Your client data, payments, and internal logic are locked behind impregnable cryptographic walls.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Autonomous Core (Medium) */}
          <motion.div variants={itemVariants} className="md:col-span-5 bg-[#050505] rounded-3xl border border-white/10 p-10 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
            <div className="bg-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-12 border border-blue-500/20">
              <Database className="w-6 h-6 text-blue-400" />
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-2xl font-medium tracking-tight mb-3">The Autonomous Core</h3>
              <p className="text-white/50 text-base leading-relaxed">
                <strong className="text-blue-400 font-medium">Real-Time Command Center.</strong> Every lead, appointment, and transaction is captured instantly in an enterprise-grade PostgreSQL vault. No manual data entry, ever.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Integration Vault (Large) */}
          <motion.div variants={itemVariants} className="md:col-span-7 bg-[#050505] rounded-3xl border border-white/10 p-10 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_70%)] pointer-events-none" />
            
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div className="bg-purple-500/10 w-14 h-14 rounded-2xl flex items-center justify-center border border-purple-500/20">
                <Workflow className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex gap-2">
                {/* Simulated Integration Nodes */}
                {['Stripe', 'Telegram', 'WhatsApp'].map((node, i) => (
                  <div key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white/50">
                    {node}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto relative z-10">
              <h3 className="text-3xl font-medium tracking-tight mb-4">The Integration Vault</h3>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl">
                <strong className="text-purple-400 font-medium">Zero Friction.</strong> We wire your custom systems directly to the tools you already use. Get notified of a massive closed deal instantly on your phone, while the system handles the onboarding.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Data Flow Visualization (Impeccable Scale) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="w-full border-t border-b border-white/10 py-24 relative flex flex-col items-center justify-center"
        >
          <span className="text-sm font-mono uppercase tracking-widest text-white/40 mb-16 text-center block">
            System Logic Architecture
          </span>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-4xl">
            {/* Node 1 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <Globe className="w-8 h-8 text-white/80" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white/60">User Action</span>
            </div>
            
            {/* Connecting Line */}
            <div className="h-10 md:h-px w-px md:w-24 bg-white/20 relative overflow-hidden">
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full md:w-1/2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent hidden md:block"
              />
            </div>

            {/* Node 2 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-emerald-500/30 flex items-center justify-center relative shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                <Database className="w-10 h-10 text-emerald-400" />
                <div className="absolute inset-0 rounded-full border border-emerald-400/50 animate-ping opacity-20" />
              </div>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Edge Processing</span>
            </div>

            {/* Connecting Line */}
            <div className="h-10 md:h-px w-px md:w-24 bg-white/20 relative overflow-hidden">
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                className="absolute inset-0 w-full h-full md:w-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent hidden md:block"
              />
            </div>

            {/* Node 3 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <Zap className="w-8 h-8 text-white/80" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white/60">Automation</span>
            </div>
          </div>
        </motion.div>

        {/* Next Page CTA */}
        <div className="mt-32 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            Don't trust the specs.<br/> Trust the results.
          </h2>
          <Magnetic>
            <Link 
              href="/work"
              className="px-8 py-4 rounded-full bg-white text-black text-lg font-bold tracking-wide hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              See Our Work <ArrowRight className="w-5 h-5" />
            </Link>
          </Magnetic>
        </div>

      </div>
    </main>
  );
}
