import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-24 selection:bg-black selection:text-white">
      <div className="max-w-[800px] mx-auto px-6 flex flex-col items-center">
        
        <div className="text-center mb-24">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-black/40 mb-6 block">Final Protocol</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
            Stop The Bleed. <br className="hidden md:block"/> Book An Audit.
          </h1>
          <p className="mt-8 text-xl text-black/60 font-medium max-w-xl mx-auto">
            Submit your business details below. We'll identify the friction killing your conversions and present a complete infrastructure plan.
          </p>
        </div>

        <ContactForm />

      </div>
    </main>
  );
}
