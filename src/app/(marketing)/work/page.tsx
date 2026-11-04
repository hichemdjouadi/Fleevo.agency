"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";
import { ArrowUpRight, ArrowRight, Lock } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { WorkPageProjectTranslation } from "@/lib/i18n/types";

interface TelemetryItem {
  label: string;
  val: string;
  note: string;
}

interface ProjectMeta {
  url: string;
  image?: string;
  mobileImage?: string;
  link: string;
  isLive: boolean;
  telemetry: TelemetryItem[];
}

const STATIC_PROJECT_METAS: ProjectMeta[] = [
  {
    url: "mopizzarestaurants.vercel.app",
    image: "/project-mopizza.png",
    mobileImage: "/mopizza-mobile.png",
    link: "https://mopizzarestaurants.vercel.app/",
    isLive: true,
    telemetry: [
      { label: "EDGE SPEED", val: "420ms TTFB", note: "Optimized on 4G LTE" },
      { label: "COMMISSION TOLL", val: "0% Retained", note: "Bypasses aggregators" },
      { label: "INTAKE PIPELINE", val: "< 15s Direct", note: "Call & WhatsApp triage" },
      { label: "INFRASTRUCTURE", val: "5 Locations", note: "Zero app download" },
    ],
  },
  {
    url: "almadinabookstore.com",
    image: "/project-almadina.png",
    mobileImage: "/almadina-mobile.png",
    link: "https://almadinabookstore.com/",
    isLive: true,
    telemetry: [
      { label: "CATALOG INDEX", val: "12,000+ SKUs", note: "Instant fuzzy search" },
      { label: "LOGISTICS SYNC", val: "58 Wilayas", note: "Cash on delivery pipeline" },
      { label: "EDGE RENDER", val: "540ms TTFB", note: "Edge Next.js caching" },
      { label: "CONVERSION FLOW", val: "One-Click", note: "Zero checkout dropoff" },
    ],
  },
  {
    url: "adrenaclub.vercel.app",
    image: "/project-adrena.png",
    mobileImage: "/adrena-mobile.png",
    link: "https://adrenaclub.vercel.app/",
    isLive: true,
    telemetry: [
      { label: "ENROLLMENT FLOW", val: "From 3,000 DA", note: "Pre-qualified tier funnel" },
      { label: "FACILITY SCALE", val: "2 Floors", note: "Live schedule & coach roster" },
      { label: "FRONT-DESK LOAD", val: "-68% Calls", note: "Direct WhatsApp triage" },
      { label: "DEVICE SPEED", val: "380ms on 4G", note: "Smooth Framer animations" },
    ],
  },
  {
    url: "tawheed-publishing.com",
    image: "/project-tawheed.png",
    mobileImage: "/tawheed-mobile.png",
    link: "/contact?subject=Case+Study+-+Tawheed+Bookstore",
    isLive: true,
    telemetry: [
      { label: "DISTRIBUTION", val: "69 Wilayas", note: "Automated postal sync" },
      { label: "INTAKE CHANNELS", val: "Dual Hub", note: "2 Storefronts + Delivery" },
      { label: "ORDER VERIFY", val: "< 30s Bot", note: "Instant WhatsApp confirmation" },
      { label: "UPTIME / COLD START", val: "0ms Stale", note: "Postgres + Supabase Edge" },
    ],
  },
  {
    url: "cockpit.fleevy.net",
    image: "/project-dashboard.png",
    mobileImage: undefined,
    link: "/contact?subject=Case+Study+-+Command+Center+CRM",
    isLive: true,
    telemetry: [
      { label: "CORE ARCHITECTURE", val: "Supabase + Trello", note: "Bi-directional event bus" },
      { label: "LEAD DECAY ALERT", val: "7-Day Cold Guard", note: "Visual SLA warning" },
      { label: "SYNC LATENCY", val: "0ms Event-Driven", note: "Instant webhook dispatch" },
      { label: "SAAS EXPENSE", val: "$0/mo Toll", note: "100% Sovereign ownership" },
    ],
  },
];

