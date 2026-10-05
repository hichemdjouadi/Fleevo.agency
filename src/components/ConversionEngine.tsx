"use client";

import TransitionLink from "./TransitionLink";

export default function ConversionEngine() {
  return (
    <section className="relative w-full bg-black text-white py-24 md:py-32 px-6 md:px-12 border-t border-white/10" id="intake">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex flex-col mb-20 text-center items-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-400 mb-6 block">Final Protocol</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[0.9] max-w-3xl">
            Your pipeline is leaking. <br className="hidden md:block"/> Let's fix it.
          </h2>
          <p className="mt-6 text-lg text-white/70 font-medium max-w-2xl">
            Book a technical audit. We'll identify the friction killing your conversions and map out the exact infrastructure you need to fix it.
          </p>
        </div>

        <div className="flex justify-center items-center">
          {/* CTA (Deploy) */}
          <div className="w-full max-w-4xl h-full bg-[#050505] rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight">Ready to fix the bleed?</h3>
              <p className="text-lg text-white/60">We handle the entire build from strategy to deployment.</p>
              <TransitionLink href="/contact" className="mt-4 inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-black text-lg font-bold hover:scale-105 transition-transform duration-300">
                Book a Technical Audit
              </TransitionLink>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
