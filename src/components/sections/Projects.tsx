"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ExternalLink, Github, X, Sparkles, CheckCircle2, Cpu, ArrowUpRight, Workflow, ShieldAlert, Rocket } from "lucide-react";
import Link from "next/link";

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

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  features: string[];
  howItWorks: { step: string; detail: string }[];
  challenges: { problem: string; solution: string }[];
  roadmap: string[];
  tech: string[];
  impact: string;
  github: string;
  external?: string;
}

const projects: Project[] = [
  {
    id: "trading-ai",
    title: "AI-Powered Trading Analytics",
    category: "Forex Trading Intelligence & Risk Controller",
    description:
      "A real-time forex intelligence platform that streams live MT5 data through WebSockets, applies Vision AI to detect candlestick patterns, and enforces a hard-gate risk controller that blocks undisciplined trades before they execute.",
    overview:
      "Built to solve the psychological and execution pitfalls of live market trading. The system pairs real-time market data streaming with automated computer vision to recognize high-probability setups and enforces strict algorithmic risk gates to protect capital.",
    features: [
      "Low-latency WebSocket bridge streaming tick-by-tick data directly from MetaTrader 5 (MT5).",
      "Vision AI model analyzing chart structures, candlestick patterns, and liquidity sweeps in real time.",
      "Hard-gate Risk Controller that intercepts and auto-rejects revenge trades, oversized lot sizes, and off-plan orders.",
      "Real-time analytics dashboard with automated session statistics, win rate metrics, and risk-reward ratios.",
    ],
    howItWorks: [
      { step: "Connect", detail: "MT5 terminal opens a local TCP bridge. The Node.js WebSocket server subscribes to live tick events for selected currency pairs." },
      { step: "Stream", detail: "Tick-by-tick price data is normalized, timestamped, and pushed to all connected clients in real time with sub-100ms latency." },
      { step: "Analyze", detail: "Vision AI captures chart screenshots at configurable intervals, runs pattern detection (engulfing, pin bars, liquidity sweeps), and scores each setup." },
      { step: "Gate", detail: "Before any trade order executes, the Risk Controller validates lot size, daily loss limits, consecutive loss count, and plan adherence. Non-compliant orders are blocked instantly." },
      { step: "Report", detail: "Session statistics — win rate, average R:R, drawdown, and equity curve — are computed and served via REST API to the analytics dashboard." },
    ],
    challenges: [
      { problem: "MT5 has no native WebSocket support", solution: "Built a custom TCP-to-WebSocket bridge using a Python EA that pipes tick data to a Node.js relay server." },
      { problem: "Vision AI latency on high-frequency charts", solution: "Implemented adaptive screenshot intervals — faster on volatile sessions, slower during consolidation — reducing unnecessary API calls by 60%." },
      { problem: "Revenge trading after consecutive losses", solution: "Added a hard cooldown gate: after 3 consecutive losses, the system enforces a mandatory 30-minute lockout before allowing new entries." },
    ],
    roadmap: [
      "Multi-pair correlation engine to detect conflicting trades across correlated currencies.",
      "Backtesting module to replay historical sessions against the Risk Controller rules.",
      "Mobile push notifications for high-confidence trade setups detected by Vision AI.",
      "Integration with TradingView webhooks for external signal ingestion.",
    ],
    tech: ["Node.js", "WebSocket", "REST API", "Vision AI", "MT5", "Python", "Tailwind CSS"],
    impact:
      "Eliminated emotional trade entries and reduced trade analysis latency to sub-second precision across multiple forex currency pairs.",
    github: "https://github.com/raidipanshu25-ops",
    external: "",
  },
  {
    id: "yt-extractor",
    title: "YouTube Data Extractor & AI Analyzer",
    category: "Multimodal Video Processing & Dataset Pipeline",
    description:
      "An automated pipeline that ingests YouTube URLs, extracts frames with OpenCV, transcribes audio, and feeds everything to Gemini 2.5 Flash to produce structured JSON training datasets. Reduced manual annotation time from hours to minutes.",
    overview:
      "Designed to automate the tedious workflow of video annotation and dataset preparation for AI vision and NLP models. The tool extracts, synchronizes, and annotates multi-modal data streams automatically into structured JSON.",
    features: [
      "Automated video ingestion and audio stream extraction using optimized yt-dlp workers.",
      "OpenCV scene detection and adaptive keyframe sampling to filter redundant video frames.",
      "Integration with Google Gemini 2.5 Flash API for automated semantic transcription and object tagging.",
      "Export structured, machine-ready JSON datasets formatted for LLM and vision model fine-tuning.",
    ],
    howItWorks: [
      { step: "Ingest", detail: "User provides one or more YouTube URLs. yt-dlp downloads the highest-quality video and separates the audio stream into a standalone WAV file." },
      { step: "Extract Frames", detail: "OpenCV runs scene-change detection and adaptive keyframe sampling. Redundant or near-duplicate frames are discarded, keeping only visually distinct moments." },
      { step: "Transcribe", detail: "The separated audio stream is transcribed to text, then time-aligned with the extracted keyframes to create synchronized text–image pairs." },
      { step: "AI Analysis", detail: "Keyframes + transcripts are batched and sent to Gemini 2.5 Flash, which returns semantic tags, object labels, scene descriptions, and content classifications." },
      { step: "Export", detail: "All annotations are merged into a structured JSON schema optimized for LLM fine-tuning and vision model training. Each record contains frame path, timestamp, transcript segment, and AI-generated tags." },
    ],
    challenges: [
      { problem: "YouTube rate limiting and format inconsistencies", solution: "Implemented retry logic with exponential backoff and format fallback chains (webm → mp4 → audio-only) to handle edge cases gracefully." },
      { problem: "Redundant frames inflating dataset size", solution: "Built an adaptive threshold algorithm using structural similarity (SSIM) scoring — only frames with <85% similarity to the previous keyframe are retained." },
      { problem: "Gemini API token limits on long videos", solution: "Chunked the input into 5-minute segments with overlapping context windows, then merged the outputs with deduplication logic." },
    ],
    roadmap: [
      "Batch processing UI to queue and monitor multiple video extractions simultaneously.",
      "Support for Whisper-based local transcription as a fallback when API limits are reached.",
      "Direct export to HuggingFace Datasets format for one-click model training uploads.",
      "Real-time progress streaming via WebSocket so users can watch extraction status live.",
    ],
    tech: ["Python", "yt-dlp", "OpenCV", "Gemini 2.5 Flash", "JSON", "Multimodal AI"],
    impact:
      "Reduced manual dataset annotation time by over 85%, accelerating video analysis workflows from hours to minutes.",
    github: "https://github.com/raidipanshu25-ops",
    external: "",
  },
  {
    id: "netguard-sdn",
    title: "NetGuard — SDN Dynamic IP Rotation",
    category: "Network Defense & AI Intrusion Detection",
    description:
      "An SDN-powered network defense system that dynamically rotates host IP addresses to evade attackers while an AI classifier identifies intrusion types — DDoS, port scans, spoofing — in real time before they cause damage.",
    overview:
      "A moving-target defense system built on Software-Defined Networking (SDN). By continuously changing IP mappings while inspecting flow telemetry with machine learning, NetGuard prevents attackers from mapping or penetrating internal networks.",
    features: [
      "Dynamic host IP mutation engine implemented on an SDN controller to thwart scanning and reconnaissance.",
      "Machine learning intrusion detection classifier identifying DDoS floods, TCP SYN scans, and ARP spoofing.",
      "Automated OpenFlow flow-rule generation to reroute malicious traffic away from active production hosts.",
      "Real-time network telemetry and attack visualization interface.",
    ],
    howItWorks: [
      { step: "Monitor", detail: "The SDN controller continuously inspects flow telemetry from all switches, logging packet headers, flow durations, and byte counts." },
      { step: "Classify", detail: "A trained ML classifier analyzes flow features in real time to categorize traffic as benign, DDoS, port scan, or ARP spoof with >94% accuracy." },
      { step: "Rotate", detail: "When a threat is detected, the IP mutation engine reassigns host addresses across the network, invalidating the attacker's reconnaissance map." },
      { step: "Isolate", detail: "OpenFlow rules are dynamically injected to reroute or drop malicious flows, quarantining compromised segments without disrupting legitimate traffic." },
    ],
    challenges: [
      { problem: "IP rotation breaking active TCP sessions", solution: "Implemented connection-aware rotation that defers IP changes on hosts with active sessions until a natural timeout or handoff." },
      { problem: "High false-positive rate on benign traffic spikes", solution: "Added a sliding-window feature aggregator that evaluates traffic patterns over 30-second windows instead of per-packet decisions." },
      { problem: "OpenFlow rule table overflow on large networks", solution: "Built a rule compaction engine that merges overlapping CIDR-based rules and garbage-collects expired entries every 60 seconds." },
    ],
    roadmap: [
      "Integration with enterprise SIEM platforms (Splunk, ELK) for centralized threat visibility.",
      "Honeypot auto-deployment to redirect attackers into decoy environments for forensic analysis.",
      "Multi-controller federation for campus-scale SDN deployments across multiple buildings.",
    ],
    tech: ["Python", "SDN", "OpenFlow", "Network Security", "AI Classification", "Machine Learning"],
    impact:
      "Successfully mitigated automated network reconnaissance and zero-day scan attacks in simulated high-traffic testbeds.",
    github: "https://github.com/raidipanshu25-ops",
    external: "",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="work" className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-24">
      <div className="pl-24 sm:pl-32 md:pl-40">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={item} className="section-heading mb-12">
            Some Things I&apos;ve Built
          </motion.h2>

          <div className="flex flex-col gap-6 sm:gap-8 max-w-3xl">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={item}
                onClick={() => setSelectedProject(project)}
                className="project-card relative cursor-pointer group hover:border-[var(--accent)] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[var(--accent)] font-mono text-xs sm:text-sm">
                        Featured Project
                      </span>
                      <span className="text-[var(--fg-muted)] text-xs font-mono">·</span>
                      <span className="text-[var(--fg-muted)] text-xs font-mono">
                        {project.category.split("&")[0]}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold bg-gradient-to-r from-[var(--fg)] to-[var(--fg-secondary)] group-hover:from-[var(--accent)] group-hover:to-[var(--highlight)] bg-clip-text text-transparent transition-all">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex gap-3 items-center mt-1">
                    {project.github && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                        className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors p-1"
                        title="GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </span>
                    )}
                    {project.external && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.external, "_blank");
                        }}
                        className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors p-1"
                        title="Live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-[var(--fg-secondary)] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-2 border-t border-[var(--border)]/50">
                  <ul className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="tech-tag font-mono text-xs text-[var(--fg-muted)]">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <span className="text-xs font-mono text-[var(--accent)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:bg-[var(--border)] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-10 mb-6">
                <span className="text-[var(--accent)] font-mono text-xs uppercase tracking-wider block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--fg)] mb-3">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> View on GitHub
                    </a>
                  )}
                  {selectedProject.external && (
                    <a
                      href={selectedProject.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full bg-[var(--accent)] text-white hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Overview */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" /> Project Overview
                </h4>
                <p className="text-sm sm:text-base text-[var(--fg-secondary)] leading-relaxed">
                  {selectedProject.overview}
                </p>
              </div>

              {/* Architecture Diagram — Trading AI */}
              {selectedProject.id === "trading-ai" && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)] mb-4 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" /> System Architecture
                  </h4>
                  <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] overflow-x-auto">
                    <div className="min-w-[480px]">
                      {/* Row 1: Data Sources */}
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-center min-w-[120px]">
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] uppercase">Source</p>
                          <p className="text-xs font-heading font-bold text-[var(--fg)]">MT5 Terminal</p>
                        </div>
                        <span className="text-[var(--accent)] text-lg font-mono">→</span>
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--bg)] border-2 border-[var(--accent)]/40 text-center min-w-[120px]">
                          <p className="text-[10px] font-mono text-[var(--accent)] uppercase">Bridge</p>
                          <p className="text-xs font-heading font-bold text-[var(--fg)]">WebSocket Server</p>
                        </div>
                        <span className="text-[var(--accent)] text-lg font-mono">→</span>
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-center min-w-[120px]">
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] uppercase">Stream</p>
                          <p className="text-xs font-heading font-bold text-[var(--fg)]">Live Tick Data</p>
                        </div>
                      </div>

                      {/* Arrow Down */}
                      <div className="flex justify-center my-1">
                        <span className="text-[var(--accent)] text-lg font-mono">↓</span>
                      </div>

                      {/* Row 2: Processing */}
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-center min-w-[150px]">
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] uppercase">Analysis</p>
                          <p className="text-xs font-heading font-bold text-[var(--fg)]">Vision AI Engine</p>
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] mt-0.5">Chart Pattern Detection</p>
                        </div>
                        <span className="text-[var(--accent)] text-lg font-mono">⇄</span>
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--accent)]/10 border-2 border-[var(--accent)]/30 text-center min-w-[150px]">
                          <p className="text-[10px] font-mono text-[var(--accent)] uppercase">Gate</p>
                          <p className="text-xs font-heading font-bold text-[var(--accent)]">Risk Controller</p>
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] mt-0.5">Block / Allow Trades</p>
                        </div>
                      </div>

                      {/* Arrow Down */}
                      <div className="flex justify-center my-1">
                        <span className="text-[var(--accent)] text-lg font-mono">↓</span>
                      </div>

                      {/* Row 3: Output */}
                      <div className="flex items-center justify-center gap-3">
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-center min-w-[140px]">
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] uppercase">Output</p>
                          <p className="text-xs font-heading font-bold text-[var(--fg)]">REST API</p>
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] mt-0.5">Trade Signals & Stats</p>
                        </div>
                        <span className="text-[var(--accent)] text-lg font-mono">→</span>
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-center min-w-[140px]">
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] uppercase">Interface</p>
                          <p className="text-xs font-heading font-bold text-[var(--fg)]">Analytics Dashboard</p>
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] mt-0.5">Win Rate & R:R Metrics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Architecture Diagram — YT Extractor */}
              {selectedProject.id === "yt-extractor" && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)] mb-4 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" /> Pipeline Architecture
                  </h4>
                  <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] overflow-x-auto">
                    <div className="min-w-[480px]">
                      {/* Row 1: Input */}
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-center min-w-[130px]">
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] uppercase">Input</p>
                          <p className="text-xs font-heading font-bold text-[var(--fg)]">YouTube URLs</p>
                        </div>
                        <span className="text-[var(--accent)] text-lg font-mono">→</span>
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--bg)] border-2 border-[var(--accent)]/40 text-center min-w-[130px]">
                          <p className="text-[10px] font-mono text-[var(--accent)] uppercase">Ingest</p>
                          <p className="text-xs font-heading font-bold text-[var(--fg)]">yt-dlp Worker</p>
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] mt-0.5">Video + Audio Split</p>
                        </div>
                      </div>

                      {/* Arrow Down */}
                      <div className="flex justify-center my-1">
                        <span className="text-[var(--accent)] text-lg font-mono">↓</span>
                      </div>

                      {/* Row 2: Parallel Processing */}
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-center min-w-[140px]">
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] uppercase">Vision</p>
                          <p className="text-xs font-heading font-bold text-[var(--fg)]">OpenCV</p>
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] mt-0.5">Scene Detection &</p>
                          <p className="text-[10px] font-mono text-[var(--fg-muted)]">Keyframe Sampling</p>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="text-[var(--accent)] text-sm font-mono">↘</span>
                          <span className="text-[var(--accent)] text-sm font-mono">↗</span>
                        </div>
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--accent)]/10 border-2 border-[var(--accent)]/30 text-center min-w-[140px]">
                          <p className="text-[10px] font-mono text-[var(--accent)] uppercase">AI Engine</p>
                          <p className="text-xs font-heading font-bold text-[var(--accent)]">Gemini 2.5 Flash</p>
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] mt-0.5">Transcription &</p>
                          <p className="text-[10px] font-mono text-[var(--fg-muted)]">Object Tagging</p>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="text-[var(--accent)] text-sm font-mono">↘</span>
                          <span className="text-[var(--accent)] text-sm font-mono">↗</span>
                        </div>
                        <div className="px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-center min-w-[100px]">
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] uppercase">Audio</p>
                          <p className="text-xs font-heading font-bold text-[var(--fg)]">Transcriber</p>
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] mt-0.5">Speech → Text</p>
                        </div>
                      </div>

                      {/* Arrow Down */}
                      <div className="flex justify-center my-1">
                        <span className="text-[var(--accent)] text-lg font-mono">↓</span>
                      </div>

                      {/* Row 3: Output */}
                      <div className="flex items-center justify-center">
                        <div className="px-6 py-3 rounded-lg bg-[var(--bg)] border-2 border-[var(--accent)]/40 text-center min-w-[200px]">
                          <p className="text-[10px] font-mono text-[var(--accent)] uppercase">Output</p>
                          <p className="text-xs font-heading font-bold text-[var(--fg)]">Structured JSON Datasets</p>
                          <p className="text-[10px] font-mono text-[var(--fg-muted)] mt-0.5">LLM & Vision Model Fine-tuning Ready</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)] mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" /> Key Features & Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-[var(--fg-secondary)] leading-relaxed">
                      <span className="text-[var(--accent)] mr-2 mt-0.5 shrink-0">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How It Works — Step by Step */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)] mb-3 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-[var(--accent)]" /> How It Works
                </h4>
                <div className="space-y-3">
                  {selectedProject.howItWorks.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-xs font-mono font-bold text-[var(--accent)]">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs sm:text-sm font-heading font-semibold text-[var(--fg)] mb-0.5">{step.step}</p>
                        <p className="text-xs sm:text-sm text-[var(--fg-secondary)] leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)] mb-3 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-[var(--accent)]" /> Challenges & Solutions
                </h4>
                <div className="space-y-3">
                  {selectedProject.challenges.map((c, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]/70">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--fg)] mb-1 flex items-start gap-1.5">
                        <span className="text-red-400 shrink-0">✕</span> {c.problem}
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--fg-secondary)] leading-relaxed flex items-start gap-1.5">
                        <span className="text-emerald-400 shrink-0">✓</span> {c.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact / Outcome */}
              <div className="mb-6 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]/70">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-1">
                  Engineering Impact
                </h4>
                <p className="text-xs sm:text-sm text-[var(--fg-secondary)] leading-relaxed">
                  {selectedProject.impact}
                </p>
              </div>

              {/* Future Roadmap */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)] mb-3 flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5 text-[var(--accent)]" /> Future Roadmap
                </h4>
                <ul className="space-y-2">
                  {selectedProject.roadmap.map((item, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-[var(--fg-secondary)] leading-relaxed">
                      <span className="text-[var(--fg-muted)] mr-2 mt-0.5 shrink-0 font-mono text-xs">◇</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)] mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" /> Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--fg)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
