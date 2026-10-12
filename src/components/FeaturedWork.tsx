"use client";

import Image from "next/image";
import { ArrowUpRight, Dumbbell, BookOpen } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProjectItem {
  title: string;
  niche: string;
  deployment: string;
  summary: string;
  statusBadge: string;
  benefits: {
    direction: "up" | "down";
    label: string;
  }[];
  image?: string;
  link: string;
  hasImage: boolean;
  renderVisual?: () => React.ReactNode;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Mo Pizza Direct Ordering",
    niche: "Restaurant & Hospitality · Mobile Commerce",
    deployment: "Direct Mobile Commerce & Bot Intake",
    summary: "Mobile ordering system that sends orders straight to the kitchen on WhatsApp.",
    statusBadge: "Live Production Platform",
    benefits: [
      { direction: "up", label: "Direct Margin Retained (0% Commission)" },
      { direction: "up", label: "Sub-800ms Mobile Checkout Velocity" }
    ],
    image: "/project-mopizza2.png",
    link: "https://mopizzarestaurants.netlify.app/",
    hasImage: true,
  },
  {
    title: "Almadina Bookstore",
    niche: "Headless Commerce · Scholarly Publishing",
    deployment: "Headless Catalog & Delivery Pipeline",
    summary: "Fast online bookstore with instant search and 58-Wilayas cash-on-delivery checkout.",
    statusBadge: "Live Production Platform",
    benefits: [
      { direction: "up", label: "Search & Discovery Speed" },
      { direction: "down", label: "Mobile Catalog Drop-off" }
    ],
    image: "/project-almadina.png",
    link: "https://almadinabookstore.com/",
    hasImage: true,
  },
  {
    title: "Adréna Club",
    niche: "Elite Athletics · Private Club Memberships",
    deployment: "High-Ticket Qualification Gateway",
    summary: "Private application portal that qualifies members and alerts sales staff instantly.",
    statusBadge: "Private Preview · Launching Soon",
    benefits: [
      { direction: "up", label: "VIP Qualification" },
      { direction: "down", label: "Staff Time Wasted on Unscreened Inquiries" }
    ],
    link: "/contact?subject=Private+Preview+-+Adrena+Club",
    hasImage: false,
    renderVisual: () => (
      <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative text-white font-mono select-none">
        <div className="flex items-center justify-between gap-2 text-xs text-white/75">
          <span className="flex items-center gap-2 text-white font-medium">
            <Dumbbell className="w-4 h-4 text-white/70 shrink-0" /> Adréna Private Gateway
          </span>
          <span>Private Preview</span>
        </div>
        <div className="my-auto space-y-3 py-4">
          <div className="flex items-center justify-between gap-4 text-xs">
            <span className="text-white/60">Target Tier</span>
            <span className="text-white font-medium text-right">Executive Membership Pass</span>
          </div>
          <div className="flex items-center justify-between gap-4 text-xs text-white">
            <span className="text-white/70">Intake Pipeline</span>
            <span className="font-semibold text-white text-right">Automated Bot Qualification</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 text-xs text-white/60">
          <span>Staging Verification Complete</span>
          <span className="text-white font-medium">Launching Soon</span>
        </div>
      </div>
    )
  },
  {
    title: "Tawheed & Sunnah Bookstore",
    niche: "Publishing & Distribution · Digital Commerce",
    deployment: "Zero-Latency Mobile Commerce Pipeline",
    summary: "Mobile book store connected directly to courier dispatch and live inventory.",
    statusBadge: "Private Preview · Launching Soon",
    benefits: [
      { direction: "up", label: "Automated Dispatch" },
      { direction: "down", label: "Manual Order Friction" }
    ],
    link: "/contact?subject=Private+Preview+-+Tawheed+Bookstore",
    hasImage: false,
    renderVisual: () => (
      <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative text-white font-mono select-none">
        <div className="flex items-center justify-between gap-2 text-xs text-white/75">
          <span className="flex items-center gap-2 text-white font-medium">
            <BookOpen className="w-4 h-4 text-white/70 shrink-0" /> Distribution Pipeline
          </span>
          <span>Private Preview</span>
        </div>
        <div className="my-auto space-y-3 py-4">
          <div className="flex items-center justify-between gap-4 text-xs">
            <span className="text-white/60">Catalog Index</span>
            <span className="text-white font-medium text-right">Scholarly Editions &amp; Manuscripts</span>
          </div>
          <div className="flex items-center justify-between gap-4 text-xs text-white">
            <span className="text-white/70">Order Pipeline</span>
            <span className="font-semibold text-white text-right">Direct Courier Verification</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 text-xs text-white/60">
          <span>Fulfillment Hooks Active</span>
          <span className="text-white font-medium">Launching Soon</span>
        </div>
      </div>
    )
  }
];

function ShowcaseItem({ project }: { project: ProjectItem }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-2deg", "2deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      href={project.link}
      target={project.link.startsWith("http") ? "_blank" : undefined}
      rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={`${project.title} - ${project.niche}`}
      data-cursor={project.link.startsWith("http") ? "Visit" : "Preview"}
      className="group flex flex-col justify-between pb-10 border-b border-black/15 transition-colors duration-300"
    >
      <div>
        {/* Visual Stage (Single container, zero nested cards) */}
        <div className="relative w-full aspect-[16/10] rounded-[28px] overflow-hidden mb-7 bg-[#08080c]">
          {project.hasImage && project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          ) : (
            project.renderVisual?.()
          )}
        </div>

        {/* Status & Niche Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-mono text-neutral-600">
          <span>{project.niche}</span>
          <span className="px-3 py-1 rounded-full bg-[#f4f4f5] text-black font-medium">
            {project.statusBadge}
          </span>
        </div>

        {/* Header Details */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-2xl md:text-3xl font-medium text-black tracking-tight group-hover:text-neutral-700 transition-colors">
            {project.title}
          </h3>
          <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-all shrink-0">
            <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
          </div>
        </div>

        <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-6 max-w-[65ch]">
          {project.summary}
        </p>
      </div>

      {/* Directional Benefits Ledger */}
      <div className="pt-4 border-t border-black/10 flex flex-wrap gap-2 text-xs font-mono">
        {project.benefits.map((b, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4f4f5] text-neutral-800 font-medium"
          >
            <span className="font-bold text-black">{b.direction === "up" ? "↑" : "↓"}</span>
            <span>{b.label}</span>
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function FeaturedWork() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      {PROJECTS.map((project, i) => (
        <ShowcaseItem key={i} project={project} />
      ))}
    </div>
  );
}
