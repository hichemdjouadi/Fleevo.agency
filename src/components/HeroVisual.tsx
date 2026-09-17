"use client";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
