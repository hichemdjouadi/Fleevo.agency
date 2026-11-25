"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import AuditQuickForm from "@/components/AuditQuickForm";
import OnboardingWizard from "@/components/OnboardingWizard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

type ContactTab = "audit" | "scope" | "brief";

export default function ContactClient() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();

  const modeParam = searchParams.get("mode");
  const serviceParam = searchParams.get("service");
  const subjectParam = searchParams.get("subject");

  const [activeTab, setActiveTab] = useState<ContactTab>("audit");

  useEffect(() => {
    if (serviceParam || subjectParam) {
      setActiveTab("brief");
    } else if (modeParam === "scope") {
      setActiveTab("scope");
    } else if (modeParam === "brief") {
      setActiveTab("brief");
    } else if (modeParam === "audit") {
      setActiveTab("audit");
    }
  }, [modeParam, serviceParam, subjectParam]);

  const waHref = `https://wa.me/213655934124?text=${encodeURIComponent(
    t.contact.whatsappCard.prefillMessage
  )}`;

  const tabs: { id: ContactTab; label: string }[] = [
    { id: "audit", label: t.contact.tabs.audit },
    { id: "scope", label: t.contact.tabs.scope },
    { id: "brief", label: t.contact.tabs.brief },
  ];

  return (
    <main className="bg-white text-[#0B0B0C] min-h-screen pt-[88px] sm:pt-[116px] lg:pt-[132px]">
      {/* Page Header */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-8 md:pb-12 text-start">
        <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-semibold tracking-[-0.035em] leading-[1.04] text-[#0B0B0C] max-w-3xl text-balance">
          {t.contact.headline}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#4B4D52] leading-relaxed max-w-2xl text-pretty">
          {t.contact.subhead}
        </p>
      </section>

      {/* Interactive Hub + Direct WhatsApp Card */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start text-start">
          {/* Left: 3-Mode Tabbed Intake */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div
              role="tablist"
              aria-label={t.contact.headline}
              className="flex flex-wrap sm:grid sm:grid-cols-3 gap-1.5 rounded-[22px] sm:rounded-full bg-[#F4F4F6] border border-black/[0.08] p-1.5"
            >
              {tabs.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`contact-tab-${tab.id}`}
                    aria-selected={isSelected}
                    aria-controls={`contact-panel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 sm:flex-none min-h-[44px] px-3.5 sm:px-4 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#0B0B0C] text-white"
                        : "text-[#4B4D52] hover:text-[#0B0B0C]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div
              id={`contact-panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`contact-tab-${activeTab}`}
            >
              {activeTab === "audit" && <AuditQuickForm />}
              {activeTab === "scope" && <OnboardingWizard />}
              {activeTab === "brief" && (
                <ContactForm
                  initialServiceParam={serviceParam}
                  initialSubjectParam={subjectParam}
                />
              )}
            </div>
          </div>

          {/* Right: Photo-Free Obsidian WhatsApp Direct Card + Reassurance */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-[26px] sm:rounded-[32px] bg-[#0B0B0C] text-white p-6 sm:p-9 flex flex-col justify-between gap-7">
              <div>
                <div className="w-11 h-11 rounded-full bg-white text-[#0B0B0C] flex items-center justify-center mb-5">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-white mb-3">
                  {t.contact.whatsappCard.title}
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {t.contact.whatsappCard.body}
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.14] flex flex-col gap-5">
                <div>
                  <div className="text-base font-semibold text-white">
                    {t.contact.whatsappCard.builderName}
                  </div>
                  <div className="text-xs sm:text-sm text-white/75">
                    {t.contact.whatsappCard.builderRole}
                  </div>
                </div>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 rounded-full bg-white text-[#0B0B0C] text-sm font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <span>{t.contact.whatsappCard.cta}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#F4F4F6] border border-black/[0.06] p-6 sm:p-7">
              <ul className="space-y-3.5">
                {t.contact.reassurance.map((line, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0B0B0C] shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-sm text-[#0B0B0C] leading-relaxed font-medium">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
