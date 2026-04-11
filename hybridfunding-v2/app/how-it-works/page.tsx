"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { FooterCTA } from "@/components/footer-cta";
import { siteCopy } from "@/data/site-copy";

export default function HowItWorksPage() {
  const { howItWorksPage } = siteCopy;

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {howItWorksPage.headline}
            </h1>
            <p className="mt-4 text-lg text-muted">{howItWorksPage.intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.12} className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-0">
              {howItWorksPage.sections.map((section, index) => (
                <StaggerItem key={section.title}>
                  <div className="relative flex gap-6 pb-12 last:pb-0">
                    {/* Step number */}
                    <motion.div
                      whileHover={{ scale: 1.15, borderColor: "rgba(59,130,246,0.8)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="relative z-10 flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background text-accent font-bold text-lg"
                    >
                      {index + 1}
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="flex-1 pb-8 border-b border-border last:border-0"
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {section.description}
                      </p>
                    </motion.div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Summary callout */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Simple. Transparent. Trader-First.
            </h2>
            <p className="text-lg text-muted">
              No hidden steps, no complex requirements. Just a clear path from evaluation to funded trader with payouts along the way.
            </p>
          </FadeIn>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
