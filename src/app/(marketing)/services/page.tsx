"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck
} from "lucide-react";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";

export default function ServicesPage() {
  const pillarOne = [
    {
      num: "01",
      title: "Client Acquisition Funnels & Brand Vitrines",
      badge: "Clinics, Consulting & Services",
      desc: "Conversion-first web platforms built for clinics, consulting firms, and service businesses to turn local traffic into booked appointments.",
      mechanism: "Engineered around offer clarity, customer social proof, and direct-response triggers. Incoming inquiries trigger instant qualification flows via WhatsApp or Telegram bots so prospects are contacted while their buying intent is at its peak.",
      deliverables: [
        "Mobile acquisition architecture",
        "Friction-free booking and consultation flows",
        "Instant WhatsApp/Telegram lead dispatch bot",
        "Lead capture database & pipeline sync"
      ]
    },
    {
      num: "02",
      title: "Direct Customer Ordering & E-Commerce Engines",
      badge: "D2C Stores & Retail Brands",
      desc: "Direct-to-consumer digital storefronts that eliminate middleman marketplace cuts and maximize transaction completion on mobile devices.",
      mechanism: "Fast mobile buying flow designed for local purchasing behavior (Cash on Delivery + online payment). Orders are instantly dispatched to the owner's phone with automated verification reminders to protect fulfillment margins.",
      deliverables: [
        "High-converting catalog presentation",
        "58-Wilayas COD mobile checkout",
        "Instant WhatsApp/Telegram order tickets",
        "Yalidine & courier dispatch sync"
      ]
    },
    {
      num: "03",
      title: "Custom Web Applications, Portals & Booking Software",
      badge: "Operations & Web Software",
      desc: "Tailored client portals, self-service ordering tools, and operational web apps that simplify customer retention and client onboarding.",
      mechanism: "Removes friction from client re-orders, service renewals, and multi-step intake forms. Automates onboarding so your operations can handle five times more clients without hiring additional administrative staff.",
      deliverables: [
        "Secure user authentication",
        "Private admin management dashboard",
        "Automated client intake workflows",
        "Custom Supabase & Postgres database architecture"
      ]
    }
  ];

  const pillarTwo = [
    {
      num: "01",
      title: "Performance Meta Ads & Direct-Response Video Direction",
      badge: "Paid Demand Generation",
      desc: "Paid acquisition campaigns across Facebook and Instagram designed to send qualified buyers straight into the acquisition funnel.",
      mechanism: "Beyond managing ad spend, we write high-converting video scripts, hook angles, and creative guidance so you know exactly what to say on video to attract buyers and stop the scroll.",
      deliverables: [
        "Targeted audience architecture & pixel tracking",
        "High-converting video scripts & hook angles",
        "Creative guidance & testing matrix",
        "Click-to-WhatsApp acquisition funnels"
      ]
    },
    {
      num: "02",
      title: "Pipeline Leak & Content Marketing Audits",
      badge: "Diagnostic & Growth Roadmap",
      desc: "An end-to-end diagnostic of where prospective customers drop off before paying, paired with an organic content roadmap.",
      mechanism: "Pinpoints exactly where the business is losing money (unanswered messages, weak offers, confusing checkout steps), and provides a practical content roadmap to attract inbound customers without relying solely on ads.",
      deliverables: [
        "Full conversion funnel leak teardown",
        "Offer conversion & pricing review",
        "Actionable organic content roadmap",
        "Priority conversion fix backlog"
      ]
    },
    {
      num: "03",
      title: "Brand Credibility Polish (Complimentary Onboarding Bonus)",
      badge: "Complimentary Onboarding Bonus",
      desc: "Clean logo refinement, modern typography, and branded social/ad assets included complimentary with our core packages.",
      mechanism: "First-time visitors buy when they trust the business. A polished visual identity eliminates hesitation and makes the company look established and authoritative.",
      deliverables: [
        "Logomark & vector identity refinement",
        "Modern typographic hierarchy system",
        "Branded direct-response ad templates",
        "Social vitrine presentation kit"
      ]
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Strategic Intake & Leak Analysis",
      desc: "We analyze your current client acquisition path, customer friction points, and unit economics to map out the exact digital infrastructure needed."
    },
    {
      step: "02",
      title: "Architectural Blueprint & Scope",
      desc: "We deliver a detailed architectural scope with clear deliverables, data models, and a fixed timeline within 24 hours."
    },
    {
      step: "03",
      title: "Custom Engineering & Bot Integration",
      desc: "We build your platform using Next.js and Supabase, wire automated qualification bots into WhatsApp/Telegram, and connect courier hooks."
    },
    {
      step: "04",
      title: "Verification & Acquisition Launch",
      desc: "We test responsiveness on real 4G mobile devices, configure conversion pixels, review video hooks, and launch your acquisition engine."
    }
  ];

  return (
    <main className="bg-white text-black min-h-screen selection:bg-black selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-medium tracking-[-0.035em] leading-[0.95] max-w-4xl text-black"
        >
          Customer acquisition systems{" "}
          <span className="font-serif italic font-light">&amp; digital infrastructure.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-2xl text-neutral-600 font-light max-w-3xl leading-relaxed"
        >
          We engineer platforms that capture customers and turn attention into revenue: custom web platforms wired with automated bot intake, fueled by targeted Meta ads and direct-response creative direction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Magnetic intensity={0.2}>
            <TransitionLink
              href="/contact"
              className="w-full sm:w-auto justify-center px-8 py-4 rounded-full bg-black text-white text-base font-semibold hover:bg-neutral-800 transition-all shadow-sm flex items-center gap-2 group"
            >
              <span>Book a 15-Minute Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </TransitionLink>
          </Magnetic>

          <Magnetic intensity={0.2}>
            <TransitionLink
              href="/work"
              className="w-full sm:w-auto justify-center px-8 py-4 rounded-full border border-black/15 text-black text-base font-medium hover:bg-black/5 transition-colors flex items-center"
            >
              View Selected Deployments
            </TransitionLink>
          </Magnetic>
        </motion.div>
      </section>

      {/* 2. PILLAR 1: CUSTOMER ACQUISITION PLATFORMS (THE CONVERSION ENGINE) */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.02] mb-4">
              Customer Acquisition Platforms{" "}
              <span className="font-serif italic font-light">&amp; Automated Intake.</span>
            </h2>
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#f4f4f5] text-xs font-mono font-semibold text-black">
              Pillar 01 · The Conversion Engine
            </div>
          </div>
          <p className="text-base md:text-lg text-neutral-600 font-light max-w-md leading-relaxed">
            Digital infrastructure engineered specifically to turn visitors into paying clients, with embedded bot qualification and instant sales routing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black/15 border-y border-black/15">
          {pillarOne.map((service) => (
            <div
              key={service.num}
              className="py-10 lg:py-12 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between gap-10"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-xs font-mono font-semibold text-neutral-500">
                    System {service.num}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#f4f4f5] text-neutral-800 font-medium">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-medium tracking-tight text-black mb-4">
                  {service.title}
                </h3>

                <p className="text-neutral-600 font-light text-base leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="pt-5 border-t border-black/10">
                  <div className="text-xs font-mono font-semibold text-black mb-2">
                    Acquisition Mechanism
                  </div>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {service.mechanism}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-black/10">
                <div className="text-xs font-mono font-semibold text-black mb-3">
                  Key Deliverables
                </div>
                <div className="space-y-2.5">
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-800">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PILLAR 2: DEMAND GENERATION & ACQUISITION SCALING (THE SCALING ENGINE) */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#050505] text-white border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.02] mb-4">
                Demand Generation{" "}
                <span className="font-serif italic font-light">&amp; Acquisition Scaling.</span>
              </h2>
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-white">
                Pillar 02 · The Scaling Engine
              </div>
            </div>
            <p className="text-base md:text-lg text-white/75 font-light max-w-md leading-relaxed">
              Fueling the platform with qualified buyers, fixing pipeline conversion leaks, and guiding direct-response video creative.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/15 border-y border-white/15">
            {pillarTwo.map((service) => (
              <div
                key={service.num}
                className="py-10 lg:py-12 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between gap-10"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-xs font-mono font-semibold text-white/60">
                      Scaling {service.num}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white font-medium">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-white/75 font-light text-base leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="pt-5 border-t border-white/15">
                    <div className="text-xs font-mono font-semibold text-white mb-2">
                      Acquisition Mechanism
                    </div>
                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      {service.mechanism}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/15">
                  <div className="text-xs font-mono font-semibold text-white mb-3">
                    Key Deliverables
                  </div>
                  <div className="space-y-2.5">
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-white/85">
                        <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY & COLLABORATION PROCESS */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.02]">
            Engineering methodology.{" "}
            <span className="font-serif italic font-light">Four structured milestones.</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-md font-light leading-relaxed">
            Every platform follows an uncompromising engineering lifecycle from diagnostic audit to bot intake verification and launch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/15 border-y border-black/15">
          {methodology.map((m, idx) => (
            <div
              key={idx}
              className="py-8 sm:px-6 first:sm:pl-0 last:sm:pr-0 flex flex-col justify-between gap-8"
            >
              <div>
                <div className="text-xs font-mono font-bold text-neutral-500 mb-4">
                  Phase {m.step}
                </div>
                <h3 className="text-xl font-medium text-black mb-3">
                  {m.title}
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-mono text-neutral-600">
                <ShieldCheck className="w-4 h-4 text-black" />
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CINEMATIC OUTRO */}
      <section className="relative w-full text-white py-36 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10 bg-black">
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] leading-[0.98] mb-6">
            Ready to build an acquisition engine that scales?
          </h2>
          <p className="text-lg md:text-2xl text-white/75 font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Book a 15-minute consultation. We review your acquisition pipeline and provide an exact architectural roadmap within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-30 w-full sm:w-auto">
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black text-base sm:text-lg font-semibold transition-all hover:bg-neutral-200 shadow-2xl text-center gap-2"
              >
                <span>Book a 15-Minute Strategy Call</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </TransitionLink>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <a
                href="mailto:hello@fleevy.agency"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 hover:border-white text-white text-base sm:text-lg font-medium transition-colors text-center"
              >
                Direct Studio Email
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
