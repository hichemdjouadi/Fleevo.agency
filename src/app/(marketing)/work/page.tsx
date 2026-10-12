"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";
import { ArrowUpRight, ArrowRight, Dumbbell, BookOpen } from "lucide-react";

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
    category: "Mobile Commerce & Automated Dispatch Architecture",
    filterCategory: "commerce",
    client: "Mo Pizza Restaurants",
    image: "/project-mopizza2.png",
    link: "https://mopizzarestaurants.netlify.app/",
    systemType: "Direct Intake & Mobile Commerce Engine",
    isLive: true,
    statusBadge: "Live Deployment",
    benefits: [
      {
        direction: "up",
        type: "Commercial Result",
        headline: "Direct Margin Retained (0% Commission)",
        detail: "Zero marketplace fees and direct WhatsApp tickets."
      },
      {
        direction: "up",
        type: "Problem Solved",
        headline: "Sub-800ms Mobile Checkout Velocity",
        detail: "Instant mobile ordering without any app downloads."
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
    statusBadge: "Live Deployment",
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
    client: "Elite Athletics & Private Club Network",
    link: "/contact?subject=Private+Preview+-+Adrena+Club",
    systemType: "Autonomous Intent & Intake Gateway",
    isLive: false,
    statusBadge: "Private Preview · Launching Soon",
    benefits: [
      {
        direction: "up",
        type: "Commercial Result",
        headline: "VIP Qualification",
        detail: "Screens every applicant before alerting sales staff."
      },
      {
        direction: "down",
        type: "Problem Solved",
        headline: "Staff Time Wasted on Unscreened Inquiries",
        detail: "Filters casual browsers out of coaching calendars."
      }
    ],
    renderVisual: () => (
      <div className="w-full h-full p-6 sm:p-12 flex flex-col justify-between gap-4 sm:gap-8 relative text-white font-mono select-none" data-cursor="Preview">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/75">
          <span className="flex items-center gap-2 text-white font-medium">
            <Dumbbell className="w-4 h-4 text-white/70 shrink-0" /> Adréna Intake Terminal
          </span>
          <span>Private Preview · Launching Soon</span>
        </div>
        <div className="my-auto max-w-2xl mx-auto w-full space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
            <span className="text-white/65">Membership Intake</span>
            <span className="text-white font-medium text-right">Executive VIP Athletic Pass</span>
          </div>
          <div className="flex items-center justify-between gap-4 text-xs sm:text-sm text-white">
            <span className="text-white/75">Automated Bot Qualification</span>
            <span className="font-semibold text-white text-right">Direct Director Alert</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 text-xs text-white/60">
          <span>Staging Verification Complete</span>
          <span className="text-white font-medium">Public Launch Scheduled</span>
        </div>
      </div>
    )
  },
  {
    title: "Tawheed & Sunnah Bookstore",
    category: "Scholarly Publishing & Nationwide Distribution Pipeline",
    filterCategory: "webapp",
    client: "Publishing & Distribution Network",
    link: "/contact?subject=Private+Preview+-+Tawheed+Bookstore",
    systemType: "Zero-Latency Mobile Commerce Pipeline",
    isLive: false,
    statusBadge: "Private Preview · Launching Soon",
    benefits: [
      {
        direction: "up",
        type: "Commercial Result",
        headline: "Automated Dispatch",
        detail: "Orders route directly to warehouse fulfillment teams."
      },
      {
        direction: "down",
        type: "Problem Solved",
        headline: "Manual Order Friction",
        detail: "Live stock sync with instant courier dispatch."
      }
    ],
    renderVisual: () => (
      <div className="w-full h-full p-6 sm:p-12 flex flex-col justify-between gap-4 sm:gap-8 relative text-white font-mono select-none" data-cursor="Preview">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/75">
          <span className="flex items-center gap-2 text-white font-medium">
            <BookOpen className="w-4 h-4 text-white/70 shrink-0" /> Scholarly Distribution Pipeline
          </span>
          <span>Private Preview · Launching Soon</span>
        </div>
        <div className="my-auto max-w-2xl mx-auto w-full space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
            <span className="text-white/65">Catalog Index</span>
            <span className="text-white font-medium text-right">Scholarly Editions &amp; Treatises</span>
          </div>
          <div className="flex items-center justify-between gap-4 text-xs sm:text-sm text-white">
            <span className="text-white/75">Order Verification Hook</span>
            <span className="font-semibold text-white text-right">Automated Warehouse Sync</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 text-xs text-white/60">
          <span>Courier Integration Synced</span>
          <span className="text-white font-medium">Public Launch Scheduled</span>
        </div>
      </div>
    )
  }
];

