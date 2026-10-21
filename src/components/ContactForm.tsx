"use client";

import { useState, useEffect } from "react";
import { submitAuditRequest } from "@/app/actions";
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

type ServiceKey = "website" | "ecommerce" | "crm" | "ads" | "audit" | "aiAgent";
type TimelineKey = "rightAway" | "twoToFourWeeks" | "planningAhead";

const SERVICE_KEYS: ServiceKey[] = ["website", "ecommerce", "crm", "ads", "audit", "aiAgent"];
const TIMELINE_KEYS: TimelineKey[] = ["rightAway", "twoToFourWeeks", "planningAhead"];

export default function ContactForm() {
  const { t, isRTL, locale } = useTranslation();
  const [selectedServiceKeys, setSelectedServiceKeys] = useState<ServiceKey[]>(["website"]);
  const [selectedTimelineKey, setSelectedTimelineKey] = useState<TimelineKey>("twoToFourWeeks");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");
    const serviceParam = params.get("service");

    if (serviceParam) {
      const decoded = decodeURIComponent(serviceParam).toLowerCase();
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

    if (subject) {
      setDetails((prev) =>
        prev ? prev : `Inquiry regarding: ${decodeURIComponent(subject)}\n`
      );
    }
  }, []);

  const toggleInterest = (key: ServiceKey) => {
    setSelectedServiceKeys((prev) => {
      if (prev.includes(key)) {
        if (prev.length === 1) return prev;
        return prev.filter((i) => i !== key);
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
      setError(t.contactForm.errorRequired);
      return;
    }

    if (selectedServiceKeys.length === 0) {
      setError(t.contactForm.errorInterests);
      return;
    }

    setIsSubmitting(true);

    const localizedServices = selectedServiceKeys.map((k) => t.contactForm.services[k]);
    const localizedTimeline = t.contactForm.timelines[selectedTimelineKey];

    const formattedName = `${trimmedName} (${trimmedCompany})`;
    const compiledDetails = `Language: ${locale.toUpperCase()}\nCompany: ${trimmedCompany}\nPhone/WhatsApp: ${trimmedPhone}\nDetails: ${trimmedDetails || "N/A"}`;

    const result = await submitAuditRequest({
      name: formattedName,
      email: trimmedEmail,
      timeline: localizedTimeline,
      budget: localizedTimeline,
      interests: localizedServices,
      details: compiledDetails
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
      <div className="w-full py-16 px-8 rounded-[32px] bg-[#f7f7f8] border border-black/15 text-center shadow-sm text-black">
        <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-3xl font-medium tracking-tight text-black mb-3">
          {t.contactForm.successTitle}
        </h3>
        <p className="text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
          {t.contactForm.successDesc}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white border border-black/15 rounded-2xl sm:rounded-[32px] p-5 sm:p-10 md:p-12 flex flex-col gap-7 sm:gap-8 text-start shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-black"
      >
        {/* 1. What do you need? */}
        <div className="flex flex-col gap-3">
          <span id="contact-need-label" className="text-xs font-mono text-neutral-600 font-medium">
            {t.contactForm.needLabel}
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-2.5" role="group" aria-labelledby="contact-need-label">
            {SERVICE_KEYS.map((key) => {
              const label = t.contactForm.services[key];
              const isSelected = selectedServiceKeys.includes(key);
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleInterest(key)}
                  aria-pressed={isSelected}
                  className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                    isSelected
                      ? "bg-black text-white border-black font-semibold shadow-sm"
                      : "bg-[#f7f7f8] border-black/10 text-neutral-700 hover:border-black/30 hover:text-black"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Target Timeline */}
        <div className="flex flex-col gap-3">
          <span id="contact-timeline-label" className="text-xs font-mono text-neutral-600 font-medium">
            {t.contactForm.timelineLabel}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5" role="radiogroup" aria-labelledby="contact-timeline-label">
            {TIMELINE_KEYS.map((key) => {
              const label = t.contactForm.timelines[key];
              const isSelected = selectedTimelineKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedTimelineKey(key)}
                  role="radio"
                  aria-checked={isSelected}
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border text-xs sm:text-sm transition-all text-center focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                    isSelected
                      ? "bg-black text-white border-black font-semibold shadow-sm"
                      : "bg-[#f7f7f8] border-black/10 text-neutral-700 hover:border-black/30 hover:text-black"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Contact Details */}
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-xs font-mono text-neutral-600 font-medium">
                {t.contactForm.nameLabel} <span className="text-black font-bold" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                aria-required="true"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contactForm.namePlaceholder}
                className="w-full bg-[#f7f7f8] border border-black/10 rounded-2xl px-5 py-3.5 text-black placeholder:text-neutral-500 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-company" className="text-xs font-mono text-neutral-600 font-medium">
                {t.contactForm.companyLabel} <span className="text-black font-bold" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-company"
                type="text"
                required
                aria-required="true"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={t.contactForm.companyPlaceholder}
                className="w-full bg-[#f7f7f8] border border-black/10 rounded-2xl px-5 py-3.5 text-black placeholder:text-neutral-500 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-xs font-mono text-neutral-600 font-medium">
                {t.contactForm.emailLabel} <span className="text-black font-bold" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                aria-required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contactForm.emailPlaceholder}
                className="w-full bg-[#f7f7f8] border border-black/10 rounded-2xl px-5 py-3.5 text-black placeholder:text-neutral-500 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-phone" className="text-xs font-mono text-neutral-600 font-medium">
                {t.contactForm.phoneLabel} <span className="text-black font-bold" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                aria-required="true"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.contactForm.phonePlaceholder}
                className="w-full bg-[#f7f7f8] border border-black/10 rounded-2xl px-5 py-3.5 text-black placeholder:text-neutral-500 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-details" className="text-xs font-mono text-neutral-600 font-medium">
              {t.contactForm.projectScopeLabel}
            </label>
            <textarea
              id="contact-details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={t.contactForm.projectScopePlaceholder}
              rows={3}
              className="w-full bg-[#f7f7f8] border border-black/10 rounded-2xl px-5 py-3.5 text-black placeholder:text-neutral-500 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm resize-none"
            />
          </div>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-[#f4f4f5] border border-black/20 text-black text-xs font-mono" role="alert">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-black/10">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black text-white font-semibold text-sm hover:bg-neutral-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 group shadow-sm"
          >
            <span>{isSubmitting ? t.contactForm.submittingBtn : t.contactForm.submitBtn}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
          </button>

          <div className="flex items-center gap-2 text-xs text-neutral-600 font-mono">
            <ShieldCheck className="w-4 h-4 text-black shrink-0" />
            <span>{t.contactForm.securityBadge}</span>
          </div>
        </div>
      </form>

      {/* Direct Studio Channels */}
      <div className="w-full pt-8 border-t border-black/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-neutral-500 block mb-1">
            {t.footer.mainStudio}
          </span>
          <p className="text-sm text-neutral-700 font-light">
            {t.nav.hqNotice}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
          <a
            href="mailto:contact@fleevy.net"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-white border border-black/15 text-xs font-mono text-black hover:bg-black hover:text-white transition-colors text-center"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>contact@fleevy.net</span>
          </a>
          <a
            href="https://wa.me/213655934124"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-white border border-black/15 text-xs font-mono text-black hover:bg-black hover:text-white transition-colors text-center"
          >
            <Phone className="w-3.5 h-3.5" />
            <span dir="ltr">+213 655 934 124</span>
          </a>
        </div>
      </div>
    </div>
  );
}
