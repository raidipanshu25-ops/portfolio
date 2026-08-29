"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { QuickConnectModal } from "@/components/QuickConnectModal";

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

export default function Contact() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  return (
    <>
      <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-32">
        <div className="pl-24 sm:pl-32 md:pl-40">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl text-left"
          >
            <motion.div variants={item} className="mb-4">
              <span className="text-[var(--accent)] font-mono text-sm">
                What&apos;s Next?
              </span>
            </motion.div>

            <motion.h2
              variants={item}
              className="font-heading text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--fg)] to-[var(--fg-secondary)] hover:from-[var(--accent)] hover:to-[var(--highlight)] bg-clip-text text-transparent transition-all cursor-default"
            >
              Get In Touch
            </motion.h2>

            <motion.p variants={item} className="text-[var(--fg-secondary)] leading-relaxed mb-8">
              I&apos;m currently looking for internship opportunities and freelance collaborations. Whether you have a project idea, a startup that needs engineering muscle, or just want to talk forex — my inbox is always open.
            </motion.p>

            <motion.button
              variants={item}
              onClick={() => setIsConnectOpen(true)}
              className="border border-[var(--accent)] text-[var(--accent)] rounded-xl px-7 py-4 text-sm font-mono hover:bg-[var(--accent-tint)] hover:scale-105 transition-all inline-block cursor-pointer"
            >
              Say Hello
            </motion.button>
          </motion.div>
        </div>
      </section>

      <QuickConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />
    </>
  );
}
