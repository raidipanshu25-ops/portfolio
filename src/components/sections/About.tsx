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
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-24 relative overflow-hidden"
    >
      {/* ─── Big Dynamic Tool Logos in Background (Low Transparency) ─── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* React Logo — Top Right floating */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { repeat: Infinity, duration: 14, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 40, ease: "linear" },
          }}
          className="absolute -top-10 right-10 md:right-20 w-64 h-64 md:w-80 md:h-80 text-[var(--accent)] opacity-[0.035] dark:opacity-[0.055]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
            <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Python Logo — Bottom Right drifting */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-16 md:right-32 w-48 h-48 md:w-64 md:h-64 text-[var(--fg)] opacity-[0.03] dark:opacity-[0.045]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M11.91 0c-3.13 0-5.46.28-5.46 2.37v2.33h5.54v.78H4.27C2.08 5.48 0 7.37 0 10.63c0 3.23 1.83 4.96 4.19 4.96h1.56v-2.22c0-2.48 2.1-4.52 4.67-4.52h5.45c.84 0 1.52-.69 1.52-1.53V2.37C17.39.28 15.04 0 11.91 0zm-2.2 1.54a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1zm2.38 6.94c-2.48 0-4.59 2.04-4.59 4.52v4.95c0 2.09 2.33 2.37 5.46 2.37 3.13 0 5.46-.28 5.46-2.37v-2.33h-5.54v-.78h7.72c2.19 0 4.27-1.89 4.27-5.15 0-3.23-1.83-4.96-4.19-4.96h-1.56v2.22c0 2.48-2.1 4.52-4.67 4.52H6.42a1.52 1.52 0 01-1.52-1.53V8.48h6.19zm2.2 13.98a1.05 1.05 0 110-2.1 1.05 1.05 0 010 2.1z"/>
          </svg>
        </motion.div>

        {/* Next.js Logo — Center Right floating */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-4 md:right-1/4 w-44 h-44 md:w-56 md:h-56 text-[var(--accent)] opacity-[0.03] dark:opacity-[0.05]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.88 18.06l-5.64-7.38v7.38H10.4V7.47h1.84l5.48 7.23V7.47h1.84v10.59h-1.68zM7.72 7.47v10.59H5.88V7.47h1.84z"/>
          </svg>
        </motion.div>

        {/* Gemini / AI Spark Logo — Bottom Left floating */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="absolute -bottom-8 left-20 md:left-40 w-40 h-40 md:w-52 md:h-52 text-[var(--accent)] opacity-[0.035] dark:opacity-[0.05]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/>
          </svg>
        </motion.div>

        {/* TypeScript Logo — Middle Left drifting */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 md:left-24 w-36 h-36 md:w-48 md:h-48 text-[var(--fg)] opacity-[0.025] dark:opacity-[0.04]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M1.5 0h21A1.5 1.5 0 0124 1.5v21a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0zm10.1 14.8h-2.3v-5H6.9V8h4.7v6.8zm7.4-1.2c-.3.8-.9 1.3-1.6 1.3-.8 0-1.4-.4-1.6-1.1-.1-.3-.1-.5-.1-.8h-2.1c0 .8.3 1.6.8 2.2.6.7 1.6 1.1 2.8 1.1 1.4 0 2.4-.4 3.1-1.2.7-.8 1-1.8 1-2.9 0-.8-.2-1.5-.7-2-.5-.5-1.2-.9-2.2-1.2-.7-.2-1.2-.4-1.4-.6-.2-.2-.3-.4-.3-.7 0-.3.1-.6.4-.8.3-.2.7-.3 1.2-.3.6 0 1 .1 1.3.4.3.3.5.7.5 1.2h2.1c0-.9-.4-1.7-1-2.2-.6-.6-1.5-.9-2.7-.9-1.2 0-2.2.3-2.9 1-.7.7-1 1.5-1 2.5 0 .8.2 1.4.7 1.9.5.5 1.3.9 2.4 1.2.7.2 1.2.4 1.5.6.3.2.4.5.4.9 0 .4-.1.7-.4.9z"/>
          </svg>
        </motion.div>
      </div>

      {/* ─── Foreground Content ─── */}
      <div className="pl-24 sm:pl-32 md:pl-40 relative z-10">
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
