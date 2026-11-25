"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, RotateCcw, MessageCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { submitAuditRequest } from "@/app/actions";

type SystemChoice = "funnel" | "commerce" | "crm" | "ai" | "ads";

export default function OnboardingWizard() {
  const { t, locale } = useTranslation();
  const w = t.contact.wizard;

  const [step, setStep] = useState<number>(1);
  const [selectedSystem, setSelectedSystem] = useState<{
    id: SystemChoice;
    title: string;
    desc: string;
  } | null>(null);
  const [selectedBottleneck, setSelectedBottleneck] = useState<{
    id: string;
    title: string;
    desc: string;
  } | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<{
    id: string;
    title: string;
    desc: string;
    window: string;
  } | null>(null);

  const [contactName, setContactName] = useState("");
  const [contactHandle, setContactHandle] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleReset = () => {
    setSelectedSystem(null);
    setSelectedBottleneck(null);
    setSelectedTimeline(null);
    setContactName("");
    setContactHandle("");
    setIsSaved(false);
    setError(null);
    setStep(1);
  };

  const branch = selectedSystem
    ? w.step4.branches[selectedSystem.id]
    : w.step4.branches.funnel;

  const buildWhatsappUrl = () => {
    if (!selectedSystem || !selectedBottleneck || !selectedTimeline) {
      return "https://wa.me/213655934124";
    }
    const lines = [
      w.step4.waPrefix,
      `• ${selectedSystem.title}`,
      `• ${selectedBottleneck.title}`,
      `• ${selectedTimeline.title} (${selectedTimeline.window})`,
      `• ${w.step4.recommendedLabel}: ${branch.packageName}`,
    ];
    if (contactName.trim()) lines.push(`• ${contactName.trim()}`);
    return `https://wa.me/213655934124?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSaveAndOpenWhatsApp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!selectedSystem || !selectedBottleneck || !selectedTimeline) return;

    const cleanName = contactName.trim();
    const cleanContact = contactHandle.trim();
    if (!cleanName || !cleanContact) {
      setError(w.step4.errorContact);
      return;
    }

    setIsSaving(true);
    const details = [
      `Language: ${locale.toUpperCase()}`,
      `System: ${selectedSystem.title}`,
      `Bottleneck: ${selectedBottleneck.title}`,
      `Recommended: ${branch.packageName}`,
      `Contact: ${cleanContact}`,
    ].join("\n");

    const res = await submitAuditRequest({
      name: cleanName,
      email: cleanContact,
      niche: "3-Tap Scope",
      timeline: `${selectedTimeline.title} (${selectedTimeline.window})`,
      budget: branch.packageName,
      interests: [selectedSystem.title],
      details,
    });

    setIsSaving(false);
    if (res.error) {
      setError(res.error);
      return;
    }

    setIsSaved(true);
    window.open(buildWhatsappUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full rounded-[24px] sm:rounded-[28px] bg-[#f4f4f6] border border-black/[0.08] p-5 sm:p-8 text-start">
      {/* Progress Header */}
      <div className="flex items-center justify-between pb-4 border-b border-black/[0.08] mb-5">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${step === 4 ? "bg-[#0b0b0c]" : "bg-neutral-500"}`}
          />
          <span className="text-xs font-semibold text-neutral-700">
            {step <= 3 ? `${w.stepPrefix} ${step} ${w.stepOf}` : w.readyBadge}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3].map((num) => (
            <span
              key={num}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                step >= num ? "bg-[#0b0b0c]" : "bg-black/15"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0b0b0c]">
              {w.step1.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-600">{w.step1.subhead}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {w.step1.options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setSelectedSystem(opt);
                  setStep(2);
                }}
                className="p-4 rounded-2xl bg-white border border-black/[0.08] hover:border-[#0b0b0c] transition-colors text-start flex flex-col justify-between gap-2 cursor-pointer min-h-[48px]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm sm:text-base font-semibold text-[#0b0b0c]">
                    {opt.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-neutral-500 rtl:rotate-180 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {opt.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0b0b0c]">
              {w.step2.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-600">{w.step2.subhead}</p>
          </div>

          <div className="space-y-2.5">
            {w.step2.options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setSelectedBottleneck(opt);
                  setStep(3);
                }}
                className="w-full p-4 rounded-2xl bg-white border border-black/[0.08] hover:border-[#0b0b0c] transition-colors text-start flex items-center justify-between gap-3 cursor-pointer min-h-[48px]"
              >
                <div>
                  <div className="text-sm sm:text-base font-semibold text-[#0b0b0c]">
                    {opt.title}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 rtl:rotate-180 shrink-0" />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setStep(1)}
            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-[#0b0b0c] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
            <span>{w.step2.backBtn}</span>
          </button>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0b0b0c]">
              {w.step3.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-600">{w.step3.subhead}</p>
          </div>

          <div className="space-y-2.5">
            {w.step3.options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setSelectedTimeline(opt);
                  setStep(4);
                }}
                className="w-full p-4 rounded-2xl bg-white border border-black/[0.08] hover:border-[#0b0b0c] transition-colors text-start flex items-center justify-between gap-3 cursor-pointer min-h-[48px]"
              >
                <div>
                  <div className="text-sm sm:text-base font-semibold text-[#0b0b0c]">
                    {opt.title}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#f4f4f6] text-xs font-semibold text-[#0b0b0c] shrink-0">
                  {opt.window}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-[#0b0b0c] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
            <span>{w.step3.backBtn}</span>
          </button>
        </div>
      )}

      {/* Step 4: Branched Scope + Save to Supabase BEFORE WhatsApp */}
      {step === 4 && selectedSystem && selectedBottleneck && selectedTimeline && (
        <form onSubmit={handleSaveAndOpenWhatsApp} className="space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0b0b0c]">
              {w.step4.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-600">{w.step4.subhead}</p>
          </div>

          <div className="rounded-2xl bg-white border border-black/[0.08] p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-black/[0.08]">
              <div>
                <div className="text-xs font-semibold text-neutral-500 mb-0.5">
                  {w.step4.recommendedLabel}
                </div>
                <div className="text-base font-semibold text-[#0b0b0c]">
                  {branch.packageName}
                </div>
              </div>
              <div className="sm:text-end">
                <div className="text-xs font-semibold text-neutral-500 mb-0.5">
                  {w.step4.windowLabel}
                </div>
                <span className="inline-flex px-3 py-0.5 rounded-full bg-[#f4f4f6] text-xs font-semibold text-[#0b0b0c]">
                  {selectedTimeline.window}
                </span>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-neutral-500 mb-2">
                {w.step4.deliverablesLabel}
              </div>
              <ul className="space-y-2">
                {branch.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800"
                  >
                    <Check
                      className="w-4 h-4 text-[#0b0b0c] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="wizard-name"
                className="text-xs font-semibold text-neutral-700"
              >
                {w.step4.nameLabel} <span aria-hidden="true">*</span>
              </label>
              <input
                id="wizard-name"
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder={w.step4.namePlaceholder}
                className="w-full min-h-[48px] bg-white border border-black/[0.1] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0b0b0c] placeholder:text-neutral-500 focus:outline-none focus:border-[#0b0b0c]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="wizard-phone"
                className="text-xs font-semibold text-neutral-700"
              >
                {w.step4.phoneLabel} <span aria-hidden="true">*</span>
              </label>
              <input
                id="wizard-phone"
                type="text"
                required
                value={contactHandle}
                onChange={(e) => setContactHandle(e.target.value)}
                placeholder={w.step4.phonePlaceholder}
                className="w-full min-h-[48px] bg-white border border-black/[0.1] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0b0b0c] placeholder:text-neutral-500 focus:outline-none focus:border-[#0b0b0c]"
              />
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="p-3 rounded-xl bg-white border border-black/20 text-xs font-medium text-[#0b0b0c]"
            >
              {error}
            </div>
          )}

          {isSaved && (
            <div className="p-3.5 rounded-xl bg-white border border-black/[0.12] text-xs text-neutral-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>{w.step4.savedHint}</span>
              <a
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0b0b0c] underline shrink-0"
              >
                WhatsApp &rarr;
              </a>
            </div>
          )}

          <div className="space-y-2.5">
            <button
              type="submit"
              disabled={isSaving}
              className="w-full min-h-[50px] px-6 py-3.5 rounded-full bg-[#0b0b0c] text-white text-sm font-semibold hover:bg-neutral-800 transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{isSaving ? w.step4.savingBtn : w.step4.saveAndWhatsappBtn}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-[#0b0b0c] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{w.step4.resetBtn}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
