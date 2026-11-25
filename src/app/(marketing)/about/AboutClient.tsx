"use client";

import { useTranslation } from "@/lib/i18n";
import DirectBuilderCard from "@/components/DirectBuilderCard";
import ClosingBand from "@/components/ClosingBand";
import Footer from "@/components/Footer";

export default function AboutClient() {
  const { t } = useTranslation();
  const a = t.about;

  return (
    <main className="bg-white text-[#0B0B0C] min-h-screen pt-[88px] sm:pt-[116px] lg:pt-[132px]">
      {/* Studio Manifesto */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-12 md:pb-16 text-start">
        <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-semibold tracking-[-0.035em] leading-[1.04] text-[#0B0B0C] max-w-4xl text-balance">
          {a.headline}
        </h1>
        <p className="mt-5 text-base sm:text-xl text-[#4B4D52] leading-relaxed max-w-2xl text-pretty">
          {a.subhead}
        </p>

        {/* Three Grounded Metrics */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {a.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-[24px] bg-[#F4F4F6] border border-black/[0.06] p-6 sm:p-8"
            >
              <div className="text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-[#0B0B0C] mb-2">
                {metric.title}
              </div>
              <p className="text-sm sm:text-base text-[#4B4D52] leading-relaxed">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Operating Standards */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 py-10 md:py-16 text-start">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.03em] text-[#0B0B0C] mb-8 md:mb-10">
          {a.standardsTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {a.standards.map((std) => (
            <div
              key={std.num}
              className="rounded-[24px] sm:rounded-[28px] bg-white border border-black/[0.1] p-6 sm:p-8 flex flex-col justify-start"
            >
              <h3 className="text-xl font-semibold text-[#0B0B0C] mb-2.5">
                {std.title}
              </h3>
              <p className="text-sm sm:text-base text-[#4B4D52] leading-relaxed">
                {std.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Production Infrastructure Stack */}
      <section className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-12 pb-16 md:pb-24 text-start">
        <div className="rounded-[28px] sm:rounded-[40px] bg-[#0B0B0C] text-white p-6 sm:p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.03em] text-white">
              {a.stackTitle}
            </h2>
            <p className="text-sm sm:text-base text-white/75 max-w-md">
              {a.stackSubhead}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {a.stack.map((item) => (
              <div
                key={item.name}
                className="rounded-[20px] bg-white/[0.06] border border-white/[0.12] p-6 flex flex-col justify-between gap-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg font-semibold text-white">
                    {item.name}
                  </span>
                  <span className="text-xs font-medium text-white/75 px-2.5 py-1 rounded-full bg-white/[0.08]">
                    {item.role}
                  </span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Builder Guarantee (Photo-Free) */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-16 md:pb-20">
        <DirectBuilderCard />
      </section>

      <ClosingBand />
      <Footer />
    </main>
  );
}
