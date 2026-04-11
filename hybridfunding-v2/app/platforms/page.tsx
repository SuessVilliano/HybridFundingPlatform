"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { FooterCTA } from "@/components/footer-cta";
import { platforms, platformObjectionHandler } from "@/data/platforms";
import { siteCopy } from "@/data/site-copy";

export default function PlatformsPage() {
  const { platformsPage } = siteCopy;

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {platformsPage.headline}
            </h1>
            <p className="mt-4 text-lg text-muted">{platformsPage.intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* Platform blocks */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.12} className="space-y-6">
            {platforms.map((platform) => (
              <StaggerItem key={platform.id}>
                <motion.div
                  whileHover={{ borderColor: platform.comingSoon ? "rgba(245,158,11,0.4)" : "rgba(59,130,246,0.3)" }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-xl border overflow-hidden ${
                    platform.comingSoon
                      ? "border-warning/30 bg-warning-soft"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                      <div
                        className={`flex-shrink-0 h-14 w-14 rounded-xl flex items-center justify-center text-xl font-bold ${
                          platform.comingSoon
                            ? "bg-warning/20 text-warning"
                            : "bg-accent-soft text-accent"
                        }`}
                      >
                        {platform.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-xl font-bold text-foreground">
                            {platform.name}
                          </h2>
                          {platform.comingSoon && (
                            <span className="inline-flex items-center rounded-full bg-warning/20 px-2.5 py-0.5 text-xs font-medium text-warning">
                              Coming Soon
                            </span>
                          )}
                          <span className="inline-flex items-center rounded-full bg-border/50 px-2.5 py-0.5 text-xs text-muted">
                            {platform.marketType}
                          </span>
                        </div>
                        <p className="text-sm text-muted leading-relaxed mb-4">
                          {platform.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs font-medium text-muted uppercase tracking-wider mb-1">
                              Best For
                            </p>
                            <p className="text-sm text-foreground">
                              {platform.goodFor}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted uppercase tracking-wider mb-1">
                              Why It Matters
                            </p>
                            <p className="text-sm text-foreground">
                              {platform.whyItMatters}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Objection handler */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent mb-4">
              Remember
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-foreground leading-relaxed">
              {platformsPage.objectionHandler}
            </p>
          </FadeIn>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
