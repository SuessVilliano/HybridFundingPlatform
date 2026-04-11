"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteCopy } from "@/data/site-copy";

export function Hero() {
  const { hero } = siteCopy;

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl"
          >
            {hero.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
              >
                {hero.primaryCta.label}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3.5 text-base font-medium text-foreground transition-all hover:bg-card hover:border-border-light"
              >
                {hero.secondaryCta.label}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-16 rounded-xl border border-border bg-card p-6 shadow-2xl shadow-black/50"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-muted">Hybrid Funding Dashboard</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <DashboardCard label="Account Balance" value="$52,340.00" change="+4.68%" positive delay={0.55} />
            <DashboardCard label="Total Profit" value="$2,340.00" change="+$890 today" positive delay={0.65} />
            <DashboardCard label="Drawdown Used" value="1.2%" change="of 6% max" positive delay={0.75} />
            <DashboardCard label="Payout Ready" value="$1,800.00" change="Available" positive delay={0.85} />
          </div>
          {/* Chart placeholder */}
          <div className="mt-4 h-32 sm:h-48 rounded-lg bg-background/50 border border-border flex items-end p-4 gap-1 overflow-hidden">
            {Array.from({ length: 40 }).map((_, i) => {
              const height = 20 + Math.sin(i * 0.4) * 30 + i * 0.8;
              return (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.min(height, 90)}%` }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.02, ease: "easeOut" }}
                  className="flex-1 rounded-t bg-accent/40 min-w-1"
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardCard({
  label,
  value,
  change,
  positive,
  delay = 0,
}: {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="rounded-lg bg-background/50 border border-border p-3 sm:p-4"
    >
      <p className="text-xs text-muted mb-1">{label}</p>
      <p className="text-lg sm:text-xl font-semibold text-foreground">{value}</p>
      <p className={`text-xs mt-1 ${positive ? "text-success" : "text-red-400"}`}>{change}</p>
    </motion.div>
  );
}
