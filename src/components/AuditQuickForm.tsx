"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { submitAuditRequest } from "@/app/actions";
import { useTranslation } from "@/lib/i18n";

export default function AuditQuickForm() {
  const { t, locale } = useTranslation();
  const f = t.contact.auditForm;

  const [siteUrl, setSiteUrl] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedUrl = siteUrl.trim();
    const trimmedPhone = whatsapp.trim();
    if (!trimmedUrl || !trimmedPhone) {
      setError(f.errorRequired);
      return;
    }

    setIsSubmitting(true);
    const labelName = name.trim() || `48h Audit (${trimmedUrl})`;
    const details = [
      `Language: ${locale.toUpperCase()}`,
      `Target Link: ${trimmedUrl}`,
      `WhatsApp: ${trimmedPhone}`,
      `Goal / Bottleneck: ${goal.trim() || "Free 48h Video Audit"}`,
    ].join("\n");

    const res = await submitAuditRequest({
      name: labelName,
      email: trimmedPhone,
      niche: "48h Video Audit",
      timeline: "48 Hours",
      budget: "Free Video Audit",
      interests: ["48h Video Audit"],
      details,
    });

    if (res.error) {
      setError(res.error);
    } else {
      setIsSuccess(true);
    }
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="rounded-[24px] sm:rounded-[28px] bg-[#f4f4f6] border border-black/[0.08] p-8 sm:p-12 text-center text-[#0b0b0c]">
        <div className="w-12 h-12 rounded-full bg-[#0b0b0c] text-white flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">
          {f.successTitle}
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed mb-6">
          {f.successDesc}
        </p>
        <button
          type="button"
          onClick={() => {
            setSiteUrl("");
            setWhatsapp("");
            setName("");
            setGoal("");
            setIsSuccess(false);
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-700 hover:text-[#0b0b0c] cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{f.resetBtn}</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] sm:rounded-[28px] bg-white border border-black/[0.1] p-5 sm:p-8 flex flex-col gap-5 text-start"
    >
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0b0b0c]">
          {f.title}
        </h3>
        <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
          {f.subhead}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="audit-url"
            className="text-xs font-semibold text-neutral-700"
          >
            {f.urlLabel} <span aria-hidden="true">*</span>
          </label>
          <input
            id="audit-url"
            type="text"
            required
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            placeholder={f.urlPlaceholder}
            className="w-full min-h-[48px] bg-[#f4f4f6] border border-black/[0.08] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0b0b0c] placeholder:text-[#525252] focus:outline-none focus:border-[#0b0b0c] focus:bg-white transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="audit-wa"
              className="text-xs font-semibold text-neutral-700"
            >
              {f.whatsappLabel} <span aria-hidden="true">*</span>
            </label>
            <input
              id="audit-wa"
              type="tel"
              inputMode="tel"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder={f.whatsappPlaceholder}
              className="w-full min-h-[48px] bg-[#f4f4f6] border border-black/[0.08] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0b0b0c] placeholder:text-[#525252] focus:outline-none focus:border-[#0b0b0c] focus:bg-white transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="audit-name"
              className="text-xs font-semibold text-neutral-700"
            >
              {f.nameLabel}
            </label>
            <input
              id="audit-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={f.namePlaceholder}
              className="w-full min-h-[48px] bg-[#f4f4f6] border border-black/[0.08] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0b0b0c] placeholder:text-[#525252] focus:outline-none focus:border-[#0b0b0c] focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="audit-goal"
            className="text-xs font-semibold text-neutral-700"
          >
            {f.goalLabel}
          </label>
          <textarea
            id="audit-goal"
            rows={2}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder={f.goalPlaceholder}
            className="w-full bg-[#f4f4f6] border border-black/[0.08] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0b0b0c] placeholder:text-[#525252] focus:outline-none focus:border-[#0b0b0c] focus:bg-white transition-colors resize-none"
          />
        </div>
      </div>

      {error && (
        <div
          role="alert"
          className="p-3 rounded-xl bg-[#f4f4f6] border border-black/20 text-xs font-medium text-[#0b0b0c]"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[50px] px-6 py-3.5 rounded-full bg-[#0b0b0c] text-white text-sm font-semibold hover:bg-neutral-800 transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>{isSubmitting ? f.submittingBtn : f.submitBtn}</span>
        <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
      </button>
    </form>
  );
}
