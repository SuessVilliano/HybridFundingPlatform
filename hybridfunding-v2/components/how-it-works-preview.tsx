"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";
import { siteCopy } from "@/data/site-copy";

export function HowItWorksPreview() {
  const { howItWorks } = siteCopy;

  return (
    <section className="py-20 sm:py-28 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {howItWorks.headline}
          </h2>
          <p className="mt-4 text-lg text-muted">{howItWorks.intro}</p>
        </FadeIn>
        <StaggerContainer staggerDelay={0.12} className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {howItWorks.steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative flex lg:flex-col items-start gap-4 lg:items-center lg:text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, borderColor: "rgba(59,130,246,0.8)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex-shrink-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background text-accent font-bold text-lg"
                  >
                    {step.number}
                  </motion.div>
                  <div className="lg:mt-4">
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
