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

const backgroundLogos = [
  {
    name: "React",
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 180 180" className="w-full h-full" fill="none">
        <circle cx="90" cy="90" r="90" fill="#000000" stroke="#333" strokeWidth="2" />
        <path
          d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
          fill="#FFFFFF"
        />
        <rect x="115" y="54" width="12" height="72" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 110 110" className="w-full h-full">
        <path
          fill="#3776AB"
          d="M53.7 4C28.7 4 30.2 14.8 30.2 14.8l.1 11.2h24.2v3.5H20.7S5 27.6 5 52.8s13.8 24.5 13.8 24.5h8.2v-11.6s-.5-13.8 13.6-13.8h23.4s13.1.2 13.1-12.8V16.8S79.6 4 53.7 4zm-13.6 7.4a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z"
        />
        <path
          fill="#FFD438"
          d="M56.3 106c25 0 23.5-10.8 23.5-10.8l-.1-11.2H55.5v-3.5h33.8s15.7 1.9 15.7-23.3-13.8-24.5-13.8-24.5h-8.2v11.6s.5 13.8-13.6 13.8H46s-13.1-.2-13.1 12.8v12.3s-.7 12.8 23.4 12.8zm13.6-7.4a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6z"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path
          fill="#FFF"
          d="M56.2 70.8H43.9v35.4h-13V70.8H18.5V60h37.7v10.8zm53.3 12.2c0 6.6-2.5 11.7-7.4 15.3-4.9 3.6-11.5 5.4-19.8 5.4-4.8 0-9.2-.7-13.2-2.1-4-1.4-7.2-3.4-9.6-6l7.4-8.8c3.8 4 8.7 6 14.8 6 3.6 0 6.4-.8 8.4-2.3s3-3.6 3-6.1c0-2-.8-3.7-2.3-5-1.5-1.3-4.4-2.6-8.6-3.8-6.1-1.7-10.6-3.8-13.4-6.3-2.8-2.5-4.2-6.1-4.2-10.8 0-6.1 2.3-10.9 7-14.3s10.8-5.1 18.5-5.1c4.5 0 8.5.7 12.2 2.1 3.6 1.4 6.7 3.3 9.2 5.8l-7 8.7c-3.4-3.4-7.8-5.1-13.2-5.1-3.3 0-5.9.7-7.7 2.1-1.8 1.4-2.8 3.2-2.8 5.4 0 1.8.7 3.3 2.1 4.5 1.4 1.2 4.1 2.3 8.1 3.5 6.4 1.8 11.1 4 14 6.6 3 2.5 4.5 6.2 4.5 11.1z"
        />
      </svg>
    ),
  },
  {
    name: "Gemini AI",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <defs>
          <linearGradient id="gemini-brand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E75FF" />
            <stop offset="50%" stopColor="#9B51E0" />
            <stop offset="100%" stopColor="#FF6492" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gemini-brand)"
          d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <path
          fill="#5FA04E"
          d="M16 2.5l11.5 6.6v13.8L16 29.5 4.5 22.9V9.1L16 2.5zm-.9 3.5l-8.6 5 8.6 5 8.6-5-8.6-5zm-9.5 7.1v9.8l8.5 4.9V18l-8.5-4.9zm19 0l-8.5 4.9v9.8l8.5-4.9v-9.8z"
        />
      </svg>
    ),
  },
  {
    name: "Firebase",
    svg: (
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <path fill="#FFCA28" d="M6.3 22.8L9.5 2.5a.8.8 0 011.5-.2l4.8 9.1L6.3 22.8z" />
        <path fill="#FFA000" d="M19.7 11.5l2.4-4.8a.8.8 0 011.5 0l4.5 16.1-8.4-11.3z" />
        <path fill="#F57C00" d="M4.9 24.8L6.7 22.6l9.6-12.1 3.7 6.9-15.1 7.4z" />
        <path
          fill="#FFCA28"
          d="M28.1 23.8L16.8 30a1.5 1.5 0 01-1.5 0L3.9 23.8a.9.9 0 01-.2-1.3l2.6-3.2 21.8-6.1 1.4 9.1a.9.9 0 01-1.4 1.5z"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#38BDF8"
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
        />
      </svg>
    ),
  },
];

export default function About() {
  // Duplicate for seamless continuous loop
  const duplicatedLogos = [...backgroundLogos, ...backgroundLogos];

  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-24 relative overflow-hidden"
    >
      {/* ─── Big Dynamic Brand Colored Tool Logos in One Single Background Row ─── */}
      <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden z-0">
        {/* Left and right fade gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />

        {/* Moving single horizontal row of big colorful brand logos */}
        <div
          className="flex items-center gap-20 sm:gap-28 md:gap-36 w-max"
          style={{
            animation: "bg-tool-logos-marquee 32s linear infinite",
          }}
        >
          {duplicatedLogos.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 shrink-0 opacity-30 dark:opacity-40 hover:opacity-60 transition-opacity filter drop-shadow-md"
            >
              {tool.svg}
            </div>
          ))}
        </div>
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

      {/* Marquee Animation Keyframe for Background Stream */}
      <style jsx>{`
        @keyframes bg-tool-logos-marquee {
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
