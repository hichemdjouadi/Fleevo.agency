"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";
import { ArrowUpRight, ArrowRight, Dumbbell } from "lucide-react";

interface DirectionalBenefit {
  direction: "up" | "down";
  type: "Commercial Result" | "Problem Solved";
  headline: string;
  detail: string;
}

interface Project {
  title: string;
  category: string;
  filterCategory: "commerce" | "webapp";
  client: string;
  image?: string;
  link: string;
  systemType: string;
  isLive: boolean;
  statusBadge: string;
  benefits: DirectionalBenefit[];
  renderVisual?: () => React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    title: "Mo Pizza Direct Ordering",
    category: "Direct Commerce & Multilingual Intake Architecture",
    filterCategory: "commerce",
    client: "Mo Pizza Restaurants (Morad Oudia)",
    image: "/project-mopizza.png",
    link: "https://mopizzarestaurants.vercel.app/",
    systemType: "Direct Intake & Mobile Commerce Engine",
    isLive: true,
    statusBadge: "Live Production Platform",
    benefits: [
      {
        direction: "up",
        type: "Commercial Result",
        headline: "0% Commission Direct Margin Retained",
        detail: "Bypasses 15–30% food aggregator fees with direct WhatsApp and phone dispatch straight to branch kitchens."
      },
      {
        direction: "up",
        type: "Problem Solved",
        headline: "Instant Multilingual Ordering Without App Friction",
        detail: "Interactive 6-item order tray supporting English, Arabic, and French across 5 locations with zero app downloads."
      }
    ],
  },
  {
    title: "Almadina Bookstore",
    category: "Headless E-Commerce & Distribution Infrastructure",
    filterCategory: "commerce",
    client: "Almadina Publishing",
    image: "/project-almadina.png",
    link: "https://almadinabookstore.com/",
    systemType: "Headless Catalog & Inventory Engine",
    isLive: true,
    statusBadge: "Live Production Platform",
    benefits: [
      {
        direction: "up",
        type: "Commercial Result",
        headline: "Search & Discovery Speed",
        detail: "Fast catalog search across thousands of titles."
      },
      {
        direction: "down",
        type: "Problem Solved",
        headline: "Mobile Catalog Drop-off",
        detail: "Fast 58-Wilayas cash on delivery mobile checkout."
      }
    ],
  },
  {
    title: "Adréna Club",
    category: "High-Ticket Membership & Athlete Intake Architecture",
    filterCategory: "webapp",
    client: "Adréna Club (Bab Ezzouar)",
    image: "/project-adrena.png",
    link: "https://adrenaclub.vercel.app/",
    systemType: "2-Floor Athletic Facility & WhatsApp Intake",
    isLive: true,
    statusBadge: "Private Preview · Staging Deployment",
    benefits: [
      {
        direction: "up",
        type: "Commercial Result",
        headline: "Direct WhatsApp Membership Enrollment",
        detail: "Qualified membership signups direct to WhatsApp with pre-selected tiers starting from 3,000 DA/month."
      },
      {
        direction: "down",
        type: "Problem Solved",
        headline: "Front-Desk Inquiry Overload",
        detail: "Live floor schedules and private soundproof women's hours answer common questions before reaching staff."
      }
    ],
  },
  {
    title: "Tawheed & Sunnah Bookstore",
    category: "Scholarly Publishing & Nationwide Distribution Pipeline",
    filterCategory: "commerce",
    client: "Tawheed & Sunnah Publishing Network",
    image: "/project-tawheed.png",
    link: "/contact?subject=Case+Study+-+Tawheed+Bookstore",
    systemType: "Zero-Latency Mobile Commerce Pipeline",
    isLive: true,
    statusBadge: "Live Production Deployment",
    benefits: [
      {
        direction: "up",
        type: "Commercial Result",
        headline: "Nationwide 69-Wilaya Delivery Sync",
        detail: "Real-time courier dispatch and dual branch pickup pipeline."
      },
      {
        direction: "down",
        type: "Problem Solved",
        headline: "Manual Intake Friction Eliminated",
        detail: "Automated warehouse routing and instant WhatsApp dual verification."
      }
    ]
  }
];