export default function Work() {
  const [filter, setFilter] = useState<"all" | "commerce" | "webapp" | "preview">("all");

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "commerce") return proj.filterCategory === "commerce";
    if (filter === "webapp") return proj.filterCategory === "webapp";
    if (filter === "preview") return !proj.isLive;
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
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[88px] font-medium tracking-[-0.035em] leading-[0.92] mb-8 text-black">
            Selected <span className="font-serif italic font-light">Deployments.</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed tracking-tight mb-12">
            Live platforms and private systems built to turn visitors into buyers.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-6 border-t border-black/10" role="group" aria-label="Filter projects">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-mono transition-colors ${
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
              className={`px-5 py-2.5 rounded-full text-xs font-mono transition-colors ${
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
              className={`px-5 py-2.5 rounded-full text-xs font-mono transition-colors ${
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
              className={`px-5 py-2.5 rounded-full text-xs font-mono transition-colors ${
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
      <section className="relative z-20 pt-24 pb-36 bg-[#050505] text-white border-t border-black/10">
        <div className="flex flex-col gap-28 md:gap-40 px-6 md:px-12 max-w-[1400px] mx-auto">
          {filteredProjects.map((project, i) => (
            <ProjectShowcase key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-36 md:py-48 px-6 text-center relative overflow-hidden border-t border-white/10 bg-black text-white">
        <div className="relative z-10 max-w-[840px] mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] text-white mb-6 leading-[0.96]">
            Ready to build an acquisition engine that scales?
          </h2>
          <p className="text-lg md:text-xl text-white/75 mb-12 max-w-xl font-light leading-relaxed">
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col pt-12 border-t border-white/15 first:border-t-0 first:pt-0"
    >
      {/* Header bar — h2 leads with generous top breathing room, tight binding to meta below */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-8">
        <div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-3">
            {project.title}
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/65">
            <span>0{index + 1} · {project.systemType}</span>
            <span>·</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white font-medium">
              {project.statusBadge}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {isExternal ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs sm:text-sm font-semibold"
              data-cursor="Visit"
            >
              <span>Visit Live Platform</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <TransitionLink
              href={project.link}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 hover:border-white text-white transition-colors text-xs sm:text-sm font-medium"
              data-cursor="Preview"
            >
              <span>Request Private Preview</span>
              <ArrowRight className="w-4 h-4" />
            </TransitionLink>
          )}
        </div>
      </div>

      {/* Visual Canvas (Single container, no image hover transform, no duplicate hover circle) */}
      <div className={`relative w-full overflow-hidden rounded-[28px] md:rounded-[36px] bg-[#111116] mb-10 ${project.image ? "aspect-[16/10] md:aspect-[16/9]" : "min-h-[240px] md:aspect-[21/9] flex"}`}>
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
              className="object-cover object-top"
              unoptimized
            />
          </a>
        ) : (
          project.renderVisual?.()
        )}
      </div>

      {/* Directional Benefits Ledger (Open Architectural Hairline Grid — Zero Nested Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15 border-y border-white/15">
        {project.benefits.map((b, idx) => (
          <div key={idx} className="py-8 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-white/75 mb-3">
                <span className="font-bold text-white text-sm">{b.direction === "up" ? "↑" : "↓"}</span>
                <span>{b.type}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-2">
                {b.headline}
              </h3>

              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed max-w-[60ch]">
                {b.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
