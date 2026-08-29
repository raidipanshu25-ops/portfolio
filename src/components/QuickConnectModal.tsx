"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Mail,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
  Send,
  Sparkles,
  Clock,
  Loader2,
} from "lucide-react";

interface QuickConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickConnectModal({ isOpen, onClose }: QuickConnectModalProps) {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Project Collaboration");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const EMAIL = "kumardipanshu482@gmail.com";
  const LINKEDIN = "https://linkedin.com/in/dipanshu-kumar-6308a5335";

  const topics = [
    "Project Collaboration",
    "Internship / Hiring",
    "Forex & Trading Tools",
    "Startup & CONSOUL",
    "General Hello",
  ];

  // Copy email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Direct Gmail Web link
  const openGmailWeb = () => {
    const subject = encodeURIComponent(`[${selectedTopic}] - Inquiry from ${senderName || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Hi Dipanshu,\n\n${senderMessage || "I came across your portfolio and would like to connect regarding " + selectedTopic + "."}\n\nBest regards,\n${senderName || "Your Name"}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
  };

  // Direct In-App Message Send via FormSubmit API
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderMessage.trim() && !senderName.trim()) {
      openGmailWeb();
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/kumardipanshu482@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: senderName.trim() || "Visitor",
          email: senderEmail.trim() || "visitor@portfolio.com",
          topic: selectedTopic,
          message: senderMessage.trim() || `Inquiry regarding ${selectedTopic}`,
          _subject: `[Portfolio Inquiry] ${selectedTopic} - from ${senderName.trim() || "Visitor"}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setSenderName("");
        setSenderEmail("");
        setSenderMessage("");
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        openGmailWeb();
      }
    } catch {
      openGmailWeb();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 custom-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:bg-[var(--border)] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-10 mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono text-emerald-500 font-medium">
                  Available for opportunities & chats
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--fg)]">
                Let&apos;s Connect
              </h3>
              <p className="text-xs sm:text-sm text-[var(--fg-secondary)] mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--accent)]" /> Typically replies within 2–4 hours
              </p>
            </div>

            {/* Direct 1-Click Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {/* Direct Mail Card */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--fg-muted)] flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-[var(--accent)]" /> Direct Email
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[var(--fg)] font-medium truncate mb-2.5">
                    {EMAIL}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 flex items-center justify-center gap-1 text-xs font-mono py-1.5 px-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] text-[var(--fg)] transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-500 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[var(--accent)]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={openGmailWeb}
                    className="flex-1 flex items-center justify-center gap-1 text-xs font-mono py-1.5 px-2 rounded-lg bg-[var(--accent)] text-white hover:opacity-90 transition-opacity cursor-pointer font-medium"
                    title="Open Gmail in new tab"
                  >
                    <span>Open Gmail</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* LinkedIn Direct Chat Card */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--fg-muted)] flex items-center gap-1">
                      <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" /> LinkedIn Direct
                    </span>
                  </div>
                  <p className="text-xs text-[var(--fg-secondary)] leading-relaxed mb-2.5">
                    Connect or send a fast DM on LinkedIn.
                  </p>
                </div>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-xs font-mono py-1.5 px-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] hover:border-[#0A66C2] hover:text-[#0A66C2] text-[var(--fg)] transition-all"
                >
                  <span>Message on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* In-App Direct Message Sender */}
            <form onSubmit={handleSendMessage} className="pt-4 border-t border-[var(--border)]/60">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-[var(--fg-muted)] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" /> Send a Direct Message to My Inbox
                </label>
              </div>

              {/* Topic Selector Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                      selectedTopic === topic
                        ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                        : "bg-[var(--bg-secondary)] text-[var(--fg-muted)] border-[var(--border)] hover:text-[var(--fg)] hover:border-[var(--accent)]/50"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>

              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full text-xs font-mono px-3.5 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--fg)] placeholder-[var(--fg-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email (for reply)"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full text-xs font-mono px-3.5 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--fg)] placeholder-[var(--fg-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <textarea
                  rows={3}
                  placeholder={`Hi Dipanshu, I'd like to discuss ${selectedTopic}...`}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  className="w-full text-xs font-mono px-3.5 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--fg)] placeholder-[var(--fg-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[var(--fg)] text-[var(--bg)] rounded-xl py-3 text-xs font-heading font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending to Dipanshu...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message Directly</span>
                  </>
                )}
              </button>

              {/* Success Notification */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono text-center flex items-center justify-center gap-1.5"
                >
                  <Check className="w-4 h-4" /> Message sent directly to my inbox! I will reply soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
