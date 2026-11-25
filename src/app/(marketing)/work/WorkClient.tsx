"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Monitor, Smartphone } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { PROJECTS, ProjectEntry } from "@/lib/projects";
import ProjectMedia from "@/components/ProjectMedia";
import TransitionLink from "@/components/TransitionLink";
import ClosingBand from "@/components/ClosingBand";
import Footer from "@/components/Footer";

function WorkProjectCard({ project }: { project: ProjectEntry }) {
  const { t } = useTranslation();
  const copy = t.projects.find((item) => item.id === project.id);

  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768 && project.mobileImage) {
      setPreviewMode("mobile");
    }
  }, [project.mobileImage]);

  if (!copy) return null;

  const showMobileFrame = previewMode === "mobile" && Boolean(project.mobileImage);

  return (
    <article className="rounded-[26px] sm:rounded-[32px] bg-[#F4F4F6] border border-black/[0.06] p-4 sm:p-6 flex flex-col justify-between gap-5 text-start">
      <div>
        {/* Preview Controls Row */}
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center rounded-full bg-white border border-black/[0.08] px-3 py-1 text-xs font-semibold text-[#0B0B0C]">
              {copy.kindLabel}
            </span>
            <span className="text-xs font-medium text-[#525252]">
              {copy.niche}
            </span>
          </div>

          {project.mobileImage && (
            <div
              role="group"
              aria-label={`${copy.title} viewport preview`}
              className="inline-flex items-center rounded-full bg-white border border-black/[0.08] p-1 gap-1"
            >
              <button
                type="button"
                aria-pressed={previewMode === "desktop"}
                onClick={() => setPreviewMode("desktop")}
                className={`min-h-[40px] px-3 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  previewMode === "desktop"
                    ? "bg-[#0B0B0C] text-white"
                    : "text-[#4B4D52] hover:text-[#0B0B0C]"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.common.desktopView}</span>
              </button>
              <button
                type="button"
                aria-pressed={previewMode === "mobile"}
                onClick={() => setPreviewMode("mobile")}
                className={`min-h-[40px] px-3 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  previewMode === "mobile"
                    ? "bg-[#0B0B0C] text-white"
                    : "text-[#4B4D52] hover:text-[#0B0B0C]"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.common.mobileView}</span>
              </button>
            </div>
          )}
        </div>

        {/* Visual Showcase Plate */}
        <TransitionLink
          href={`/work/${project.slug}`}
          className="block rounded-[18px] sm:rounded-[22px] bg-white border border-black/[0.06] overflow-hidden p-3 sm:p-4 hover:border-black/20 transition-colors"
        >
          {showMobileFrame && project.mobileImage ? (
            <div className="w-[180px] sm:w-[205px] aspect-[9/19] mx-auto rounded-[20px] overflow-hidden border border-black/[0.12] bg-[#F4F4F6] relative">
              <ProjectMedia
                imageSrc={project.mobileImage}
                videoSrc={project.mobileVideoSrc}
                alt={`${copy.title} mobile interface`}
                sizes="220px"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-[16/10] rounded-[12px] overflow-hidden bg-[#F8F8FA]">
              <ProjectMedia
                imageSrc={project.desktopImage}
                videoSrc={project.videoSrc}
                alt={`${copy.title} desktop interface`}
                sizes="(max-width: 768px) 100vw, 46vw"
                className={
                  project.fit === "contain"
                    ? "object-contain object-center bg-[#F8F8FA]"
                    : "object-cover object-top"
                }
              />
            </div>
          )}
        </TransitionLink>

        {/* Copy & Outcome */}
        <div className="mt-5">
          <div className="flex items-center justify-between gap-2 text-xs font-medium text-[#525252] mb-1.5">
            <span>{copy.systemType}</span>
            <span>{project.displayUrl}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0B0B0C]">
            {copy.title}
          </h3>

          <p className="mt-2 text-sm sm:text-base text-[#4B4D52] leading-relaxed">
            {copy.shortOutcome}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="pt-4 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-3">
        <TransitionLink
          href={`/work/${project.slug}`}
          className="min-h-[44px] inline-flex items-center gap-2 px-5 rounded-full bg-[#0B0B0C] text-white text-xs sm:text-sm font-semibold hover:bg-[#1E1F23] transition-colors"
        >
          <span>{t.common.viewCaseStudy}</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 shrink-0" aria-hidden="true" />
        </TransitionLink>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center gap-1.5 px-4 rounded-full bg-white border border-black/[0.1] text-xs sm:text-sm font-semibold text-[#0B0B0C] hover:border-black/30 transition-colors"
          >
            <span>{t.common.openLiveSite}</span>
            <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg] shrink-0" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function WorkClient() {
  const { t } = useTranslation();

  const clientAndDemoBuilds = PROJECTS.filter((p) => p.kind !== "internal");
  const inHouseBuilds = PROJECTS.filter((p) => p.kind === "internal");

  return (
    <main className="bg-white text-[#0B0B0C] min-h-screen pt-[88px] sm:pt-[116px] lg:pt-[132px]">
      {/* Page Header */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-10 md:pb-14 text-start">
        <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-semibold tracking-[-0.035em] leading-[1.04] text-[#0B0B0C] max-w-4xl text-balance">
          {t.workPage.headline}
        </h1>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#4B4D52] leading-relaxed max-w-2xl text-pretty">
          {t.workPage.subhead}
        </p>
      </section>

      {/* Client & Sector System Builds */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-16 md:pb-24 text-start">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.025em] text-[#0B0B0C] mb-8">
          {t.workPage.clientSectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {clientAndDemoBuilds.map((project) => (
            <WorkProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Built In-House Engineering Infrastructure */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-16 md:pb-24 text-start">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.025em] text-[#0B0B0C]">
            {t.workPage.inHouseSectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#4B4D52] max-w-md">
            {t.workPage.inHouseSubhead}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {inHouseBuilds.map((project) => (
            <WorkProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <ClosingBand />
      <Footer />
    </main>
  );
}
