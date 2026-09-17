"use client";

import { useState } from "react";
import { Paperclip } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const interestOptions = [
    "Website design", "Website redesign", "UI/UX design", 
    "Product design", "Branding", "Web development", 
    "Mobile development", "Motion / 3D"
  ];

  const budgetOptions = ["10-20k", "20-30k", "30-50k", "50-100k", "100k+"];

  const toggleInterest = (option: string) => {
    setInterests(prev => 
      prev.includes(option) ? prev.filter(i => i !== option) : [...prev, option]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const compiledNotes = `
Interests: ${interests.join(', ')}
Budget: ${budget}
Project Details: ${details}
`.trim();

    try {
      const { error: submitError } = await supabase
        .from('leads')
        .insert([
          { 
            business_name: name, 
            contact_email: email,
            notes: compiledNotes,
            niche: "Inbound Lead",
            status: "New"
          }
        ]);

      if (submitError) throw submitError;
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full py-20 text-center">
        <h3 className="text-4xl font-bold mb-4">Request Sent</h3>
        <p className="text-black/60">We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[800px] flex flex-col gap-12 text-left">
      
      {/* Interests */}
      <div className="flex flex-col gap-4">
        <label className="text-lg font-medium text-black">I'm interested in...</label>
        <div className="flex flex-wrap gap-3">
          {interestOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => toggleInterest(opt)}
              className={`px-6 py-3 rounded-full border transition-all text-sm font-medium ${interests.includes(opt) ? "bg-black text-white border-black" : "border-black/10 text-black hover:border-black"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="flex flex-col gap-8">
        <div className="relative">
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full bg-transparent border-b border-black/10 py-4 text-black placeholder:text-black/50 focus:outline-none focus:border-black transition-colors"
          />
          <span className="text-red-500 absolute top-4 right-0">*</span>
        </div>

        <div className="relative">
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-transparent border-b border-black/10 py-4 text-black placeholder:text-black/50 focus:outline-none focus:border-black transition-colors"
          />
          <span className="text-red-500 absolute top-4 right-0">*</span>
        </div>

        <div className="relative">
          <textarea 
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Tell us about your project"
            rows={1}
            className="w-full bg-transparent border-b border-black/10 py-4 text-black placeholder:text-black/50 focus:outline-none focus:border-black transition-colors resize-none"
          />
        </div>
      </div>

      {/* Budget */}
      <div className="flex flex-col gap-4">
        <label className="text-lg font-medium text-black">Project budget (USD)</label>
        <div className="flex flex-wrap gap-3">
          {budgetOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setBudget(opt)}
              className={`px-6 py-3 rounded-full border transition-all text-sm font-medium ${budget === opt ? "bg-black text-white border-black" : "border-black/10 text-black hover:border-black"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Attachment */}
      <div>
        <button type="button" className="flex items-center gap-2 text-black font-bold text-sm border-b-2 border-black pb-0.5 hover:opacity-70 transition-opacity w-fit">
          <Paperclip className="w-4 h-4" /> Add attachment
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Submit */}
      <div className="flex flex-col gap-6 pt-4">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-fit px-12 py-4 rounded-full border border-black/20 text-black font-medium hover:bg-black hover:text-white transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send request"}
        </button>
        
        <p className="text-[10px] text-black/40 max-w-sm leading-relaxed">
          This site is protected by reCAPTCHA and the Google <a href="#" className="font-bold underline">Privacy Policy</a> and <a href="#" className="font-bold underline">Terms of Service</a> apply.
        </p>
      </div>

    </form>
  );
}
