"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import DeviceFrame from "@/components/ui/DeviceFrame";
import TransitionLink from "@/components/TransitionLink";

interface ShowcaseProject {
  id: "mopizza" | "almadina" | "adrena";
  tabLabel: string;
  shortLabel: string;
  client: string;
  category: string;
  url: string;
  liveUrl: string;
  isExternal: boolean;
  statusBadge: string;
  statusDotColor?: string;
  ctaText: string;
  ctaTextDesktop: string;
  image?: string;
  benefits: {
    direction: "up" | "down";
    label: string;
  }[];
  renderCanvas?: () => React.ReactNode;
}

const PROJECTS: ShowcaseProject[] = [
  {
    id: "mopizza",
    tabLabel: "Mo Pizza",
    shortLabel: "Mo Pizza",
    client: "Mo Pizza Restaurants",
    category: "Mobile Commerce & Bot Intake",
    url: "mopizza.app",
    liveUrl: "https://mopizzarestaurants.netlify.app/",
    isExternal: true,
    statusBadge: "Live Deployment",
    statusDotColor: "bg-emerald-400",
    ctaText: "Visit Live Deployment",
    ctaTextDesktop: "Visit Live Deployment (Mo Pizza Direct Ordering)",
    image: "/mopizza-mobile.png",
    benefits: [
      { direction: "up", label: "Direct Margin Retained (0% Commission)" },
      { direction: "up", label: "Sub-800ms Mobile Checkout Velocity" }
    ]
  },
  {
    id: "almadina",
    tabLabel: "Almadina Bookstore",
    shortLabel: "Almadina",
    client: "Almadina Publishing",
    category: "Headless Catalog Architecture",
    url: "almadinabookstore.com",
    liveUrl: "https://almadinabookstore.com/",
    isExternal: true,
    statusBadge: "Live Deployment",
    statusDotColor: "bg-emerald-400",
    ctaText: "Visit Live Deployment",
    ctaTextDesktop: "Visit Live Deployment (Almadina Bookstore)",
    image: "/almadina-mobile.png",
    benefits: [
      { direction: "up", label: "Search & Discovery Speed" },
      { direction: "down", label: "Mobile Catalog Drop-off" }
    ]
  },
  {
    id: "adrena",
    tabLabel: "Adréna Club",
    shortLabel: "Adréna Club",
    client: "Elite Athletics & Private Club Network",
    category: "High-Ticket Membership & Athlete Intake",
    url: "adrenaclub.vip",
    liveUrl: "/contact?subject=Private+Preview+-+Adrena+Club",
    isExternal: false,
    statusBadge: "Private Preview · In Staging",
    statusDotColor: "bg-amber-400",
    ctaText: "Request Staging Access",
    ctaTextDesktop: "Request Staging Access (Adréna Club)",
    benefits: [
      { direction: "up", label: "VIP Client Screening & Qualification" },
      { direction: "down", label: "Staff Time Wasted on Unscreened Leads" }
    ],
    renderCanvas: () => (
      <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between text-white bg-[#08080c] select-none font-sans overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        
        {/* Top Header inside Phone */}
        <div className="relative z-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400/90 uppercase block font-semibold">
                Private Staging Preview
              </span>
              <h4 className="text-base sm:text-lg font-bold tracking-tight text-white mt-0.5">
                ADRÉNA CLUB
              </h4>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            </div>
          </div>
          
          <p className="text-[11px] text-white/60 font-light mt-2.5 leading-snug">
            High-ticket VIP athletic suites &amp; private coaching membership intake.
          </p>
        </div>

        {/* Interactive Intake Gateway Card */}
        <div className="relative z-10 my-auto py-2 flex flex-col gap-2.5">
          <div className="rounded-xl p-3 bg-white/[0.03] border border-white/10 flex flex-col gap-2">
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
              Membership Division
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="p-2 rounded-lg bg-white/10 border border-white/20 text-center">
                <span className="text-[10px] font-medium text-white block">Executive Pass</span>
                <span className="text-[9px] font-mono text-white/60">Tier 01 · VIP</span>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-center opacity-60">
                <span className="text-[10px] font-medium text-white block">Recovery Lab</span>
                <span className="text-[9px] font-mono text-white/40">Tier 02 · Limited</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-2.5 bg-white/[0.02] border border-white/5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-white/60">Qualification Filter</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> WhatsApp Bot Active
            </span>
          </div>

          <div className="rounded-xl p-2.5 bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-200/90 leading-tight">
            ⚡ Staging Verification: 84% unscreened inquiries filtered before calendar sync.
          </div>
        </div>

        {/* Action Button inside Phone */}
        <div className="relative z-10 pt-2 border-t border-white/10">
          <div className="w-full py-2.5 px-3 rounded-xl bg-white text-black font-semibold text-xs flex items-center justify-center gap-1.5 shadow-lg">
            <span>VIP Intake Gateway</span>
            <span className="text-black/60 font-mono text-[10px]">→</span>
          </div>
          <span className="text-[9px] font-mono text-white/40 text-center block mt-1.5">
            Deployment Architecture Verified · Staging Mode
          </span>
        </div>
      </div>
    )
  }
];

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const stageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-2deg", "2deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const current = PROJECTS[activeTab];

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex flex-col items-center justify-center py-2 sm:py-4 select-none"
    >
      {/* 1. Project Selector Segmented Control (Responsive 3-col on mobile, full pill on desktop) */}
      <div className="relative z-30 mb-6 sm:mb-10 w-full max-w-[360px] sm:max-w-xl grid grid-cols-3 p-1 sm:p-1.5 bg-[#f4f4f5] rounded-xl sm:rounded-full border border-black/10 gap-1 text-center">
        {PROJECTS.map((proj, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={proj.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg sm:rounded-full text-[11px] sm:text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? "bg-black text-white shadow-sm font-semibold"
                  : "text-neutral-700 hover:text-black hover:bg-black/[0.04]"
              }`}
            >
              <span className="sm:hidden">{proj.shortLabel}</span>
              <span className="hidden sm:inline">{proj.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* 2. The Clean Photorealistic Hardware Stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full max-w-[900px] flex flex-col items-center justify-center px-2 sm:px-4"
      >
        <div
          className="relative z-20 group w-full flex justify-center"
          data-cursor="Explore"
        >
          <DeviceFrame
            url={current.url}
            statusBadge={current.statusBadge}
            statusDotColor={current.statusDotColor}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                {current.renderCanvas ? (
                  current.renderCanvas()
                ) : (
                  <Image
                    src={current.image!}
                    alt={`${current.client} mobile interface`}
                    fill
                    sizes="(max-width: 640px) 340px, (max-width: 768px) 360px, 420px"
                    priority
                    unoptimized
                    className="object-cover object-top"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </DeviceFrame>
        </div>

        {/* Directional Benefits Ledger below device */}
        <div className="mt-5 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-xl text-center px-2">
          {current.benefits.map((b, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#f7f7f8] border border-black/10 text-[11px] sm:text-xs font-mono text-neutral-800 font-medium"
            >
              <span className="font-bold text-black">{b.direction === "up" ? "↑" : "↓"}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3. Direct Live Platform Link or Staging Access Link */}
      <div className="relative z-30 mt-5 sm:mt-6 flex items-center justify-center w-full px-4">
        {current.isExternal ? (
          <a
            href={current.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 font-medium text-xs sm:text-sm shadow-sm transition-all group"
            data-cursor="Visit"
          >
            <span className="sm:hidden">{current.ctaText}</span>
            <span className="hidden sm:inline">{current.ctaTextDesktop}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <TransitionLink
            href={current.liveUrl}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 font-medium text-xs sm:text-sm shadow-sm transition-all group"
            data-cursor="Preview"
          >
            <span className="sm:hidden">{current.ctaText}</span>
            <span className="hidden sm:inline">{current.ctaTextDesktop}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </TransitionLink>
        )}
      </div>
    </div>
  );
}
