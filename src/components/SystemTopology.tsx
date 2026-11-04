"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Database, 
  Layers, 
  MessageSquare, 
  Truck, 
  Radio, 
  CheckCircle2, 
  ArrowUpRight,
  Shield,
  Activity
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
          { label: "Friction", value: "Zero Pre-Drop" }
        ],
        details: "Direct-response video hooks and Meta campaigns pre-qualify high-intent buyers before they click. No vanity traffic.",
        protocol: "Meta CAPI + Direct HTTPS",
        badge: "LAYER 01 // DEMAND"
      },
      edge: {
        id: "edge",
        category: "EDGE INFRASTRUCTURE",
        title: "Sub-600ms Edge Engine",
        subtitle: "Next.js 15 Architecture on Global Edge",
        metrics: [
          { label: "4G TTFB", value: "420ms" },
          { label: "Asset Size", value: "< 95kb" }
        ],
        details: "Custom headless edge deployment stripped of bloated CMS plugins. Renders instantly on fragile mobile cellular networks across all wilayas.",
        protocol: "HTTP/3 + Vercel Edge Runtime",
        badge: "LAYER 02 // SPEED"
      },
      db: {
        id: "db",
        category: "SOVEREIGN DATA STORE",
        title: "Sovereign Postgres Core",
        subtitle: "Supabase DB with Row-Level Security",
        metrics: [
          { label: "SaaS Toll", value: "0% Commission" },
          { label: "Ownership", value: "100% Client-Owned" }
        ],
        details: "You own the database and code entirely. No monthly Shopify subscription lock-in, no per-transaction toll fees.",
        protocol: "PostgreSQL 16 + Realtime Replication",
        badge: "LAYER 03 // DATA"
      },
      webhook: {
        id: "webhook",
        category: "EVENT DISPATCH BUS",
        title: "Realtime Event Bus",
        subtitle: "Zero-Latency Webhook Routing",
        metrics: [
          { label: "Dispatch Latency", value: "< 200ms" },
          { label: "Drop Rate", value: "0.00%" }
        ],
        details: "The instant a customer submits an order or lead inquiry, high-reliability edge workers fire automated payloads into dispatch channels.",
        protocol: "Edge Functions + HMAC Signing",
        badge: "LAYER 04 // LOGIC"
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
        details: "Orders and booking requests arrive formatted directly on your team's WhatsApp or Telegram. No messy email inboxes or missed leads.",
        protocol: "WhatsApp Business API / Webhooks",
        badge: "LAYER 05A // CONVERSION"
      },
      logistics: {
        id: "logistics",
        category: "FULFILLMENT ENGINE",
        title: "58-Wilaya Logistics Sync",
        subtitle: "Automated Courier & COD Reconciliation",
        metrics: [
          { label: "Coverage", value: "58 Wilayas" },
          { label: "Manual Entry", value: "Eliminated" }
        ],
        details: "Direct API integration with national couriers (Yalidine, ZR Express) auto-generates tracking barcodes and syncs cash-on-delivery statuses.",
        protocol: "REST API + Webhook Barcode Gen",
        badge: "LAYER 05B // FULFILLMENT"
      }
    },
    fr: {
      traffic: {
        id: "traffic",
        category: "ACQUISITION ENTRANTE",
        title: "Trafic Qualifié & Ciblé",
        subtitle: "Campagnes Meta Direct-Response & Trafic Organique",
        metrics: [
          { label: "Ciblage", value: "Intention d'Achat" },
          { label: "Friction", value: "Zéro Perte Amont" }
        ],
        details: "Scripts vidéo percutants et campagnes Meta sélectionnant les acheteurs sérieux avant même le clic. Zéro trafic superficiel.",
        protocol: "Meta CAPI + HTTPS Direct",
        badge: "COUCHE 01 // DEMANDE"
      },
      edge: {
        id: "edge",
        category: "INFRASTRUCTURE EDGE",
        title: "Moteur Edge Sous 600ms",
        subtitle: "Architecture Next.js 15 Déployée au Plus Près",
        metrics: [
          { label: "TTFB sur 4G", value: "420ms" },
          { label: "Poids Assets", value: "< 95ko" }
        ],
        details: "Déploiement sur-mesure purgé de tout plugin CMS lourd. Affichage instantané sur les réseaux 4G mobiles dans toutes les wilayas.",
        protocol: "HTTP/3 + Vercel Edge Runtime",
        badge: "COUCHE 02 // VITESSE"
      },
      db: {
        id: "db",
        category: "DONNÉES SOUVERAINES",
        title: "Noyau Postgres Souverain",
        subtitle: "Base PostgreSQL Supabase avec Sécurité RLS",
        metrics: [
          { label: "Rente SaaS", value: "0% Commission" },
          { label: "Propriété", value: "100% Client" }
        ],
        details: "Vous possédez intégralement votre code et votre base. Aucun abonnement mensuel captif, aucun prélèvement sur vos ventes.",
        protocol: "PostgreSQL 16 + Réplication Temps Réel",
        badge: "COUCHE 03 // DONNÉES"
      },
      webhook: {
        id: "webhook",
        category: "BUS DE DISPATCH",
        title: "Bus d'Événements Temps Réel",
        subtitle: "Routage Instantané de Webhooks",
        metrics: [
          { label: "Latence Dispatch", value: "< 200ms" },
          { label: "Taux de Perte", value: "0.00%" }
        ],
        details: "Dès qu'une commande ou demande est soumise, des workers edge ultra-rapides transmettent immédiatement les données vers vos canaux.",
        protocol: "Fonctions Edge + Signature HMAC",
        badge: "COUCHE 04 // LOGIQUE"
      },
      whatsapp: {
        id: "whatsapp",
        category: "CONVERSION COMMERCIALE",
        title: "Triage WhatsApp Instantané",
        subtitle: "Alerte Directe des Équipes & Cuisines",
        metrics: [
          { label: "Alerte Équipe", value: "< 30s" },
          { label: "Gain Conversion", value: "+34%" }
        ],
        details: "Les commandes et demandes de réservation arrivent formatées directement sur le WhatsApp de vos équipes. Fini les emails perdus.",
        protocol: "WhatsApp Business API / Webhooks",
        badge: "COUCHE 05A // CONVERSION"
      },
      logistics: {
        id: "logistics",
        category: "EXPÉDITION & LOGISTIQUE",
        title: "Synchro Transporteurs 58 Wilayas",
        subtitle: "Bordereaux Automatisés & Suivi COD",
        metrics: [
          { label: "Couverture", value: "58 Wilayas" },
          { label: "Saisie Manuelle", value: "Supprimée" }
        ],
        details: "Connexion API directe avec Yalidine et ZR Express : génération automatique des bordereaux et rapprochement du paiement à la livraison.",
        protocol: "API REST + Génération Code-barres",
        badge: "COUCHE 05B // LOGISTIQUE"
      }
    },
    ar: {
      traffic: {
        id: "traffic",
        category: "اكتساب العملاء والطلب",
        title: "حركة زوار مستهدفة ومركزة",
        subtitle: "إعلانات ميتا استجابة مباشرة وزيارات عضوية",
        metrics: [
          { label: "الاستهداف", value: "نية شراء حقيقية" },
          { label: "التسرب", value: "0% ضياع مسبق" }
        ],
        details: "سيناريوهات فيديو مقنعة وحملات إعلانية مؤهلة تستقطب العملاء الجاهزين للشراء قبل النقر. لا مكان للترافيك الوهمي.",
        protocol: "Meta CAPI + Direct HTTPS",
        badge: "الطبقة 01 // الطلب"
      },
      edge: {
        id: "edge",
        category: "البنية السحابية الطرفية",
        title: "محرك طرفي فائق السرعة تحت 600ms",
        subtitle: "بنية Next.js 15 سحابية موزعة جغرافياً",
        metrics: [
          { label: "زمن الاستجابة 4G", value: "420ms" },
          { label: "حجم الصفحة", value: "< 95kb" }
        ],
        details: "تطوير برمجي نقي ومخصص خالٍ تماماً من إضافات الووردبريس الثقيلة. يفتح فورياً على شبكات الهاتف في كافة الولايات.",
        protocol: "HTTP/3 + Vercel Edge Runtime",
        badge: "الطبقة 02 // السرعة"
      },
      db: {
        id: "db",
        category: "قاعدة بيانات سيادية",
        title: "قاعدة بيانات بوستغريس سيادية",
        subtitle: "قاعدة Supabase مع عزل أمني على مستوى الصف RLS",
        metrics: [
          { label: "عمولة المنصة", value: "0% أرباح محفوظة" },
          { label: "الملكية", value: "100% ملك لك" }
        ],
        details: "تمتلك الكود وقاعدة بيانات عملائك بالكامل وبشكل سيادي. لا اشتراكات شهرية متكررة تبتز أرباحك، ولا عمولات على مبيعاتك.",
        protocol: "PostgreSQL 16 + مزامنة لحظية",
        badge: "الطبقة 03 // البيانات"
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
        details: "بمجرد قيام العميل بالطلب أو إرسال استفسار، تتولى خوادم طرفية مشفرة نقل البيانات فوراً إلى قنوات التوزيع المعنية.",
        protocol: "Edge Functions + HMAC Signing",
        badge: "الطبقة 04 // المنطق"
      },
      whatsapp: {
        id: "whatsapp",
        category: "التحويل وإتمام المبيعات",
        title: "تأهيل وفرز فوري عبر واتساب",
        subtitle: "إشعار مباشر للمطابخ وموظفي المبيعات",
        metrics: [
          { label: "تنبيه الفريق", value: "< 30s" },
          { label: "رفع نسبة التحويل", value: "+34%" }
        ],
        details: "تصل الطلبيات وتفاصيل الحجز منسقة ومجهزة مباشرة إلى واتساب فريقك أو تيليغرام. لا بريد إلكتروني منسي ولا طلبات ضائعة.",
        protocol: "WhatsApp Business API / Webhooks",
        badge: "الطبقة 05A // المبيعات"
      },
      logistics: {
        id: "logistics",
        category: "اللوجستيات والتوصيل",
        title: "ربط الشحن والتوصيل في 58 ولاية",
        subtitle: "توليد بوالص شحن تلقائية ومطابقة الدفع عند الاستلام",
        metrics: [
          { label: "التغطية", value: "58 ولاية" },
          { label: "الإدخال اليدوي", value: "ملغى بالكامل" }
        ],
        details: "ربط تقني مباشر مع ياليدين وZR Express لتوليد باركود الشحن آلياً ومتابعة تحصيل مبالغ الدفع عند الاستلام دون تدخل بشري.",
        protocol: "REST API + Barcode Auto-Gen",
        badge: "الطبقة 05B // التوصيل"
      }
    }
  };

  const localizedNodes = nodesContent[locale] || nodesContent.en;
  const activeNode = localizedNodes[activeNodeId] || localizedNodes.edge;

  const nodeOrder = ["traffic", "edge", "db", "webhook", "whatsapp", "logistics"];

  return (
    <div className="w-full bg-[#08080c] text-white rounded-3xl sm:rounded-[36px] border border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10 relative z-10 text-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>
              {locale === "fr" 
                ? "TOPOLOGIE DE SYSTÈME // FLUX DE DONNÉES EN DIRECT" 
                : locale === "ar" 
                ? "طوبولوجيا النظام الهندسية // مسار تدفق البيانات الحي" 
                : "SYSTEM TOPOLOGY // LIVE DATA HIGHWAY"}
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-medium tracking-tight text-white">
            {locale === "fr" 
              ? "L'Anatomie d'une Plateforme Souveraine Fleevy" 
              : locale === "ar" 
              ? "الهيكل المعماري لمنصات فليفي السيادية فائقة السرعة" 
              : "The Anatomy of a Sovereign Fleevy Engine"}
          </h3>
        </div>

        <div className="text-xs font-mono text-white/50 flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>ZERO PLATFORM TOLL · 100% SOURCED CODE</span>
        </div>
      </div>

      {/* Interactive Topology Visual Stage */}
      <div className="relative z-10 mb-10">
        {/* Node Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/15 text-start flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                {activeNode.badge}
              </span>
              <span className="text-xs font-mono text-white/50">{activeNode.protocol}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-3">
              {activeNode.title}
            </h4>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              {activeNode.details}
            </p>
          </div>

          {/* Telemetry Metrics for Node */}
          <div className="flex flex-row lg:flex-col gap-4 sm:gap-6 shrink-0 border-t lg:border-t-0 lg:border-s border-white/10 pt-4 lg:pt-0 lg:ps-8">
            {activeNode.metrics.map((m, mIdx) => (
              <div key={mIdx}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-0.5">
                  {m.label}
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
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
