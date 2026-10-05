"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, CalendarCheck, CreditCard, ShoppingCart, Star, LayoutDashboard, TrendingUp, Smartphone } from "lucide-react";

// Individual Card Component for the 3D Stack Effect
const StackCard = ({ index, children, gradientColor }: { index: number, children: React.ReactNode, gradientColor: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`lg:sticky relative lg:top-[var(--card-top)] z-${index * 10} w-full rounded-[2.5rem] p-6 md:p-10 lg:p-12 bg-[#050505] border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center group overflow-hidden`}
      style={{ "--card-top": `${index * 2 + 6}rem` } as React.CSSProperties}
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

            {/* Right: Dark Bento Grid */}
            <div className="w-full lg:w-7/12 grid grid-cols-2 gap-4 h-auto lg:h-[450px] relative rounded-[2rem] border border-white/5 bg-[#0a0a0a] p-4 shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-50" />
              
              {/* Top Left Bento */}
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="col-span-2 md:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-500/20 p-2.5 rounded-xl"><LayoutDashboard className="w-5 h-5 text-emerald-400" /></div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Pipeline</span>
                </div>
                <div>
                  <p className="text-base text-white font-medium">Lead Auto-Assigned</p>
                  <div className="mt-2 inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">High Priority</div>
                </div>
              </motion.div>

              {/* Top Right Bento */}
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="col-span-2 md:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                <p className="text-xs text-white/50 font-bold uppercase tracking-widest flex items-center gap-2 mb-2"><Smartphone className="w-4 h-4"/> AI Assistant</p>
                <p className="text-sm text-white/90 font-medium leading-relaxed">&quot;Great! Budget confirmed. Should I book your test drive for Tuesday at 3 PM?&quot;</p>
              </motion.div>

              {/* Bottom Wide Bento */}
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="col-span-2 bg-gradient-to-br from-emerald-900/40 to-transparent border border-emerald-500/30 p-6 rounded-2xl flex items-center gap-6">
                <div className="bg-[#2AABEE] p-4 rounded-2xl shrink-0"><MessageCircle className="w-6 h-6 text-black" /></div>
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

            <div className="w-full lg:w-7/12 grid grid-cols-2 gap-4 h-auto lg:h-[450px] relative rounded-[2rem] border border-white/5 bg-[#0a0a0a] p-4 shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
              
              <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="col-span-2 bg-gradient-to-br from-blue-900/30 to-transparent border border-blue-500/30 p-6 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-[#635BFF] p-3 rounded-xl"><CreditCard className="w-6 h-6 text-white" /></div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Stripe Payment</p>
                    <p className="text-lg text-white font-medium">15,000 DA Received</p>
                  </div>
                </div>
                <div className="text-sm font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">Cleared</div>
              </motion.div>

              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="col-span-2 md:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                <div className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mb-3"><ShoppingCart className="w-4 h-4 text-blue-400" /></div>
                <p className="text-sm text-white/90 font-medium">&quot;You left a book in your cart. Use SAVE10 to finish your order!&quot;</p>
              </motion.div>

              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="col-span-2 md:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between items-start">
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Live Analytics</p>
                <TrendingUp className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-2xl text-white font-light mt-auto">+42% <span className="text-sm text-white/40">Rev</span></p>
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

            <div className="w-full lg:w-7/12 grid grid-cols-2 gap-4 h-auto lg:h-[450px] relative rounded-[2rem] border border-white/5 bg-[#0a0a0a] p-4 shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent opacity-50" />
              
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="col-span-2 md:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-500/20 p-2.5 rounded-xl"><CalendarCheck className="w-5 h-5 text-red-400" /></div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Cancelled</span>
                </div>
                <div>
                  <p className="text-sm text-white font-medium">Table instantly filled from waitlist</p>
                </div>
              </motion.div>

              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="col-span-2 md:col-span-1 bg-[#25D366]/10 backdrop-blur-md border border-[#25D366]/30 p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="text-[10px] text-[#25D366] uppercase tracking-widest font-bold">WhatsApp</span>
                </div>
                <p className="text-sm text-white/90 font-medium leading-relaxed">&quot;Your table for 4 is confirmed for tonight at 8:00 PM.&quot;</p>
              </motion.div>

              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="col-span-2 bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/30 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                <div className="flex gap-2 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-base text-white font-medium mb-1">&quot;Tap here to leave a 5-star review.&quot;</p>
                <p className="text-xs text-purple-400 font-bold uppercase tracking-widest">Sent automatically</p>
              </motion.div>
            </div>
          </StackCard>

        </div>
      </div>
    </section>
  );
}
