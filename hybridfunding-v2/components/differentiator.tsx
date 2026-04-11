"use client";

import { motion } from "framer-motion";
import { siteCopy } from "@/data/site-copy";

export function Differentiator() {
  const { differentiator } = siteCopy;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl border border-border bg-card p-10 sm:p-16 text-center overflow-hidden"
        >
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/3 rounded-full blur-2xl" />

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight max-w-2xl mx-auto"
            >
              {differentiator.headline}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed"
            >
              {differentiator.body}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
