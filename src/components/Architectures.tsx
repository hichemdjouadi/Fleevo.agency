"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, CalendarCheck, CreditCard, ShoppingCart, Star, LayoutDashboard, TrendingUp, Smartphone } from "lucide-react";

// Individual Card Component for the 3D Stack Effect
const StackCard = ({ index, children, gradientColor }: { index: number, children: React.ReactNode, gradientColor: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`relative z-${index * 10} w-full rounded-[2.5rem] p-6 md:p-10 lg:p-12 bg-[#050505] border border-white/10 shadow-2xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-center group overflow-hidden`}
    >
      {/* Subtle top glow line */}
      <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-${gradientColor}-500/50 to-transparent`} />
      
      {children}
    </motion.div>
  );
};

export default function Architectures() {
  return (
    <section className="relative w-full px-6 pb-24 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="flex flex-col space-y-12 pb-32">
          
          {/* Pillar 01: Lead Generation */}
          <StackCard index={1} gradientColor="emerald">
            {/* Left: Content */}
            <div className="w-full lg:w-5/12 flex flex-col gap-6 relative z-10">
              <span className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 font-bold text-[10px] uppercase tracking-[0.2em] text-emerald-400 w-fit">Pillar 01</span>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight text-white">
                High-Ticket <br className="hidden lg:block"/> Lead Generation
              </h3>
              <p className="text-base text-white/60 font-medium leading-relaxed">
                We build systems that filter time-wasters and route highly qualified buyers directly to your sales team.
              </p>
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-sm md:text-base">
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Blocks unqualified leads</span>
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Forces commitment upfront</span>
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Direct-to-calendar booking</span>
              </div>
            </div>

            {/* Right: Floating Collage */}
            <div className="w-full lg:w-7/12 relative h-[500px] flex items-center justify-center">
              
              {/* Pipeline Widget */}
              <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute right-0 top-10 bg-[#0a0a0a] border border-white/10 p-5 rounded-3xl shadow-2xl w-[260px] z-10 backdrop-blur-xl hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-500/20 p-2.5 rounded-xl"><LayoutDashboard className="w-5 h-5 text-emerald-400" /></div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Pipeline</span>
                </div>
                <div>
                  <p className="text-base text-white font-medium">Lead Auto-Assigned</p>
                  <div className="mt-2 inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">High Priority</div>
                </div>
              </motion.div>

              {/* AI Assistant Widget */}
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute left-0 sm:left-4 top-28 bg-[#0a0a0a] border border-white/10 p-5 rounded-3xl shadow-2xl w-[280px] sm:w-[320px] z-20 backdrop-blur-xl hover:border-white/20 transition-colors">
                <p className="text-xs text-white/50 font-bold uppercase tracking-widest flex items-center gap-2 mb-4"><Smartphone className="w-4 h-4"/> AI Assistant</p>
                <motion.div initial={{ scale: 0.8, opacity: 0, originX: 0, originY: 1 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.5, delay: 0.6 }} className="bg-indigo-500/20 border border-indigo-500/30 p-3 rounded-2xl rounded-bl-sm mt-auto inline-block w-fit">
                  <p className="text-sm text-white font-medium leading-relaxed">&quot;Great! Budget confirmed. Should I book your test drive for Tuesday at 3 PM?&quot;</p>
                </motion.div>
              </motion.div>

              {/* Telegram Widget */}
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute right-4 sm:right-10 bottom-10 bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/10 p-6 rounded-3xl shadow-2xl flex items-center gap-6 z-30 overflow-hidden hover:border-emerald-500/30 transition-colors w-max">
                <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.6, delay: 0.7 }} className="absolute right-6 top-6 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 shadow-[0_0_15px_rgba(239,68,68,0.5)]">1</motion.div>
                <div className="bg-[#2AABEE] p-4 rounded-2xl shrink-0"><MessageCircle className="w-6 h-6 text-white fill-white" /></div>
                <div className="flex flex-col">
                  <p className="text-xs text-white/60 mb-1 font-bold uppercase tracking-wider">Telegram Alert</p>
                  <p className="text-xl text-white font-bold tracking-tight">New Qualified Lead</p>
                  <p className="text-sm text-emerald-400 mt-1 font-medium">Value: 150,000 DA</p>
                </div>
              </motion.div>
            </div>
          </StackCard>

          {/* Pillar 02: E-Commerce */}
          <StackCard index={2} gradientColor="blue">
            <div className="w-full lg:w-5/12 flex flex-col gap-6 relative z-10 lg:order-last">
              <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 font-bold text-[10px] uppercase tracking-[0.2em] text-blue-400 w-fit">Pillar 02</span>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight text-white">
                Frictionless <br className="hidden lg:block"/> E-Commerce
              </h3>
              <p className="text-base text-white/60 font-medium leading-relaxed">
                Every extra step in checkout is a lost sale. We build frictionless stores that convert attention into cash.
              </p>
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-sm md:text-base">
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Frictionless checkout flow</span>
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Automated cart recovery SMS</span>
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Stripe & Local Payments</span>
              </div>
            </div>

            {/* Right: Floating Collage */}
            <div className="w-full lg:w-7/12 relative h-[500px] flex items-center justify-center">
              
              {/* Stripe Widget */}
              <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute left-0 sm:left-10 top-10 bg-[#0a0a0a] border border-white/10 p-6 rounded-3xl shadow-2xl flex items-center justify-between w-[320px] z-10 hover:border-blue-500/30 transition-colors backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-[#635BFF] p-3 rounded-xl"><CreditCard className="w-6 h-6 text-white" /></div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Stripe Payment</p>
                    <p className="text-lg text-white font-medium">15,000 DA Received</p>
                  </div>
                </div>
                <div className="text-sm font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full hidden sm:block">Cleared</div>
              </motion.div>

              {/* Shopping Cart Widget */}
              <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute right-0 sm:right-4 top-36 bg-[#0a0a0a] border border-white/10 p-5 rounded-3xl shadow-2xl flex flex-col justify-between w-[280px] sm:w-[300px] z-20 hover:border-white/20 transition-colors backdrop-blur-xl">
                <div className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mb-4"><ShoppingCart className="w-4 h-4 text-blue-400" /></div>
                <motion.div initial={{ scale: 0.8, opacity: 0, originX: 0, originY: 1 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.5, delay: 0.6 }} className="bg-blue-500/20 border border-blue-500/30 p-3 rounded-2xl rounded-tl-sm inline-block w-fit mt-auto">
                  <p className="text-sm text-white/90 font-medium">&quot;You left a book in your cart. Use SAVE10 to finish your order!&quot;</p>
                </motion.div>
              </motion.div>

              {/* Analytics Widget */}
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute left-4 sm:left-20 bottom-10 bg-[#0a0a0a] border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col justify-between items-start w-[220px] z-30 hover:border-white/20 transition-colors backdrop-blur-xl">
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Live Analytics</p>
                <TrendingUp className="w-6 h-6 text-blue-400 mb-4" />
                <p className="text-4xl text-white font-light mt-auto">+42% <span className="text-base text-white/40 font-medium">Rev</span></p>
              </motion.div>
            </div>
          </StackCard>

          {/* Pillar 03: Reservations */}
          <StackCard index={3} gradientColor="purple">
            <div className="w-full lg:w-5/12 flex flex-col gap-6 relative z-10">
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 font-bold text-[10px] uppercase tracking-[0.2em] text-purple-400 w-fit">Pillar 03</span>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight text-white">
                Automated <br className="hidden lg:block"/> Bookings
              </h3>
              <p className="text-base text-white/60 font-medium leading-relaxed">
                The system manages your calendar, takes deposits, and forces accountability.
              </p>
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-sm md:text-base">
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Eliminates calendar conflicts</span>
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-purple-400" /> WhatsApp no-show alerts</span>
                <span className="flex items-center gap-3 font-medium text-white/80"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Automated Google reviews</span>
              </div>
            </div>

            {/* Right: Floating Collage */}
            <div className="w-full lg:w-7/12 relative h-[500px] flex items-center justify-center">
              
              {/* Cancelled Widget */}
              <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute left-0 sm:left-10 top-10 bg-[#0a0a0a] border border-white/10 p-5 rounded-3xl shadow-2xl flex flex-col justify-between w-[240px] z-10 hover:border-white/20 transition-colors backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-500/20 p-2.5 rounded-xl"><CalendarCheck className="w-5 h-5 text-red-400" /></div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Cancelled</span>
                </div>
                <div>
                  <p className="text-sm text-white font-medium">Table instantly filled from waitlist</p>
                </div>
              </motion.div>

              {/* WhatsApp Widget */}
              <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute right-0 sm:right-4 top-28 bg-[#0a0a0a] border border-white/10 p-5 rounded-3xl shadow-2xl flex flex-col justify-between w-[280px] sm:w-[320px] z-20 hover:border-white/20 transition-colors backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="text-[10px] text-[#25D366] uppercase tracking-widest font-bold">WhatsApp</span>
                </div>
                <motion.div initial={{ scale: 0.8, opacity: 0, originX: 0, originY: 1 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.5, delay: 0.6 }} className="bg-[#25D366]/20 border border-[#25D366]/30 p-3 rounded-2xl rounded-bl-sm inline-block w-fit mt-auto">
                  <p className="text-sm text-white/90 font-medium leading-relaxed">&quot;Your table for 4 is confirmed for tonight at 8:00 PM.&quot;</p>
                </motion.div>
              </motion.div>

              {/* 5-Star Review Widget */}
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute left-4 sm:left-20 bottom-10 bg-[#0a0a0a] border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center w-[280px] z-30 hover:border-purple-500/30 transition-colors backdrop-blur-xl">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-base text-white font-medium mb-2">&quot;Tap here to leave a 5-star review.&quot;</p>
                <p className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">Sent automatically</p>
              </motion.div>
            </div>
          </StackCard>

        </div>
      </div>
    </section>
  );
}
