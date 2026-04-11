"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import { siteCopy } from "@/data/site-copy";

export default function ContactPage() {
  const { contactPage } = siteCopy;

  return (
    <div className="pt-24">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {contactPage.headline}
            </h1>
            <p className="mt-4 text-lg text-muted">{contactPage.intro}</p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="inline-flex rounded-lg bg-accent-soft p-3 text-accent mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Email Us
                </h3>
                <a
                  href={`mailto:${contactPage.email}`}
                  className="text-sm text-accent hover:text-accent-hover transition-colors"
                >
                  {contactPage.email}
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="inline-flex rounded-lg bg-accent-soft p-3 text-accent mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Support Hours
                </h3>
                <p className="text-sm text-muted">{contactPage.supportHours}</p>
              </motion.div>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={0.25}>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                type="submit"
                className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
              >
                Send Message
              </motion.button>
            </motion.form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