export default function Work() {
  const { t, isRTL, locale } = useTranslation();
  const [filter, setFilter] = useState<"all" | "commerce" | "webapp">("all");

  const projectsWithMeta = t.work.projects.map((proj, idx) => ({
    ...proj,
    meta: STATIC_PROJECT_METAS[idx] || {
      url: "fleevy.net",
      link: "/contact",
      isLive: true,
      image: "/project-mopizza.png",
      telemetry: [],
    },
  }));

  const filteredProjects = projectsWithMeta.filter((proj) => {
    if (filter === "commerce") return proj.filterCategory === "commerce";
    if (filter === "webapp") return proj.filterCategory === "webapp";
    return true;
  });

  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden selection:bg-black selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col justify-center px-6 md:px-12 pt-36 pb-20 z-10 bg-white text-black text-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1400px] mx-auto w-full relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-medium text-neutral-800 mb-6">
            <span>{t.work.hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[88px] font-medium tracking-[-0.035em] leading-[0.92] mb-8 text-black text-balance">
            {t.work.hero.headline}
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 max-w-xl font-light leading-relaxed tracking-tight mb-12 text-balance">
            {t.work.hero.subhead}
          </p>

          {/* Filter Pills */}
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
              {t.work.filters.all}
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
              {t.work.filters.commerce}
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
              {t.work.filters.webapp}
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. PROJECTS SHOWCASE */}
      <section className="relative z-20 pt-16 sm:pt-24 pb-24 sm:pb-36 bg-[#050505] text-white border-t border-black/10">
        <div className="flex flex-col gap-16 sm:gap-28 md:gap-40 px-6 md:px-12 max-w-[1400px] mx-auto">
          {filteredProjects.map((project, i) => (
            <ProjectShowcase key={project.title} project={project} index={i} locale={locale} />
          ))}
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-36 md:py-48 px-6 text-center relative overflow-hidden border-t border-white/10 bg-black text-white">
        <div className="relative z-10 max-w-[840px] mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] text-white mb-6 leading-[0.96] text-balance">
            {t.work.bottomCta.headline}
          </h2>
          <p className="text-lg md:text-xl text-white/75 mb-12 max-w-xl font-light leading-relaxed text-balance">
            {t.work.bottomCta.subhead}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-30 w-full sm:w-auto">
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4.5 rounded-full bg-white text-black text-base sm:text-lg font-semibold hover:bg-neutral-200 transition-colors shadow-2xl"
              >
                <span>{t.work.bottomCta.ctaBtn}</span>
                <ArrowRight className="w-5 h-5 shrink-0 rtl:rotate-180" />
              </TransitionLink>
            </Magnetic>
            <Magnetic intensity={0.2}>
              <a
                href="mailto:contact@fleevy.net"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4.5 rounded-full border border-white/20 hover:border-white text-white text-base sm:text-lg font-medium transition-colors"
              >
                contact@fleevy.net
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProjectShowcase({
  project,
  index,
  locale
}: {
  project: WorkPageProjectTranslation & { meta: ProjectMeta };
  index: number;
  locale: string;
}) {
  const isExternal = project.meta.link.startsWith("http");

  return (
    <motion.article
      initial={{ opacity: 0.2, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col pt-8 sm:pt-12 border-t border-white/15 first:border-t-0 first:pt-0 text-start"
    >
      {/* Header bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 sm:gap-6 pb-6 sm:pb-8">
        <div>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-2.5 sm:mb-3 text-balance">
            {project.title}
          </h2>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs rtl:font-sans ltr:font-mono text-white/65">
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
              href={project.meta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs sm:text-sm font-semibold"
              data-cursor="Visit"
            >
              <span>{locale === "fr" ? "Voir la Plateforme en Ligne" : locale === "ar" ? "معاينة المنصة الحية" : "Visit Live Platform"}</span>
              <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
            </a>
          ) : (
            <TransitionLink
              href={project.meta.link}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/25 hover:border-white text-white transition-colors text-xs sm:text-sm font-medium"
              data-cursor="Preview"
            >
              <span>{locale === "fr" ? "Demander un Accès Privé" : locale === "ar" ? "طلب معاينة خاصة" : "Request Private Preview"}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </TransitionLink>
          )}
        </div>
      </div>

      {/* Multi-Surface Visual Stage */}
      <div className="relative w-full rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#0a0a0f] border border-white/10 mb-6 sm:mb-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
        {/* Desktop Browser Shell Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#111116] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-5 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] font-mono text-white/70 max-w-[260px] sm:max-w-md truncate">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span dir="ltr" className="truncate">{project.meta.url}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">LIVE 200 OK</span>
          </div>
        </div>

        {/* Desktop Screen Canvas & Mobile Overlap Container */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#0c0c10] overflow-hidden group">
          {project.meta.image && (
            <a
              href={project.meta.link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="block relative w-full h-full"
              data-cursor="Visit"
            >
              <Image
                src={project.meta.image}
                alt={project.title}
                fill
                sizes="(max-width: 1400px) 100vw, 1400px"
                priority={index < 2}
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                unoptimized
              />
            </a>
          )}

          {/* Overlapping Mobile Device Canvas (when mobileImage is present) */}
          {project.meta.mobileImage && (
            <div className="hidden md:block absolute -bottom-6 end-8 z-20 pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] transition-transform duration-500 ease-out group-hover:translate-y-[-8px]">
              <div className="w-[190px] lg:w-[220px] aspect-[9/19] rounded-[30px] overflow-hidden bg-black border-[3px] border-neutral-700 shadow-2xl relative">
                {/* Mobile Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full z-30" />
                <div className="relative w-full h-full pt-4">
                  <Image
                    src={project.meta.mobileImage}
                    alt={`${project.title} Mobile Viewport`}
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Telemetry HUD Grid (4 Columns) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
        {project.meta.telemetry?.map((tItem, tIdx) => (
          <div
            key={tIdx}
            className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono tracking-wider text-white/50 uppercase">
                {tItem.label}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-semibold tracking-tight text-white mb-0.5">
                {tItem.val}
              </div>
              <div className="text-[11px] text-white/50 font-light truncate">
                {tItem.note}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Directional Benefits Ledger */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-white/15 border-y border-white/15">
        {project.benefits.map((b, idx) => (
          <div key={idx} className="py-8 md:px-8 first:md:ps-0 last:md:pe-0 flex flex-col justify-between gap-6 text-start">
            <div>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-2 text-balance">
                <span className="font-mono font-bold text-white me-2">{b.direction === "up" ? "↑" : "↓"}</span>
                {b.headline}
              </h3>

              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed max-w-[60ch] text-pretty">
                {b.detail}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs rtl:font-sans ltr:font-mono text-white/60">
              {b.type}
            </div>
          </div>
        ))}
      </div>

      {/* Contextual Architecture Inquiry Hook */}
      <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start">
        <div className="text-xs font-mono text-white/50">
          <span>SPECIFICATION // {project.systemType}</span>
        </div>
        <TransitionLink
          href={`/contact?subject=${encodeURIComponent(`Case Study: ${project.title}`)}&service=${encodeURIComponent(project.filterCategory === "commerce" ? "E-Commerce Store" : "Custom CRM / Web App")}`}
          className="inline-flex items-center gap-2 text-xs font-mono text-white/80 hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors group"
        >
          <span>{locale === "fr" ? "Développer une plateforme similaire pour votre entreprise" : locale === "ar" ? "بناء منصة اكتساب مماثلة لمشروعك التجاري" : "Build a similar acquisition platform for your business"}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
        </TransitionLink>
      </div>
    </motion.article>
  );
}
