"use client";

import { useState } from "react";
import { submitAuditRequest } from "@/app/actions";
import { CheckCircle2, ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [timeline, setTimeline] = useState("Ready to Start Immediately");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const interestOptions = [
    "Direct WhatsApp / Food Ordering",
    "High-Speed Storefront / E-Commerce",
    "Company Website Overhaul",
    "Lead Intake & Booking Flow"
  ];

  const timelineOptions = [
    "Ready to Start Immediately",
    "Within 2 to 3 Weeks",
    "Next Month",
    "Just Exploring Options"
  ];

  const toggleInterest = (option: string) => {
    setInterests(prev => 
      prev.includes(option) ? prev.filter(i => i !== option) : [...prev, option]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const compiledDetails = `Phone/WhatsApp: ${phone}\nTimeline: ${timeline}\nNotes: ${details}`;

    const result = await submitAuditRequest({
      name, 
      email, 
      budget: timeline, 
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
      <div className="w-full py-16 px-8 rounded-[32px] bg-white border border-emerald-500/30 text-center shadow-xl text-black">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-3xl font-medium tracking-tight text-black mb-3">Request Received</h3>
        <p className="text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
          We’ve received your details and will get in touch on WhatsApp or email within 24 hours with an honest timeline and quote.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Direct WhatsApp Callout Banner */}
      <div className="w-full p-5 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0">
            <MessageCircle className="w-5 h-5 fill-white/20" />
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-950">Want a faster response?</p>
            <p className="text-xs text-emerald-800 font-light">Chat directly with the builder on WhatsApp.</p>
          </div>
        </div>
        <a
          href="https://wa.me/213655934124?text=Hi%20Hichem,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors shrink-0 flex items-center gap-2"
        >
          <span>Chat on WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <form onSubmit={handleSubmit} className="w-full bg-white border border-black/10 rounded-[32px] p-6 sm:p-10 md:p-12 flex flex-col gap-8 text-left shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-black">
        
        {/* Interests Selection */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium">
            What do you need built?
          </label>
          <div className="flex flex-wrap gap-2.5" role="group" aria-label="Project Interests">
            {interestOptions.map((opt) => {
              const isSelected = interests.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleInterest(opt)}
                  aria-pressed={isSelected}
                  className={`px-4 py-2 rounded-full border text-xs transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                    isSelected 
                      ? "bg-black text-white border-black font-medium shadow-sm" 
                      : "bg-neutral-50 border-black/10 text-neutral-700 hover:border-black/30 hover:text-black"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary Input Fields */}
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-wider text-neutral-600">
                Your Name <span className="text-emerald-600" aria-hidden="true">*</span>
              </label>
              <input 
                id="contact-name"
                type="text" 
                required
                aria-required="true"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Karim B."
                className="w-full bg-neutral-50 border border-black/10 rounded-2xl px-5 py-3 text-black placeholder:text-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-phone" className="text-xs font-mono uppercase tracking-wider text-neutral-600">
                Phone or WhatsApp <span className="text-emerald-600" aria-hidden="true">*</span>
              </label>
              <input 
                id="contact-phone"
                type="tel"
                required
                aria-required="true"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0550 00 00 00 or +213..."
                className="w-full bg-neutral-50 border border-black/10 rounded-2xl px-5 py-3 text-black placeholder:text-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-wider text-neutral-600">
              Email Address <span className="text-emerald-600" aria-hidden="true">*</span>
            </label>
            <input 
              id="contact-email"
              type="email" 
              required
              aria-required="true"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full bg-neutral-50 border border-black/10 rounded-2xl px-5 py-3 text-black placeholder:text-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-details" className="text-xs font-mono uppercase tracking-wider text-neutral-600">
              About Your Project (Optional)
            </label>
            <textarea 
              id="contact-details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Tell us about your business, your current website (if any), and what you want to achieve..."
              rows={3}
              className="w-full bg-neutral-50 border border-black/10 rounded-2xl px-5 py-3 text-black placeholder:text-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-colors text-sm resize-none"
            />
          </div>
        </div>

        {/* Project Timeline Selection */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium">
            When are you looking to start?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" role="radiogroup" aria-label="Timeline Range">
            {timelineOptions.map((opt) => {
              const isSelected = timeline === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setTimeline(opt)}
                  role="radio"
                  aria-checked={isSelected}
                  className={`px-3 py-2.5 rounded-xl border text-xs transition-all text-center focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                    isSelected 
                      ? "bg-black text-white border-black font-medium shadow-sm" 
                      : "bg-neutral-50 border-black/10 text-neutral-700 hover:border-black/30 hover:text-black"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono" role="alert">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-black/10">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black text-white font-semibold text-sm hover:bg-neutral-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 group shadow-lg"
          >
            <span>{isSubmitting ? "Sending..." : "Request Free Quote & Timeline"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Honest advice · Response in 24 hours</span>
          </div>
        </div>

      </form>
    </div>
  );
}
