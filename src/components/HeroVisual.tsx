"use client";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center">
      <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

