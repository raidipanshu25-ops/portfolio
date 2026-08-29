"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Pause, Play } from "lucide-react";

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
    skills: ["MT5 Integration", "Vision AI Charts", "Risk Controllers", "Live Forex (2.5yr+)", "SDN Security", "Network Defense"],
  },
];

export default function Skills() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array to create a seamless infinite loop
  const duplicatedGroups = [...skillGroups, ...skillGroups];

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
          <div className="flex items-center justify-between max-w-3xl mb-4">
            <motion.h2 variants={item} className="section-heading mb-0">
              What I Work With
            </motion.h2>

            {/* Play / Pause indicator */}
            <motion.button
              variants={item}
              onClick={() => setIsPaused((prev) => !prev)}
              className="flex items-center gap-1.5 text-xs font-mono text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] cursor-pointer"
              title={isPaused ? "Click to resume movement" : "Click to pause movement"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[var(--accent)]" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[var(--accent)]" />
                  <span>Moving (click to pause)</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Carousel container showing 2 cards at a time */}
          <motion.div
            variants={item}
            className="relative max-w-3xl overflow-hidden py-3"
          >
            {/* Edge fades for smooth visual transition */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />

            {/* Scrolling track */}
            <div
              className="flex gap-5 w-max cursor-pointer"
              onClick={() => setIsPaused((prev) => !prev)}
              style={{
                animation: "skills-marquee 24s linear infinite",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {duplicatedGroups.map((group, idx) => (
                <div
                  key={`${group.title}-${idx}`}
                  className="project-card w-[300px] sm:w-[360px] h-[220px] shrink-0 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div>
                    <p className="text-[var(--accent)] font-mono text-sm font-semibold mb-3">
                      {group.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[var(--fg-secondary)] text-xs sm:text-sm font-mono px-2.5 py-1 rounded-md bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Embedded keyframe animation for continuous smooth scrolling */}
      <style jsx>{`
        @keyframes skills-marquee {
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
