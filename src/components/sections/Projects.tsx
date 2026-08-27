"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "AI-Powered Trading Analytics",
    description: "A real-time forex intelligence platform that streams live MT5 data through WebSockets, applies Vision AI to detect candlestick patterns, and enforces a hard-gate risk controller that blocks undisciplined trades before they execute.",
    tech: ["Node.js", "WebSocket", "REST API", "Vision AI", "MT5", "Python"],
    github: "https://github.com/raidipanshu25-ops",
    external: "",
  },
  {
    title: "YouTube Data Extractor & AI Analyzer",
    description: "An automated pipeline that ingests YouTube URLs, extracts frames with OpenCV, transcribes audio, and feeds everything to Gemini 2.5 Flash to produce structured JSON training datasets. Reduced manual annotation time from hours to minutes.",
    tech: ["Python", "yt-dlp", "OpenCV", "Gemini 2.5 Flash", "JSON"],
    github: "https://github.com/raidipanshu25-ops",
    external: "",
  },
  {
    title: "NetGuard — SDN Dynamic IP Rotation",
    description: "An SDN-powered network defense system that dynamically rotates host IP addresses to evade attackers while an AI classifier identifies intrusion types — DDoS, port scans, spoofing — in real time before they cause damage.",
    tech: ["Python", "SDN", "Network Security", "AI Classification"],
    github: "https://github.com/raidipanshu25-ops",
    external: "",
  }
];

export default function Projects() {
  return (
    <section id="work" className="max-w-4xl mx-auto px-6 sm:px-12 md:px-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading mb-12">
          Some Things I&apos;ve Built
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="project-card relative"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[var(--accent)] font-mono text-sm mb-2">Featured Project</p>
                <h3 className="font-heading text-2xl font-bold bg-gradient-to-r from-[var(--fg)] to-[var(--fg-secondary)] hover:from-[var(--accent)] hover:to-[var(--highlight)] bg-clip-text text-transparent transition-all cursor-default">{project.title}</h3>
              </div>
              <div className="flex gap-4 items-center mt-1">
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors">
                    <Github className="w-5 h-5" />
                  </Link>
                )}
                {project.external && (
                  <Link href={project.external} target="_blank" rel="noopener noreferrer" className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
            
            <p className="text-[var(--fg-secondary)] text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-4 mt-auto">
              {project.tech.map((tech, i) => (
                <li key={i} className="tech-tag font-mono text-xs text-[var(--fg-muted)]">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
