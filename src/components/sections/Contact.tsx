"use client";

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center mb-4">
          <span className="text-[var(--accent)] font-mono text-sm">
            What's Next?
          </span>
        </div>
        <h2 className="font-heading text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--fg)] to-[var(--fg-secondary)] hover:from-[var(--accent)] hover:to-[var(--highlight)] bg-clip-text text-transparent transition-all cursor-default">Get In Touch</h2>
        <p className="text-[var(--fg-secondary)] max-w-lg mx-auto text-center mb-12">
          I'm currently looking for internship opportunities and freelance collaborations. Whether you have a project idea, a startup that needs engineering muscle, or just want to talk forex — my inbox is always open.
        </p>
        <a 
          href="mailto:kumardipanshu482@gmail.com"
          className="border border-[var(--accent)] text-[var(--accent)] rounded px-7 py-4 text-sm font-mono hover:bg-[var(--accent-tint)] transition-all mt-12 inline-block"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
