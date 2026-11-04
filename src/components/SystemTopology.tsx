"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Radio, 
  Activity,
  ArrowRight
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface TopologyNode {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  metrics: { label: string; value: string }[];
  details: string;
  protocol: string;
  badge: string;
  shortTag: string;
}

export default function SystemTopology() {
  const { locale, isRTL } = useTranslation();
  const [activeNodeId, setActiveNodeId] = useState<string>("edge");

  const nodesContent: Record<string, Record<string, TopologyNode>> = {
    en: {
      traffic: {
        id: "traffic",
        category: "INBOUND ACQUISITION",
        title: "Targeted Inbound Traffic",
        subtitle: "Direct-Response Meta Ads & Organic Signals",
        metrics: [
          { label: "Targeting", value: "Purchase Intent" },
          { label: "Drop-Off", value: "0% Pre-Click" }
        ],
        details: "Direct-response video hooks and Meta campaigns pre-qualify high-intent buyers before they click. No vanity traffic.",
        protocol: "Meta CAPI + HTTPS Direct",
        badge: "LAYER 01 // DEMAND",
        shortTag: "DEMAND"
      },
      edge: {
        id: "edge",
        category: "EDGE INFRASTRUCTURE",
        title: "Sub-600ms Edge Engine",
        subtitle: "Next.js 15 Architecture on Global Edge",
        metrics: [
          { label: "4G TTFB", value: "420ms" },
          { label: "Bundle Size", value: "< 95kb" }
        ],
        details: "Custom headless edge deployment stripped of bloated CMS plugins. Renders instantly on fragile 4G cellular connections across all 58 wilayas.",
        protocol: "HTTP/3 + Vercel Edge",
        badge: "LAYER 02 // SPEED",
        shortTag: "SPEED"
      },
      db: {
        id: "db",
        category: "SOVEREIGN DATA STORE",
        title: "Sovereign Postgres Core",
        subtitle: "Supabase DB with Row-Level Security",
        metrics: [
          { label: "SaaS Toll", value: "0% Fee" },
          { label: "Ownership", value: "100% Client" }
        ],
        details: "You own the database and code entirely. No monthly Shopify subscription lock-in, no per-transaction toll fees.",
        protocol: "PostgreSQL 16 + Realtime",
        badge: "LAYER 03 // DATA",
        shortTag: "CORE DB"
      },
      webhook: {
        id: "webhook",
        category: "EVENT DISPATCH BUS",
        title: "Realtime Event Bus",
        subtitle: "Zero-Latency Webhook Routing",
        metrics: [
          { label: "Dispatch", value: "< 200ms" },
          { label: "Drop Rate", value: "0.00%" }
        ],
        details: "The instant a customer submits an inquiry or order, edge workers fire automated payloads directly to sales and dispatch reps.",
        protocol: "Edge Workers + HMAC",
        badge: "LAYER 04 // LOGIC",
        shortTag: "BUS"
      },
      whatsapp: {
        id: "whatsapp",
        category: "COMMERCIAL CONVERSION",
        title: "Instant WhatsApp Triage",
        subtitle: "Direct Branch & Rep Onboarding",
        metrics: [
          { label: "Team Alert", value: "< 30s" },
          { label: "Conversion Lift", value: "+34%" }
        ],
        details: "Orders and booking requests arrive formatted directly on your team's WhatsApp or Telegram. No lost emails or cold leads.",
        protocol: "WhatsApp Business API",
        badge: "LAYER 05A // CONVERSION",
        shortTag: "WHATSAPP"
      },
      logistics: {
        id: "logistics",
        category: "FULFILLMENT ENGINE",
        title: "58-Wilaya Logistics Sync",
        subtitle: "Automated Courier & COD Reconciliation",
        metrics: [
          { label: "Coverage", value: "58 Wilayas" },
          { label: "Manual Entry", value: "Zero" }
        ],
        details: "Direct API integration with national couriers (Yalidine, ZR Express) auto-generates tracking barcodes and reconciles cash-on-delivery.",
        protocol: "Courier REST APIs",
        badge: "LAYER 05B // FULFILLMENT",
        shortTag: "LOGISTICS"
      }
    },
    fr: {
      traffic: {
        id: "traffic",
        category: "ACQUISITION ENTRANTE",
        title: "Trafic Qualifié & Ciblé",
        subtitle: "Campagnes Meta Direct-Response & Organique",
        metrics: [
          { label: "Ciblage", value: "Intention d'Achat" },
          { label: "Déperdition", value: "0% Amont" }
        ],
        details: "Scripts vidéo percutants et campagnes Meta sélectionnant les acheteurs sérieux avant le clic. Zéro trafic superficiel.",
        protocol: "Meta CAPI + HTTPS Direct",
        badge: "COUCHE 01 // DEMANDE",
        shortTag: "DEMANDE"
      },
      edge: {
        id: "edge",
        category: "INFRASTRUCTURE EDGE",
        title: "Moteur Edge Sous 600ms",
        subtitle: "Next.js 15 Déployé au Plus Près",
        metrics: [
          { label: "TTFB sur 4G", value: "420ms" },
          { label: "Poids Assets", value: "< 95ko" }
        ],
        details: "Déploiement sur-mesure purgé de plugins CMS lourds. Affichage instantané sur réseaux 4G mobiles dans toutes les wilayas.",
        protocol: "HTTP/3 + Vercel Edge",
        badge: "COUCHE 02 // VITESSE",
        shortTag: "VITESSE"
      },
      db: {
        id: "db",
        category: "DONNÉES SOUVERAINES",
        title: "Noyau Postgres Souverain",
        subtitle: "Base PostgreSQL avec Sécurité RLS",
        metrics: [
          { label: "Rente SaaS", value: "0% Frais" },
          { label: "Propriété", value: "100% Client" }
        ],
        details: "Vous possédez intégralement votre code et votre base. Aucun abonnement mensuel captif, aucun prélèvement sur vos ventes.",
        protocol: "PostgreSQL 16 + Temps Réel",
        badge: "COUCHE 03 // DONNÉES",
        shortTag: "BASE"
      },
      webhook: {
        id: "webhook",
        category: "BUS DE DISPATCH",
        title: "Bus d'Événements Temps Réel",
        subtitle: "Routage Instantané de Webhooks",
        metrics: [
          { label: "Dispatch", value: "< 200ms" },
          { label: "Taux de Perte", value: "0.00%" }
        ],
        details: "Dès qu'une commande est soumise, des workers edge transmettent instantanément les données vers vos canaux de vente.",
        protocol: "Fonctions Edge + HMAC",
        badge: "COUCHE 04 // LOGIQUE",
        shortTag: "BUS"
      },
      whatsapp: {
        id: "whatsapp",
        category: "CONVERSION COMMERCIALE",
        title: "Triage WhatsApp Instantané",
        subtitle: "Alerte Directe des Équipes",
        metrics: [
          { label: "Alerte Équipe", value: "< 30s" },
          { label: "Gain Conversion", value: "+34%" }
        ],
        details: "Les commandes arrivent formatées directement sur le WhatsApp de vos équipes. Fini les emails perdus et les leads froids.",
        protocol: "WhatsApp Business API",
        badge: "COUCHE 05A // CONVERSION",
        shortTag: "WHATSAPP"
      },
      logistics: {
        id: "logistics",
        category: "EXPÉDITION & LOGISTIQUE",
        title: "Synchro Transporteurs 58 Wilayas",
        subtitle: "Bordereaux Automatisés & Suivi COD",
        metrics: [
          { label: "Couverture", value: "58 Wilayas" },
          { label: "Saisie Manuelle", value: "Zéro" }
        ],
        details: "Connexion API avec Yalidine et ZR Express : bordereaux automatiques et suivi du paiement à la livraison sans intervention humaine.",
        protocol: "API REST + Code-barres",
        badge: "COUCHE 05B // LOGISTIQUE",
        shortTag: "LIVRAISON"
      }
    },
    ar: {
      traffic: {
        id: "traffic",
        category: "اكتساب العملاء والطلب",
        title: "حركة زوار مستهدفة ومركزة",
        subtitle: "إعلانات ميتا استجابة مباشرة وزيارات نوعية",
        metrics: [
          { label: "الاستهداف", value: "نية شراء حقيقية" },
          { label: "التسرب", value: "0% ضياع مسبق" }
        ],
        details: "سيناريوهات فيديو مقنعة وحملات إعلانية مؤهلة تستقطب العملاء الجاهزين للشراء قبل النقر. لا مكان للترافيك الوهمي.",
        protocol: "Meta CAPI + HTTPS",
        badge: "الطبقة 01 // الطلب",
        shortTag: "الطلب"
      },
      edge: {
        id: "edge",
        category: "البنية السحابية الطرفية",
        title: "محرك طرفي فائق السرعة تحت 600ms",
        subtitle: "بنية Next.js 15 سحابية موزعة",
        metrics: [
          { label: "استجابة 4G", value: "420ms" },
          { label: "حجم الصفحة", value: "< 95kb" }
        ],
        details: "تطوير برمجي نقي ومخصص خالٍ من إضافات CMS الثقيلة. يفتح فورياً على شبكات الهاتف في كافة الولايات.",
        protocol: "HTTP/3 + Edge Runtime",
        badge: "الطبقة 02 // السرعة",
        shortTag: "السرعة"
      },
      db: {
        id: "db",
        category: "قاعدة بيانات سيادية",
        title: "قاعدة بيانات بوستغريس سيادية",
        subtitle: "قاعدة Supabase مع عزل أمني RLS",
        metrics: [
          { label: "عمولة المنصة", value: "0% عمولة" },
          { label: "الملكية", value: "100% ملك لك" }
        ],
        details: "تمتلك الكود وقاعدة البيانات بالكامل. لا اشتراكات شهرية متكررة تبتز أرباحك، ولا عمولات على مبيعاتك.",
        protocol: "PostgreSQL 16 + Realtime",
        badge: "الطبقة 03 // البيانات",
        shortTag: "البيانات"
      },
      webhook: {
        id: "webhook",
        category: "ناقل توزيع الأحداث اللحظي",
        title: "ناقل التوزيع الفوري للأحداث",
        subtitle: "توجيه لحظي للطلبات بزمن استجابة صفر",
        metrics: [
          { label: "سرعة الإرسال", value: "< 200ms" },
          { label: "نسبة الفقد", value: "0.00%" }
        ],
        details: "بمجرد قيام العميل بالطلب، تتولى خوادم طرفية نقل البيانات فوراً إلى قنوات التوزيع ومسؤولي المبيعات.",
        protocol: "Edge Functions + HMAC",
        badge: "الطبقة 04 // المنطق",
        shortTag: "التوجيه"
      },
      whatsapp: {
        id: "whatsapp",
        category: "التحويل وإتمام المبيعات",
        title: "تأهيل وفرز فوري عبر واتساب",
        subtitle: "إشعار مباشر للمطابخ وفرق المبيعات",
        metrics: [
          { label: "تنبيه الفريق", value: "< 30s" },
          { label: "رفع التحويل", value: "+34%" }
        ],
        details: "تصل الطلبيات وتفاصيل الحجز منسقة ومجهزة مباشرة إلى واتساب فريقك. لا بريد إلكتروني منسي ولا طلبات ضائعة.",
        protocol: "WhatsApp Business API",
        badge: "الطبقة 05A // المبيعات",
        shortTag: "واتساب"
      },
      logistics: {
        id: "logistics",
        category: "اللوجستيات والتوصيل",
        title: "ربط الشحن والتوصيل في 58 ولاية",
        subtitle: "توليد بوالص شحن ومطابقة الدفع عند الاستلام",
        metrics: [
          { label: "التغطية", value: "58 ولاية" },
          { label: "الإدخال اليدوي", value: "0% تدخل" }
        ],
        details: "ربط تقني مباشر مع ياليدين وZR Express لتوليد باركود الشحن آلياً ومتابعة تحصيل الدفع عند الاستلام تلقائياً.",
        protocol: "REST API + Auto Barcode",
        badge: "الطبقة 05B // التوصيل",
        shortTag: "الشحن"
      }
    }
  };

  const localizedNodes = nodesContent[locale] || nodesContent.en;
  const activeNode = localizedNodes[activeNodeId] || localizedNodes.edge;
  const nodeOrder = ["traffic", "edge", "db", "webhook", "whatsapp", "logistics"];

  return (
    <div className="w-full bg-[#08080c] text-white rounded-2xl sm:rounded-[32px] border border-white/10 p-4 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-white/10 relative z-10 text-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 mb-2.5">
            <Radio className="w-3.5 h-3.5 animate-pulse shrink-0" />
            <span>
              {locale === "fr" 
                ? "TOPOLOGIE // FLUX DE DONNÉES EN DIRECT" 
                : locale === "ar" 
                ? "طوبولوجيا النظام // مسار تدفق البيانات الحي" 
                : "SYSTEM TOPOLOGY // LIVE DATA HIGHWAY"}
            </span>
          </div>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
            {locale === "fr" 
              ? "L'Anatomie d'une Plateforme Fleevy" 
              : locale === "ar" 
              ? "الهيكل المعماري لمنصات فليفي السيادية" 
              : "The Anatomy of a Sovereign Fleevy Engine"}
          </h3>
        </div>

        <div className="text-[11px] font-mono text-white/50 flex items-center gap-2 shrink-0">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>ZERO SAAS TOLL · 100% CODE OWNERSHIP</span>
        </div>
      </div>

      {/* Interactive Topology Controls */}
      {/* Mobile Horizontal Snap Stepper (Visible < md) */}
      <div className="md:hidden relative z-10 mb-5">
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-2 pb-2 -mx-1 px-1">
          {nodeOrder.map((key, idx) => {
            const n = localizedNodes[key];
            const isActive = activeNodeId === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveNodeId(key)}
                className={`snap-start shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-start transition-all cursor-pointer ${
                  isActive
                    ? "bg-white/15 border-emerald-400/80 shadow-[0_0_20px_rgba(16,185,129,0.2)] ring-1 ring-emerald-400/50 text-white"
                    : "bg-white/[0.03] border-white/10 text-white/70 active:bg-white/[0.08]"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-emerald-400 animate-pulse" : "bg-white/30"}`} />
                <span className="text-[10px] font-mono text-white/50">0{idx + 1}</span>
                <span className="text-xs font-semibold tracking-wide uppercase font-mono">{n.shortTag}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Node Grid (Hidden < md) */}
      <div className="hidden md:block relative z-10 mb-8">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {nodeOrder.map((key, idx) => {
            const n = localizedNodes[key];
            const isActive = activeNodeId === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveNodeId(key)}
                className={`flex flex-col justify-between p-4 rounded-2xl border text-start transition-all relative group cursor-pointer ${
                  isActive
                    ? "bg-white/10 border-emerald-400/80 shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-1 ring-emerald-400/50"
                    : "bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between mb-3 w-full">
                  <span className="text-[10px] font-mono text-white/50">0{idx + 1}</span>
                  <span className={`w-2 h-2 rounded-full ${isActive ? "bg-emerald-400 animate-pulse" : "bg-white/20"}`} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase block mb-1">
                    {n.badge.split("//")[1]?.trim() || n.category}
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {n.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Inspector Panel for Active Node */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 p-5 sm:p-7 md:p-8 rounded-2xl bg-white/[0.04] border border-white/15 text-start flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 min-h-[220px] sm:min-h-[190px]"
        >
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                {activeNode.badge}
              </span>
              <span className="text-[11px] font-mono text-white/50">{activeNode.protocol}</span>
            </div>
            <h4 className="text-lg sm:text-2xl font-medium tracking-tight text-white mb-2">
              {activeNode.title}
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-white/70 font-light leading-relaxed">
              {activeNode.details}
            </p>
          </div>

          {/* Telemetry Metrics */}
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-4 shrink-0 border-t lg:border-t-0 lg:border-s border-white/10 pt-4 lg:pt-0 lg:ps-8">
            {activeNode.metrics.map((m, mIdx) => (
              <div key={mIdx} className="bg-white/[0.03] lg:bg-transparent p-3 lg:p-0 rounded-xl border border-white/5 lg:border-none">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-0.5 truncate">
                  {m.label}
                </span>
                <span className="text-lg sm:text-2xl font-bold font-mono text-emerald-400">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}