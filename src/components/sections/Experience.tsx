"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-24">
      <div className="pl-24 sm:pl-32 md:pl-40">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={item} className="section-heading mb-10">
            Where I&apos;ve Worked
          </motion.h2>

          <motion.div variants={item} className="max-w-3xl">
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
              {[
                "Built the complete digital infrastructure — website, booking systems, and operational dashboards — from scratch with zero external funding.",
                "Coordinated group travel logistics across 5+ Indian states for 300+ travelers, managing vendor relationships, pricing, and real-time customer support.",
                "Designed the brand identity, social media presence, and content strategy that grew the platform organically.",
                "Implemented data-driven cost optimization that improved trip profitability while maintaining quality for travelers.",
              ].map((text, i) => (
                <motion.li key={i} variants={item} className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1 shrink-0">▹</span>
                  <span className="text-[var(--fg-secondary)] text-sm leading-relaxed">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
