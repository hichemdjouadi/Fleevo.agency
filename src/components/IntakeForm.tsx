"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Magnetic from "./Magnetic";

export default function IntakeForm() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => setStep(2);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: submitError } = await supabase
        .from('leads')
        .insert([
          { 
            business_name: businessName, 
            contact_email: contactEmail,
            notes: "Phone Number: " + phoneNumber,
            niche: niche,
            website_url: websiteUrl || null
          }
        ]);

      if (submitError) throw submitError;

      setIsDone(true);
    } catch (err: any) {
      setError(err.message || "Failed to initialize engine. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full relative flex justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black/0 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-2xl relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm relative overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            {!isDone ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
              >
                {step === 1 ? (
                  <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <label className="block text-xl font-medium mb-8 text-white/80">Phase 01: Industry Architecture</label>
                    <div className="flex flex-col gap-4">
                      {["Dental & Medical Clinics", "Automotive (Sales & Rentals)", "Tourism Agencies & Restaurants", "E-Learning & Bookstores"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setNiche(opt)}
                          className={`w-full text-left px-8 py-5 rounded-[1.5rem] border transition-all duration-300 ${
                            niche === opt 
                              ? "bg-emerald-500 text-black border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-bold" 
                              : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/30 hover:text-white"
                          } focus-visible:outline-none`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!niche}
                      className="mt-6 flex items-center justify-center gap-4 w-full bg-white text-black px-8 py-5 rounded-[1.5rem] font-bold tracking-[0.2em] uppercase disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/80 transition-colors"
                    >
                      Initialize Parameters <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-6">
                    <label className="block text-xl font-medium mb-4 text-white/80">Phase 02: Blueprint Initialization</label>
                    <div className="flex flex-col gap-4">
                      <input 
                        type="text" 
                        required 
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Business Name"
                        className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none focus:border-white/40 transition-colors"
                      />
                      <input 
                        type="email" 
                        required 
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="Work Email"
                        className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none focus:border-white/40 transition-colors"
                      />
                      <input 
                        type="tel" 
                        required 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone Number (Important)"
                        className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none focus:border-white/40 transition-colors"
                      />
                      <input 
                        type="url" 
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="Website URL (Optional)"
                        className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                    
                    {error && (
                      <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-400 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p>{error}</p>
                      </div>
                    )}

                    <div className="flex gap-4 mt-8">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-4 bg-transparent border border-white/10 text-white font-medium rounded-xl hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                      >
                        Back
                      </button>
                      <Magnetic intensity={0.5}>
                        <button
                          type="submit"
                          disabled={isSubmitting || !businessName || !contactEmail || !phoneNumber}
                          className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold uppercase tracking-[0.2em] text-sm px-8 py-5 rounded-full hover:bg-gray-200 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" /> 
                              Connecting...
                            </span>
                          ) : (
                            "Start Your Build"
                          )}
                        </button>
                      </Magnetic>
                    </div>
                  </motion.div>
                )}
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Lead Captured Securely</h3>
                <p className="text-white/60 mb-8 max-w-sm">
                  Your data has been injected directly into our PostgreSQL database. We will review your architecture requirements immediately.
                </p>
                <button 
                  onClick={() => { setStep(1); setNiche(""); setBusinessName(""); setContactEmail(""); setPhoneNumber(""); setWebsiteUrl(""); setIsDone(false); }}
                  className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                >
                  Submit Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
