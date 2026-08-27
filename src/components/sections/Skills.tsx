"use client";

import { motion } from "framer-motion";

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
  return (
    <section
      id="skills"
      className="max-w-4xl mx-auto px-6 sm:px-12 md:px-24 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">What I Work With</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="project-card"
          >
            <p className="text-[var(--accent)] font-mono text-sm mb-4">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[var(--fg-secondary)] text-sm font-mono px-3 py-1.5 rounded-md bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
