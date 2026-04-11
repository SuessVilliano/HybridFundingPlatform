"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteCopy } from "@/data/site-copy";

export function FooterCTA() {
  const { footerCta } = siteCopy;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-card to-card p-10 sm:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              {footerCta.headline}
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              {footerCta.body}
            </p>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-block mt-8"
            >
              <Link
                href={footerCta.ctaHref}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
              >
                {footerCta.ctaLabel}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
