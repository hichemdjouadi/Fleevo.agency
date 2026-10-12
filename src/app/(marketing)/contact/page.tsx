import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-36 pb-28 selection:bg-black selection:text-white relative overflow-hidden">
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[840px] mx-auto px-6 flex flex-col items-center relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200 mb-4 inline-block">
            Start a Project
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter leading-[0.95] text-black">
            Let's build your <br className="hidden sm:block"/> next platform.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-600 font-light max-w-xl mx-auto leading-relaxed">
            Tell us about your business and goals. We'll reply within 24 hours with honest advice, a realistic timeframe, and an exact quote.
          </p>
        </div>

        <ContactForm />

      </div>
    </main>
  );
}
