"use client";

import { useState } from "react";
import Link from "next/link";
import { homeFAQItems } from "@/data/faq";
import { siteCopy } from "@/data/site-copy";

export function FAQPreview() {
  const { faqPreview } = siteCopy;

  return (
    <section className="py-20 sm:py-28 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {faqPreview.headline}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {homeFAQItems.map((item) => (
            <FAQAccordion
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={faqPreview.ctaHref}
            className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-card hover:border-border-light"
          >
            {faqPreview.ctaLabel}
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FAQAccordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-card-hover"
      >
        <span className="text-sm font-medium text-foreground pr-4">
          {question}
        </span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-sm text-muted leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
