"use client";

import ROICalculator from "./ROICalculator";
import IntakeForm from "./IntakeForm";

export default function ConversionEngine() {
  return (
    <section className="relative w-full bg-black text-white py-32 md:py-48 px-6 md:px-16 border-t border-white/10" id="intake">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex flex-col mb-24 text-center items-center">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-6 block">Final Protocol</span>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] max-w-4xl">
            Stop bleeding revenue. <br className="hidden md:block"/> Deploy the architecture.
          </h2>
          <p className="mt-8 text-xl text-white/70 font-light max-w-2xl">
            Calculate your exact friction penalty on the left, then deploy your custom autonomous growth engine on the right.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-stretch">
          
          {/* Left Column: Latency Penalty (ROI Calculator) */}
          <div className="w-full h-full bg-[#0a0a0a] rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            <h3 className="text-2xl font-bold tracking-tight mb-8">The Friction Penalty</h3>
            <div className="relative z-10 w-full h-full">
              <ROICalculator />
            </div>
          </div>

          {/* Right Column: Intake Form (Deploy) */}
          <div className="w-full h-full bg-[#050505] rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <IntakeForm />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
