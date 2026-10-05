"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, CalendarCheck, CreditCard, ShoppingCart, Star, Zap, UserPlus, Smartphone, Target, LayoutDashboard, TrendingUp } from "lucide-react";

export default function Architectures() {
  return (
    <section className="relative w-full px-6 py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="flex flex-col mb-20 gap-6">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-400">The Infrastructure</span>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none text-white">
            Growth Engines.
          </h2>
          <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl tracking-tight leading-relaxed">
            We don't build digital brochures. We build operational infrastructure that acquires leads, processes payments, and prevents calendar chaos.
          </p>
        </div>

        <div className="flex flex-col space-y-12 pb-32">
          
          {/* Pillar 01: Lead Generation */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="sticky top-24 z-10 w-full rounded-[2rem] p-6 md:p-10 lg:p-12 bg-white border border-black/5 shadow-2xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-center group overflow-hidden"
          >
            {/* Left: Content */}
            <div className="w-full lg:w-5/12 flex flex-col gap-6 relative z-10">
              <span className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 font-bold text-[10px] uppercase tracking-[0.2em] text-emerald-500 w-fit">Pillar 01</span>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight text-black">
                High-Ticket <br className="hidden lg:block"/> Lead Generation
              </h3>
              <p className="text-base text-black/60 font-medium leading-relaxed">
                We build systems that filter time-wasters and route highly qualified buyers directly to your sales team.
              </p>
              <div className="flex flex-col gap-2 pt-4 border-t border-black/5 text-sm md:text-base">
                <span className="flex items-center gap-3 font-medium text-black/80"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Blocks unqualified leads</span>
                <span className="flex items-center gap-3 font-medium text-black/80"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Forces commitment upfront</span>
                <span className="flex items-center gap-3 font-medium text-black/80"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct-to-calendar booking</span>
              </div>
            </div>

            {/* Right: The MASSIVE Features */}
            <div className="w-full lg:w-7/12 h-[450px] relative rounded-[2rem] border border-white/5 bg-[#f5f5f5] overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />
              
              <div className="relative w-full h-full max-w-[500px]">
                {/* Feature 1: CRM Pipeline (NEW) */}
                <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute top-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-2xl border border-black/5 p-5 rounded-[2rem] shadow-2xl w-[85%] z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/5 p-3 rounded-xl"><LayoutDashboard className="w-5 h-5 text-emerald-400" /></div>
                    <div>
                      <p className="text-[10px] text-black/50 uppercase tracking-widest font-bold">CRM Pipeline</p>
                      <p className="text-base text-black font-medium">Lead Auto-Assigned</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500/30">
                    High Priority
                  </div>
                </motion.div>

                {/* Feature 2: Massive Chatbot Bubble */}
                <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute top-36 left-4 bg-white/90 backdrop-blur-2xl border border-black/5 p-6 rounded-[2rem] rounded-tl-md shadow-2xl w-[85%] z-20">
                  <p className="text-sm text-black/50 mb-3 font-medium uppercase tracking-widest flex items-center gap-2"><Smartphone className="w-4 h-4"/> AI Assistant</p>
                  <p className="text-xl md:text-2xl text-black font-medium leading-snug">"Great! I've confirmed your budget. Should I book your test drive for Tuesday at 3 PM?"</p>
                </motion.div>

                {/* Feature 3: Massive Telegram Alert */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute bottom-16 right-4 bg-white/90 backdrop-blur-2xl border border-emerald-500/30 p-6 rounded-[2.5rem] flex items-center gap-6 shadow-[0_20px_50px_rgba(16,185,129,0.2)] w-[90%] z-30">
                  <div className="bg-[#2AABEE] p-4 rounded-2xl shrink-0 shadow-lg"><MessageCircle className="w-8 h-8 text-black" /></div>
                  <div className="flex flex-col">
                    <p className="text-sm text-black/60 mb-1 font-medium">Telegram Alert</p>
                    <p className="text-2xl text-black font-bold tracking-tight">New Qualified Lead</p>
                    <p className="text-base text-emerald-400 mt-1 font-medium">Value: 150,000 DA</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Pillar 02: E-Commerce */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="sticky top-32 z-20 w-full rounded-[2rem] p-6 md:p-10 lg:p-12 bg-[#050505] border border-white/5 shadow-2xl flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center group overflow-hidden"
          >
            {/* Left (Reversed): Content */}
            <div className="w-full lg:w-5/12 flex flex-col gap-6 relative z-10">
              <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 font-bold text-[10px] uppercase tracking-[0.2em] text-blue-400 w-fit">Pillar 02</span>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight text-white">
                Frictionless <br className="hidden lg:block"/> E-Commerce
              </h3>
              <p className="text-base text-white/60 font-medium leading-relaxed">
                Every extra step in checkout is a lost sale. We build frictionless stores that convert attention into cash, preventing cart abandonment before it happens.
              </p>
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10 text-sm md:text-base">
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Frictionless checkout flow</span>
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Automated cart recovery SMS</span>
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Stripe & Local Payments</span>
              </div>
            </div>

            {/* Right: The MASSIVE Features */}
            <div className="w-full lg:w-7/12 h-[450px] relative rounded-[2rem] border border-white/5 bg-white overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
              
              <div className="relative w-full h-full max-w-[500px]">
                {/* Feature 1: Revenue Graph (NEW) */}
                <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute top-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-2xl border border-black/5 p-5 rounded-[2rem] shadow-2xl w-[85%] z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-xl"><TrendingUp className="w-5 h-5 text-blue-400" /></div>
                    <div>
                      <p className="text-[10px] text-black/50 uppercase tracking-widest font-bold">Live Analytics</p>
                      <p className="text-base text-black font-medium">Daily Revenue</p>
                    </div>
                  </div>
                  <div className="text-2xl font-light text-blue-400">
                    +42%
                  </div>
                </motion.div>

                {/* Feature 2: Massive Abandoned Cart SMS */}
                <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute top-36 right-4 bg-white/90 backdrop-blur-2xl border border-black/5 p-6 rounded-[2.5rem] rounded-tr-md shadow-2xl w-[85%] z-20">
                  <div className="flex gap-4 mb-2 items-start">
                    <div className="bg-white/10 p-3 rounded-full shrink-0"><ShoppingCart className="w-6 h-6 text-blue-400" /></div>
                    <p className="text-xl md:text-2xl text-black leading-snug font-medium">
                      "Hey! You left a book in your cart. Use code <span className="text-blue-400 font-bold">SAVE10</span> to finish your order!"
                    </p>
                  </div>
                </motion.div>

                {/* Feature 3: Massive Stripe Notification */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute bottom-16 left-4 bg-white/90 backdrop-blur-2xl border border-blue-500/30 p-6 rounded-[2.5rem] flex items-center gap-6 shadow-[0_20px_50px_rgba(59,130,246,0.2)] w-[90%] z-30">
                  <div className="bg-[#635BFF] p-4 rounded-2xl shrink-0 shadow-lg"><CreditCard className="w-8 h-8 text-black" /></div>
                  <div className="flex flex-col">
                    <p className="text-sm text-black/60 mb-1 font-medium">Stripe Payment</p>
                    <p className="text-2xl text-black font-bold tracking-tight">15,000 DA Received</p>
                    <p className="text-base text-blue-400 mt-1 font-medium">Course Access Granted</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Pillar 03: Reservations */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="sticky top-40 z-30 w-full rounded-[2rem] p-6 md:p-10 lg:p-12 bg-white border border-black/5 shadow-2xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-center group overflow-hidden"
          >
            {/* Left: Content */}
            <div className="w-full lg:w-5/12 flex flex-col gap-6 relative z-10">
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 font-bold text-[10px] uppercase tracking-[0.2em] text-purple-600 w-fit">Pillar 03</span>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight text-black">
                Automated <br className="hidden lg:block"/> Bookings
              </h3>
              <p className="text-base text-black/60 font-medium leading-relaxed">
                Double-bookings and no-shows cost you money. The system manages your calendar, takes deposits, and forces accountability.
              </p>
              <div className="flex flex-col gap-2 pt-4 border-t border-black/5 text-sm md:text-base">
                <span className="flex items-center gap-3 font-medium text-black/80"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Eliminates calendar conflicts</span>
                <span className="flex items-center gap-3 font-medium text-black/80"><CheckCircle2 className="w-4 h-4 text-purple-500" /> WhatsApp no-show alerts</span>
                <span className="flex items-center gap-3 font-medium text-black/80"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Automated Google reviews</span>
              </div>
            </div>

            {/* Right: The MASSIVE Features */}
            <div className="w-full lg:w-7/12 h-[450px] relative rounded-[2rem] border border-white/5 bg-[#f5f5f5] overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
              
              <div className="relative w-full h-full max-w-[500px]">
                {/* Feature 1: No-Show Resolver (NEW) */}
                <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute top-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-2xl border border-black/5 p-5 rounded-[2rem] shadow-2xl w-[85%] z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-500/20 p-3 rounded-xl"><CalendarCheck className="w-5 h-5 text-red-400" /></div>
                    <div>
                      <p className="text-[10px] text-black/50 uppercase tracking-widest font-bold">Client Cancelled</p>
                      <p className="text-base text-black font-medium">Table instantly filled from waitlist</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-purple-400" />
                </motion.div>

                {/* Feature 2: Massive WhatsApp Reminder */}
                <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute top-36 left-4 bg-white/90 backdrop-blur-2xl border border-purple-500/30 p-6 rounded-[2.5rem] rounded-bl-md shadow-[0_20px_50px_rgba(168,85,247,0.15)] w-[85%] z-30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#25D366] p-2 rounded-full"><MessageCircle className="w-4 h-4 text-black" /></div>
                    <span className="text-xs text-black/50 font-bold uppercase tracking-widest">WhatsApp Auto-Sender</span>
                  </div>
                  <p className="text-xl md:text-2xl text-black font-medium leading-snug">
                    "Hi! Your table for 4 at Oasis is confirmed for tonight at 8:00 PM. See you soon!"
                  </p>
                </motion.div>
                
                {/* Feature 3: Massive Review Request */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute bottom-16 right-4 bg-white/90 backdrop-blur-2xl border border-black/5 p-6 rounded-[2.5rem] rounded-tr-md shadow-2xl w-[90%] z-20">
                  <div className="flex gap-2 mb-4">
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="text-xl md:text-2xl text-black leading-snug font-medium mb-3">
                    "Thanks for dining! Tap here to leave a 5-star review."
                  </p>
                  <p className="text-sm text-purple-400 font-bold">Sent 2 hours after booking ends</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
