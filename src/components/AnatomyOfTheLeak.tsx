"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  X, 
  Check, 
  AlertCircle,
  Zap,
  TrendingUp,
  TrendingDown,
  ShieldCheck
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import TransitionLink from "@/components/TransitionLink";

export default function AnatomyOfTheLeak() {
  const { isRTL, locale } = useTranslation();

  const comparison = {
    badge: locale === "fr" 
      ? "AUDIT COMMERCIAL // LE CONTRASTE MATHÉMATIQUE" 
      : locale === "ar" 
      ? "التدقيق التجاري // المقارنة الرياضية المباشرة" 
      : "COMMERCIAL AUDIT // THE MATHEMATICAL CONTRAST",
    headline: locale === "fr"
      ? "Où s'évaporent 80% des budgets publicitaires ?"
      : locale === "ar"
      ? "أين يتبخر 80% من إنفاق الإعلانات وميزانيات التسويق؟"
      : "Where 80% of Marketing Budgets Disappear.",
    subhead: locale === "fr"
      ? "La plupart des entreprises perdent leurs prospects à cause de lenteurs techniques et de l'absence de qualification automatique. Voici la différence concrète."
      : locale === "ar"
      ? "أغلب الشركات تخسر عملاءها بسبب بطء المواقع وغياب الفرز الآلي الفوري. إليك الفارق الملموس بين المنظومة التقليدية وأنظمة فليفي."
      : "Most businesses bleed high-intent buyers through technical friction and delayed replies. Here is the direct financial contrast.",
    
    // Traditional Box
    traditionalTitle: locale === "fr" ? "L'Agence Web Classique (Le Panier Percé)" : locale === "ar" ? "الوكالات التقليدية (المنظومة المثقوبة)" : "The Conventional Agency Setup (The Leak)",
    traditionalBadge: locale === "fr" ? "Friction & Pertes" : locale === "ar" ? "تسرب وخسارة مستمرة" : "Friction & Loss",
    traditionalPoints: [
      {
        title: locale === "fr" ? "Chargement lent (7 à 11 secondes)" : locale === "ar" ? "قوالب بطيئة (7 إلى 11 ثانية)" : "7–11s Slow Page Builders",
        desc: locale === "fr" ? "53% des visiteurs mobiles quittent le site avant même que la page ne s'affiche sur leur téléphone." : locale === "ar" ? "53% من زوار الهاتف يغادرون قبل اكتمال تحميل الصفحة على شبكات 4G." : "53% of mobile visitors bounce before the page even paints on 4G LTE.",
        metric: locale === "fr" ? "53% Rebond Immédiat" : locale === "ar" ? "53% خسارة فورية" : "53% Bounce Loss"
      },
      {
        title: locale === "fr" ? "Réponses manuelles avec 4h de retard" : locale === "ar" ? "ردود يدوية متأخرة بعد ساعات" : "4-Hour Unstructured DM Lags",
        desc: locale === "fr" ? "L'impulsion d'achat retombe, le prospect part commander chez le concurrent le plus réactif." : locale === "ar" ? "رغبة الشراء الفورية تبرد، فيتوجه العميل للشراء من أقرب منافس يرد فوراً." : "Buying intent cools down, and the prospect purchases from the fastest-replying competitor.",
        metric: locale === "fr" ? "-68% Conversion" : locale === "ar" ? "-68% تراجع في التحويل" : "68% Drop in Sales"
      },
      {
        title: locale === "fr" ? "15% à 30% de commissions intermédiaires" : locale === "ar" ? "15% إلى 30% عمولات وسيطة للمنصات" : "15%–30% Marketplace Tolls",
        desc: locale === "fr" ? "Payer une rente perpétuelle aux applications de livraison et plateformes de mise en relation." : locale === "ar" ? "دفع اشتراكات وعمولات دائمة لتطبيقات التوصيل والمنصات الوسيطة المستنزفة للهامش." : "Perpetually subsidizing third-party food delivery and marketplace aggregators.",
        metric: locale === "fr" ? "Marge Confisquée" : locale === "ar" ? "استنزاف الأرباح" : "Margin Surrendered"
      },
      {
        title: locale === "fr" ? "Fichiers Excel manuels et commandes perdues" : locale === "ar" ? "ملفات إكسل يدوية وأخطاء متكررة" : "Manual Spreadsheets & Lost Orders",
        desc: locale === "fr" ? "Erreurs de saisie humaine, double réservations et zéro suivi automatisé des prospects." : locale === "ar" ? "أخطاء في التدوين اليدوي، ضياع أرقام العملاء، وغياب أي متابعة تراكمية." : "Costly human entry errors, double bookings, and zero automated client remarketing.",
        metric: locale === "fr" ? "Chaos Opérationnel" : locale === "ar" ? "فوضى تشغيلية" : "Chaotic Ops"
      }
    ],

    // Fleevy Box
    fleevyTitle: locale === "fr" ? "Le Moteur Souverain Fleevy" : locale === "ar" ? "محرك فليفي السيادي المستقل" : "The Fleevy Sovereign Engine",
    fleevyBadge: locale === "fr" ? "Zéro Friction · 100% Capté" : locale === "ar" ? "صفر تسرب · التقاط فوري" : "Zero Friction · 100% Captured",
    fleevyPoints: [
      {
        title: locale === "fr" ? "Vitesse Edge sous la seconde (< 420ms)" : locale === "ar" ? "تحميل فوري في أجزاء من الثانية (< 420ms)" : "Sub-Second Edge Delivery (< 420ms)",
        desc: locale === "fr" ? "Architecture Next.js 16 sur réseau Edge. Zéro temps d'attente, zéro abandon sur mobile." : locale === "ar" ? "بنية Next.js 16 موزعة على شبكة Edge سريعة. صفر انتظار وصفر ارتداد على الهاتف." : "Next.js 16 distributed edge CDN. Zero wait time, zero mobile visitor drop-off.",
        metric: locale === "fr" ? "99.4% Rétention" : locale === "ar" ? "99.4% بقاء وتفاعل" : "99.4% Retention"
      },
      {
        title: locale === "fr" ? "Triage & confirmation automatique en < 30s" : locale === "ar" ? "فرز وتأكيد آلي بالبوت في أقل من 30 ثانية" : "Instant 30s Bot Qualification",
        desc: locale === "fr" ? "Un bot intelligent filtre le budget et verrouille le rendez-vous ou la commande à l'instant même." : locale === "ar" ? "بوت مخصص يؤكد متطلبات العميل وميزانيته ويثبت الطلب أو الحجز في ذروة اهتمامه." : "Smart bot validates buyer intent, locks the appointment or order while intent is at its peak.",
        metric: locale === "fr" ? "Réponse Immédiate" : locale === "ar" ? "رد فوري 24/7" : "Instant Lock-in"
      },
      {
        title: locale === "fr" ? "0% commission et marge 100% préservée" : locale === "ar" ? "0% عمولة واحتفاظ كامل بأرباحك" : "0% Intermediary Commission",
        desc: locale === "fr" ? "Canal de commande direct appartenant à votre entreprise. Zéro intermédiaire prélevant votre bénéfice." : locale === "ar" ? "قناة بيع وطلب مباشر مملوكة لنشاطك التجاري بالكامل دون أي شريك يقتطع من أرباحك." : "Direct acquisition pipeline owned 100% by your brand. Keep every cent of your hard-earned margin.",
        metric: locale === "fr" ? "100% Marge Nette" : locale === "ar" ? "100% أرباح صافية" : "100% Margin Kept"
      },
      {
        title: locale === "fr" ? "Base de données chiffrée & code propriétaire" : locale === "ar" ? "قاعدة بيانات مشفرة وملكية كود كاملة" : "Sovereign PostgreSQL & Code Ownership",
        desc: locale === "fr" ? "Votre fichier client et votre code vous appartiennent à vie. Zéro dépendance envers un logiciel tiers." : locale === "ar" ? "بيانات عملائك وشفرتك البرمجية ملك لك للأبد دون اشتراكات احتكارية في منصات مغلقة." : "Your customer list, order history, and codebase belong entirely to you with zero vendor lock-in.",
        metric: locale === "fr" ? "Souveraineté Totale" : locale === "ar" ? "استقلالية تامة" : "100% Sovereign"
      }
    ],

    verdictText: locale === "fr"
      ? "Arrêtez de brûler votre budget publicitaire dans un entonnoir percé. Construisez un actif d'acquisition souverain."
      : locale === "ar"
      ? "توقف عن حرق ميزانيتك الإعلانية في مسار مبيعات مثقوب. ابنِ نظاماً سيادياً مؤتمتاً يقتنص كل مشترٍ محتمل."
      : "Stop burning marketing spend on a leaky funnel. Engineer a sovereign acquisition asset.",
    verdictCta: locale === "fr"
      ? "Demander un diagnostic technique sous 48h"
      : locale === "ar"
      ? "طلب تدقيق وتشخيص مسارك في 48 ساعة"
      : "Request a 48-Hour Technical Audit"
  };

  return (
    <section className="py-24 sm:py-32 md:py-44 px-4 sm:px-6 md:px-12 w-full max-w-[1400px] mx-auto text-start border-t border-black/10 overflow-hidden bg-white text-black">
      {/* 1. Section Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 sm:mb-20 gap-6 sm:gap-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-medium text-neutral-800 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>{comparison.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.04] text-balance">
            {comparison.headline}
          </h2>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-light max-w-md leading-relaxed text-pretty">
          {comparison.subhead}
        </p>
      </div>

      {/* 2. Side-by-Side Pure Contrast Comparison Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        
        {/* PANEL 1: The Conventional Setup (Dark Charcoal Muted) */}
        <div className="p-7 sm:p-10 md:p-12 rounded-3xl sm:rounded-[2.5rem] bg-[#0c0c0e] text-white border border-white/10 flex flex-col justify-between gap-8">
          <div>
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-500" />
                <h3 className="text-lg sm:text-2xl font-medium tracking-tight text-white/90">
                  {comparison.traditionalTitle}
                </h3>
              </div>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/10 text-white/60 font-semibold shrink-0">
                {comparison.traditionalBadge}
              </span>
            </div>

            <div className="space-y-6">
              {comparison.traditionalPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 text-start">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-white/40">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm sm:text-base font-medium text-white/80 line-through decoration-white/30">
                        {point.title}
                      </h4>
                      <span className="text-[11px] font-mono text-white/50 shrink-0">
                        {point.metric}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-xs font-mono text-white/40 flex items-center justify-between">
            <span>Result: Leaking 60%+ Ad Capital</span>
            <span>Unpredictable Growth</span>
          </div>
        </div>

        {/* PANEL 2: The Fleevy Sovereign Engine (Pure White Luxury Card) */}
        <div className="p-7 sm:p-10 md:p-12 rounded-3xl sm:rounded-[2.5rem] bg-white text-black border border-black/15 flex flex-col justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden ring-1 ring-black/5">
          {/* Subtle top indicator */}
          <div className="absolute top-0 inset-x-0 h-1 bg-black" />

          <div>
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
                <h3 className="text-lg sm:text-2xl font-medium tracking-tight text-black">
                  {comparison.fleevyTitle}
                </h3>
              </div>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-black text-white font-semibold shrink-0">
                {comparison.fleevyBadge}
              </span>
            </div>

            <div className="space-y-6">
              {comparison.fleevyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 text-start">
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm sm:text-base font-semibold text-black">
                        {point.title}
                      </h4>
                      <span className="text-[11px] font-mono font-bold text-black px-2 py-0.5 rounded-full bg-neutral-100 shrink-0">
                        {point.metric}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-black/10 text-xs font-mono text-neutral-600 flex items-center justify-between">
            <span className="font-semibold text-black">Result: Maximum Revenue Capture</span>
            <span className="font-semibold text-black">100% Asset Ownership</span>
          </div>
        </div>

      </div>

      {/* 3. Bottom Architectural Verdict Bar */}
      <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-[#08080a] text-white border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div className="max-w-2xl text-start">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 text-[11px] font-mono text-white/80 font-semibold mb-2">
            <Zap className="w-3 h-3 text-white" />
            <span>{locale === "fr" ? "VERDICT STRATÉGIQUE" : locale === "ar" ? "الخلاصة الاستراتيجية" : "THE ARCHITECTURAL VERDICT"}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white text-balance">
            {comparison.verdictText}
          </h3>
        </div>

        <TransitionLink
          href="/contact"
          className="w-full md:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-xs sm:text-sm font-semibold shrink-0 cursor-pointer text-center group"
        >
          <span>{comparison.verdictCta}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform shrink-0" />
        </TransitionLink>
      </div>
    </section>
  );
}
