"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { HERO_SPECIMENS, HeroSpecimenId } from "@/lib/projects";
import ProjectMedia from "@/components/ProjectMedia";
import TransitionLink from "@/components/TransitionLink";

export default function HeroShowcase() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<HeroSpecimenId>("funnel");

  const tabs = t.home.heroShowcase.tabs;
  const activeCopy = tabs.find((item) => item.id === activeTab) || tabs[0];
  const specimen = HERO_SPECIMENS[activeTab];

  const desktopSizes = "(max-width: 1024px) 100vw, 620px";
  const mobileSizes = "(max-width: 768px) 320px, 190px";

  const targetHref = specimen.liveUrl
    ? specimen.liveUrl
    : `/work/${specimen.slug}`;
  const isExternal = Boolean(specimen.liveUrl);

  return (
    <div className="w-full rounded-[26px] sm:rounded-[32px] bg-[#f4f4f6] p-3.5 sm:p-6 flex flex-col justify-between gap-4 border border-black/[0.06]">
      {/* Mobile Tab Bar (Top for immediate 1-thumb switching on phones) */}
      <div
        role="tablist"
        aria-label={t.home.heroShowcase.mobileHint}
        className="grid grid-cols-3 gap-1.5 sm:hidden"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[44px] px-2 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                isActive
                  ? "bg-[#0b0b0c] text-white"
                  : "bg-white text-neutral-600 hover:text-[#0b0b0c]"
              }`}
            >
              {tab.shortLabel.replace(/^\d+\s+/, "")}
            </button>
          );
        })}
      </div>

      {/* Visual Canvas */}
      <div className="relative w-full h-[330px] sm:h-[340px] lg:h-[360px] flex items-center justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={specimen.id}
            initial={{ opacity: 0.25, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.25, y: -4 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full flex items-center"
          >
            {/* Mobile-first view (< sm): displays crisp mobile screen if available, else clean desktop screen */}
            <div className="sm:hidden relative w-full h-full rounded-[20px] overflow-hidden bg-white border border-black/[0.08] shadow-[0_16px_32px_-12px_rgba(0,0,0,0.12)]">
              <ProjectMedia
                imageSrc={specimen.mobileImage || specimen.desktopImage}
                videoSrc={specimen.mobileVideoSrc || specimen.videoSrc}
                alt={activeCopy.caption}
                sizes="(max-width: 640px) 360px, 600px"
                priority={activeTab === "funnel"}
                className="object-cover object-top"
              />
            </div>

            {/* Desktop view (sm+): clean desktop frame + floating mobile screen when present */}
            <div className="hidden sm:block relative w-full h-full">
              <div
                className={`relative h-full rounded-[20px] overflow-hidden bg-white border border-black/[0.08] shadow-[0_24px_48px_-18px_rgba(0,0,0,0.14)] ${
                  specimen.mobileImage ? "w-[84%]" : "w-full"
                }`}
              >
                <ProjectMedia
                  imageSrc={specimen.desktopImage}
                  videoSrc={specimen.videoSrc}
                  alt={activeCopy.caption}
                  sizes={desktopSizes}
                  priority={activeTab === "funnel"}
                  className="object-cover object-top"
                />
              </div>

              {specimen.mobileImage && (
                <div className="absolute end-1 bottom-1 w-[150px] lg:w-[168px] h-[285px] lg:h-[308px] rounded-[24px] overflow-hidden border-[4px] border-[#0b0b0c] bg-[#0b0b0c] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.32)]">
                  <ProjectMedia
                    imageSrc={specimen.mobileImage}
                    videoSrc={specimen.mobileVideoSrc}
                    alt={`${activeCopy.caption} mobile`}
                    sizes={mobileSizes}
                    priority={activeTab === "funnel"}
                    className="object-cover object-top"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Caption & Desktop Tabs */}
      <div className="pt-1 flex flex-col gap-2.5 text-start">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <span className="text-xs sm:text-[13px] font-medium text-[#4B4D52] leading-snug">
            {activeCopy.caption}
          </span>
          {isExternal ? (
            <a
              href={targetHref}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center min-h-[44px] gap-1 text-xs font-semibold text-[#0b0b0c] shrink-0"
            >
              <span>{t.common.openLiveSite}</span>
              <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
            </a>
          ) : (
            <TransitionLink
              href={targetHref}
              className="sm:hidden inline-flex items-center min-h-[44px] gap-1 text-xs font-semibold text-[#0b0b0c] shrink-0"
            >
              <span>{t.common.viewCaseStudy}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </TransitionLink>
          )}
        </div>

        {/* Desktop Switcher */}
        <div
          role="tablist"
          aria-label={t.home.heroShowcase.mobileHint}
          className="hidden sm:flex items-center gap-4 flex-wrap pt-1 border-t border-black/[0.06]"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-semibold transition-colors cursor-pointer min-h-[38px] px-1.5 rounded ${
                  isActive
                    ? "text-[#0b0b0c] underline underline-offset-4"
                    : "text-neutral-600 hover:text-[#0b0b0c]"
                }`}
              >
                {tab.label.replace(/^\d+\s+/, "")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
