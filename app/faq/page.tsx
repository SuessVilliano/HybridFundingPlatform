"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { FAQAccordion } from "@/components/faq-preview";
import { FooterCTA } from "@/components/footer-cta";
import { faqItems } from "@/data/faq";
import { siteCopy } from "@/data/site-copy";

const categories = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "platforms", label: "Platforms" },
  { id: "funding", label: "Funding" },
  { id: "equities", label: "Equities" },
  { id: "payouts", label: "Payouts" },
  { id: "rules", label: "Rules" },
] as const;

export default function FAQPage() {
  const { faqPage } = siteCopy;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {faqPage.headline}
            </h1>
            <p className="mt-4 text-lg text-muted">{faqPage.intro}</p>
          </FadeIn>

          {/* Category filter */}
          <FadeIn delay={0.15} className="mt-10 flex justify-center">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeCategory === cat.id
                      ? "bg-accent text-white"
                      : "bg-card border border-border text-muted hover:text-foreground hover:border-border-light"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ list */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.06} className="space-y-3">
            {filtered.map((item) => (
              <StaggerItem key={item.question}>
                <FAQAccordion
                  question={item.question}
                  answer={item.answer}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
