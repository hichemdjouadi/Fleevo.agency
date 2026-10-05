"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";

const PROJECTS = [
  {
    title: "MO PIZZA Web App",
    category: "Full-Stack Development & Order Management",
    client: "Morad Oudia's Restaurant",
    image: "/project-mopizza2.png",
    bg: "bg-[#050505]",
    link: "https://mopizzarestaurants.netlify.app/",
    stats: [
      { label: "Increase in online orders", value: "+340%" },
      { label: "Reduction in phone wait times", value: "-85%" },
    ],
  },
  {
    title: "Al-Madina Bookstore",
    category: "E-Commerce Architecture",
    client: "National Book Retailer",
    image: "/project-almadina.png",
    bg: "bg-[#050505]",
    link: "https://almadinabookstore.com/",
    stats: [
      { label: "Conversion Rate", value: "4.8%" },
      { label: "Inventory sync latency", value: "<1s" },
    ],
  }
];

export default function Work() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 pt-32 pb-16 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.03),_transparent_50%)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1400px] mx-auto w-full relative z-10"
        >
          <div className="overflow-hidden mb-6 mt-12">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-bold tracking-[0.3em] uppercase text-white/40 block"
            >
              Live Infrastructure
            </motion.span>
          </div>
          
          <h1 className="text-[14vw] md:text-[10vw] font-semibold tracking-tighter leading-[0.85] mb-12">
            Proof of <br/> Concept.
          </h1>
          
          <p className="text-xl md:text-3xl text-white/60 max-w-3xl font-light leading-relaxed tracking-tight">
            We don't build portfolios. We deploy autonomous profit engines. Explore the live architectures currently scaling operations.
          </p>
        </motion.div>
      </section>

      {/* Projects Showcase */}
      <section className="relative z-20 pb-32">
        <div className="flex flex-col gap-32 md:gap-48 px-4 md:px-16 max-w-[1800px] mx-auto">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-black mb-8">
            Ready to scale?
          </h2>
          <p className="text-xl text-black/60 mb-16 max-w-lg">
            Stop losing leads to poor infrastructure. Let's build a system that works as hard as you do.
          </p>
          <Magnetic intensity={0.2}>
            <TransitionLink 
              href="/contact" 
              className="inline-flex items-center justify-center px-12 py-6 rounded-full bg-black text-white text-xl font-medium hover:scale-105 transition-transform duration-300"
            >
              Start a Project
            </TransitionLink>
          </Magnetic>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-8 md:gap-12"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8 px-2 md:px-0">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/40">0{index + 1} / {project.client}</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter">{project.title}</h2>
        </div>
        <div className="text-left md:text-right max-w-sm">
          <p className="text-lg text-white/60 leading-relaxed">{project.category}</p>
        </div>
      </div>

      <a href={project.link} target="_blank" rel="noreferrer" className="group relative w-full block overflow-hidden rounded-[32px] md:rounded-[48px]">
        {/* Parallax image container */}
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#0A0A0A] overflow-hidden">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover md:object-contain object-top md:object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1]" 
            unoptimized 
          />
        </div>
        
        {/* Floating View Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[0.16,1,0.3,1] z-20 pointer-events-none">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-black font-semibold tracking-wide uppercase text-sm shadow-2xl">
            Visit Site
          </div>
        </div>
      </a>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-0 pt-4">
        {project.stats.map((stat: any, i: number) => (
          <div key={i} className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-light tracking-tight">{stat.value}</span>
            <span className="text-sm text-white/40 uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
