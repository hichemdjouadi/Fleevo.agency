"use client";

import { motion } from "framer-motion";
import { Database, Zap, Cog, ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Systems() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden pt-40 md:pt-56">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 mb-32">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 mb-6 block">Our Infrastructure</span>
          <h1 className="text-[12vw] md:text-[8vw] font-medium tracking-tighter leading-none mb-8">
            The Systems.
          </h1>
          <p className="text-2xl md:text-4xl text-white/60 max-w-4xl font-light leading-tight tracking-tight">
            We deploy specialized autonomous architecture tailored to high-ticket service businesses. These are the pre-configured profit engines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-16">
          
          {/* Pillar 01 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111] border border-white/10 rounded-[3rem] p-10 md:p-16 group hover:bg-[#151515] transition-colors duration-1000 flex flex-col justify-between"
          >
            <div>
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-16">
                <Cog className="w-10 h-10 text-white/50 group-hover:rotate-90 group-hover:text-white transition-all duration-1000" />
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">High-Ticket Lead Engines</h2>
              <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
                Engineered for Dental Clinics, Medical Hubs, and Automotive Dealerships. High-trust funnels that turn passive browsers into qualified, booked appointments instantly.
              </p>
              <div className="flex flex-col gap-6 pt-12 border-t border-white/10 mb-16">
                <div className="flex items-center gap-4 text-base text-white/80"><Database className="w-5 h-5 text-white" /> Edge-Network CRM Sync</div>
                <div className="flex items-center gap-4 text-base text-white/80"><Zap className="w-5 h-5 text-white" /> Zero-Friction Lead Routing</div>
              </div>
            </div>
            <Link href="/#intake" className="inline-flex justify-center items-center gap-4 text-white font-bold tracking-[0.2em] uppercase text-sm hover:gap-6 transition-all border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black duration-500 w-full">
              Deploy <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Pillar 02 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111] border border-white/10 rounded-[3rem] p-10 md:p-16 group hover:bg-[#151515] transition-colors duration-1000 flex flex-col justify-between"
          >
            <div>
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-16">
                <Database className="w-10 h-10 text-white/50 group-hover:scale-110 group-hover:text-white transition-all duration-700" />
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Autonomous Booking</h2>
              <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
                Engineered for Tourism Agencies and Restaurants. High-volume reservation systems that sync directly with your operational CRM to eliminate no-shows autonomously.
              </p>
              <div className="flex flex-col gap-6 pt-12 border-t border-white/10 mb-16">
                <div className="flex items-center gap-4 text-base text-white/80"><Zap className="w-5 h-5 text-white" /> Automated Reservation Logic</div>
                <div className="flex items-center gap-4 text-base text-white/80"><Database className="w-5 h-5 text-white" /> Real-time Availability Sync</div>
              </div>
            </div>
            <Link href="/#intake" className="inline-flex justify-center items-center gap-4 text-white font-bold tracking-[0.2em] uppercase text-sm hover:gap-6 transition-all border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black duration-500 w-full">
              Deploy <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Pillar 03 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111] border border-white/10 rounded-[3rem] p-10 md:p-16 group hover:bg-[#151515] transition-colors duration-1000 flex flex-col justify-between"
          >
            <div>
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-16">
                <Zap className="w-10 h-10 text-white/50 group-hover:rotate-12 group-hover:text-white transition-all duration-700" />
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Scalable Commerce</h2>
              <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
                Engineered for E-Learning and Bookstores. Lightning-fast digital storefronts built on Next.js to handle massive traffic spikes with absolute zero checkout latency.
              </p>
              <div className="flex flex-col gap-6 pt-12 border-t border-white/10 mb-16">
                <div className="flex items-center gap-4 text-base text-white/80"><Zap className="w-5 h-5 text-white" /> Sub-Second Load Times</div>
                <div className="flex items-center gap-4 text-base text-white/80"><Database className="w-5 h-5 text-white" /> Enterprise CMS Architecture</div>
              </div>
            </div>
            <Link href="/#intake" className="inline-flex justify-center items-center gap-4 text-white font-bold tracking-[0.2em] uppercase text-sm hover:gap-6 transition-all border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black duration-500 w-full">
              Deploy <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
        </div>

      </div>
      <Footer />
    </main>
  );
}
