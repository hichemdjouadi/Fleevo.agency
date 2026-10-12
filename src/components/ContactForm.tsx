"use client";

import { useState, useEffect } from "react";
import { submitAuditRequest } from "@/app/actions";
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";

export default function ContactForm() {
  const [interests, setInterests] = useState<string[]>(["Customer Acquisition Platforms"]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [scopeTier, setScopeTier] = useState("Platform + Demand Engine");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const serviceOptions = [
    "Customer Acquisition Platforms",
    "Demand Generation & Ads",
    "Full Acquisition Machine"
  ];

  const scopeOptions = [
    "Acquisition Platform Build",
    "Platform + Demand Engine",
    "Custom Web Application",
    "Pipeline Leak Audit"
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");
    if (subject) {
      setDetails((prev) =>
        prev ? prev : `Inquiry regarding: ${subject}\n`
      );
    }
  }, []);

  const toggleInterest = (option: string) => {
    setInterests((prev) => {
      if (prev.includes(option)) {
        if (prev.length === 1) return prev;
        return prev.filter((i) => i !== option);
      }
      return [...prev, option];
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
      setError("Please complete your name, company, email address, and direct phone number.");
      return;
    }

    if (interests.length === 0) {
      setError("Please select at least one service needed.");
      return;
    }

    setIsSubmitting(true);

    const formattedName = `${trimmedName} (${trimmedCompany})`;
    const compiledDetails = `Company: ${trimmedCompany}\nPhone/WhatsApp: ${trimmedPhone}\nScope Tier: ${scopeTier}\nBrief: ${trimmedDetails || "N/A"}`;

    const result = await submitAuditRequest({
      name: formattedName,
      email: trimmedEmail,
      budget: scopeTier,
      interests,
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
        <h3 className="text-3xl font-medium tracking-tight text-black mb-3">Brief Received</h3>
        <p className="text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
          Thank you. Our engineering leadership has received your project brief and will respond within 24 hours with architectural recommendations.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white border border-black/15 rounded-[32px] p-6 sm:p-10 md:p-12 flex flex-col gap-8 text-left shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-black"
      >
        {/* 1. Services Needed */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-mono text-neutral-600 font-medium">
            01 // Services Needed
          </label>
          <div className="flex flex-wrap gap-2.5" role="group" aria-label="Services Needed">
            {serviceOptions.map((opt) => {
              const isSelected = interests.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleInterest(opt)}
                  aria-pressed={isSelected}
                  className={`px-5 py-2.5 rounded-full border text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                    isSelected
                      ? "bg-black text-white border-black font-semibold shadow-sm"
                      : "bg-[#f7f7f8] border-black/10 text-neutral-700 hover:border-black/30 hover:text-black"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Scope Tiers */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-mono text-neutral-600 font-medium">
            02 // Project Scope Tier
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="radiogroup" aria-label="Scope Tier">
            {scopeOptions.map((opt) => {
              const isSelected = scopeTier === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setScopeTier(opt)}
                  role="radio"
                  aria-checked={isSelected}
                  className={`px-4 py-3 rounded-2xl border text-xs sm:text-sm transition-all text-left focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                    isSelected
                      ? "bg-black text-white border-black font-semibold shadow-sm"
                      : "bg-[#f7f7f8] border-black/10 text-neutral-700 hover:border-black/30 hover:text-black"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Organization & Contact Details */}
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-xs font-mono text-neutral-600 font-medium">
                Your Name <span className="text-black font-bold" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                aria-required="true"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full bg-[#f7f7f8] border border-black/10 rounded-2xl px-5 py-3.5 text-black placeholder:text-neutral-500 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-company" className="text-xs font-mono text-neutral-600 font-medium">
                Company / Organization <span className="text-black font-bold" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-company"
                type="text"
                required
                aria-required="true"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company or brand name"
                className="w-full bg-[#f7f7f8] border border-black/10 rounded-2xl px-5 py-3.5 text-black placeholder:text-neutral-500 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-xs font-mono text-neutral-600 font-medium">
                Email Address <span className="text-black font-bold" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                aria-required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-[#f7f7f8] border border-black/10 rounded-2xl px-5 py-3.5 text-black placeholder:text-neutral-500 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-phone" className="text-xs font-mono text-neutral-600 font-medium">
                Direct Phone / WhatsApp <span className="text-black font-bold" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                aria-required="true"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+213 655 00 00 00"
                className="w-full bg-[#f7f7f8] border border-black/10 rounded-2xl px-5 py-3.5 text-black placeholder:text-neutral-500 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-details" className="text-xs font-mono text-neutral-600 font-medium">
              Project Brief &amp; Acquisition Objectives
            </label>
            <textarea
              id="contact-details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Outline your current acquisition setup, target customer flow, and primary commercial goals..."
              rows={4}
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
            <span>{isSubmitting ? "Submitting Brief..." : "Submit Project Brief"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2 text-xs text-neutral-600 font-mono">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Direct engineering review · Response in 24h</span>
          </div>
        </div>
      </form>

      {/* Direct Studio Channels */}
      <div className="w-full pt-8 border-t border-black/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-neutral-500 block mb-1">
            Direct Studio Access
          </span>
          <p className="text-sm text-neutral-700 font-light">
            Prefer direct executive correspondence? Reach our studio lines directly.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@fleevy.agency"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-black/15 text-xs font-mono text-black hover:bg-black hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>hello@fleevy.agency</span>
          </a>
          <a
            href="https://wa.me/213655934124"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-black/15 text-xs font-mono text-black hover:bg-black hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+213 655 934 124</span>
          </a>
        </div>
      </div>
    </div>
  );
}
