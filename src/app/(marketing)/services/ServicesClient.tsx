"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import TransitionLink from "@/components/TransitionLink";
import PackagesSection from "@/components/PackagesSection";
import ClosingBand from "@/components/ClosingBand";
import Footer from "@/components/Footer";

export default function ServicesClient() {
  const { t } = useTranslation();
  const s = t.services;

  return (
    <main className="bg-white text-[#0B0B0C] min-h-screen pt-[88px] sm:pt-[116px] lg:pt-[132px]">
      {/* Page Intro */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-10 md:pb-14 text-start">
        <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-semibold tracking-[-0.035em] leading-[1.04] text-[#0B0B0C] max-w-4xl text-balance">
          {s.heroHeadline}
        </h1>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#4B4D52] leading-relaxed max-w-2xl text-pretty">
          {s.heroSubhead}
        </p>
      </section>

      {/* Architectural Discipline Comparison Grid */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-stretch text-start">
          {/* Discipline 01 — Clay Light Panel */}
          <div className="rounded-[28px] sm:rounded-[34px] bg-[#F4F4F6] border border-black/[0.06] p-6 sm:p-9 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-[#0B0B0C] mb-3">
                {s.disciplineOne.title}
              </h2>

              <div className="flex items-center justify-between gap-3 flex-wrap mb-7">
                <span className="inline-flex items-center rounded-full bg-white border border-black/[0.08] px-3.5 py-1 text-xs font-semibold text-[#0B0B0C]">
                  {s.disciplineOne.label}
                </span>
                <span className="text-xs font-semibold text-[#525252]">
                  {s.disciplineOne.countLabel}
                </span>
              </div>

              <div className="divide-y divide-black/[0.08]">
                {s.disciplineOne.items.map((item) => (
                  <div key={item.num} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#0B0B0C]">
                        {item.title}
                      </h3>

                      <span className="inline-flex items-center rounded-full bg-white border border-black/[0.08] px-3 py-1 text-xs font-medium text-[#0B0B0C] shrink-0">
                        {item.timeline}
                      </span>
                    </div>

                    <p className="text-sm text-[#4B4D52] leading-relaxed mb-3">
                      {item.desc}
                    </p>

                    <TransitionLink
                      href={`/contact?service=${encodeURIComponent(item.serviceParam)}`}
                      className="inline-flex items-center gap-1.5 min-h-[44px] text-xs sm:text-sm font-semibold text-[#0B0B0C] hover:opacity-70 transition-opacity"
                    >
                      <span>{t.common.bookAudit}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 shrink-0" aria-hidden="true" />
                    </TransitionLink>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Discipline 02 — Obsidian Ink Panel */}
          <div className="rounded-[28px] sm:rounded-[34px] bg-[#0B0B0C] text-white border border-[#0B0B0C] p-6 sm:p-9 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-white mb-3">
                {s.disciplineTwo.title}
              </h2>

              <div className="flex items-center justify-between gap-3 flex-wrap mb-7">
                <span className="inline-flex items-center rounded-full bg-white text-[#0B0B0C] px-3.5 py-1 text-xs font-semibold">
                  {s.disciplineTwo.label}
                </span>
                <span className="text-xs font-semibold text-white/75">
                  {s.disciplineTwo.countLabel}
                </span>
              </div>

              <div className="divide-y divide-white/[0.12]">
                {s.disciplineTwo.items.map((item) => (
                  <div key={item.num} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shrink-0 ${
                          item.isBonus
                            ? "bg-white text-[#0B0B0C]"
                            : "bg-white/[0.1] text-white border border-white/15"
                        }`}
                      >
                        {item.timeline}
                      </span>
                    </div>

                    <p className="text-sm text-white/80 leading-relaxed mb-3">
                      {item.desc}
                    </p>

                    <TransitionLink
                      href={`/contact?service=${encodeURIComponent(item.serviceParam)}`}
                      className="inline-flex items-center gap-1.5 min-h-[44px] text-xs sm:text-sm font-semibold text-white hover:text-white/75 transition-colors"
                    >
                      <span>{t.common.bookAudit}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 shrink-0" aria-hidden="true" />
                    </TransitionLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-Off Standard Capsule */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-6 text-start">
        <div className="rounded-[24px] bg-[#F4F4F6] border border-black/[0.08] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 rounded-full bg-[#0B0B0C] text-white flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#0B0B0C]">
                {s.signOffBar.title}
              </h3>
              <p className="mt-1 text-sm text-[#4B4D52] leading-relaxed">
                {s.signOffBar.desc}
              </p>
            </div>
          </div>

          <TransitionLink
            href="/contact?mode=scope"
            className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 rounded-full bg-[#0B0B0C] text-white text-sm font-semibold hover:bg-[#1E1F23] transition-colors shrink-0"
          >
            <span>{s.signOffBar.cta}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" aria-hidden="true" />
          </TransitionLink>
        </div>
      </section>

      {/* Clear Packages */}
      <PackagesSection />

      {/* 4-Step Delivery Execution */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-16 md:pb-24 text-start">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.03em] leading-[1.08] text-[#0B0B0C] max-w-xl text-balance">
            {s.process.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#4B4D52] max-w-md leading-relaxed">
            {s.process.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {s.process.steps.map((step) => (
            <div
              key={step.num}
              className="rounded-[24px] bg-[#F4F4F6] border border-black/[0.06] p-6 flex flex-col justify-between gap-6"
            >
              <div>
                <span className="text-xs font-semibold text-[#525252] block mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold text-[#0B0B0C] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#4B4D52] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <span className="inline-flex items-center self-start rounded-full bg-white border border-black/[0.08] px-3 py-1 text-xs font-semibold text-[#0B0B0C]">
                {step.deliverable}
              </span>
            </div>
          ))}
        </div>
      </section>

      <ClosingBand primaryHref="/contact?mode=scope" />
      <Footer />
    </main>
  );
}
