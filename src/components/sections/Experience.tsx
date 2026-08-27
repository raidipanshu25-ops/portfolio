"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 sm:px-12 md:px-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading mb-10">
          Where I&apos;ve Worked
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-6">
          <h3 className="font-heading font-bold text-xl bg-gradient-to-r from-[var(--fg)] to-[var(--fg-secondary)] hover:from-[var(--accent)] hover:to-[var(--highlight)] bg-clip-text text-transparent transition-all cursor-default">
            Founder & Technical Lead{" "}
            <span className="text-[var(--accent)]">
              @ <Link href="https://con-soul.in" target="_blank" rel="noopener noreferrer" className="accent-link hover:underline">CONSOUL</Link>
            </span>
          </h3>
          <p className="text-[var(--fg-muted)] font-mono text-sm mt-1">
            September 2025 — Present
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          <li className="flex items-start">
            <span className="text-[var(--accent)] mr-2 mt-1 shrink-0">▹</span>
            <span className="text-[var(--fg-secondary)] text-sm leading-relaxed">
              Built the complete digital infrastructure — website, booking systems, and operational dashboards — from scratch with zero external funding.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--accent)] mr-2 mt-1 shrink-0">▹</span>
            <span className="text-[var(--fg-secondary)] text-sm leading-relaxed">
              Coordinated group travel logistics across 5+ Indian states for 300+ travelers, managing vendor relationships, pricing, and real-time customer support.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--accent)] mr-2 mt-1 shrink-0">▹</span>
            <span className="text-[var(--fg-secondary)] text-sm leading-relaxed">
              Designed the brand identity, social media presence, and content strategy that grew the platform organically.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--accent)] mr-2 mt-1 shrink-0">▹</span>
            <span className="text-[var(--fg-secondary)] text-sm leading-relaxed">
              Implemented data-driven cost optimization that improved trip profitability while maintaining quality for travelers.
            </span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
