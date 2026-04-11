"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";
import { platforms } from "@/data/platforms";
import { siteCopy } from "@/data/site-copy";

export function PlatformGrid() {
  const { platformsSection } = siteCopy;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {platformsSection.headline}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {platformsSection.intro}
          </p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <StaggerItem key={platform.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`h-full rounded-xl border p-6 transition-colors ${
                  platform.comingSoon
                    ? "border-warning/30 bg-warning-soft"
                    : "border-border bg-card hover:border-border-light"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`h-10 w-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                      platform.comingSoon
                        ? "bg-warning/20 text-warning"
                        : "bg-accent-soft text-accent"
                    }`}
                  >
                    {platform.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {platform.name}
                    </h3>
                    {platform.comingSoon && (
                      <span className="text-xs font-medium text-warning">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {platform.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className="inline-flex items-center rounded-full bg-border/50 px-2 py-0.5">
                    {platform.marketType}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn delay={0.3} className="mt-8 text-center">
          <p className="text-sm text-muted">{platformsSection.platformLine}</p>
          <div className="mt-6">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="inline-block">
              <Link
                href="/platforms"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                Learn more about platforms
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
