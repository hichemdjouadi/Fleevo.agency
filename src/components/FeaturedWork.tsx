"use client";

import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Dumbbell, BookOpen, Lock } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProjectItem {
  title: string;
  niche: string;
  deployment: string;
  summary: string;
  shift: {
    before: string;
    after: string;
  };
  tag: string;
  image?: string;
  link: string;
  hasImage: boolean;
  isLocked?: boolean;
  renderVisual?: () => React.ReactNode;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "MO PIZZA Direct Ordering",
    niche: "Restaurant & Hospitality · Mobile Commerce",
    deployment: "Direct WhatsApp Mobile Web App",
    summary: "Custom mobile-first ordering engine designed to bypass high delivery app commissions. Customers order on mobile and the full ticket lands directly in WhatsApp.",
    shift: {
      before: "Paying 20-25% delivery app commissions on every order",
      after: "100% direct customer orders with zero third-party cuts"
    },
    tag: "Live Production Platform",
    image: "/project-mopizza2.png",
    link: "https://mopizzarestaurants.netlify.app/",
    hasImage: true,
  },
  {
    title: "Al-Madina Bookstore",
    niche: "Headless E-Commerce · Scholarly Publishing",
    deployment: "Headless Commerce Platform",
    summary: "High-performance bookstore architecture featuring instant sub-second catalog search across their scholarly catalog and mobile checkout tailored for Algerian delivery.",
    shift: {
      before: "Slow WordPress search with dropped mobile shoppers",
      after: "Sub-second edge search with zero mobile drop-off"
    },
    tag: "Live Production Platform",
    image: "/project-almadina.png",
    link: "https://almadinabookstore.com/",
    hasImage: true,
  },
  {
    title: "Adréna Club",
    niche: "Elite Athletics · Private Club Memberships",
    deployment: "High-Ticket Qualification Gateway",
    summary: "Architected a multi-step intake gateway that pre-qualifies athlete commitment, verifies phone numbers, and instantly routes VIP trial inquiries straight to WhatsApp.",
    shift: {
      before: "Unscreened DM inquiries wasting hours of staff time",
      after: "100% pre-qualified trials routed within 45 seconds"
    },
    tag: "Upcoming Deployment",
    isLocked: false,
    link: "/contact?subject=Project+Inquiry+-+Adrena+Club",
    hasImage: false,
    renderVisual: () => (
      <div className="w-full h-full bg-[#0a0a0e] p-6 flex flex-col justify-between relative overflow-hidden text-white font-mono select-none">
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-xs">
          <span className="flex items-center gap-2 text-emerald-400 font-semibold tracking-wider">
            <Dumbbell className="w-4 h-4" /> Adréna Intake Terminal
          </span>
          <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-500/30">
            Verified OTP · Sub-45s
          </span>
        </div>
        <div className="relative z-10 my-auto space-y-2.5">
          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs">
            <span className="text-white/70">Membership Tier</span>
            <span className="text-white font-semibold">Annual VIP Executive</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
            <span>WhatsApp Lead Dispatched</span>
            <span className="font-bold">Sent to Director</span>
          </div>
        </div>
        <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
          <span>Commitment Gate: Active</span>
          <span className="text-emerald-400 font-medium">Zero Drop-off</span>
        </div>
      </div>
    )
  },
  {
    title: "Tawhid & Sunnah Bookstore",
    niche: "Publishing & Distribution · Digital Commerce",
    deployment: "Zero-Latency Mobile Commerce Pipeline",
    summary: "Digital ordering pipeline for authentic publications with mobile-first checkout, automated inventory sync, and direct fulfillment dispatch.",
    shift: {
      before: "Manual order confirmation and stock friction",
      after: "Instant customer checkout with automated dispatch"
    },
    tag: "Upcoming Deployment",
    isLocked: false,
    link: "/contact?subject=Project+Inquiry+-+Tawhid+and+Sunnah",
    hasImage: false,
    renderVisual: () => (
      <div className="w-full h-full bg-[#08080c] p-6 flex flex-col justify-between relative overflow-hidden text-white font-mono select-none">
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-xs">
          <span className="flex items-center gap-2 text-blue-400 font-semibold tracking-wider">
            <BookOpen className="w-4 h-4" /> Tawhid & Sunnah Distribution
          </span>
          <span className="text-xs font-mono bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded border border-blue-500/30">
            Edge Synchronized
          </span>
        </div>
        <div className="relative z-10 my-auto space-y-2.5">
          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs">
            <span className="text-white/70">Scholarly Publication Order</span>
            <span className="text-white font-semibold">Verified Cart</span>
          </div>
          <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between text-xs text-blue-300">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Warehouse Fulfillment Hook
            </span>
            <span className="font-bold">Auto-Logged</span>
          </div>
        </div>
        <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
          <span>Inventory Sync: Instant</span>
          <span className="text-blue-400 font-medium">Next.js Edge</span>
        </div>
      </div>
    )
  }
];

function Card3D({ project }: { project: ProjectItem }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["2.5deg", "-2.5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-2.5deg", "2.5deg"]);

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
      rel={project.link.startsWith("http") ? "noreferrer" : undefined}
      aria-label={`${project.title} - ${project.niche} case study`}
      className="group block bg-[#fafafa] border border-black/10 hover:border-black/30 rounded-[32px] p-6 md:p-8 transition-colors duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col justify-between"
    >
      <div>
        {/* Visual Container (Container receives feedback, image stays crisp without scale) */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-black/5 shadow-inner">
          {project.hasImage && project.image ? (
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover" 
            />
          ) : (
            project.renderVisual?.()
          )}
          <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono tracking-wider text-neutral-800 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/10 font-medium shadow-sm">
              {project.deployment}
            </span>
            {project.isLocked && (
              <span className="text-xs font-mono tracking-wider text-amber-700 bg-amber-50/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/30 font-medium flex items-center gap-1.5 shadow-sm">
                <Lock className="w-3 h-3 text-amber-600" /> Under Construction
              </span>
            )}
          </div>
        </div>

        {/* Header Details */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span className="text-xs font-mono tracking-wider text-emerald-700 block mb-1 font-medium">
              {project.niche}
            </span>
            <h3 className="text-2xl md:text-3xl font-medium text-black tracking-tight group-hover:text-neutral-800 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-all shadow-sm shrink-0">
            <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
          </div>
        </div>

        <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-6">
          {project.summary}
        </p>
      </div>

      {/* Quantifiable Shift Box */}
      <div className="pt-4 border-t border-black/10 flex flex-col gap-1.5 text-xs">
        <div className="flex items-start gap-2 text-neutral-500 font-light">
          <span className="font-mono text-rose-600 font-semibold shrink-0">Before:</span>
          <span>{project.shift.before}</span>
        </div>
        <div className="flex items-start gap-2 text-neutral-900 font-medium">
          <span className="font-mono text-emerald-600 font-semibold shrink-0">Engine:</span>
          <span>{project.shift.after}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function FeaturedWork() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {PROJECTS.map((project, i) => (
        <Card3D key={i} project={project} />
      ))}
    </div>
  );
}
