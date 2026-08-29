"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-6 flex flex-col items-center justify-center text-center"
    >
      <div className="text-[var(--fg-muted)] font-mono text-xs flex flex-col items-center gap-2">
        <p>Designed & Built by Dipanshu Kumar</p>
        <p>
          <a href="https://github.com/raidipanshu25-ops" className="hover:text-[var(--accent)] transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="mx-2">·</span>
          <a href="https://linkedin.com/in/dipanshu-kumar-6308a5335" className="hover:text-[var(--accent)] transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="mx-2">·</span>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kumardipanshu482@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Email</a>
        </p>
      </div>
    </motion.footer>
  );
}
