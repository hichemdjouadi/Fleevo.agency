"use client";

import { useState, useEffect } from "react";
import { submitAuditRequest } from "@/app/actions";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { ServiceKey, TimelineKey } from "@/lib/i18n/types";

const SERVICE_KEYS: ServiceKey[] = [
  "website",
  "ecommerce",
  "crm",
  "aiAgent",
  "ads",
  "audit",
];
const TIMELINE_KEYS: TimelineKey[] = [
  "rightAway",
  "twoToFourWeeks",
  "planningAhead",
];

export default function ContactForm({
  initialServiceParam,
  initialSubjectParam,
}: {
  initialServiceParam?: string | null;
  initialSubjectParam?: string | null;
}) {
  const { t, locale } = useTranslation();
  const f = t.contact.briefForm;

  const [selectedServiceKeys, setSelectedServiceKeys] = useState<ServiceKey[]>([
    "website",
  ]);
  const [selectedTimelineKey, setSelectedTimelineKey] =
    useState<TimelineKey>("twoToFourWeeks");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const paramService =
      initialServiceParam ??
      (typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("service")
        : null);
    const paramSubject =
      initialSubjectParam ??
      (typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("subject")
        : null);

    if (paramService) {
      const decoded = paramService.toLowerCase();
      if (decoded.includes("crm") || decoded.includes("app")) {
        setSelectedServiceKeys(["crm"]);
      } else if (decoded.includes("commerce") || decoded.includes("store")) {
        setSelectedServiceKeys(["ecommerce"]);
      } else if (decoded.includes("ad") || decoded.includes("script")) {
        setSelectedServiceKeys(["ads"]);
      } else if (decoded.includes("audit")) {
        setSelectedServiceKeys(["audit"]);
      } else if (decoded.includes("ai")) {
        setSelectedServiceKeys(["aiAgent"]);
      } else {
        setSelectedServiceKeys(["website"]);
      }
    }

    if (paramSubject) {
      setDetails((prev) => (prev ? prev : `${paramSubject}\n`));
    }
  }, [initialServiceParam, initialSubjectParam]);

  const toggleInterest = (key: ServiceKey) => {
    setSelectedServiceKeys((prev) => {
      if (prev.includes(key)) {
        if (prev.length === 1) return prev;
        return prev.filter((item) => item !== key);
      }
      return [...prev, key];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const trimmedCompany = company.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedDetails = details.trim();

    if (!trimmedName || !trimmedCompany || !trimmedEmail || !trimmedPhone) {
      setError(f.errorRequired);
      return;
    }

    if (selectedServiceKeys.length === 0) {
      setError(f.errorInterests);
      return;
    }

    setIsSubmitting(true);

    const localizedServices = selectedServiceKeys.map((k) => f.services[k]);
    const localizedTimeline = f.timelines[selectedTimelineKey];
    const formattedName = `${trimmedName} (${trimmedCompany})`;
    const compiledDetails = [
      `Language: ${locale.toUpperCase()}`,
      `Company: ${trimmedCompany}`,
      `Phone/WhatsApp: ${trimmedPhone}`,
      `Timeline: ${localizedTimeline}`,
      `Details: ${trimmedDetails || "N/A"}`,
    ].join("\n");

    const result = await submitAuditRequest({
      name: formattedName,
      email: trimmedEmail,
      niche: "Project Brief",
      timeline: localizedTimeline,
      budget: "Custom Scope",
      interests: localizedServices,
      details: compiledDetails,
    });

    if (result.error) {
      setError(result.error);
    } else {
      setIsSuccess(true);
    }

    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="w-full py-14 px-8 rounded-[24px] sm:rounded-[28px] bg-[#f4f4f6] border border-black/[0.08] text-center text-[#0b0b0c]">
        <div className="w-12 h-12 rounded-full bg-[#0b0b0c] text-white flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
          {f.successTitle}
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed">
          {f.successDesc}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white border border-black/[0.1] rounded-[24px] sm:rounded-[28px] p-5 sm:p-8 flex flex-col gap-6 text-start text-[#0b0b0c]"
    >
      {/* Service Selection */}
      <div className="flex flex-col gap-3">
        <span id="contact-need-label" className="text-xs font-semibold text-neutral-700">
          {f.needLabel}
        </span>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-labelledby="contact-need-label"
        >
          {SERVICE_KEYS.map((key) => {
            const label = f.services[key];
            const isSelected = selectedServiceKeys.includes(key);
            return (
              <button
                key={key}
                type="button"
                onClick={() => toggleInterest(key)}
                aria-pressed={isSelected}
                className={`min-h-[42px] px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#0b0b0c] text-white border-[#0b0b0c]"
                    : "bg-[#f4f4f6] border-black/[0.08] text-neutral-700 hover:border-black/30 hover:text-[#0b0b0c]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Target Timeline */}
      <div className="flex flex-col gap-3">
        <span
          id="contact-timeline-label"
          className="text-xs font-semibold text-neutral-700"
        >
          {f.timelineLabel}
        </span>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-2"
          role="radiogroup"
          aria-labelledby="contact-timeline-label"
        >
          {TIMELINE_KEYS.map((key) => {
            const label = f.timelines[key];
            const isSelected = selectedTimelineKey === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedTimelineKey(key)}
                role="radio"
                aria-checked={isSelected}
                className={`min-h-[44px] px-4 py-2.5 rounded-full border text-xs sm:text-sm font-medium transition-colors text-center cursor-pointer ${
                  isSelected
                    ? "bg-[#0b0b0c] text-white border-[#0b0b0c]"
                    : "bg-[#f4f4f6] border-black/[0.08] text-neutral-700 hover:border-black/30 hover:text-[#0b0b0c]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Contact Inputs */}
      <div className="flex flex-col gap-4">
        <span className="text-xs font-semibold text-neutral-700">
          {f.detailsLabel}
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-name"
              className="text-xs font-medium text-neutral-700"
            >
              {f.nameLabel} <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={f.namePlaceholder}
              className="w-full min-h-[48px] bg-[#f4f4f6] border border-black/[0.08] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0b0b0c] placeholder:text-[#525252] focus:outline-none focus:border-[#0b0b0c] focus:bg-white transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-company"
              className="text-xs font-medium text-neutral-700"
            >
              {f.companyLabel} <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-company"
              type="text"
              autoComplete="organization"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder={f.companyPlaceholder}
              className="w-full min-h-[48px] bg-[#f4f4f6] border border-black/[0.08] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0b0b0c] placeholder:text-[#525252] focus:outline-none focus:border-[#0b0b0c] focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-email"
              className="text-xs font-medium text-neutral-700"
            >
              {f.emailLabel} <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={f.emailPlaceholder}
              className="w-full min-h-[48px] bg-[#f4f4f6] border border-black/[0.08] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0b0b0c] placeholder:text-[#525252] focus:outline-none focus:border-[#0b0b0c] focus:bg-white transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-phone"
              className="text-xs font-medium text-neutral-700"
            >
              {f.phoneLabel} <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={f.phonePlaceholder}
              className="w-full min-h-[48px] bg-[#f4f4f6] border border-black/[0.08] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0b0b0c] placeholder:text-[#525252] focus:outline-none focus:border-[#0b0b0c] focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-details"
            className="text-xs font-medium text-neutral-700"
          >
            {f.scopeLabel}
          </label>
          <textarea
            id="contact-details"
            rows={3}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder={f.scopePlaceholder}
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

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-black/[0.08]">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 rounded-full bg-[#0b0b0c] text-white text-sm font-semibold hover:bg-neutral-800 transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{isSubmitting ? f.submittingBtn : f.submitBtn}</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
        </button>

        <span className="text-xs text-neutral-600">{f.note}</span>
      </div>
    </form>
  );
}