export default function Work() {
  const [filter, setFilter] = useState<"all" | "commerce" | "webapp" | "preview">("all");

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "commerce") return proj.filterCategory === "commerce";
    if (filter === "webapp") return proj.filterCategory === "webapp";
    if (filter === "preview") return !proj.isLive || proj.statusBadge.includes("Preview") || proj.statusBadge.includes("Staging");
    return true;
  });

  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden selection:bg-black selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col justify-center px-6 md:px-12 pt-36 pb-20 z-10 bg-white text-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1400px] mx-auto w-full relative z-10"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[88px] font-medium tracking-[-0.035em] leading-[0.92] mb-8 text-black text-balance">
            Selected <span className="font-serif italic font-light">Deployments.</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 max-w-xl font-light leading-relaxed tracking-tight mb-12 text-balance">
            Live platforms and private systems built to turn visitors into buyers.
          </p>

          {/* Filter Pills — Silky horizontal scroll track on mobile, wrapped pills on desktop */}
          <div className="flex items-center gap-2 pt-6 border-t border-black/10 overflow-x-auto no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap" role="group" aria-label="Filter projects">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono transition-colors ${
                filter === "all"
                  ? "bg-black text-white font-semibold"
                  : "bg-[#f4f4f5] text-neutral-700 hover:text-black"
              }`}
            >
              All Deployments
            </button>
            <button
              type="button"
              onClick={() => setFilter("commerce")}
              className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono transition-colors ${
                filter === "commerce"
                  ? "bg-black text-white font-semibold"
                  : "bg-[#f4f4f5] text-neutral-700 hover:text-black"
              }`}
            >
              Digital Commerce
            </button>
            <button
              type="button"
              onClick={() => setFilter("webapp")}
              className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono transition-colors ${
                filter === "webapp"
                  ? "bg-black text-white font-semibold"
                  : "bg-[#f4f4f5] text-neutral-700 hover:text-black"
              }`}
            >
              Web Applications
            </button>
            <button
              type="button"
              onClick={() => setFilter("preview")}
              className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono transition-colors ${
                filter === "preview"
                  ? "bg-black text-white font-semibold"
                  : "bg-[#f4f4f5] text-neutral-700 hover:text-black"
              }`}
            >
              Private Previews
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. PROJECTS SHOWCASE (CINEMATIC DARK THEATER) */}
      <section className="relative z-20 pt-16 sm:pt-24 pb-24 sm:pb-36 bg-[#050505] text-white border-t border-black/10">
        <div className="flex flex-col gap-16 sm:gap-28 md:gap-40 px-6 md:px-12 max-w-[1400px] mx-auto">
          {filteredProjects.map((project, i) => (
            <ProjectShowcase key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-36 md:py-48 px-6 text-center relative overflow-hidden border-t border-white/10 bg-black text-white">
        <div className="relative z-10 max-w-[840px] mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] text-white mb-6 leading-[0.96] text-balance">
            Ready to build an acquisition engine that scales?
          </h2>
          <p className="text-lg md:text-xl text-white/75 mb-12 max-w-xl font-light leading-relaxed text-balance">
            Book a 15-minute call to review your setup and plan your build.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-30 w-full sm:w-auto">
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4.5 rounded-full bg-white text-black text-base sm:text-lg font-semibold hover:bg-neutral-200 transition-colors shadow-2xl"
              >
                <span>Book a 15-Minute Strategy Call</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </TransitionLink>
            </Magnetic>
            <Magnetic intensity={0.2}>
              <a
                href="mailto:contact@fleevo.net"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4.5 rounded-full border border-white/20 hover:border-white text-white text-base sm:text-lg font-medium transition-colors"
              >
                contact@fleevo.net
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const isExternal = project.link.startsWith("http");

  return (
    <motion.article
      initial={{ opacity: 0.2, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col pt-8 sm:pt-12 border-t border-white/15 first:border-t-0 first:pt-0"
    >
      {/* Header bar — h2 leads with generous top breathing room, tight binding to meta below */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 sm:gap-6 pb-6 sm:pb-8">
        <div>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-2.5 sm:mb-3 text-balance">
            {project.title}
          </h2>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-white/65">
            <span>0{index + 1} · {project.systemType}</span>
            <span>·</span>
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-white font-medium">
              {project.statusBadge}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {isExternal ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs sm:text-sm font-semibold"
              data-cursor="Visit"
            >
              <span>Visit Live Platform</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <TransitionLink
              href={project.link}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/25 hover:border-white text-white transition-colors text-xs sm:text-sm font-medium"
              data-cursor="Preview"
            >
              <span>Request Private Preview</span>
              <ArrowRight className="w-4 h-4" />
            </TransitionLink>
          )}
        </div>
      </div>

      {/* Visual Canvas (Single container, no image hover transform, no duplicate hover circle) */}
      <div className={`relative w-full overflow-hidden rounded-2xl sm:rounded-[28px] md:rounded-[36px] bg-[#111116] mb-6 sm:mb-10 ${project.image ? "aspect-[16/10] md:aspect-[16/9]" : "min-h-[260px] sm:min-h-[300px] md:aspect-[21/9] flex"}`}>
        {project.image ? (
          <a
            href={project.link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="block relative w-full h-full overflow-hidden"
            data-cursor="Visit"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority={index < 2}
              className="object-cover object-top"
              unoptimized
            />
          </a>
        ) : (
          project.renderVisual?.()
        )}
      </div>

      {/* Directional Benefits Ledger — h3 leads directly at the top of each column */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15 border-y border-white/15">
        {project.benefits.map((b, idx) => (
          <div key={idx} className="py-8 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-2 text-balance">
                <span className="font-mono font-bold text-white mr-2">{b.direction === "up" ? "↑" : "↓"}</span>
                {b.headline}
              </h3>

              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed max-w-[60ch] text-pretty">
                {b.detail}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/60">
              {b.type}
            </div>
          </div>
        ))}
      </div>

      {/* Contextual Architecture Inquiry Hook */}
      <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-xs font-mono text-white/50">
          <span>SPECIFICATION // {project.systemType}</span>
        </div>
        <TransitionLink
          href={`/contact?subject=${encodeURIComponent(`Case Study: ${project.title}`)}&service=${encodeURIComponent(project.filterCategory === "commerce" ? "E-Commerce Store" : "Web App / Client Portal")}`}
          className="inline-flex items-center gap-2 text-xs font-mono text-white/80 hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors group"
        >
          <span>Build a similar acquisition platform for your business</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </TransitionLink>
      </div>
    </motion.article>
  );
}
