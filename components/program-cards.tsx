"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";
import { programs } from "@/data/programs";
import { siteCopy } from "@/data/site-copy";

export function ProgramCards() {
  const { programsPreview } = siteCopy;

  return (
    <section className="py-20 sm:py-28 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {programsPreview.headline}
          </h2>
          <p className="mt-4 text-lg text-muted">{programsPreview.intro}</p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <StaggerItem key={program.id}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex flex-col h-full rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                    {program.phases
                      ? `${program.phases}-Phase Evaluation`
                      : "No Evaluation"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {program.name}
                </h3>
                <p className="text-sm text-muted mb-4 flex-1">
                  {program.description}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Starting from</span>
                    <span className="font-semibold text-foreground">
                      {program.forexPricing[0].price}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Profit split</span>
                    <span className="font-semibold text-foreground">
                      {program.profitSplit}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Account sizes</span>
                    <span className="font-semibold text-foreground">
                      {program.forexPricing[0].size} –{" "}
                      {program.forexPricing[program.forexPricing.length - 1].size}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-accent mb-4">{program.highlight}</p>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="mt-auto">
                  <Link
                    href={`/funding-programs#${program.slug}`}
                    className="block text-center rounded-lg border border-accent bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-white"
                  >
                    Choose Program
                  </Link>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
