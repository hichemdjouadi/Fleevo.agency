"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { PROJECTS } from "@/lib/projects";
import TransitionLink from "@/components/TransitionLink";
import HeroShowcase from "@/components/HeroShowcase";
import ProjectMedia from "@/components/ProjectMedia";
import SystemAndCalculator from "@/components/SystemAndCalculator";
import PackagesSection from "@/components/PackagesSection";
import DirectBuilderCard from "@/components/DirectBuilderCard";
import FAQ from "@/components/FAQ";
import ClosingBand from "@/components/ClosingBand";
import Footer from "@/components/Footer";

export default function HomeClient() {
  const { t } = useTranslation();

  const featuredProjects = PROJECTS.filter((p) => p.featuredOnHome);

  return (
    <main className="bg-white text-[#0B0B0C] min-h-screen">
      {/* Chapter 1: Hero + Interactive Live Showcase */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pt-[88px] sm:pt-[116px] lg:pt-[132px] pb-14 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 text-start">
            <h1 className="text-[38px] sm:text-5xl lg:text-[62px] font-semibold tracking-[-0.035em] leading-[1.03] text-[#0B0B0C] text-balance">
              {t.home.hero.headline}
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#4B4D52] leading-relaxed max-w-xl text-pretty">
              {t.home.hero.subtitle}
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 rounded-full bg-[#0B0B0C] text-white text-sm font-semibold hover:bg-[#1E1F23] transition-colors"
              >
                <span>{t.home.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" aria-hidden="true" />
              </TransitionLink>

              <TransitionLink
                href="/work"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-7 rounded-full bg-white text-[#0B0B0C] border border-black/[0.14] text-sm font-semibold hover:border-black/35 transition-colors"
              >
                {t.home.hero.ctaSecondary}
              </TransitionLink>
            </div>

            <p className="mt-5 text-xs sm:text-sm font-medium text-[#525252]">
              {t.home.hero.scopeLine}
            </p>
          </div>

          <div className="lg:col-span-6">
            <HeroShowcase />
          </div>
        </div>
      </section>

      {/* Chapter 2: Selected Work (Asymmetric Editorial Gallery) */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 py-12 md:py-24 text-start">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.06] text-[#0B0B0C] text-balance">
            {t.home.work.headline}
          </h2>

          <TransitionLink
            href="/work"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.12] px-5 min-h-[44px] text-sm font-semibold text-[#0B0B0C] hover:border-black/35 transition-colors self-start sm:self-auto shrink-0"
          >
            <span>{t.home.work.viewAll}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" aria-hidden="true" />
          </TransitionLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-10 md:gap-y-16 items-start">
          {featuredProjects.map((project, idx) => {
            const copy = t.projects.find((item) => item.id === project.id);
            if (!copy) return null;
            const isStaggered = idx % 2 === 1;

            return (
              <article
                key={project.slug}
                className={`group flex flex-col ${isStaggered ? "md:mt-16" : ""}`}
              >
                <TransitionLink
                  href={`/work/${project.slug}`}
                  className="block rounded-[24px] sm:rounded-[28px] bg-[#F4F4F6] border border-black/[0.06] group-hover:border-black/20 transition-colors p-3 sm:p-5 overflow-hidden"
                >
                  <div className="relative w-full aspect-[16/10] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[#F8F8FA] border border-black/[0.06]">
                    <ProjectMedia
                      imageSrc={project.desktopImage}
                      videoSrc={project.videoSrc}
                      alt={copy.title}
                      sizes="(max-width: 768px) 100vw, 46vw"
                      className={
                        project.fit === "contain"
                          ? "object-contain object-center bg-[#F8F8FA]"
                          : "object-cover object-top"
                      }
                    />
                  </div>
                </TransitionLink>

                <div className="mt-4 sm:mt-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="inline-flex items-center rounded-full bg-[#F4F4F6] border border-black/[0.06] px-3 py-1 text-xs font-semibold text-[#0B0B0C]">
                        {copy.kindLabel}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#525252]">
                        {copy.niche}
                      </span>
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${copy.title} — ${t.common.openLiveSite}`}
                        className="inline-flex items-center gap-1 min-h-[44px] px-3 rounded-full text-xs font-semibold text-[#4B4D52] hover:text-[#0B0B0C] transition-colors"
                      >
                        <span className="hidden sm:inline">{project.displayUrl}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg] shrink-0" aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  <TransitionLink href={`/work/${project.slug}`} className="block">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0B0B0C] group-hover:opacity-75 transition-opacity">
                      {copy.title}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base text-[#4B4D52] leading-relaxed">
                      {copy.shortOutcome}
                    </p>
                  </TransitionLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Chapter 3: Two-Discipline Switcher + Growth Calculator */}
      <SystemAndCalculator />

      {/* Chapter 4: Clear Tier Packages */}
      <PackagesSection />

      {/* Chapter 5: Direct Builder Guarantee + FAQ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <DirectBuilderCard />
          </div>
          <div className="lg:col-span-7">
            <FAQ />
          </div>
        </div>
      </section>

      <ClosingBand />
      <Footer />
    </main>
  );
}
