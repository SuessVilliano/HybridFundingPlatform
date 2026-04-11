"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { FooterCTA } from "@/components/footer-cta";
import { programs, addOns, futuresPayouts, futuresContractLimits, withdrawalRules } from "@/data/programs";
import { siteCopy } from "@/data/site-copy";
import type { Program } from "@/data/programs";

type MarketTab = "forex" | "crypto" | "futures";

export default function FundingProgramsPage() {
  const { fundingProgramsPage } = siteCopy;
  const [activeMarket, setActiveMarket] = useState<MarketTab>("forex");

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {fundingProgramsPage.headline}
            </h1>
            <p className="mt-4 text-lg text-muted">
              {fundingProgramsPage.intro}
            </p>
          </FadeIn>

          {/* Market tabs */}
          <FadeIn delay={0.15} className="mt-10 flex justify-center">
            <div className="inline-flex rounded-lg border border-border bg-card p-1">
              {(["forex", "crypto", "futures"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveMarket(tab)}
                  className={`px-5 py-2 text-sm font-medium rounded-md transition-all ${
                    activeMarket === tab
                      ? "bg-accent text-white"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Program details */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {activeMarket === "futures" ? (
            <FuturesSection />
          ) : (
            <StaggerContainer staggerDelay={0.1} className="space-y-12">
              {programs
                .filter((p) =>
                  activeMarket === "crypto"
                    ? p.cryptoPricing && p.cryptoPricing.length > 0
                    : true
                )
                .map((program) => (
                  <StaggerItem key={program.id}>
                    <ProgramDetailCard
                      program={program}
                      market={activeMarket}
                    />
                  </StaggerItem>
                ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Optional Add-Ons
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {addOns.map((addon) => (
              <StaggerItem key={addon.name}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {addon.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">
                    {addon.cost}
                  </p>
                  <p className="text-sm text-muted">{addon.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Withdrawal rules */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
              Withdrawal Details
            </h2>
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              {Object.entries(withdrawalRules).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm border-b border-border pb-3 last:border-0 last:pb-0">
                  <span className="text-muted capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}

function ProgramDetailCard({
  program,
  market,
}: {
  program: Program;
  market: "forex" | "crypto";
}) {
  const pricing =
    market === "crypto" ? program.cryptoPricing : program.forexPricing;
  const targets =
    market === "crypto" ? program.cryptoTargets : program.forexTargets;

  if (!pricing || pricing.length === 0) return null;

  return (
    <motion.div
      id={program.slug}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-border bg-card overflow-hidden scroll-mt-24"
    >
      <div className="p-6 sm:p-8 border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent mb-3">
              {program.phases
                ? `${program.phases}-Phase Evaluation`
                : "No Evaluation"}
            </span>
            <h3 className="text-2xl font-bold text-foreground">
              {program.name}
            </h3>
            <p className="text-sm text-muted mt-1">{program.description}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted">Profit Split</p>
            <p className="text-xl font-bold text-foreground">
              {program.profitSplit}
            </p>
            <p className="text-xs text-accent">{program.profitSplitPremium}</p>
          </div>
        </div>
      </div>

      {/* Targets */}
      {targets && (
        <div className="px-6 sm:px-8 py-4 border-b border-border bg-background/30">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-muted">Profit Target</p>
              <p className="text-sm font-semibold text-foreground">
                {targets.profitTarget}
              </p>
              {targets.phase2ProfitTarget && (
                <p className="text-xs text-muted mt-0.5">
                  Phase 2: {targets.phase2ProfitTarget}
                </p>
              )}
            </div>
            <div>
              <p className="text-xs text-muted">Max Drawdown</p>
              <p className="text-sm font-semibold text-foreground">
                {targets.maxDrawdown}
              </p>
            </div>
            {targets.dailyLoss && (
              <div>
                <p className="text-xs text-muted">Daily Loss Limit</p>
                <p className="text-sm font-semibold text-foreground">
                  {targets.dailyLoss}
                </p>
              </div>
            )}
            <div>
              <p className="text-xs text-muted">Leverage</p>
              <p className="text-sm font-semibold text-foreground">
                {targets.leverage}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pricing table */}
      <div className="px-6 sm:px-8 py-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 text-xs font-medium text-muted uppercase tracking-wider">
                  Account Size
                </th>
                <th className="text-right py-3 text-xs font-medium text-muted uppercase tracking-wider">
                  Entry Fee
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((tier) => (
                <tr
                  key={tier.size}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="py-3 text-foreground font-medium">
                    {tier.size}
                  </td>
                  <td className="py-3 text-right text-foreground font-semibold">
                    {tier.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rules */}
      <div className="px-6 sm:px-8 py-4 border-t border-border bg-background/30">
        <p className="text-xs font-medium text-muted mb-2">Key Rules</p>
        <div className="flex flex-wrap gap-2">
          {program.rules.map((rule) => (
            <span
              key={rule}
              className="inline-flex items-center rounded-full bg-border/50 px-3 py-1 text-xs text-muted"
            >
              {rule}
            </span>
          ))}
        </div>
      </div>

      {/* Platforms */}
      <div className="px-6 sm:px-8 py-4 border-t border-border">
        <p className="text-xs font-medium text-muted mb-2">
          Available Platforms
        </p>
        <div className="flex flex-wrap gap-2">
          {program.platforms.map((platform) => (
            <span
              key={platform}
              className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FuturesSection() {
  const futuresProgram = programs.find((p) => p.futuresPricing && p.futuresPricing.length > 0);

  return (
    <FadeIn className="space-y-8">
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-border">
          <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent mb-3">
            4-Phase Evaluation
          </span>
          <h3 className="text-2xl font-bold text-foreground">
            Futures Challenge via Rithmic
          </h3>
          <p className="text-sm text-muted mt-1">
            Professional-grade futures trading with a structured 4-phase evaluation path to live funding with 90% profit share.
          </p>
        </div>

        {/* Targets */}
        <div className="px-6 sm:px-8 py-4 border-b border-border bg-background/30">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-muted">Profit Target</p>
              <p className="text-sm font-semibold text-foreground">9% per phase</p>
            </div>
            <div>
              <p className="text-xs text-muted">Max Drawdown</p>
              <p className="text-sm font-semibold text-foreground">5% trailing (EOD)</p>
            </div>
            <div>
              <p className="text-xs text-muted">Consistency</p>
              <p className="text-sm font-semibold text-foreground">Best day ≤ 25%</p>
            </div>
            <div>
              <p className="text-xs text-muted">Live Funded Split</p>
              <p className="text-sm font-semibold text-foreground">90%</p>
            </div>
          </div>
        </div>

        {/* Pricing + Payouts */}
        <div className="px-6 sm:px-8 py-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-xs font-medium text-muted uppercase tracking-wider">Account</th>
                  <th className="text-right py-3 text-xs font-medium text-muted uppercase tracking-wider">Fee</th>
                  <th className="text-right py-3 text-xs font-medium text-muted uppercase tracking-wider">Phase 1</th>
                  <th className="text-right py-3 text-xs font-medium text-muted uppercase tracking-wider">Phase 2</th>
                  <th className="text-right py-3 text-xs font-medium text-muted uppercase tracking-wider">Phase 3</th>
                  <th className="text-right py-3 text-xs font-medium text-muted uppercase tracking-wider">Phase 4</th>
                </tr>
              </thead>
              <tbody>
                {futuresPayouts.map((row) => (
                  <tr key={row.size} className="border-b border-border/50 last:border-0">
                    <td className="py-3 text-foreground font-medium">{row.size}</td>
                    <td className="py-3 text-right text-foreground font-semibold">{row.fee}</td>
                    <td className="py-3 text-right text-success">{row.phase1}</td>
                    <td className="py-3 text-right text-success">{row.phase2}</td>
                    <td className="py-3 text-right text-success">{row.phase3}</td>
                    <td className="py-3 text-right text-success">{row.phase4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contract limits */}
        <div className="px-6 sm:px-8 py-6 border-t border-border">
          <p className="text-sm font-semibold text-foreground mb-4">Contract Limits</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-xs font-medium text-muted uppercase tracking-wider">Account</th>
                  <th className="text-right py-2 text-xs font-medium text-muted uppercase tracking-wider">Standard</th>
                  <th className="text-right py-2 text-xs font-medium text-muted uppercase tracking-wider">Micro</th>
                </tr>
              </thead>
              <tbody>
                {futuresContractLimits.map((row) => (
                  <tr key={row.size} className="border-b border-border/50 last:border-0">
                    <td className="py-2 text-foreground font-medium">{row.size}</td>
                    <td className="py-2 text-right text-foreground">{row.standard}</td>
                    <td className="py-2 text-right text-foreground">{row.micro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Platform */}
        <div className="px-6 sm:px-8 py-4 border-t border-border">
          <p className="text-xs font-medium text-muted mb-2">Platform</p>
          <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            Rithmic
          </span>
        </div>
      </div>
    </FadeIn>
  );
}
