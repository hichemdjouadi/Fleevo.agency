import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-36 pb-0 selection:bg-black selection:text-white relative overflow-hidden flex flex-col justify-between">
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[880px] mx-auto px-6 pb-28 flex flex-col items-center relative z-10 w-full">

        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.035em] leading-[0.95] text-black">
            Let&apos;s build an acquisition <br className="hidden sm:block" />
            <span className="font-serif italic font-light">engine that scales.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-600 font-light max-w-xl mx-auto leading-relaxed">
            Tell us what you need. We review every inquiry and reply within 24 hours.
          </p>
        </div>

        <ContactForm />

      </div>

      <Footer />
    </main>
  );
}
