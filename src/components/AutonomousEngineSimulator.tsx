"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Radio, 
  Bot, 
  Cpu, 
  Database, 
  Lock,
  Layers,
  Sparkles
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import TransitionLink from "@/components/TransitionLink";

interface ArchitectureNode {
  step: string;
  title: string;
  badge: string;
  speed: string;
  desc: string;
  system: string;
}

interface SectorArchitecture {
  id: string;
  name: string;
  clientBadge: string;
  clientExample: string;
  headlineMetric: string;
  headlineMetricLabel: string;
  commissionMetric: string;
  speedMetric: string;
  nodes: [ArchitectureNode, ArchitectureNode, ArchitectureNode];
}

export default function AutonomousEngineSimulator() {
  const { t, isRTL, locale } = useTranslation();
  const [activeSector, setActiveSector] = useState<number>(0);

  const sectors: SectorArchitecture[] = [
    {
      id: "ecommerce",
      name: locale === "fr" ? "Commerce D2C & Restauration" : locale === "ar" ? "التجارة المباشرة والمطاعم" : "D2C Food & Retail Commerce",
      clientBadge: "Mo Pizza & Al-Madina",
      clientExample: locale === "fr" ? "5 Établissements · 0% Commission" : locale === "ar" ? "5 فروع · 0% عمولة وسيطة" : "5 Locations · 0% Intermediary Toll",
      headlineMetric: "0%",
      headlineMetricLabel: locale === "fr" ? "Commission prélevée par les plateformes" : locale === "ar" ? "عمولة وسيطة محتسبة على المبيعات" : "Aggregator Marketplace Toll",
      commissionMetric: "100% Marge Préservée",
      speedMetric: "420ms TTFB sur 4G",
      nodes: [
        {
          step: "01",
          title: locale === "fr" ? "Attribution Meta CAPI 100%" : locale === "ar" ? "تتبع مباشر عبر Meta CAPI" : "100% Meta CAPI Attribution",
          badge: locale === "fr" ? "Zéro Perte Cookie" : locale === "ar" ? "صفر فقدان للبيانات" : "Zero Cookie Loss",
          speed: "0.15s",
          desc: locale === "fr" ? "Handshake serveur direct avec Meta. Chaque clic génère un signal d'achat précis sans dépendre des bloqueurs de pubs." : locale === "ar" ? "ربط مباشر على مستوى الخادم مع ميتا لتأكيد مصادر الزيارات دون أي تسرب لبيانات التتبع." : "Direct server handshake with Meta. Every ad interaction retains high-intent attribution without client-side ad-blocker dropoff.",
          system: "Meta Server-Side CAPI v19"
        },
        {
          step: "02",
          title: locale === "fr" ? "Plateforme Edge & Panier Express" : locale === "ar" ? "منصة سريعة وسلة شراء فورية" : "Sub-Second Edge Storefront",
          badge: locale === "fr" ? "Chargement Instantané" : locale === "ar" ? "تحميل أقل من ثانية" : "< 420ms TTFB",
          speed: "0.42s",
          desc: locale === "fr" ? "Application Next.js 16 distribuée mondialement sur CDN. Catalogue fluide, commande en 2 clics sans téléchargement d'application." : locale === "ar" ? "متجر خفيف فائق السرعة عبر شبكة Edge، يتيح الطلب السريع في خطوتين دون إجبار العميل على تحميل أي تطبيق." : "Global Next.js 16 edge deployment. Ultra-responsive catalog, zero app downloads, frictionless 2-step checkout.",
          system: "Next.js App Router · Edge Network"
        },
        {
          step: "03",
          title: locale === "fr" ? "Triage WhatsApp & Dispatch Colis" : locale === "ar" ? "فرز فوري عبر واتساب وإخطار المستودع" : "Automated Bot Triage & Dispatch",
          badge: locale === "fr" ? "Alerte < 18s" : locale === "ar" ? "إشعار في < 18 ثانية" : "Verified in < 18s",
          speed: "1.20s",
          desc: locale === "fr" ? "Bot intelligent qualifiant l'adresse et le téléphone, validation automatique et envoi direct aux livreurs (58 wilayas)." : locale === "ar" ? "بوت ذكي يؤكد رقم الهاتف وعنوان التوصيل ويرسل إشعار التجهيز مباشرة للمستودع وشركات الشحن بـ 58 ولاية." : "Automated bot validates phone and shipping address, triggers instant warehouse dispatch and WhatsApp order receipt.",
          system: "WhatsApp Webhook · Logistics API"
        }
      ]
    },
    {
      id: "clinic",
      name: locale === "fr" ? "Cliniques & Consultations Privées" : locale === "ar" ? "العيادات التخصصية والاستشارات" : "Clinics & Private Consultations",
      clientBadge: "Adrena Club & Medical",
      clientExample: locale === "fr" ? "Prise de RDV 24h/24 · Zéro Appel Perdu" : locale === "ar" ? "حجز 24/7 · إنهاء ضغط الاستقبال" : "24/7 Booking · -68% Reception Load",
      headlineMetric: "< 30s",
      headlineMetricLabel: locale === "fr" ? "Délai moyen de qualification d'un patient" : locale === "ar" ? "زمن فرز وتأكيد حجز العميل" : "Average Patient Qualification Speed",
      commissionMetric: "100% Propriété Données",
      speedMetric: "380ms Rendu Mobile",
      nodes: [
        {
          step: "01",
          title: locale === "fr" ? "Capture d'Intérêt Ciblée" : locale === "ar" ? "استقطاب الزيارات عالية النية" : "Targeted Intent Capture",
          badge: locale === "fr" ? "Patients Qualifiés" : locale === "ar" ? "حملات موجهة" : "Qualified Inquiries",
          speed: "0.20s",
          desc: locale === "fr" ? "Scénarios vidéo axés sur le problème médical ou sportif, éliminant les curieux et ciblant les patients prêts à réserver." : locale === "ar" ? "سيناريوهات فيديو مقنعة تعالج احتياج المريض وتوجه المشاهدين المستعدين للحجز الفوري." : "Direct-response video creative focusing on specific treatments, filtering tire-kickers and attracting ready-to-book patients.",
          system: "Direct-Response Meta Campaigns"
        },
        {
          step: "02",
          title: locale === "fr" ? "Vitrine & Grille Praticiens" : locale === "ar" ? "واجهة العيادة وحجز المواعيد" : "Sovereign Intake & Schedule Hub",
          badge: locale === "fr" ? "Accès 24/7" : locale === "ar" ? "مواعيد محدثة" : "Zero Friction Access",
          speed: "0.38s",
          desc: locale === "fr" ? "Interface claire présentant spécialités, tarifs transparents et créneaux disponibles sans aucun temps de chargement." : locale === "ar" ? "واجهة واضحة تعرض التخصصات والأسعار والمواعيد المتاحة بتحديث مباشر وسرعة فائقة." : "Ultra-fast portal presenting doctor roster, transparent treatment tiers, and real-time open slots.",
          system: "Edge Architecture · PostgreSQL"
        },
        {
          step: "03",
          title: locale === "fr" ? "Synchronisation Agenda & Triage" : locale === "ar" ? "مزامنة التقويم وتنبيه الاستقبال" : "Calendar Sync & Direct Reception Ping",
          badge: locale === "fr" ? "RDV Verrouillé" : locale === "ar" ? "الموعد مثبت" : "Calendar Locked",
          speed: "1.10s",
          desc: locale === "fr" ? "Le bot confirme les critères du patient, enregistre le rendez-vous dans Google Calendar et prévient l'accueil par WhatsApp." : locale === "ar" ? "البوت يتحقق من بيانات المريض ويثبت الحجز في التقويم ويرسل بطاقة الموعد لمكتب الاستقبال فوراً." : "Intake bot qualifies patient criteria, commits slot to Google Calendar, and alerts reception staff via encrypted webhook.",
          system: "Google Calendar Sync · WhatsApp Bot"
        }
      ]
    },
    {
      id: "b2b",
      name: locale === "fr" ? "Services B2B & Grands Comptes" : locale === "ar" ? "خدمات الشركات والصفقات الكبرى" : "High-Ticket B2B & Advisory",
      clientBadge: "Enterprise Dealflow",
      clientExample: locale === "fr" ? "Triage Direct · Zéro Perte Commerciale" : locale === "ar" ? "فرز العقود الكبرى تلقائياً" : "Direct Executive Dealflow",
      headlineMetric: "100%",
      headlineMetricLabel: locale === "fr" ? "Propriété intégrale du code & base clients" : locale === "ar" ? "ملكية كاملة للشفرة والبيانات" : "Source Code & Database Ownership",
      commissionMetric: "0€ Abonnement SaaS",
      speedMetric: "PostgreSQL Edge Sync",
      nodes: [
        {
          step: "01",
          title: locale === "fr" ? "Calculateur de Périmètre & Devis" : locale === "ar" ? "حاسبة نطاق العمل المخصصة" : "Scope & Qualification Estimator",
          badge: locale === "fr" ? "Score Décideur" : locale === "ar" ? "تقييم العميل" : "Lead Scoring",
          speed: "0.25s",
          desc: locale === "fr" ? "Formulaire interactif qualifiant budget, volume et échéance pour orienter automatiquement le décideur." : locale === "ar" ? "حاسبة تفاعلية تجمع متطلبات العميل وميزانيته وجدوله الزمني لفرز المشروعات ذات الأولوية." : "Interactive scoping tool evaluating company budget, tech scope, and delivery window to grade client priority.",
          system: "Interactive Valuation Engine"
        },
        {
          step: "02",
          title: locale === "fr" ? "Pipeline Sécurisé & CRM Sur Mesure" : locale === "ar" ? "بوابة الصفقات ونظام CRM مخصص" : "Sovereign CRM Pipeline",
          badge: locale === "fr" ? "Zéro Outil Tiers" : locale === "ar" ? "دون اشتراكات خارجية" : "Zero Vendor Rent",
          speed: "0.45s",
          desc: locale === "fr" ? "Tableau de bord propriétaire remplaçant les abonnements mensuels coûteux. Données hébergées sur votre propre instance." : locale === "ar" ? "لوحة تحكم خاصة تنهي فوضى الاشتراكات الشهرية المرهقة وتبقي بيانات عملائك مشفرة تحت تصرفك." : "Custom internal dashboard eliminating expensive monthly CRM subscriptions, hosted on your sovereign Supabase cluster.",
          system: "Supabase · PostgreSQL Cluster"
        },
        {
          step: "03",
          title: locale === "fr" ? "Notification Direction en Temps Réel" : locale === "ar" ? "إشعار مشفر فوري للإدارة" : "Executive Instant Ping",
          badge: locale === "fr" ? "Alerte Téléphone" : locale === "ar" ? "تنبيه مباشر" : "Direct Hotline Ping",
          speed: "1.40s",
          desc: locale === "fr" ? "Notification instantanée sur le téléphone du fondateur avec le dossier complet du projet et lien de réservation Zoom." : locale === "ar" ? "تنبيه يصل لهاتف المؤسس الخاص يضم ملف العميل وميزانيته مع تثبيت مكالمة Zoom استكشافية." : "Encrypted notification delivered directly to executive device with full project dossier and scheduled Zoom slot.",
          system: "Executive Hotline Webhook"
        }
      ]
    }
  ];

  const current = sectors[activeSector];

  return (
    <section className="py-24 sm:py-32 md:py-44 px-4 sm:px-6 md:px-12 w-full max-w-[1400px] mx-auto text-start overflow-hidden">
      {/* 1. Header with clear business promise */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 text-xs font-mono font-medium mb-3 sm:mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{locale === "fr" ? "BOUCLE D'ACQUISITION AUTONOME" : locale === "ar" ? "مسار الأتمتة السيادية // تشغيل 24/7" : "SOVEREIGN AUTONOMOUS LOOP"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04] text-balance">
            {locale === "fr" 
              ? "L'Architecture de Revenus Autonome." 
              : locale === "ar" 
              ? "هندسة الإيرادات المؤتمتة لاكتساب العملاء." 
              : "The Autonomous Revenue Architecture."}
          </h2>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-light max-w-md leading-relaxed text-pretty">
          {locale === "fr"
            ? "Comment notre infrastructure remplace la gestion manuelle lente par une exécution ultra-rapide connectant annonces, plateforme et ventes."
            : locale === "ar"
            ? "كيف تستبدل بنيتنا البرمجية الفوضى والردود اليدوية البطيئة بمسار آلي فائق السرعة يربط الإعلانات بالمبيعات مباشرة."
            : "How our engineered infrastructure replaces slow manual back-and-forth with instantaneous edge execution."}
        </p>
      </div>

      {/* 2. Main Architecture Stage (Dark Luxury Card, Pure Brutalism) */}
      <div className="rounded-3xl sm:rounded-[2.5rem] bg-[#070709] text-white border border-white/10 p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
        {/* Subtle architectural ambient aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-emerald-500/10 blur-[100px] pointer-events-none" />

        {/* Top Control Bar: Instant Sector Switcher */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div 
            role="tablist"
            aria-label="Industry Pipelines"
            className="flex flex-wrap gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 w-full md:w-auto"
          >
            {sectors.map((sec, idx) => {
              const isActive = activeSector === idx;
              return (
                <button
                  key={sec.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveSector(idx)}
                  className={`relative min-h-[44px] flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer text-center ${
                    isActive ? "text-black font-semibold" : "text-white/70 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSectorPill"
                      className="absolute inset-0 bg-white rounded-xl shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{sec.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Client Proof Tag */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-white/80 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/50">{locale === "fr" ? "Éprouvé dans :" : locale === "ar" ? "نظام معتمد في :" : "Proven in:"}</span>
            <span className="font-semibold text-white">{current.clientBadge}</span>
          </div>
        </div>

        {/* Middle Stage: The 3 Connected Pipeline Nodes */}
        <div className="relative z-10 py-10 sm:py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {current.nodes.map((node, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 flex flex-col justify-between gap-6 transition-all group"
                >
                  <div>
                    {/* Step & Timing Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-[11px]">
                          {node.step}
                        </span>
                        <span className="text-emerald-400 font-semibold">{node.badge}</span>
                      </div>
                      <span className="text-white/40">{node.speed}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white mb-3 text-balance">
                      {node.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed text-pretty">
                      {node.desc}
                    </p>
                  </div>

                  {/* System Architecture Tag */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                    <div className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-white/40" />
                      <span className="truncate max-w-[200px]">{node.system}</span>
                    </div>
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Strip: Financial Impact & Fast-Track Action */}
        <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-mono text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{locale === "fr" ? "100% Propriété du Code Source" : locale === "ar" ? "ملكية كاملة بنسبة 100% للشفرة" : "100% Code & Database Ownership"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{locale === "fr" ? "Zéro Abonnement Logiciel Caché" : locale === "ar" ? "صفر اشتراكات برمجية شهرية" : "Zero SaaS Subscription Tax"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{locale === "fr" ? "Vitesse Validée Réseau 4G" : locale === "ar" ? "سرعة مثبتة عبر شبكات 4G" : "Sub-Second 4G Delivery"}</span>
            </div>
          </div>

          <TransitionLink
            href="/contact"
            className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs sm:text-sm font-semibold shadow-lg shrink-0 cursor-pointer text-center group"
          >
            <span>{locale === "fr" ? "Concevoir ce système pour mon entreprise" : locale === "ar" ? "بناء هذا النظام لمشروعي" : "Build This System For My Business"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform shrink-0" />
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
