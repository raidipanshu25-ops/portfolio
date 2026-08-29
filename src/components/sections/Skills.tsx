"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "Python", "REST APIs", "WebSocket", "MongoDB", "PostgreSQL"],
  },
  {
    title: "AI & ML",
    skills: ["Gemini API", "Claude API", "OpenCV", "LLM Pipelines", "MCP", "yt-dlp"],
  },
  {
    title: "Trading & Infrastructure",
    skills: ["MT5 Integration", "Vision AI Charts", "Risk Controllers", "Live Forex (2.5yr+)", "Network Defense"],
  },
];

export default function Skills() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = skillGroups.length;

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev === 0 ? total - 2 : (prev - 2 + total) % total));
  };

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 2) % total);
  };

  // Get the 2 active cards
  const visibleCards = [
    skillGroups[startIndex % total],
    skillGroups[(startIndex + 1) % total],
  ];

  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-24"
    >
      <div className="pl-24 sm:pl-32 md:pl-40">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={item} className="section-heading mb-10">
            What I Work With
          </motion.h2>

          {/* 2-Card Slider with Left and Right Arrows */}
          <motion.div variants={item} className="max-w-3xl">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                aria-label="Previous skill cards"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* 2 Visible Cards */}
              <div className="flex-1 overflow-hidden py-2">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={startIndex}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
                  >
                    {visibleCards.map((group) => (
                      <div
                        key={group.title}
                        className="project-card h-[230px] flex flex-col justify-between"
                      >
                        <div>
                          <p className="text-[var(--accent)] font-mono text-sm font-semibold mb-3">
                            {group.title}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-[var(--fg-secondary)] text-xs sm:text-sm font-mono px-2.5 py-1 rounded-md bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                aria-label="Next skill cards"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {[0, 2].map((pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => {
                    setDirection(pageIndex > startIndex ? 1 : -1);
                    setStartIndex(pageIndex);
                  }}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    startIndex === pageIndex
                      ? "w-6 bg-[var(--accent)]"
                      : "w-2 bg-[var(--border)] hover:bg-[var(--fg-muted)]"
                  }`}
                  aria-label={`Go to slide ${pageIndex / 2 + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
