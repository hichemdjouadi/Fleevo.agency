"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";
import { FeaturedProjectTranslation } from "@/lib/i18n/types";

interface ProjectMeta {
  id: string;
  image: string;
  link: string;
}

const PROJECT_METAS: Record<string, ProjectMeta> = {
  mopizza: {
    id: "mopizza",
    image: "/project-mopizza.png",
    link: "https://mopizzarestaurants.vercel.app/",
  },
  almadina: {
    id: "almadina",
    image: "/project-almadina.png",
    link: "https://almadinabookstore.com/",
  },
  adrena: {
    id: "adrena",
    image: "/project-adrena.png",
    link: "https://adrenaclub.vercel.app/",
  },
  tawheed: {
    id: "tawheed",
    image: "/project-tawheed.png",
    link: "/contact?subject=Case+Study+-+Tawheed+Bookstore",
  },
};

function ShowcaseItem({ project }: { project: FeaturedProjectTranslation }) {
  const { locale } = useTranslation();
  const meta = PROJECT_METAS[project.id] || {
    id: project.id,
    image: "/project-mopizza.png",
    link: "/contact",
  };

  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768 && window.matchMedia("(pointer: fine)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-2deg", "2deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
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
      style={isDesktop ? {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      } : undefined}
      href={meta.link}
      target={meta.link.startsWith("http") ? "_blank" : undefined}
      rel={meta.link.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={`${project.title} - ${project.niche}`}
      data-cursor={meta.link.startsWith("http") ? "Visit" : "Preview"}
      className="group flex flex-col justify-between pb-8 sm:pb-10 border-b border-black/15 transition-colors duration-300 text-start"
    >
      <div>
        {/* Visual Stage */}
        <div className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-[28px] overflow-hidden mb-5 sm:mb-7 bg-[#08080c] group-hover:shadow-xl transition-shadow">
          <Image
            src={meta.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
            unoptimized
          />
          {/* Live Production Floating Tag */}
          <div className="absolute top-3 inset-x-3 sm:top-4 sm:inset-x-4 flex items-center justify-between pointer-events-none z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white font-medium shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{meta.link.startsWith("http") ? (locale === "ar" ? "نظام شغال في الإنتاج" : locale === "fr" ? "Plateforme en Production Réelle" : "Live Production System") : (locale === "ar" ? "دراسة معمارية خاصة" : locale === "fr" ? "Architecture Déployée" : "Sovereign Architecture")}</span>
            </span>
            {meta.link.startsWith("http") && (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-black text-[11px] font-mono font-bold shadow-md">
                <span>{locale === "ar" ? "تجربة المنصة ↗" : locale === "fr" ? "Tester en Direct ↗" : "Test Live ↗"}</span>
              </span>
            )}
          </div>
        </div>

        {/* Header Details */}
        <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2.5 sm:mb-3">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-black tracking-tight group-hover:text-neutral-700 transition-colors text-balance">
              {project.title}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs rtl:font-sans ltr:font-mono text-neutral-500">
              <span>{project.niche}</span>
              <span>·</span>
              <span className="text-black font-medium">{project.statusBadge}</span>
            </div>
          </div>
          <div className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-all shrink-0 rtl:rotate-[-90deg]">
            <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
          </div>
        </div>

        <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-5 sm:mb-6 max-w-[65ch] text-pretty">
          {project.summary}
        </p>
      </div>

      {/* Directional Benefits Ledger */}
      <div className="pt-4 border-t border-black/10 flex flex-wrap items-center gap-2 text-xs rtl:font-sans ltr:font-mono">
        {project.benefits.map((b, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4f4f5] text-neutral-800 font-medium"
          >
            <span className="sr-only">{b.direction === "up" ? "Increased: " : "Reduced: "}</span>
            <span aria-hidden="true" className="font-bold text-black">{b.direction === "up" ? "↑" : "↓"}</span>
            <span>{b.label}</span>
          </span>
        ))}
        {meta.link.startsWith("http") && (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black text-white font-medium text-xs font-mono group-hover:bg-neutral-800 transition-colors ms-auto">
            <span>{locale === "ar" ? "معاينة المنصة الحية" : locale === "fr" ? "Ouvrir la Plateforme Active" : "Open Live Deployment"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
          </span>
        )}
      </div>
    </motion.a>
  );
}

export default function FeaturedWork() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
      {t.featuredWork.projects.map((project) => (
        <ShowcaseItem key={project.id} project={project} />
      ))}
    </div>
  );
}
