"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { ProjectEntry } from "@/lib/projects";
import ProjectMedia from "@/components/ProjectMedia";
import TransitionLink from "@/components/TransitionLink";
import ClosingBand from "@/components/ClosingBand";
import Footer from "@/components/Footer";

export default function ProjectDetailClient({
  project,
}: {
  project: ProjectEntry;
}) {
  const { t } = useTranslation();
  const copy = t.projects.find((item) => item.id === project.id);

  if (!copy) return null;

  const buildSimilarHref = `/contact?service=${encodeURIComponent(
    project.serviceParam
  )}&subject=${encodeURIComponent(copy.title)}`;

  return (
    <main className="bg-white text-[#0B0B0C] min-h-screen pt-[88px] sm:pt-[116px] lg:pt-[132px]">
      {/* Back Pill + Header */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-10 md:pb-14 text-start">
        <TransitionLink
          href="/work"
          className="inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full bg-[#F4F4F6] border border-black/[0.08] text-xs sm:text-sm font-semibold text-[#0B0B0C] hover:border-black/25 transition-colors mb-7"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180 shrink-0" aria-hidden="true" />
          <span>{t.common.backToWork}</span>
        </TransitionLink>

        <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-semibold tracking-[-0.035em] leading-[1.04] text-[#0B0B0C] max-w-4xl text-balance">
          {copy.title}
        </h1>

        <p className="mt-4 sm:mt-5 text-base sm:text-xl text-[#4B4D52] leading-relaxed max-w-3xl text-pretty">
          {copy.summary}
        </p>

        {/* Grounded Metadata + Action Bar */}
        <div className="mt-8 pt-6 border-t border-black/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center rounded-full bg-[#0B0B0C] text-white px-3.5 py-1.5 text-xs font-semibold">
              {copy.kindLabel}
            </span>
            <span className="inline-flex items-center rounded-full bg-[#F4F4F6] border border-black/[0.08] px-3.5 py-1.5 text-xs font-semibold text-[#0B0B0C]">
              {copy.niche}
            </span>
            <span className="inline-flex items-center rounded-full bg-[#F4F4F6] border border-black/[0.08] px-3.5 py-1.5 text-xs font-medium text-[#4B4D52]">
              {copy.systemType}
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#525252] px-2">
              {project.displayUrl}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <TransitionLink
              href={buildSimilarHref}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 rounded-full bg-[#0B0B0C] text-white text-sm font-semibold hover:bg-[#1E1F23] transition-colors"
            >
              <span>{t.common.buildSimilar}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" aria-hidden="true" />
            </TransitionLink>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 rounded-full bg-white text-[#0B0B0C] border border-black/[0.14] text-sm font-semibold hover:border-black/35 transition-colors"
              >
                <span>{t.common.openLiveSite}</span>
                <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg] shrink-0" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Visual Showcase Stage (Desktop + Companion Mobile) */}
      <section className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-12 pb-12 md:pb-16">
        <div className="rounded-[28px] sm:rounded-[38px] bg-[#F4F4F6] border border-black/[0.06] p-4 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className={project.mobileImage ? "lg:col-span-8" : "lg:col-span-12"}>
              <div
                className={`relative w-full ${
                  project.fit === "contain" ? "aspect-[16/9]" : "aspect-[16/10]"
                } rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#F8F8FA] border border-black/[0.08]`}
              >
                <ProjectMedia
                  imageSrc={project.desktopImage}
                  videoSrc={project.videoSrc}
                  alt={`${copy.title} desktop interface`}
                  sizes={project.mobileImage ? "(max-width: 1024px) 100vw, 62vw" : "(max-width: 1024px) 100vw, 88vw"}
                  priority
                  className={
                    project.fit === "contain"
                      ? "object-contain object-center bg-[#F8F8FA]"
                      : "object-cover object-top"
                  }
                />
              </div>
            </div>

            {project.mobileImage && (
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-[210px] sm:w-[240px] aspect-[9/19] relative rounded-[26px] overflow-hidden bg-white border border-black/[0.12]">
                  <ProjectMedia
                    imageSrc={project.mobileImage}
                    videoSrc={project.mobileVideoSrc}
                    alt={`${copy.title} mobile interface`}
                    sizes="260px"
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>
            )}
          </div>

          {project.secondaryImage && (
            <div className="mt-6 pt-6 border-t border-black/[0.08]">
              <div className="relative w-full aspect-[16/9] rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#F8F8FA] border border-black/[0.08]">
                <ProjectMedia
                  imageSrc={project.secondaryImage}
                  alt={`${copy.title} admin operations view`}
                  sizes="(max-width: 1024px) 100vw, 88vw"
                  className="object-contain object-center bg-[#F8F8FA]"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottleneck vs Solution */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-12 md:pb-16 text-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <div className="rounded-[24px] sm:rounded-[28px] bg-[#F4F4F6] border border-black/[0.06] p-6 sm:p-9">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0B0B0C] mb-3">
              {t.workPage.caseStudyDetail.bottleneckHeading}
            </h2>
            <p className="text-sm sm:text-base text-[#4B4D52] leading-relaxed">
              {copy.bottleneck}
            </p>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] bg-[#0B0B0C] text-white p-6 sm:p-9">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              {t.workPage.caseStudyDetail.solutionHeading}
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {copy.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Flow Steps & Deliverables */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-12 md:pb-16 text-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="lg:col-span-7 rounded-[24px] sm:rounded-[28px] bg-white border border-black/[0.1] p-6 sm:p-9">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0B0B0C] mb-6">
              {t.workPage.caseStudyDetail.flowHeading}
            </h2>

            <ol className="space-y-4">
              {copy.flowSteps.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 pb-4 border-b border-black/[0.06] last:border-b-0 last:pb-0"
                >
                  <span className="w-7 h-7 rounded-full bg-[#0B0B0C] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-sm sm:text-base text-[#0B0B0C] leading-relaxed font-medium">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5 rounded-[24px] sm:rounded-[28px] bg-[#F4F4F6] border border-black/[0.06] p-6 sm:p-9">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0B0B0C] mb-6">
              {t.workPage.caseStudyDetail.deliverablesHeading}
            </h2>

            <ul className="space-y-3.5">
              {copy.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0B0B0C] shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-[#0B0B0C] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-16 md:pb-24 text-start">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.025em] text-[#0B0B0C] mb-6">
          {t.workPage.caseStudyDetail.outcomesHeading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {copy.outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="rounded-[24px] bg-[#F4F4F6] border border-black/[0.06] p-6 sm:p-7"
            >
              <h3 className="text-lg font-semibold text-[#0B0B0C] mb-2">
                {outcome.title}
              </h3>
              <p className="text-sm text-[#4B4D52] leading-relaxed">
                {outcome.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ClosingBand
        headline={t.workPage.caseStudyDetail.ctaHeadline}
        note={t.workPage.caseStudyDetail.ctaSubhead}
        primaryHref={buildSimilarHref}
        primaryLabel={t.common.buildSimilar}
      />
      <Footer />
    </main>
  );
}
