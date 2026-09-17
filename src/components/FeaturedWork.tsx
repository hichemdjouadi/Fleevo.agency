"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedWork() {
  return (
    <section className="bg-studio-dark py-32 px-6 md:px-12 rounded-t-[4rem] relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-20">Selected work</h2>
        
        {/* Asymmetrical Masonry/Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[350px] md:auto-rows-[400px]">
          
          {/* Card 1: Large Wide (Left) */}
          <Link href="/work" className="group relative block lg:col-span-8 row-span-1 md:row-span-2 rounded-[2rem] overflow-hidden bg-[#111] border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            {/* Placeholder Image */}
            <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center text-white/10 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]">
              <Image src="/dental-ui.jpg" alt="Dental UI" fill className="object-cover opacity-60" unoptimized />
            </div>
            
            <div className="absolute bottom-0 left-0 p-10 z-20 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-studio-mint text-sm font-bold tracking-widest uppercase mb-4 block">Medical Tech</span>
                <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-none mb-2">Nexus Dental</h3>
                <p className="text-lg text-white/60 font-light">+14,000,000 DA in 30 Days</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </Link>

          {/* Card 2: Tall Portrait (Right) */}
          <Link href="/work" className="group relative block lg:col-span-4 row-span-1 md:row-span-2 rounded-[2rem] overflow-hidden bg-studio-lavender/10 border border-studio-lavender/20">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]">
               <Image src="/tourism-ui.jpg" alt="Tourism App" fill className="object-cover opacity-80 mix-blend-overlay" unoptimized />
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <span className="text-studio-lavender text-sm font-bold tracking-widest uppercase mb-3 block">Hospitality</span>
              <h3 className="text-3xl font-medium text-white tracking-tight leading-none mb-2">Oasis Resorts</h3>
              <p className="text-base text-white/60 font-light">Autonomous Booking CRM</p>
            </div>
          </Link>

          {/* Card 3: Standard Square */}
          <Link href="/work" className="group relative block lg:col-span-5 row-span-1 rounded-[2rem] overflow-hidden bg-white text-black">
            <div className="absolute inset-0 p-8 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1] flex items-center justify-center">
              <Image src="/agency-abstract.jpg" alt="Abstract" fill className="object-cover opacity-20" unoptimized />
            </div>
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full flex justify-between items-end">
              <div>
                <span className="text-black/40 text-sm font-bold tracking-widest uppercase mb-2 block">Commerce</span>
                <h3 className="text-2xl font-medium tracking-tight leading-none">Vertex Store</h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </div>
            </div>
          </Link>

          {/* Card 4: Wide Rectangle */}
          <Link href="/work" className="group relative block lg:col-span-7 row-span-1 rounded-[2rem] overflow-hidden bg-[#1a1a1a] border border-white/5">
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
             <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                <Image src="/dental-ui.jpg" alt="More Work" fill className="object-cover opacity-40 grayscale" unoptimized />
             </div>
             <div className="absolute bottom-0 left-0 p-8 z-20 w-full md:w-1/2">
                <span className="text-white/60 text-sm font-bold tracking-widest uppercase mb-3 block">Real Estate</span>
                <h3 className="text-3xl font-medium text-white tracking-tight leading-none mb-2">Aura Properties</h3>
                <p className="text-base text-white/70 font-light">Lead Generation Architecture</p>
             </div>
          </Link>

        </div>
        
        <div className="flex justify-center mt-20">
          <Link href="/work" className="px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium">
            View full archive
          </Link>
        </div>
      </div>
    </section>
  );
}
