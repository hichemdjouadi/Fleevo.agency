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
      { direction: "up", label: "0% Commission Direct Orders" },
      { direction: "up", label: "Sub-800ms Mobile Velocity" }
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
      { direction: "up", label: "Instant Title & ISBN Search" },
      { direction: "down", label: "58-Wilayas Cart Drop-Off" }
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
      { direction: "up", label: "VIP Screening & Intake" },
      { direction: "down", label: "Unscreened Leads on Calendars" }
    ],
    renderCanvas: () => (
      <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between text-white bg-[#070709] select-none font-sans relative overflow-hidden">
        {/* Subtle radial ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_65%)] pointer-events-none" />
        
        {/* Top Header inside Phone */}
        <div className="relative z-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 sm:pb-3.5">
            <div>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-white/50 uppercase block font-medium">
                Private Preview
              </span>
              <h4 className="text-sm sm:text-base font-bold tracking-tight text-white mt-0.5">
                ADRÉNA CLUB
              </h4>
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-medium">
              Staging
            </span>
          </div>
        </div>

        {/* Distilled Editorial Center Piece */}
        <div className="relative z-10 my-auto py-2 sm:py-3">
          <div className="text-lg sm:text-2xl font-serif italic font-light text-white tracking-tight leading-[1.12] mb-2 sm:mb-3 text-balance">
            Executive Membership &amp; Private Coaching.
          </div>
          <p className="text-[11px] sm:text-xs text-white/60 font-light leading-relaxed mb-4 sm:mb-5 text-pretty">
            Automated VIP intake and high-ticket athlete screening.
          </p>

          {/* Clean Editorial Ledger - Zero Nested Cards */}
          <div className="pt-3 sm:pt-4 border-t border-white/10 space-y-2 text-[10px] sm:text-xs font-mono">
            <div className="flex items-center justify-between">
              <span className="text-white/45">Admission</span>
              <span className="text-white font-medium">Private Screening</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/45">Qualification</span>
              <span className="text-white font-medium">WhatsApp Bot Filter</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/45">Architecture</span>
              <span className="text-white font-medium">Staging Verified</span>
            </div>
          </div>
        </div>

        {/* Action Button inside Phone */}
        <div className="relative z-10 pt-2.5 sm:pt-3 border-t border-white/10">
          <div className="w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-full bg-white text-black font-semibold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 shadow-sm">
            <span>Request Private Admission</span>
            <span className="text-black/60 font-mono text-xs">→</span>
          </div>
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

        {/* Directional Benefits Ledger below device with Delightful Motion */}
        <div className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-xl text-center px-2 min-h-[42px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            >
              {current.benefits.map((b, i) => (
                <motion.div
                  key={`${current.id}-${i}`}
                  initial={{ opacity: 0, scale: 0.94, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.28, 
                    delay: i * 0.07, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 hover:bg-white border border-black/10 hover:border-black/30 text-[11px] sm:text-xs font-mono text-neutral-800 hover:text-black transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)] duration-200 cursor-default"
                  data-cursor="Outcome"
                >
                  <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-black/5 group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-black shrink-0">
                    <span className={`inline-block transition-transform duration-200 ${
                      b.direction === "up" ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
                    }`}>
                      {b.direction === "up" ? "↑" : "↓"}
                    </span>
                  </span>
                  <span className="font-medium tracking-tight">{b.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
