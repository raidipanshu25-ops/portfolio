"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-20 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Content container aligned after the end of top 'dipanshu.' logo */}
        <div className="pl-28 sm:pl-36 md:pl-44 text-left">
          {/* Greeting */}
          <p className="text-[var(--accent)] font-mono text-sm sm:text-base mb-4">
            Hi, my name is
          </p>

          {/* Name */}
          <h2
            className="font-heading font-black tracking-tight mb-4 text-[var(--fg)] uppercase"
            style={{
              fontSize: "clamp(1.75rem, 5.5vw, 5.5rem)",
              fontStyle: "italic",
            }}
          >
            Dipanshu Kumar
          </h2>

          {/* Taglines */}
          {["I THINK,", "I BUILD,", "I TRADE."].map((line) => (
            <h1
              key={line}
              className="font-heading font-black uppercase leading-[0.9] tracking-tighter text-[var(--fg)] text-left"
              style={{ fontSize: "clamp(2.75rem, 8.5vw, 8.5rem)" }}
            >
              {line}
            </h1>
          ))}
        </div>

        {/* Check My Work — centered */}
        <div className="flex justify-center mt-16 sm:mt-20">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 text-[var(--fg)] text-base font-heading font-bold uppercase tracking-wider hover:text-[var(--accent)] transition-colors group"
          >
            <span className="w-10 h-10 rounded-full border border-[var(--border)] group-hover:border-[var(--accent)] flex items-center justify-center transition-colors">
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </span>
            Check My Work
          </a>
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}
