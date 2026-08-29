"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-24"
    >
      <div className="pl-24 sm:pl-32 md:pl-40">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={item} className="section-heading">About Me</motion.h2>

          <div className="text-[var(--fg-secondary)] text-base leading-relaxed space-y-4 max-w-2xl">
            <motion.p variants={item}>
              I got into programming because I wanted to build trading tools for
              myself. After 2.5 years of trading forex live &mdash; staring at
              candlestick charts, blowing accounts, and slowly learning risk
              management &mdash; I realized the tools I was using were terrible. So I
              started building my own. That rabbit hole led me from basic scripts
              to full-stack applications, AI pipelines, and eventually founding a
              startup.
            </motion.p>

            <motion.p variants={item}>
              Today I work across the full stack. On the frontend I reach for{" "}
              <span className="text-[var(--accent)] font-medium">React</span> and{" "}
              <span className="text-[var(--accent)] font-medium">Next.js</span>. On the backend,{" "}
              <span className="text-[var(--accent)] font-medium">Node.js</span> and{" "}
              <span className="text-[var(--accent)] font-medium">Python</span> are my go-tos,
              especially when I&apos;m wiring up{" "}
              <span className="text-[var(--accent)] font-medium">LLM integrations</span> or
              building data extraction pipelines with{" "}
              <span className="text-[var(--accent)] font-medium">OpenCV</span> and{" "}
              <span className="text-[var(--accent)] font-medium">Gemini</span>. I also have
              experience with{" "}
              <span className="text-[var(--accent)] font-medium">WebSocket</span> real-time
              systems, <span className="text-[var(--accent)] font-medium">REST API</span> design,
              and{" "}
              <span className="text-[var(--accent)] font-medium">SDN-based network security</span>.
            </motion.p>

            <motion.p variants={item}>
              Outside of code, I&apos;m the founder of{" "}
              <a
                href="https://con-soul.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-medium hover:underline underline-offset-4"
              >
                CONSOUL
              </a>
              , a travel company that&apos;s coordinated group trips for 300+
              travelers across 5+ Indian states. I also hold certifications from the{" "}
              <span className="text-[var(--accent)] font-medium">Anthropic Academy</span> in
              building with the Claude API and Model Context Protocol. I&apos;m
              currently pursuing my B.Tech in Computer Science at Guru Ghasidas
              University, Bilaspur.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
