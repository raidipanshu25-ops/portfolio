"use client";

import { useState } from "react";
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

interface ToolLogo {
  name: string;
  category: string;
  svg: React.ReactNode;
}

const tools: ToolLogo[] = [
  {
    name: "Next.js",
    category: "Framework",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.88 18.06l-5.64-7.38v7.38H10.4V7.47h1.84l5.48 7.23V7.47h1.84v10.59h-1.68zM7.72 7.47v10.59H5.88V7.47h1.84z"/>
      </svg>
    ),
  },
  {
    name: "React",
    category: "Library",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0-7.5c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-3.86 0-7-1.12-7-2.5S8.14 3 12 3s7 1.12 7 2.5-3.14 2.5-7 2.5zm6.5 1.5c-2.48-4.3-6.5-6.62-8.98-5.18s-2.48 6.08 0 10.38 6.5 6.62 8.98 5.18 2.48-6.08 0-10.38zm-1.5 8.66c-1.93 1.12-4.8-.45-6.42-3.25s-1.35-5.83.58-6.95 4.8.45 6.42 3.25 1.35 5.83-.58 6.95zM5.5 9.5c-2.48 1.44-2.48 6.08 0 10.38s6.5 6.62 8.98 5.18 2.48-6.08 0-10.38-6.5-6.62-8.98-5.18zm7.48 13.84c-1.93 1.12-4.8-.45-6.42-3.25s-1.35-5.83.58-6.95 4.8.45 6.42 3.25 1.35 5.83-.58 6.95z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Language",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21A1.5 1.5 0 0124 1.5v21a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0zm10.1 14.8h-2.3v-5H6.9V8h4.7v6.8zm7.4-1.2c-.3.8-.9 1.3-1.6 1.3-.8 0-1.4-.4-1.6-1.1-.1-.3-.1-.5-.1-.8h-2.1c0 .8.3 1.6.8 2.2.6.7 1.6 1.1 2.8 1.1 1.4 0 2.4-.4 3.1-1.2.7-.8 1-1.8 1-2.9 0-.8-.2-1.5-.7-2-.5-.5-1.2-.9-2.2-1.2-.7-.2-1.2-.4-1.4-.6-.2-.2-.3-.4-.3-.7 0-.3.1-.6.4-.8.3-.2.7-.3 1.2-.3.6 0 1 .1 1.3.4.3.3.5.7.5 1.2h2.1c0-.9-.4-1.7-1-2.2-.6-.6-1.5-.9-2.7-.9-1.2 0-2.2.3-2.9 1-.7.7-1 1.5-1 2.5 0 .8.2 1.4.7 1.9.5.5 1.3.9 2.4 1.2.7.2 1.2.4 1.5.6.3.2.4.5.4.9 0 .4-.1.7-.4.9z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Language",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.91 0c-3.13 0-5.46.28-5.46 2.37v2.33h5.54v.78H4.27C2.08 5.48 0 7.37 0 10.63c0 3.23 1.83 4.96 4.19 4.96h1.56v-2.22c0-2.48 2.1-4.52 4.67-4.52h5.45c.84 0 1.52-.69 1.52-1.53V2.37C17.39.28 15.04 0 11.91 0zm-2.2 1.54a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1zm2.38 6.94c-2.48 0-4.59 2.04-4.59 4.52v4.95c0 2.09 2.33 2.37 5.46 2.37 3.13 0 5.46-.28 5.46-2.37v-2.33h-5.54v-.78h7.72c2.19 0 4.27-1.89 4.27-5.15 0-3.23-1.83-4.96-4.19-4.96h-1.56v2.22c0 2.48-2.1 4.52-4.67 4.52H6.42a1.52 1.52 0 01-1.52-1.53V8.48h6.19zm2.2 13.98a1.05 1.05 0 110-2.1 1.05 1.05 0 010 2.1z"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Backend",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm-.9 2.5l8.7 5-3.6 2.1-5.1-2.9v-4.2zm1.8 0v4.2l-5.1 2.9-3.6-2.1 8.7-5zm-9.3 6.9l3.6 2.1v6.1l-3.6-2.1V9.4zm16.8 6.1l-3.6 2.1v-6.1l3.6-2.1v6.1zm-8.4 4.8l-3.6-2.1 3.6-2.1 3.6 2.1-3.6 2.1z"/>
      </svg>
    ),
  },
  {
    name: "Gemini AI",
    category: "AI & LLM",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/>
      </svg>
    ),
  },
  {
    name: "Claude API",
    category: "AI & MCP",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.8 2.5L9.6 21.5h2.8l1.1-5.4h4.9l.6 5.4h2.8L17.6 2.5h-3.8zm1.5 5.5l1.6 6.3h-3.5l1.9-6.3zM4.5 12a7.5 7.5 0 0113.5-4.5l-2 2A4.7 4.7 0 1016.7 15l2 2A7.5 7.5 0 014.5 12z"/>
      </svg>
    ),
  },
  {
    name: "Firebase",
    category: "Cloud DB",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.89 15.67L6.25.96a.58.58 0 011.08-.18l3.41 6.38-6.85 8.51zM14.07 7.7l1.77-3.41a.58.58 0 011.04.03l3.23 11.35-6.04-7.97zM2.87 17.06l1.24-1.55 6.94-8.62 2.66 4.97-10.84 5.2zM20.9 17.5l-8.9 4.98a1 1 0 01-.99 0L2.1 17.5a.65.65 0 01-.13-.93l1.8-2.24 17.26-4.22.99 6.46a.65.65 0 01-.12.93z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: "OpenCV",
    category: "Computer Vision",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a6 6 0 00-5.2 9A6 6 0 001.6 17a6 6 0 0010.4 4 6 6 0 0010.4-4A6 6 0 0017.2 11 6 6 0 0012 2zm0 3a3 3 0 110 6 3 3 0 010-6zm-5.2 9a3 3 0 11-5.2 3 3 3 0 015.2-3zm10.4 0a3 3 0 115.2 3 3 3 0 01-5.2-3z"/>
      </svg>
    ),
  },
  {
    name: "WebSocket",
    category: "Real-time",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
  },
  {
    name: "Razorpay",
    category: "Payments",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.436 0l-11.91 7.773-1.164 4.265 5.568-3.636-2.923 10.707 5.753-3.757L22.436 0zM1.564 24l5.632-20.627 5.733-3.743-4.516 16.536 3.036-1.983L9.62 24H1.564z"/>
      </svg>
    ),
  },
];

export default function About() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array for a seamless infinite loop
  const duplicatedTools = [...tools, ...tools];

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

          {/* Dynamic Tools & Tech Ribbon */}
          <motion.div variants={item} className="mt-14 max-w-3xl">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)]">
                Core Tooling & Technologies
              </p>
              <span className="text-[10px] font-mono text-[var(--fg-muted)]">
                {isPaused ? "Paused" : "Hover / click to pause"}
              </span>
            </div>

            <div
              className="relative overflow-hidden py-2"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => setIsPaused((prev) => !prev)}
            >
              {/* Fade masks */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />

              {/* Animated Marquee */}
              <div
                className="flex gap-3.5 w-max cursor-pointer select-none"
                style={{
                  animation: "about-tools-marquee 28s linear infinite",
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                {duplicatedTools.map((tool, idx) => (
                  <div
                    key={`${tool.name}-${idx}`}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 group"
                  >
                    <div className="text-[var(--accent)] group-hover:scale-110 transition-transform">
                      {tool.svg}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-heading font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                        {tool.name}
                      </span>
                      <span className="text-[9px] font-mono text-[var(--fg-muted)] leading-tight">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Animation Keyframe */}
      <style jsx>{`
        @keyframes about-tools-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
