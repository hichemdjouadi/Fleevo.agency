"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Zap,
  Clock,
  Lock,
  Bot,
  MessageCircle
} from "lucide-react";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/TransitionLink";
import Magnetic from "@/components/Magnetic";
import { useTranslation } from "@/lib/i18n";

export default function ServicesPage() {
  const { t, isRTL, locale } = useTranslation();

  const specializedAIText = {
    en: {
      badge: "VERTICAL AI CAPABILITY",
      title: "Domain-Specific Conversational AI & Lead Triage",
      desc: "Trained AI models qualify inquiries and book consultations 24/7 on your exact pricing and availability—zero staff time wasted.",
      cta: "Inquire for Your Niche"
    },
    fr: {
      badge: "AGENTS IA SPÉCIALISÉS",
      title: "Agents IA Métier & Triage Automatisé",
      desc: "Agents IA entraînés sur vos tarifs et services pour qualifier les prospects et planifier des rendez-vous 24h/24 sans monopoliser votre équipe.",
      cta: "Demander une Étude"
    },
    ar: {
      badge: "حلول قطاعية متقدمة",
      title: "وكلاء ذكاء اصطناعي وفرز آلي للمواعيد",
      desc: "نماذج ذكاء اصطناعي مدربة على خدماتك وأسعارك لفرز العملاء وتأكيد المواعيد تلقائياً 24/7 دون استنزاف وقت فريقك.",
      cta: "طلب دراسة لقطاعك"
    }
  }[locale];

  const guaranteeText = {
    en: {
      badge: "The Fleevy Acquisition Guarantee",
      title: "Built to capture buyers with zero technical friction.",
      desc: "Tested on real buyer journeys. If inquiries fail to alert your team in 30 seconds or mobile checkout has friction, we do not sign off until it is airtight.",
      cta: "Discuss Your Timeline"
    },
    fr: {
      badge: "Garantie d'Acquisition Fleevy",
      title: "Conçu pour convertir sans aucune friction technique.",
      desc: "Testé sur parcours réels. Si une demande met plus de 30s à vous alerter ou si le flux mobile accroche, nous ne validons pas tant que ce n'est pas parfait.",
      cta: "Planifier Vos Délais"
    },
    ar: {
      badge: "ضمان فليفي الصارم",
      title: "أنظمة مبنية لاقتناص المبيعات دون أي احتكاك تقني.",
      desc: "نختبر المنصة على مسارات حقيقية. إن لم يصلك إشعار الطلب في 30 ثانية أو ظهر أي بطء على الهاتف، لا نعتمد التسليم حتى تصبح المنصة خالية تماماً من التسرب.",
      cta: "ناقش مشروعك معنا"
    }
  }[locale];

  const methodologyText = {
    en: {
      title: "How we work. ",
      titleItalic: "Four clear steps.",
      desc: "From initial audit to live launch in four structured milestones.",
      steps: [
        {
          step: "01",
          title: "Audit & Strategy",
          desc: "We review your current funnel and map the build.",
          deliverable: "Funnel Audit"
        },
        {
          step: "02",
          title: "Fixed Scope",
          desc: "Clear scope and fixed delivery timeline within 24 hours.",
          deliverable: "Fixed Roadmap"
        },
        {
          step: "03",
          title: "Build & Bot Setup",
          desc: "We code the platform, connect bots, and link couriers.",
          deliverable: "Staging Platform"
        },
        {
          step: "04",
          title: "Test & Launch",
          desc: "We test 4G speed, set up ad pixels, and launch live.",
          deliverable: "Live Handover"
        }
      ]
    },
    fr: {
      title: "Notre méthode. ",
      titleItalic: "Quatre étapes précises.",
      desc: "Du diagnostic initial à la mise en ligne en quatre jalons structurés.",
      steps: [
        {
          step: "01",
          title: "Audit & Stratégie",
          desc: "Analyse du parcours client et repérage des fuites.",
          deliverable: "Rapport d'Audit"
        },
        {
          step: "02",
          title: "Cahier des Charges",
          desc: "Périmètre précis et délai de livraison fixe sous 24h.",
          deliverable: "Feuille de Route"
        },
        {
          step: "03",
          title: "Développement & Bots",
          desc: "Code de la plateforme, connexion bots et livreurs.",
          deliverable: "Environnement Test"
        },
        {
          step: "04",
          title: "Tests & Déploiement",
          desc: "Validation vitesse 4G, réglage pixels et lancement.",
          deliverable: "Plateforme Active"
        }
      ]
    },
    ar: {
      title: "منهجية العمل. ",
      titleItalic: "أربع خطوات واضحة.",
      desc: "من التدقيق الأولي إلى الإطلاق المباشر في أربع مراحل سريعة.",
      steps: [
        {
          step: "01",
          title: "التدقيق والاستراتيجية",
          desc: "فحص مسار عملائك وتحديد مواضع تسرب المبيعات.",
          deliverable: "تقرير التدقيق"
        },
        {
          step: "02",
          title: "خطة ونطاق ثابت",
          desc: "نطاق عمل محدد وجدول زمني نهائي للتسليم خلال 24 ساعة.",
          deliverable: "خريطة التنفيذ"
        },
        {
          step: "03",
          title: "البرمجة وضبط البوتات",
          desc: "بناء المنصة، ربط بوتات واتساب، وتوصيل شركات الشحن.",
          deliverable: "بيئة تجريبية وبوتات"
        },
        {
          step: "04",
          title: "الاختبار والإطلاق",
          desc: "اختبار سرعة 4G، ضبط بيكسل التتبع، والإطلاق المباشر.",
          deliverable: "تسليم المنصة المباشرة"
        }
      ]
    }
  }[locale];

  return (
    <main className="bg-white text-black min-h-screen selection:bg-black selection:text-white w-full max-w-full overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="pt-28 pb-14 sm:pt-36 sm:pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-medium text-neutral-800 mb-4 sm:mb-6"
        >
          <span>{t.services.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[28px] xs:text-[32px] sm:text-5xl md:text-7xl lg:text-[72px] font-medium tracking-tight leading-[1.08] sm:leading-[0.95] max-w-4xl text-black text-balance"
        >
          {t.services.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-8 text-sm sm:text-xl md:text-2xl text-neutral-600 font-light max-w-2xl leading-relaxed text-balance"
        >
          {t.services.hero.subhead}
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Magnetic intensity={0.2}>
            <a
              href="https://wa.me/213655934124"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base transition-colors shadow-lg text-center"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>{t.contact.fastLane.ctaBtn}</span>
            </a>
          </Magnetic>

          <Magnetic intensity={0.2}>
            <TransitionLink
              href="/contact"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black text-white text-sm sm:text-base font-semibold hover:bg-neutral-800 transition-all shadow-sm text-center"
            >
              <span>{t.services.bottomCta.ctaBtn}</span>
              <ArrowRight className="w-4 h-4 shrink-0 rtl:rotate-180" />
            </TransitionLink>
          </Magnetic>

          <TransitionLink
            href="/work"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-black/15 text-black text-sm sm:text-base font-medium hover:bg-black/5 transition-colors text-center"
          >
            {t.home.hero.ctaSecondary}
          </TransitionLink>
        </motion.div>
      </section>

      {/* 2. PILLAR 01: PLATFORMS & DIGITAL INFRASTRUCTURE */}
      <section className="py-20 sm:py-28 md:py-40 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15 overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-20 gap-6 sm:gap-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04] mb-3 text-balance">
              {t.services.pillarOneTitle}
            </h2>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#f4f4f5] text-xs font-mono font-semibold text-black">
              {t.services.pillarOneBadge}
            </div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-light max-w-md leading-relaxed text-pretty">
            {t.services.pillarOneDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-black/15 border-y border-black/15">
          {t.services.pillarOneItems.map((service) => (
            <div
              key={service.num}
              className="py-8 sm:py-12 lg:py-14 lg:px-8 first:lg:ps-0 last:lg:pe-0 flex flex-col justify-between gap-6 sm:gap-8 text-start"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-neutral-100 text-neutral-900 font-semibold border border-neutral-200 truncate">
                    {service.badge}
                  </span>
                  {service.sla && (
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-emerald-200/60 shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>{service.sla}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3 text-balance">
                  <span className="font-mono text-xs sm:text-sm text-neutral-500 me-2">{service.num}. </span>
                  {service.title}
                </h3>

                <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed text-pretty mb-4 sm:mb-6">
                  {service.desc}
                </p>

                {/* Scannable Spec Chips */}
                {service.deliverables && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {service.deliverables.map((deliv, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium bg-neutral-100 text-neutral-800 px-3 py-1 rounded-full border border-neutral-200/80">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{deliv}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2">
                {service.proofLabel && (
                  <div className="mb-4 text-xs sm:text-sm rtl:font-sans ltr:font-mono text-neutral-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{locale === "fr" ? "Éprouvé dans :" : locale === "ar" ? "تم إثباته في :" : "Proven in:"}</span>
                    <TransitionLink href="/work" className="text-black font-semibold underline underline-offset-4 hover:text-neutral-600 inline-flex items-center gap-1">
                      <span>{service.proofLabel}</span>
                      <span className="rtl:rotate-180">&rarr;</span>
                    </TransitionLink>
                  </div>
                )}

                <TransitionLink
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-black hover:text-neutral-600 transition-colors group cursor-pointer"
                >
                  <span>{locale === "fr" ? "Consulter pour ce système" : locale === "ar" ? "استفسر عن هذا النظام" : "Inquire About This Build"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform shrink-0" />
                </TransitionLink>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Niche Capability Callout */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-neutral-950 text-white border border-neutral-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6 shadow-sm text-start">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-emerald-400 font-semibold mb-2 sm:mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>{specializedAIText.badge}</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-medium tracking-tight text-white mb-2">
              {specializedAIText.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              {specializedAIText.desc}
            </p>
          </div>
          <TransitionLink
            href="/contact?service=Domain-Specific%20AI%20Agent"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs sm:text-sm font-semibold shrink-0 cursor-pointer"
          >
            <span>{specializedAIText.cta}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </TransitionLink>
        </div>
      </section>

      {/* 3. ZERO-RISK GUARANTEE STRIP */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15 text-start">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-10">
          <div className="flex items-start gap-4 sm:gap-5 max-w-3xl">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-mono font-semibold text-emerald-800 uppercase tracking-wider block mb-1">
                {guaranteeText.badge}
              </span>
              <h3 className="text-lg sm:text-2xl font-medium tracking-tight text-black mb-1.5 sm:mb-2">
                {guaranteeText.title}
              </h3>
              <p className="text-xs sm:text-base text-neutral-600 font-light leading-relaxed">
                {guaranteeText.desc}
              </p>
            </div>
          </div>
          <TransitionLink
            href="/contact"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm shrink-0 cursor-pointer text-center"
          >
            <span>{guaranteeText.cta}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </TransitionLink>
        </div>
      </section>

      {/* 4. PILLAR 02: GROWTH & CUSTOMER ACQUISITION */}
      <section className="py-20 sm:py-28 md:py-40 px-4 sm:px-6 md:px-12 bg-[#050505] text-white border-t border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-20 gap-6 sm:gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.04] mb-3 text-balance">
                {t.services.pillarTwoTitle}
              </h2>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-white">
                {t.services.pillarTwoBadge}
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-white/75 font-light max-w-md leading-relaxed text-pretty">
              {t.services.pillarTwoDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-white/15 border-y border-white/15">
            {t.services.pillarTwoItems.map((service, idx) => {
              const isBonus = idx === 2;
              return (
                <div
                  key={service.num}
                  className="py-8 sm:py-12 lg:py-14 lg:px-8 first:lg:ps-0 last:lg:pe-0 flex flex-col justify-between gap-6 sm:gap-8 text-start"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold truncate ${
                        isBonus ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-white/10 text-white"
                      }`}>
                        {service.badge}
                      </span>
                      {service.sla && (
                        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-emerald-400 font-semibold shrink-0">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{service.sla}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-3 text-balance">
                      <span className="font-mono text-xs sm:text-sm text-white/55 me-2">{service.num}. </span>
                      {service.title}
                    </h3>

                    <p className="text-white/75 font-light text-sm sm:text-base leading-relaxed text-pretty mb-4 sm:mb-6">
                      {service.desc}
                    </p>

                    {/* Scannable Spec Chips */}
                    {service.deliverables && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {service.deliverables.map((deliv, dIdx) => (
                          <span key={dIdx} className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium bg-white/[0.08] text-white/90 px-3 py-1 rounded-full border border-white/10">
                            <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>{deliv}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    {isBonus ? (
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm rtl:font-sans ltr:font-mono text-emerald-300 font-medium">
                        <span>✓ {locale === "fr" ? "Inclus avec la plateforme" : locale === "ar" ? "مدمج مع بناء المنصة" : "Included with Core Build"}</span>
                      </div>
                    ) : (
                      <TransitionLink
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90 hover:text-white transition-colors group cursor-pointer"
                      >
                        <span>{locale === "fr" ? "Consulter pour ce système" : locale === "ar" ? "استفسر عن هذا النظام" : "Inquire About This Scope"}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform shrink-0" />
                      </TransitionLink>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY & COLLABORATION PROCESS */}
      <section className="py-14 sm:py-20 md:py-36 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10 text-start">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04] text-balance">
            {methodologyText.title}
            <span className="rtl:font-sans rtl:not-italic ltr:font-serif ltr:italic font-light">{methodologyText.titleItalic}</span>
          </h2>
          <p className="text-xs sm:text-base text-neutral-600 max-w-sm font-light leading-relaxed text-pretty">
            {methodologyText.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-black/15 border-y border-black/15">
          {methodologyText.steps.map((m, idx) => (
            <div
              key={idx}
              className="py-6 sm:py-8 sm:px-6 first:sm:ps-0 last:sm:pe-0 flex flex-col justify-between gap-4 sm:gap-8 text-start"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-black mb-1.5 sm:mb-2 text-balance">
                  <span className="font-mono text-xs sm:text-sm text-neutral-500 me-2">{m.step}. </span>
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed text-pretty">
                  {m.desc}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-black/10 flex items-center gap-2 text-[11px] sm:text-xs font-mono text-neutral-700">
                <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                <span>{m.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CINEMATIC OUTRO */}
      <section className="relative w-full text-white py-24 sm:py-36 md:py-48 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10 bg-[#050505]">
        {/* Architectural Ambient Depth Aura */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(255,255,255,0.06),transparent_75%)] pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[0.98] mb-4 sm:mb-6 text-balance">
            {t.services.bottomCta.headline}
          </h2>
          <p className="text-sm sm:text-xl md:text-2xl text-white/75 font-light max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed text-balance">
            {t.services.bottomCta.subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 z-30 w-full sm:w-auto">
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-5 rounded-full bg-white text-black text-sm sm:text-lg font-semibold transition-all hover:bg-neutral-200 shadow-2xl text-center gap-2 cursor-pointer"
              >
                <span>{t.services.bottomCta.ctaBtn}</span>
                <ArrowRight className="w-5 h-5 shrink-0 rtl:rotate-180" />
              </TransitionLink>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <a
                href="mailto:contact@fleevy.net"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-5 rounded-full border border-white/20 hover:border-white text-white text-sm sm:text-lg font-medium transition-colors text-center"
              >
                contact@fleevy.net
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
