"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const one = (
    <p className="text-[var(--accent)] font-mono text-sm sm:text-base mb-5 ml-1">
      Hi, my name is
    </p>
  );

  const two = (
    <h1 
      className="text-5xl sm:text-7xl tracking-tight mt-2 whitespace-nowrap text-[var(--fg)]"
      style={{ 
        fontFamily: "'Trebuchet MS', 'Lucida Grande', sans-serif", 
        fontWeight: "bold",
        WebkitTextStroke: "1.5px var(--fg)"
      }}
    >
      𝐷𝑖𝑝𝑎𝑛𝑠ℎ𝑢 𝐾𝑢𝑚𝑎𝑟
    </h1>
  );

  const three = (
    <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight mt-2 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] bg-clip-text text-transparent">
      I build things that think.
    </h2>
  );

  const four = (
    <p className="mt-6 text-[var(--fg-secondary)] text-lg leading-relaxed max-w-xl">
      I&apos;m a full stack developer and GenAI engineer with 2.5+ years in live
      forex markets. Currently building AI-powered trading systems, data
      intelligence pipelines, and running{" "}
      <a
        href="https://con-soul.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--accent)] hover:underline inline-block"
      >
        CONSOUL
      </a>{" "}
      — a travel startup serving 300+ customers across India.
    </p>
  );

  const five = (
    <a
      href="#work"
      className="border border-[var(--accent)] text-[var(--accent)] rounded px-7 py-4 text-sm font-mono hover:bg-[var(--accent-tint)] transition-all mt-12 inline-block"
    >
      Check out my work &rarr;
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <section className="max-w-4xl mx-auto px-6 sm:px-12 md:px-24 pt-32 sm:pt-40 pb-20 min-h-screen flex flex-col justify-center">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </section>
  );
}
