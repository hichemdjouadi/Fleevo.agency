"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  metric: string;
  category: string;
  description: string;
  bg: string;
  image: string;
}

function CinematicProject({ project }: { project: Project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const yOffset = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="h-screen w-full sticky top-0 flex flex-col justify-center overflow-hidden border-t border-white/5">
      
      {/* Background Deep Blur */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale: imageScale, y: yOffset }}
      >
        <div className="absolute inset-0 bg-black/80 z-10 backdrop-blur-3xl" />
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-20 mix-blend-luminosity blur-xl"
        />
        <div className={`absolute inset-0 ${project.bg} opacity-90 mix-blend-multiply z-10`} />
      </motion.div>

      {/* Main UI */}
      <div className="relative z-20 max-w-[1600px] w-full px-6 md:px-16 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text & Metric */}
        <div className="flex flex-col gap-8">
          <span className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase text-white inline-flex w-fit shadow-2xl">
            {project.category}
          </span>
          <h2 className="text-[12vw] md:text-[6vw] font-medium tracking-tighter leading-none text-white drop-shadow-2xl">
            {project.title}
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/60 max-w-xl">
            {project.description}
          </p>

          <div className="mt-12 flex flex-col items-start gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400 flex items-center gap-2">Verified Result</span>
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <ArrowUpRight className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">{project.metric}</span>
            </div>
          </div>
        </div>

        {/* Right: The Interactive Glimpse */}
        <Link href="/work" className="relative w-full aspect-video rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl block">
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-20" />
          
          {/* Glimpse Image */}
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out z-10"
          />

          {/* Centered Play Button / Expand UI */}
          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <PlayCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Tag */}
          <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">View Full Case Study</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </Link>

      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const PROJECTS = [
    {
      title: "Nexus Dental",
      metric: "+14,000,000 DA in 30 Days",
      category: "High-Ticket Lead Engine",
      description: "A high-converting patient acquisition system that filled their schedule with premium implant clients without spending a dime more on ads.",
      bg: "bg-[#0a0a0a]", 
      image: "/dental-ui.jpg"
    },
    {
      title: "Oasis Hospitality",
      metric: "Fully Booked 2 Weeks Out",
      category: "Booking CRM",
      description: "An automated reservation engine that completely eliminated no-shows and filled every single table autonomously.",
      bg: "bg-[#0c0c0c]",
      image: "/tourism-ui.jpg"
    },
    {
      title: "Vertex Commerce",
      metric: "+142% Increase in Sales",
      category: "Scalable Architecture",
      description: "A lightning-fast digital storefront that stopped customers from abandoning their carts and doubled their monthly revenue.",
      bg: "bg-[#050505]",
      image: "/agency-abstract.jpg"
    }
  ];

  return (
    <section className="relative bg-black w-full flex flex-col">
      {PROJECTS.map((project, idx) => (
        <CinematicProject key={idx} project={project} />
      ))}
    </section>
  );
}
