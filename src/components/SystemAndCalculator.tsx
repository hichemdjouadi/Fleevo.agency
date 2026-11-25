"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { CalcMode, CapabilityId } from "@/lib/i18n/types";
import TransitionLink from "@/components/TransitionLink";

type Currency = "DZD" | "USD";

export default function SystemAndCalculator() {
  const { t, locale } = useTranslation();
  const data = t.home.systemAndCalc;

  const [activeCapId, setActiveCapId] = useState<CapabilityId>("ads");
  const [calcMode, setCalcMode] = useState<CalcMode>("leads");
  const [currency, setCurrency] = useState<Currency>(
    locale === "en" ? "USD" : "DZD"
  );

  // Leads mode inputs
  const [inquiries, setInquiries] = useState<number>(120);
  const [leadValueDzd, setLeadValueDzd] = useState<number>(25000);
  const [leadValueUsd, setLeadValueUsd] = useState<number>(250);

  // Orders mode inputs
  const [orders, setOrders] = useState<number>(450);
  const [basketDzd, setBasketDzd] = useState<number>(1800);
  const [basketUsd, setBasketUsd] = useState<number>(24);

  useEffect(() => {
    setCurrency(locale === "en" ? "USD" : "DZD");
  }, [locale]);

  const activeCap =
    data.capabilities.find((c) => c.id === activeCapId) || data.capabilities[0];

  const isDzd = currency === "DZD";
  const formatMoney = (amount: number) => {
    const formatted = Math.round(amount).toLocaleString("en-US");
    return isDzd ? `${formatted} DZD` : `$${formatted}`;
  };

  const leadVal = isDzd ? leadValueDzd : leadValueUsd;
  const exposedMonthly = inquiries * leadVal;

  const basketVal = isDzd ? basketDzd : basketUsd;
  const yearlyCommissionSaved = orders * basketVal * 0.2 * 12;

  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-12">
      <div className="rounded-[28px] sm:rounded-[40px] bg-[#0b0b0c] text-white p-6 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left: Two-Discipline System Switcher */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-start">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-medium tracking-[-0.03em] leading-[1.08] text-white text-balance">
              {data.headline}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed max-w-xl text-pretty">
              {data.subhead}
            </p>
          </div>

          {/* Interactive Capability Pills */}
          <div
            role="tablist"
            aria-label={data.headline}
            className="flex flex-wrap gap-2"
          >
            {data.capabilities.map((cap) => {
              const isActive = cap.id === activeCap.id;
              return (
                <button
                  key={cap.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCapId(cap.id);
                    if (cap.id === "commerce") {
                      setCalcMode("orders");
                    } else {
                      setCalcMode("leads");
                    }
                  }}
                  className={`min-h-[42px] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-white text-[#0b0b0c]"
                      : "bg-white/[0.08] text-white/80 hover:bg-white/[0.14] hover:text-white"
                  }`}
                >
                  {cap.label}
                </button>
              );
            })}
          </div>

          {/* Selected Capability Spec Rows */}
          <div className="border-t border-white/12 divide-y divide-white/10">
            <div className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
              <span className="text-xs sm:text-sm text-white/65 shrink-0">
                {activeCap.fuelLabel}
              </span>
              <span className="text-sm font-semibold text-white sm:text-end">
                {activeCap.fuelValue}
              </span>
            </div>
            <div className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
              <span className="text-xs sm:text-sm text-white/65 shrink-0">
                {activeCap.engineLabel}
              </span>
              <span className="text-sm font-semibold text-white sm:text-end">
                {activeCap.engineValue}
              </span>
            </div>
            <div className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
              <span className="text-xs sm:text-sm text-white/65 shrink-0">
                {activeCap.bonusLabel}
              </span>
              <span className="text-sm font-semibold text-white sm:text-end">
                {activeCap.bonusValue}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Dual-Mode DZD / USD Revenue-Leak Calculator */}
        <div className="lg:col-span-6 rounded-[22px] sm:rounded-[28px] bg-[#141417] border border-white/12 p-5 sm:p-7 flex flex-col gap-6 text-start">
          {/* Top Switchers */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div
              role="tablist"
              aria-label="Calculator mode"
              className="inline-flex p-1 rounded-full bg-white/[0.08]"
            >
              <button
                type="button"
                role="tab"
                aria-selected={calcMode === "leads"}
                onClick={() => setCalcMode("leads")}
                className={`min-h-[36px] px-3 sm:px-4 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  calcMode === "leads"
                    ? "bg-white text-[#0b0b0c]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {data.calculator.modeLeads}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={calcMode === "orders"}
                onClick={() => setCalcMode("orders")}
                className={`min-h-[36px] px-3 sm:px-4 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  calcMode === "orders"
                    ? "bg-white text-[#0b0b0c]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {data.calculator.modeOrders}
              </button>
            </div>

            <div
              role="group"
              aria-label="Currency selector"
              className="inline-flex p-1 rounded-full bg-white/[0.08]"
            >
              {(["DZD", "USD"] as Currency[]).map((cur) => (
                <button
                  key={cur}
                  type="button"
                  onClick={() => setCurrency(cur)}
                  aria-pressed={currency === cur}
                  className={`min-h-[36px] px-3 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    currency === cur
                      ? "bg-white text-[#0b0b0c]"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          {calcMode === "leads" ? (
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                  <label htmlFor="calc-inquiries" className="text-white/75">
                    {data.calculator.leadsVolumeLabel}
                  </label>
                  <span className="font-semibold text-white tabular-nums">
                    {inquiries}
                  </span>
                </div>
                <div className="min-h-[32px] flex items-center">
                  <input
                    id="calc-inquiries"
                    type="range"
                    min={20}
                    max={500}
                    step={10}
                    value={inquiries}
                    onChange={(e) => setInquiries(Number(e.target.value))}
                    className="fleevy-range"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                  <label htmlFor="calc-lead-val" className="text-white/75">
                    {data.calculator.leadsValueLabel}
                  </label>
                  <span className="font-semibold text-white tabular-nums">
                    {formatMoney(leadVal)}
                  </span>
                </div>
                <div className="min-h-[32px] flex items-center">
                  <input
                    id="calc-lead-val"
                    type="range"
                    min={isDzd ? 5000 : 50}
                    max={isDzd ? 150000 : 2500}
                    step={isDzd ? 2500 : 25}
                    value={leadVal}
                    onChange={(e) =>
                      isDzd
                        ? setLeadValueDzd(Number(e.target.value))
                        : setLeadValueUsd(Number(e.target.value))
                    }
                    className="fleevy-range"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                  <label htmlFor="calc-orders" className="text-white/75">
                    {data.calculator.ordersVolumeLabel}
                  </label>
                  <span className="font-semibold text-white tabular-nums">
                    {orders}
                  </span>
                </div>
                <div className="min-h-[32px] flex items-center">
                  <input
                    id="calc-orders"
                    type="range"
                    min={50}
                    max={1500}
                    step={25}
                    value={orders}
                    onChange={(e) => setOrders(Number(e.target.value))}
                    className="fleevy-range"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                  <label htmlFor="calc-basket" className="text-white/75">
                    {data.calculator.ordersValueLabel}
                  </label>
                  <span className="font-semibold text-white tabular-nums">
                    {formatMoney(basketVal)}
                  </span>
                </div>
                <div className="min-h-[32px] flex items-center">
                  <input
                    id="calc-basket"
                    type="range"
                    min={isDzd ? 600 : 10}
                    max={isDzd ? 12000 : 200}
                    step={isDzd ? 200 : 2}
                    value={basketVal}
                    onChange={(e) =>
                      isDzd
                        ? setBasketDzd(Number(e.target.value))
                        : setBasketUsd(Number(e.target.value))
                    }
                    className="fleevy-range"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Output Readout */}
          <div className="pt-5 border-t border-white/12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs text-white/70 mb-1">
                {calcMode === "leads"
                  ? data.calculator.leadsResultLabel
                  : data.calculator.ordersResultLabel}
              </div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
                {calcMode === "leads"
                  ? formatMoney(exposedMonthly)
                  : formatMoney(yearlyCommissionSaved)}
              </div>
              <div className="text-[11px] text-white/60 mt-1">
                {calcMode === "leads"
                  ? data.calculator.leadsFormulaNote
                  : data.calculator.ordersFormulaNote}
              </div>
            </div>

            <TransitionLink
              href="/contact?mode=audit"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0b0b0c] text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors shrink-0"
            >
              <span>
                {calcMode === "leads"
                  ? data.calculator.leadsCta
                  : data.calculator.ordersCta}
              </span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
