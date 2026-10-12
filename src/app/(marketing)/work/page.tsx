"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";
import { ArrowDownRight, ArrowUpRight, Lock, MessageCircle, ArrowRight } from "lucide-react";

interface ArchitecturalCapability {
  direction: "up" | "down";
  trend: string;
  metric: string;
  highlight: string;
  description: string;
}

interface Project {
  title: string;
  category: string;
  client: string;
  image: string;
  bg: string;
  link: string;
  systemType: string;
  isLocked?: boolean;
  stagingNote?: string;
  buildPhase?: string;
  capabilities: ArchitecturalCapability[];
}

const PROJECTS: Project[] = [
  {
    title: "MO PIZZA Web App",
    category: "Full-Stack Hospitality & Order Dispatch Architecture",
    client: "Restaurant Group",
    image: "/project-mopizza2.png",
    bg: "bg-[#050505]",
    link: "https://mopizzarestaurants.netlify.app/",
    systemType: "High-Volume Direct Intake System",
    isLocked: false,
    capabilities: [
      {
        direction: "up",
        trend: "COMMERCIAL RESULT",
        metric: "Average Order Value (AOV)",
        highlight: "Dynamic combo upgrades & checkout bumps",
        description: "Integrates automated meal builders, combo upgrades, and high-intent checkout bumps to expand total basket size on every purchase."
      },
      {
        direction: "down",
        trend: "PROBLEM SOLVED",
        metric: "Intake Latency & Dropped Orders",
        highlight: "Direct kitchen tablet dispatch & instant customer confirmation",
        description: "Eliminates busy phone lines and lost orders by routing customer selections directly into a live kitchen dashboard with sub-second confirmation."
      }
    ],
  },
  {
    title: "Al-Madina Bookstore",
    category: "High-Catalog E-Commerce & Inventory Infrastructure",
    client: "National Retail Platform",
    image: "/project-almadina.png",
    bg: "bg-[#050505]",
    link: "https://almadinabookstore.com/",
    systemType: "Frictionless Retail Engine",
    isLocked: false,
    capabilities: [
      {
        direction: "up",
        trend: "COMMERCIAL RESULT",
        metric: "Basket Size & Cross-Catalog Lift",
        highlight: "Sub-second catalog search & dynamic bundle recommendations",
        description: "Engineered with sub-second catalog search and dynamic post-cart bundles that increase items-per-order while maintaining zero checkout friction."
      },
      {
        direction: "down",
        trend: "PROBLEM SOLVED",
        metric: "Returned Orders & Ghost Checkouts",
        highlight: "Phone OTP verification & intent-verified checkout gating",
        description: "Incorporates phone validation and intent-verified checkouts to weed out fake entries and slash costly delivery refusals before dispatch."
      }
    ],
  },
  {
    title: "Adréna Club",
    category: "High-Ticket Membership & Athlete Intake Architecture",
    client: "Elite Athletics & Private Club Network",
    image: "/project-dashboard.png",
    bg: "bg-[#050505]",
    link: "/contact?subject=Staging+Access+Request+-+Adrena+Club",
    systemType: "Autonomous Intent & Intake Gate",
    isLocked: true,
    stagingNote: "High-ticket qualification gateway & athlete membership intake infrastructure currently undergoing client acceptance staging.",
    buildPhase: "Phase 3 // Secure Intake Terminal & Supabase Sync",
    capabilities: [
      {
        direction: "up",
        trend: "COMMERCIAL RESULT",
        metric: "Trial-to-Member Conversion",
        highlight: "Pre-qualification screen & sub-45s WhatsApp direct routing",
        description: "Multi-step qualification screens out non-buyers, verifies contact authenticity via OTP, and immediately routes VIP membership inquiries straight to WhatsApp within 45 seconds."
      },
      {
        direction: "down",
        trend: "PROBLEM SOLVED",
        metric: "Closer Latency & Manual Chasing",
        highlight: "Automated Supabase profile provisioning & instant director alerts",
        description: "Eliminates lost DM inquiries and manual spreadsheet logging by automatically creating verified profile records in Supabase and notifying the sales director instantly."
      }
    ],
  },
  {
    title: "Tawhid & Sunnah Bookstore",
    category: "Scholarly Publishing & High-Volume Distribution",
    client: "Publishing & Distribution Network",
    image: "/project-almadina.png",
    bg: "bg-[#050505]",
    link: "/contact?subject=Staging+Access+Request+-+Tawhid+and+Sunnah",
    systemType: "Zero-Latency Mobile Commerce Pipeline",
    isLocked: true,
    stagingNote: "Scholarly publishing & mobile commerce pipeline in private staging environment under active deployment.",
    buildPhase: "Phase 4 // Mobile Commerce & Inventory Sync",
    capabilities: [
      {
        direction: "up",
        trend: "COMMERCIAL RESULT",
        metric: "Checkout Speed & Mobile Conversion",
        highlight: "Sub-second catalog search & instant mobile-first cart flow",
        description: "Engineered with sub-second catalog search and direct mobile-first cart flow, minimizing drop-off and automating warehouse dispatch hooks on order placement."
      },
      {
        direction: "down",
        trend: "PROBLEM SOLVED",
        metric: "Inventory Sync Delays & Friction",
        highlight: "Real-time stock synchronization & automated SMS dispatch tracking",
        description: "Instant inventory synchronization prevents out-of-stock overselling and provides customer SMS tracking updates automatically."
      }
    ],
  }
];

