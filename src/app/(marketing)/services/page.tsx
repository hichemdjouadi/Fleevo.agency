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
      badge: "SPECIALIZED VERTICAL CAPABILITY · HIGH-INQUIRY NICHES",
      title: "Domain-Specific Conversational AI & Triage Agents",
      desc: "We do not deploy novelty chatbots everywhere. For inquiry-heavy sectors like polyclinics, real estate developments, and specialized service firms, we train custom AI agents on your pricing, procedures, and availability to pre-qualify leads and book consultations 24/7 without consuming staff hours.",
      cta: "Inquire for Your Niche"
    },
    fr: {
      badge: "CAPACITÉ VERTICALE SPÉCIALISÉE · SECTEURS À FORT VOLUME DE DEMANDES",
      title: "Agents IA Conversationnels Spécialisés & Triage Automatisé",
      desc: "Nous ne déployons pas de chatbots superficiels. Pour les secteurs à forte intensité d'appels comme les cliniques, l'immobilier et les cabinets d'expertise, nous entraînons des agents IA dédiés sur vos tarifs et disponibilités pour pré-qualifier les prospects et réserver des rendez-vous 24h/24 sans monopoliser vos équipes.",
      cta: "Demander une Étude Sectorielle"
    },
    ar: {
      badge: "حلول قطاعية متقدمة · الأنشطة التجارية ذات الاستفسارات الكثيفة",
      title: "وكلاء ذكاء اصطناعي مخصصون وفرز آلي للاستفسارات",
      desc: "لا نضع روبوتات دردشة شكلية. بالنسبة للمجالات التي تتلقى حجماً هائلاً من الأسئلة المتكررة مثل العيادات الطبية، المشاريع العقارية، والشركات الاستشارية، نقوم بتدريب نماذج ذكاء اصطناعي على أسعارك وإجراءاتك لحجز المواعيد وتأهيل العملاء على مدار الساعة دون إهدار وقت موظفيك.",
      cta: "طلب استشارة لقطاع عملك"
    }
  }[locale];

  const guaranteeText = {
    en: {
      badge: "The Fleevo Acquisition Guarantee",
      title: "Built to capture leads and process orders without friction.",
      desc: "Every system we deploy is tested against real customer journeys. If inquiries fail to alert your team in 30 seconds, or if your checkout sequence creates friction on mobile, we do not sign off on delivery until the pipeline is airtight.",
      cta: "Discuss Your Timeline"
    },
    fr: {
      badge: "La Garantie d'Acquisition Fleevo",
      title: "Conçu pour capter des prospects et traiter des commandes sans aucune friction.",
      desc: "Chaque système déployé est testé en conditions réelles. Si les demandes n'alertent pas votre équipe en moins de 30 secondes ou si votre tunnel mobile crée un point de blocage, nous ne validons pas la livraison tant que le flux n'est pas parfaitement fluide.",
      cta: "Planifier Vos Délais"
    },
    ar: {
      badge: "ضمان فليفو لاكتساب العملاء",
      title: "مبني لجلب العملاء ومعالجة الطلبات دون أي عقبات تقنية.",
      desc: "كل نظام نطلقه يتم اختباره على مسارات مستخدمين حقيقية. إذا تعذر إشعار فريقك بطلب العميل خلال 30 ثانية، أو ظهر أي ثقل في عملية الشراء عبر الهاتف، فلن نعتمد التسليم النهائي حتى تصبح المنصة خالية تماماً من أي تسرب.",
      cta: "ناقش جدولك الزمني"
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
          desc: "We review your current funnel, spot leaks, and map the build.",
          deliverable: "Funnel Audit Brief"
        },
        {
          step: "02",
          title: "Fixed Blueprint",
          desc: "You get a fixed scope and clear delivery timeline within 24 hours.",
          deliverable: "Fixed-Scope Roadmap"
        },
        {
          step: "03",
          title: "Build & Bot Setup",
          desc: "We code the platform, connect WhatsApp or Telegram bots, and link couriers.",
          deliverable: "Staging Platform & Bots"
        },
        {
          step: "04",
          title: "Test & Launch",
          desc: "We test speed on mobile networks, set up ad pixels, and launch.",
          deliverable: "Live Production Handover"
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
          desc: "Nous analysons votre entonnoir, repérons les fuites et planifions la réalisation.",
          deliverable: "Dossier d'Audit Stratégique"
        },
        {
          step: "02",
          title: "Plan Fixe & Chiffré",
          desc: "Périmètre précis et calendrier d'exécution ferme sous 24 heures.",
          deliverable: "Feuille de Route Définitive"
        },
        {
          step: "03",
          title: "Développement & Bots",
          desc: "Nous développons la plateforme, paramétrons les bots WhatsApp et connectons les transporteurs.",
          deliverable: "Plateforme Staging & Bots"
        },
        {
          step: "04",
          title: "Tests & Déploiement",
          desc: "Tests de vélocité sur mobile 4G, paramétrage des pixels publicitaires et mise en ligne.",
          deliverable: "Livraison Production Clé en Main"
        }
      ]
    },
    ar: {
      title: "منهجية العمل. ",
      titleItalic: "أربع خطوات واضحة وحاسمة.",
      desc: "من التدقيق الأولي إلى الإطلاق المباشر في أربع مراحل هندسية محكمة.",
      steps: [
        {
          step: "01",
          title: "التدقيق والاستراتيجية",
          desc: "نفحص مسار مبيعاتك الحالي، نحدد مواضع التسرب، ونرسم خطة التنفيذ.",
          deliverable: "تقرير التدقيق الاستراتيجي"
        },
        {
          step: "02",
          title: "خطة عمل وتسعير ثابت",
          desc: "تستلم نطاق عمل دقيق وجدولاً زمنياً حاسماً للتسليم خلال 24 ساعة.",
          deliverable: "خريطة طريق محددة النطاق"
        },
        {
          step: "03",
          title: "البرمجة وضبط البوتات",
          desc: "نبرمج المنصة بالكامل، نربط بوتات واتساب وتيليغرام، ونصل شركات التوصيل.",
          deliverable: "بيئة تجريبية وبوتات فعالة"
        },
        {
          step: "04",
          title: "الاختبار والإطلاق",
          desc: "نختبر سرعة التحميل على شبكات 4G، نضبط بيكسل التتبع الإعلاني، ونطلق المنصة للجمهور.",
          deliverable: "تسليم المنصة المباشرة"
        }
      ]
    }
  }[locale];

  return (
    <main className="bg-white text-black min-h-screen selection:bg-black selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-medium text-neutral-800 mb-6"
        >
          <span>{t.services.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[32px] sm:text-5xl md:text-7xl lg:text-[72px] font-medium tracking-tight leading-[1.04] sm:leading-[0.95] max-w-4xl text-black text-balance"
        >
          {t.services.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 sm:mt-8 text-base sm:text-xl md:text-2xl text-neutral-600 font-light max-w-2xl leading-relaxed text-balance"
        >
          {t.services.hero.subhead}
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Magnetic intensity={0.2}>
            <a
              href="https://wa.me/213655934124"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base transition-colors shadow-lg text-center"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>{t.contact.fastLane.ctaBtn}</span>
            </a>
          </Magnetic>

          <Magnetic intensity={0.2}>
            <TransitionLink
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black text-white text-sm sm:text-base font-semibold hover:bg-neutral-800 transition-all shadow-sm text-center"
            >
              <span>{t.services.bottomCta.ctaBtn}</span>
              <ArrowRight className="w-4 h-4 shrink-0 rtl:rotate-180" />
            </TransitionLink>
          </Magnetic>

          <TransitionLink
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-black/15 text-black text-sm sm:text-base font-medium hover:bg-black/5 transition-colors text-center"
          >
            {t.home.hero.ctaSecondary}
          </TransitionLink>
        </motion.div>
      </section>

      {/* 2. PILLAR 01: PLATFORMS & DIGITAL INFRASTRUCTURE */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.02] mb-4 text-balance">
              {t.services.pillarOneTitle}
            </h2>
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#f4f4f5] text-xs font-mono font-semibold text-black">
              {t.services.pillarOneBadge}
            </div>
          </div>
          <p className="text-base md:text-lg text-neutral-600 font-light max-w-md leading-relaxed text-pretty">
            {t.services.pillarOneDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-black/15 border-y border-black/15">
          {t.services.pillarOneItems.map((service) => (
            <div
              key={service.num}
              className="py-10 lg:py-12 lg:px-8 first:lg:ps-0 last:lg:pe-0 flex flex-col justify-between gap-8 text-start"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 text-neutral-900 font-semibold border border-neutral-200">
                    {service.badge}
                  </span>
                  {service.sla && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.sla}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black mb-3 text-balance">
                  <span className="font-mono text-sm text-neutral-500 me-2">{service.num}. </span>
                  {service.title}
                </h3>

                <p className="text-neutral-700 font-light text-base leading-relaxed text-pretty mb-6">
                  {service.desc}
                </p>
              </div>

              <div>
                {service.deliverables && (
                  <div className="pt-6 border-t border-black/10">
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-500 block mb-4">
                      {locale === "fr" ? "Livrables Inclus" : locale === "ar" ? "المخرجات المتضمنة" : "Core Deliverables Included"}
                    </span>
                    <div className="space-y-3 mb-6">
                      {service.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-900 font-medium">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.proofLabel && (
                  <div className="mb-5 text-xs sm:text-sm font-mono text-neutral-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>{locale === "fr" ? "Éprouvé dans :" : locale === "ar" ? "تم إثباته في :" : "Proven in:"}</span>
                    <TransitionLink href="/work" className="text-black font-semibold underline underline-offset-4 hover:text-neutral-600 inline-flex items-center gap-1">
                      <span>{service.proofLabel}</span>
                      <span className="rtl:rotate-180">&rarr;</span>
                    </TransitionLink>
                  </div>
                )}

                <TransitionLink
                  href="/contact"
                  className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-sm font-semibold group shadow-sm"
                >
                  <span>{locale === "fr" ? "Consulter pour cette offre" : locale === "ar" ? "طلب استشارة لهذا المشروع" : "Inquire About This Build"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                </TransitionLink>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Niche Capability Callout */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white border border-neutral-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm text-start">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-emerald-400 font-semibold mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>{specializedAIText.badge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-2">
              {specializedAIText.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              {specializedAIText.desc}
            </p>
          </div>
          <TransitionLink
            href="/contact?service=Domain-Specific%20AI%20Agent"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-semibold shrink-0"
          >
            <span>{specializedAIText.cta}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </TransitionLink>
        </div>
      </section>

      {/* 3. ZERO-RISK GUARANTEE STRIP */}
      <section className="py-14 sm:py-16 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/15 text-start">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-10">
          <div className="flex items-start gap-4 sm:gap-5 max-w-3xl">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-emerald-800 uppercase tracking-wider block mb-1">
                {guaranteeText.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-2">
                {guaranteeText.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                {guaranteeText.desc}
              </p>
            </div>
          </div>
          <TransitionLink
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black hover:bg-neutral-800 text-white text-sm font-semibold transition-colors shadow-sm shrink-0"
          >
            <span>{guaranteeText.cta}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </TransitionLink>
        </div>
      </section>

      {/* 4. PILLAR 02: GROWTH & CUSTOMER ACQUISITION */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#050505] text-white border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.02] mb-4 text-balance">
                {t.services.pillarTwoTitle}
              </h2>
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-white">
                {t.services.pillarTwoBadge}
              </div>
            </div>
            <p className="text-base md:text-lg text-white/75 font-light max-w-md leading-relaxed text-pretty">
              {t.services.pillarTwoDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-white/15 border-y border-white/15">
            {t.services.pillarTwoItems.map((service, idx) => {
              const isBonus = idx === 2;
              return (
                <div
                  key={service.num}
                  className="py-10 lg:py-12 lg:px-8 first:lg:ps-0 last:lg:pe-0 flex flex-col justify-between gap-8 text-start"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-semibold ${
                        isBonus ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-white/10 text-white"
                      }`}>
                        {service.badge}
                      </span>
                      {service.sla && (
                        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{service.sla}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-medium tracking-tight text-white mb-3 text-balance">
                      <span className="font-mono text-sm text-white/55 me-2">{service.num}. </span>
                      {service.title}
                    </h3>

                    <p className="text-white/75 font-light text-base leading-relaxed text-pretty">
                      {service.desc}
                    </p>
                  </div>

                  <div>
                    {service.deliverables && (
                      <div className="pt-6 border-t border-white/15">
                        <span className="text-xs font-mono uppercase tracking-wider font-semibold text-white/60 block mb-4">
                          {locale === "fr" ? "Livrables Inclus" : locale === "ar" ? "المخرجات المتضمنة" : "Core Deliverables Included"}
                        </span>
                        <div className="space-y-3 mb-6">
                          {service.deliverables.map((deliv, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-3 text-sm sm:text-base text-white/90 font-medium">
                              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {isBonus ? (
                      <div className="w-full flex items-center justify-between px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-mono text-emerald-300 font-semibold">
                        <span>{locale === "fr" ? "Inclus avec le Projet Web" : locale === "ar" ? "مدمج مع البناء الأساسي" : "Included with Core Build"}</span>
                        <span>⚡ 100% Free</span>
                      </div>
                    ) : (
                      <TransitionLink
                        href="/contact"
                        className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-all text-sm font-semibold group"
                      >
                        <span>{locale === "fr" ? "Consulter pour cette offre" : locale === "ar" ? "طلب استشارة لهذا المشروع" : "Inquire About This Scope"}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
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
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10 text-start">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.02] text-balance">
            {methodologyText.title}
            <span className="font-serif italic font-light">{methodologyText.titleItalic}</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-sm font-light leading-relaxed text-pretty">
            {methodologyText.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-black/15 border-y border-black/15">
          {methodologyText.steps.map((m, idx) => (
            <div
              key={idx}
              className="py-8 sm:px-6 first:sm:ps-0 last:sm:pe-0 flex flex-col justify-between gap-8 text-start"
            >
              <div>
                <h3 className="text-xl font-medium text-black mb-2 text-balance">
                  <span className="font-mono text-sm text-neutral-500 me-2">{m.step}. </span>
                  {m.title}
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed text-pretty">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-mono text-neutral-700">
                <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                <span>{m.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CINEMATIC OUTRO */}
      <section className="relative w-full text-white py-36 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10 bg-black">
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[0.98] mb-6 text-balance">
            {t.services.bottomCta.headline}
          </h2>
          <p className="text-lg md:text-2xl text-white/75 font-light max-w-xl mx-auto mb-12 leading-relaxed text-balance">
            {t.services.bottomCta.subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-30 w-full sm:w-auto">
            <Magnetic intensity={0.2}>
              <TransitionLink
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black text-base sm:text-lg font-semibold transition-all hover:bg-neutral-200 shadow-2xl text-center gap-2"
              >
                <span>{t.services.bottomCta.ctaBtn}</span>
                <ArrowRight className="w-5 h-5 shrink-0 rtl:rotate-180" />
              </TransitionLink>
            </Magnetic>

            <Magnetic intensity={0.2}>
              <a
                href="mailto:contact@fleevo.net"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 hover:border-white text-white text-base sm:text-lg font-medium transition-colors text-center"
              >
                contact@fleevo.net
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
