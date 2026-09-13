"use client";

export default function Philosophy() {
  return (
    <section className="w-full py-40 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-8">
          80% of B2B websites lose leads in the first 10 seconds.
        </h2>
        <p className="text-xl md:text-2xl text-black/60 max-w-3xl font-light leading-relaxed mb-16">
          Most digital agencies sell you expensive digital paperweights—pretty to look at, but with zero conversion velocity and zero backend automation. We flip the script.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left w-full mt-12 border-t border-black/10 pt-16">
          <div>
            <div className="text-4xl font-extrabold mb-4">01</div>
            <h4 className="text-xl font-bold mb-2">The Aesthetic</h4>
            <p className="text-black/60">Cinematic motion design that instantly establishes authority and luxury.</p>
          </div>
          <div>
            <div className="text-4xl font-extrabold mb-4">02</div>
            <h4 className="text-xl font-bold mb-2">The Speed</h4>
            <p className="text-black/60">Optimized asset delivery ensuring your site loads in milliseconds, regardless of internet speed.</p>
          </div>
          <div>
            <div className="text-4xl font-extrabold mb-4">03</div>
            <h4 className="text-xl font-bold mb-2">The Engine</h4>
            <p className="text-black/60">Direct database integrations that route prospects to your calendar automatically.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