export default function Work() {
  const containerRef = useRef(null);
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden selection:bg-black selection:text-white" ref={containerRef}>
      
      {/* Hero Section (White Editorial Canvas) */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-16 pt-32 pb-16 z-10 bg-white text-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,0,0,0.02),_transparent_50%)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1400px] mx-auto w-full relative z-10"
        >
          <div className="overflow-hidden mb-6 mt-12">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-neutral-500 block"
            >
              Real Client Platforms
            </motion.span>
          </div>
          
          <h1 className="text-[14vw] md:text-[10vw] font-semibold tracking-tighter leading-[0.85] mb-12 text-black">
            Selected <br/>
            <span className="font-serif italic font-light">Work.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-neutral-600 max-w-3xl font-light leading-relaxed tracking-tight">
            High-speed mobile storefronts and direct WhatsApp ordering platforms built for real businesses.
          </p>
        </motion.div>
      </section>

      {/* Projects Showcase (Cinematic Dark Theater) */}
      <section className="relative z-20 pt-24 pb-32 bg-[#050505] text-white border-t border-black/10">
        <div className="flex flex-col gap-32 md:gap-48 px-4 md:px-16 max-w-[1800px] mx-auto">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter text-white mb-6">
            Ready to build your next platform?
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-lg font-light leading-relaxed">
            Message us on WhatsApp or book a quick 15-minute call. We'll give you direct advice, realistic timelines, and a fixed quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-30">
            <Magnetic intensity={0.2}>
              <a 
                href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4.5 sm:py-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base sm:text-lg transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Message on WhatsApp</span>
              </a>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <TransitionLink 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4.5 sm:py-5 rounded-full bg-white text-black text-base sm:text-lg font-semibold hover:bg-neutral-200 transition-colors shadow-2xl"
              >
                Book a 15-Minute Call
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLocked = Boolean(project.isLocked);
  const upCap = project.capabilities.find((c) => c.direction === "up") || project.capabilities[0];
  const downCap = project.capabilities.find((c) => c.direction === "down") || project.capabilities[1];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-8 md:gap-12"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8 px-2 md:px-0">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/40">
              SYSTEM 0{index + 1} // {project.systemType}
            </span>
            {isLocked ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <Lock className="w-3 h-3 text-amber-400" />
                Under Construction · Staging Locked
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Production Engine
              </span>
            )}
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter">{project.title}</h2>
        </div>
        <div className="text-left md:text-right max-w-md">
          <p className="text-base md:text-lg text-white/60 leading-relaxed font-light">{project.category}</p>
        </div>
      </div>

      {/* Showcase Visual Canvas */}
      {isLocked ? (
        <div className="group relative w-full block overflow-hidden rounded-[32px] md:rounded-[48px] border border-amber-500/20 bg-[#07070a]">
          {/* Parallax / Screen Container */}
          <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#07070a] overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover md:object-contain object-top md:object-center opacity-25 contrast-125 saturate-50 blur-[2px] transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105" 
              unoptimized 
            />
            {/* Dark vignette & high-tech blueprint grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,5,8,0.7)_0%,rgba(5,5,8,0.95)_100%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
            
            {/* Center Locked Staging Console */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none z-10">
              <div className="relative max-w-xl w-full bg-[#0b0b0f]/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col items-center gap-4 transition-transform duration-500 group-hover:scale-[1.01]">
                {/* Subtle top amber highlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent" />

                {/* Padlock Emblem */}
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                  <Lock className="w-6 h-6 text-amber-300" />
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-amber-300 font-semibold">
                      STAGING ENVIRONMENT // UNDER CONSTRUCTION
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mt-1">
                    Website Under Construction
                  </h3>

                  <p className="text-xs sm:text-sm text-white/60 max-w-md leading-relaxed mt-1 font-light">
                    {project.stagingNote || "This platform is currently undergoing active private staging and verification under NDA. Public deployment is scheduled for Q4 2026."}
                  </p>
                </div>

                {/* Staging Pipeline Telemetry */}
                <div className="w-full pt-4 mt-1 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-white/50">
                  <span className="flex items-center gap-2 text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {project.buildPhase || "Build Active · Private Staging"}
                  </span>
                  <TransitionLink 
                    href={`/contact?subject=Staging+Access+Request+${encodeURIComponent(project.title)}`}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/15 text-[11px] font-mono tracking-wider transition-all duration-300"
                  >
                    Request Staging Access <ArrowUpRight className="w-3 h-3" />
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Hover Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[0.16,1,0.3,1] z-20 pointer-events-none">
            <div className="w-36 h-36 bg-[#0a0a0e]/95 border border-amber-500/40 rounded-full flex flex-col items-center justify-center text-amber-300 font-semibold tracking-wider uppercase text-xs shadow-2xl backdrop-blur-xl gap-1">
              <Lock className="w-5 h-5 text-amber-400" />
              <span>Locked</span>
              <span className="text-[9px] text-white/50 tracking-normal font-mono lowercase">staging</span>
            </div>
          </div>
        </div>
      ) : (
        <a href={project.link} target="_blank" rel="noreferrer" className="group relative w-full block overflow-hidden rounded-[32px] md:rounded-[48px] border border-white/10">
          {/* Parallax image container */}
          <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#0A0A0A] overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover md:object-contain object-top md:object-center opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1]" 
              unoptimized 
            />
          </div>
          
          {/* Floating View Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[0.16,1,0.3,1] z-20 pointer-events-none">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-black font-semibold tracking-wide uppercase text-sm shadow-2xl">
              Live Preview
            </div>
          </div>
        </a>
      )}

      {/* Business Results & Solution Breakdown */}
      <div className="relative rounded-[2rem] md:rounded-[2.5rem] bg-[#070709] border border-white/10 overflow-hidden shadow-2xl">
        {/* Top Telemetry Bar */}
        <div className="px-6 md:px-10 py-4 border-b border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/50">
              COMMERCIAL IMPACT & PROBLEM SOLVED
            </span>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-mono tracking-widest uppercase">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <ArrowUpRight className="w-3 h-3" />
              Commercial Result
            </span>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5 text-sky-400">
              <ArrowDownRight className="w-3 h-3" />
              Problem Solved
            </span>
          </div>
        </div>

        {/* Dual Impact Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Commercial Result */}
          <div className="p-8 md:p-10 flex flex-col justify-between relative group/bay overflow-hidden bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.06),transparent_70%)]">
            <div className="absolute inset-0 bg-emerald-500/[0.02] opacity-0 group-hover/bay:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium tracking-wider">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  COMMERCIAL RESULT
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400/50 hidden sm:inline">
                  Revenue Impact
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3 leading-snug">
                {upCap.metric}
              </h3>

              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed mb-8">
                {upCap.description}
              </p>
            </div>

            <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  KEY DELIVERABLE
                </span>
                <span className="text-xs sm:text-sm font-medium text-emerald-300">
                  {upCap.highlight}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0 text-emerald-400">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Problem Solved */}
          <div className="p-8 md:p-10 flex flex-col justify-between relative group/bay overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.06),transparent_70%)]">
            <div className="absolute inset-0 bg-sky-500/[0.02] opacity-0 group-hover/bay:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono font-medium tracking-wider">
                  <ArrowDownRight className="w-3.5 h-3.5" />
                  PROBLEM SOLVED
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-sky-400/50 hidden sm:inline">
                  Friction Removed
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3 leading-snug">
                {downCap.metric}
              </h3>

              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed mb-8">
                {downCap.description}
              </p>
            </div>

            <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  SOLUTION
                </span>
                <span className="text-xs sm:text-sm font-medium text-sky-300">
                  {downCap.highlight}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/25 flex items-center justify-center shrink-0 text-sky-400">
                <ArrowDownRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
