"use client";

import Footer from "@/components/Footer";
import TransitionLink from "@/components/TransitionLink";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function PrivacyClient() {
  const { t, isRTL } = useTranslation();

  return (
    <main className="bg-white text-[#0B0B0C] min-h-screen pt-28 md:pt-36">
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-20 md:pb-28">
        <div className="mb-10 pb-8 border-b border-black/[0.08]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.06] text-[#0B0B0C] mb-4">
            {t.privacy.title}
          </h1>
          <p className="text-sm font-medium text-[#4B4D52] mb-5">
            {t.privacy.updated}
          </p>
          <p className="text-base sm:text-lg text-[#4B4D52] leading-relaxed">
            {t.privacy.intro}
          </p>
        </div>

        <div className="space-y-8">
          {t.privacy.sections.map((section, idx) => (
            <article
              key={idx}
              className="rounded-[24px] bg-[#F4F4F6] border border-black/[0.06] p-6 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0B0B0C] mb-3">
                {section.heading}
              </h2>
              <p className="text-base text-[#4B4D52] leading-relaxed">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-black/[0.08] flex flex-wrap items-center gap-4">
          <TransitionLink
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B0B0C] text-white px-7 min-h-[48px] text-sm font-semibold transition-colors hover:bg-[#1E1F23]"
          >
            <span>{t.nav.contact}</span>
            <ArrowRight
              className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </TransitionLink>
          <TransitionLink
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#0B0B0C] border border-black/[0.12] px-7 min-h-[48px] text-sm font-semibold transition-colors hover:border-black/30"
          >
            {t.notFound.home}
          </TransitionLink>
        </div>
      </section>

      <Footer />
    </main>
  );
}
