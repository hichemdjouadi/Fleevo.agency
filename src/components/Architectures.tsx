"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, CalendarCheck, CreditCard, ShoppingCart, Star, Zap, UserPlus, Smartphone, Target, LayoutDashboard, TrendingUp } from "lucide-react";

export default function Architectures() {
  return (
    <section className="relative w-full px-6 py-24 md:py-40 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        <div className="flex flex-col mb-24 gap-6">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400">How We Help You</span>
          <h2 className="text-[10vw] md:text-[6vw] font-medium tracking-tighter leading-none text-white">
            The Growth Engines.
          </h2>
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl tracking-tight leading-relaxed">
            We don't just build websites. We build automated systems that generate leads, process sales, and manage your bookings while you sleep.
          </p>
        </div>

        <div className="flex flex-col space-y-12 pb-32">
          
          {/* Pillar 01: Lead Generation */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="sticky top-24 z-10 w-full rounded-[2.5rem] p-8 md:p-12 lg:p-16 bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-16 items-center group overflow-hidden"
          >
            {/* Left: Content */}
            <div className="w-full lg:w-5/12 flex flex-col gap-8 relative z-10">
              <span className="px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-emerald-400 w-fit">Pillar 01</span>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight text-white">
                High-Ticket <br className="hidden lg:block"/> Lead Generation
              </h3>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                Perfect for Dental Clinics, Medical Hubs, and Dealerships. We stop time-wasters. Our system automatically answers questions, qualifies buyers, and sends the best leads straight to your phone.
              </p>
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-sm md:text-base">
                <span className="flex items-center gap-4 font-medium text-white/80"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Filters out junk and spam leads</span>
                <span className="flex items-center gap-4 font-medium text-white/80"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Automatically books meetings on your calendar</span>
                <span className="flex items-center gap-4 font-medium text-white/80"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Instant Telegram/WhatsApp notifications</span>
              </div>
            </div>

            {/* Right: The MASSIVE Features */}
            <div className="w-full lg:w-7/12 h-[550px] relative rounded-3xl border border-white/5 bg-[#111] overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />
              
              <div className="relative w-full h-full max-w-[550px]">
                {/* Feature 1: CRM Pipeline (NEW) */}
                <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#1f1f1f]/90 backdrop-blur-2xl border border-white/10 p-5 rounded-[2rem] shadow-2xl w-[85%] z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/5 p-3 rounded-xl"><LayoutDashboard className="w-5 h-5 text-emerald-400" /></div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">CRM Pipeline</p>
                      <p className="text-base text-white font-medium">Lead Auto-Assigned</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500/30">
                    High Priority
                  </div>
                </motion.div>

                {/* Feature 2: Massive Chatbot Bubble */}
                <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute top-36 left-4 bg-[#1a1a1a]/90 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] rounded-tl-md shadow-2xl w-[85%] z-20">
                  <p className="text-sm text-white/50 mb-3 font-medium uppercase tracking-widest flex items-center gap-2"><Smartphone className="w-4 h-4"/> AI Assistant</p>
                  <p className="text-xl md:text-2xl text-white font-medium leading-snug">"Great! I've confirmed your budget. Should I book your test drive for Tuesday at 3 PM?"</p>
                </motion.div>

                {/* Feature 3: Massive Telegram Alert */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute bottom-16 right-4 bg-[#222]/90 backdrop-blur-2xl border border-emerald-500/30 p-6 rounded-[2.5rem] flex items-center gap-6 shadow-[0_20px_50px_rgba(16,185,129,0.2)] w-[90%] z-30">
                  <div className="bg-[#2AABEE] p-4 rounded-2xl shrink-0 shadow-lg"><MessageCircle className="w-8 h-8 text-white" /></div>
                  <div className="flex flex-col">
                    <p className="text-sm text-white/60 mb-1 font-medium">Telegram Alert</p>
                    <p className="text-2xl text-white font-bold tracking-tight">New Qualified Lead</p>
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
            className="sticky top-32 z-20 w-full rounded-[2.5rem] p-8 md:p-12 lg:p-16 bg-[#050505] border border-white/10 shadow-2xl flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center group overflow-hidden"
          >
            {/* Left (Reversed): Content */}
            <div className="w-full lg:w-5/12 flex flex-col gap-8 relative z-10">
              <span className="px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-blue-400 w-fit">Pillar 02</span>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight text-white">
                Scalable <br className="hidden lg:block"/> E-Commerce
              </h3>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                Perfect for E-Learning Platforms and Bookstores. We build lightning-fast online stores. Your customers will never wait for a page to load, meaning they buy more and abandon fewer carts.
              </p>
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-sm md:text-base">
                <span className="flex items-center gap-4 font-medium text-white/80"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Instant page loading speeds</span>
                <span className="flex items-center gap-4 font-medium text-white/80"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Automated abandoned cart recovery emails</span>
                <span className="flex items-center gap-4 font-medium text-white/80"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Seamless Stripe & Local Payment integrations</span>
              </div>
            </div>

            {/* Right: The MASSIVE Features */}
            <div className="w-full lg:w-7/12 h-[550px] relative rounded-3xl border border-white/5 bg-[#0a0a0a] overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
              
              <div className="relative w-full h-full max-w-[550px]">
                {/* Feature 1: Revenue Graph (NEW) */}
                <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#1a1a1a]/90 backdrop-blur-2xl border border-white/10 p-5 rounded-[2rem] shadow-2xl w-[85%] z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-xl"><TrendingUp className="w-5 h-5 text-blue-400" /></div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Live Analytics</p>
                      <p className="text-base text-white font-medium">Daily Revenue</p>
                    </div>
                  </div>
                  <div className="text-2xl font-light text-blue-400">
                    +42%
                  </div>
                </motion.div>

                {/* Feature 2: Massive Abandoned Cart SMS */}
                <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute top-36 right-4 bg-[#1f1f1f]/90 backdrop-blur-2xl border border-white/10 p-6 rounded-[2.5rem] rounded-tr-md shadow-2xl w-[85%] z-20">
                  <div className="flex gap-4 mb-2 items-start">
                    <div className="bg-white/10 p-3 rounded-full shrink-0"><ShoppingCart className="w-6 h-6 text-blue-400" /></div>
                    <p className="text-xl md:text-2xl text-white leading-snug font-medium">
                      "Hey! You left a book in your cart. Use code <span className="text-blue-400 font-bold">SAVE10</span> to finish your order!"
                    </p>
                  </div>
                </motion.div>

                {/* Feature 3: Massive Stripe Notification */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute bottom-16 left-4 bg-[#222]/90 backdrop-blur-2xl border border-blue-500/30 p-6 rounded-[2.5rem] flex items-center gap-6 shadow-[0_20px_50px_rgba(59,130,246,0.2)] w-[90%] z-30">
                  <div className="bg-[#635BFF] p-4 rounded-2xl shrink-0 shadow-lg"><CreditCard className="w-8 h-8 text-white" /></div>
                  <div className="flex flex-col">
                    <p className="text-sm text-white/60 mb-1 font-medium">Stripe Payment</p>
                    <p className="text-2xl text-white font-bold tracking-tight">15,000 DA Received</p>
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
            className="sticky top-40 z-30 w-full rounded-[2.5rem] p-8 md:p-12 lg:p-16 bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-16 items-center group overflow-hidden"
          >
            {/* Left: Content */}
            <div className="w-full lg:w-5/12 flex flex-col gap-8 relative z-10">
              <span className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-purple-400 w-fit">Pillar 03</span>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight text-white">
                Automated <br className="hidden lg:block"/> Reservations
              </h3>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                Perfect for Tourism Agencies and Restaurants. No more double-bookings or empty tables. Our system manages your calendar completely hands-free and automatically reminds clients to show up.
              </p>
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-sm md:text-base">
                <span className="flex items-center gap-4 font-medium text-white/80"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Eliminates double-bookings automatically</span>
                <span className="flex items-center gap-4 font-medium text-white/80"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Sends WhatsApp/SMS appointment reminders</span>
                <span className="flex items-center gap-4 font-medium text-white/80"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Sends automated 5-star review requests</span>
              </div>
            </div>

            {/* Right: The MASSIVE Features */}
            <div className="w-full lg:w-7/12 h-[550px] relative rounded-3xl border border-white/5 bg-[#111] overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
              
              <div className="relative w-full h-full max-w-[550px]">
                {/* Feature 1: No-Show Resolver (NEW) */}
                <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#1a1a1a]/90 backdrop-blur-2xl border border-white/10 p-5 rounded-[2rem] shadow-2xl w-[85%] z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-500/20 p-3 rounded-xl"><CalendarCheck className="w-5 h-5 text-red-400" /></div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Client Cancelled</p>
                      <p className="text-base text-white font-medium">Table instantly filled from waitlist</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-purple-400" />
                </motion.div>

                {/* Feature 2: Massive WhatsApp Reminder */}
                <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute top-36 left-4 bg-[#222]/90 backdrop-blur-2xl border border-purple-500/30 p-6 rounded-[2.5rem] rounded-bl-md shadow-[0_20px_50px_rgba(168,85,247,0.15)] w-[85%] z-30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#25D366] p-2 rounded-full"><MessageCircle className="w-4 h-4 text-white" /></div>
                    <span className="text-xs text-white/50 font-bold uppercase tracking-widest">WhatsApp Auto-Sender</span>
                  </div>
                  <p className="text-xl md:text-2xl text-white font-medium leading-snug">
                    "Hi! Your table for 4 at Oasis is confirmed for tonight at 8:00 PM. See you soon!"
                  </p>
                </motion.div>
                
                {/* Feature 3: Massive Review Request */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute bottom-16 right-4 bg-[#1f1f1f]/90 backdrop-blur-2xl border border-white/10 p-6 rounded-[2.5rem] rounded-tr-md shadow-2xl w-[90%] z-20">
                  <div className="flex gap-2 mb-4">
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="text-xl md:text-2xl text-white leading-snug font-medium mb-3">
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
