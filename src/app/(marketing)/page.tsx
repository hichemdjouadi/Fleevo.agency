"use client";

import FeaturedWork from "@/components/FeaturedWork";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/HeroVisual";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <main className="bg-[#fff] text-black selection:bg-black selection:text-white">
      
      {/* Pristine Light-Mode Hero */}
      <section className="relative w-full flex flex-col items-center pt-56 pb-24 overflow-hidden bg-[#fff]">
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-[1400px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-semibold tracking-tighter leading-[0.95] text-[#050505] w-full"
          >
            Digital design & <br className="hidden md:block"/>
            development agency
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 text-lg md:text-[24px] text-[#050505] font-medium max-w-[750px] leading-[1.3]">We design and build digital products, brands and websites for companies ready to move beyond the ordinary.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 w-full max-w-[1500px] aspect-video rounded-[40px] shadow-2xl relative overflow-hidden bg-gray-100"
          >
             <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-32 px-6 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-medium tracking-tight">What we do</h2>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.3] text-black">
            We engineer autonomous systems for high-ticket service brands. We partner with ambitious companies to design brands, websites and digital products that combine beautiful visuals with measurable business results.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col border-t border-black/10">
          {[
            { title: "Digital Product Design", desc: "We design digital products from early concepts to scalable systems. Combining product strategy, UX and interface design, we help startups and established companies turn complex ideas into clear, usable experiences." },
            { title: "Web Design & Development", desc: "We create marketing websites that explain products clearly, strengthen brands and support business growth. From structure and content to responsive design and development, every website is built around a specific goal." },
            { title: "Brand Identity", desc: "We create visual identities that give companies a distinct and consistent presence. From typography and color to digital guidelines and campaign assets, every element is designed to work as one system." },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-32 py-16 border-b border-black/10 group cursor-pointer">
              <div className="w-full md:w-1/2 flex items-start gap-8">
                <span className="text-sm font-medium opacity-40 mt-3">0{i+1}</span>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300">{feature.title}</h3>
              </div>
              <div className="w-full md:w-1/2 flex items-center">
                <p className="text-lg md:text-xl font-medium leading-relaxed opacity-60">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work (Dark Block) */}
      <div className="relative z-30 bg-[#050505] rounded-[40px] overflow-hidden pt-32 pb-40 px-6 mx-4 my-24">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl md:text-7xl font-medium text-white mb-20 text-center tracking-tight">Selected work</h2>
          <FeaturedWork />
          <div className="mt-24 flex justify-center">
             <Link href="/work" className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors text-lg font-medium">
               View all projects
             </Link>
          </div>
        </div>
      </div>

      {/* Clean Testimonials Block */}
      <section className="py-32 px-6 w-full max-w-[1200px] mx-auto text-center">
         <h2 className="text-5xl font-medium tracking-tight mb-24">Trusted by our clients</h2>
         <div className="max-w-[800px] mx-auto">
            <p className="text-2xl md:text-4xl font-medium leading-[1.4] mb-12">
               "The quality of the team's work exceeded my expectations, and since completion we have won a number of awards, including the Site of Day awwward."
            </p>
            <div className="w-16 h-[1px] bg-black/20 mx-auto mb-12"></div>
            <div className="text-sm font-bold tracking-widest uppercase">
               Zelt
            </div>
         </div>
      </section>

      {/* Stats Grid matching original Fleevo modules */}
      <div className="max-w-[1200px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-emerald-50 rounded-[32px] p-8 flex flex-col justify-end min-h-[250px] hover:scale-[1.02] transition-transform duration-500 cursor-default">
            <span className="text-5xl md:text-6xl font-medium text-black tracking-tight">15+</span>
            <span className="text-base font-medium text-black/50 mt-2">Partners</span>
          </div>
          <div className="bg-indigo-50 rounded-[32px] p-8 flex flex-col justify-end min-h-[250px] hover:scale-[1.02] transition-transform duration-500 cursor-default">
            <span className="text-5xl md:text-6xl font-medium text-black tracking-tight">40+</span>
            <span className="text-base font-medium text-black/50 mt-2">Projects Launched</span>
          </div>
          <div className="bg-blue-50 rounded-[32px] p-8 flex flex-col justify-end min-h-[250px] hover:scale-[1.02] transition-transform duration-500 cursor-default">
            <span className="text-5xl md:text-6xl font-medium text-black tracking-tight">300+</span>
            <span className="text-base font-medium text-black/50 mt-2">Million Generated</span>
          </div>
          <div className="bg-orange-50 rounded-[32px] p-8 flex flex-col justify-end min-h-[250px] hover:scale-[1.02] transition-transform duration-500 cursor-default">
            <span className="text-5xl md:text-6xl font-medium text-black tracking-tight">24/7</span>
            <span className="text-base font-medium text-black/50 mt-2">Support</span>
          </div>
        </div>
      </div>

      <FAQ />

      {/* Cinematic Outro */}
      <section className="relative w-full text-white py-56 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50 scale-105">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-5xl md:text-[110px] font-medium tracking-tighter leading-none mb-12">
            Have an idea?
          </h2>
          <Link href="/contact" className="inline-block px-12 py-6 rounded-full bg-white text-black text-xl font-medium hover:scale-105 transition-transform duration-300">
            Tell us about it
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
