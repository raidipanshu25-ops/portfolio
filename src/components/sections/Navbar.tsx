"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { QuickConnectModal } from "@/components/QuickConnectModal";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenConnect = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsMenuOpen(false);
    setIsConnectOpen(true);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)] py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-full mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Left — Logo */}
          <Link
            href="/"
            className="text-2xl font-heading font-bold text-[var(--fg)] tracking-tight hover:opacity-80 transition-opacity z-50 relative"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            dipanshu<span className="text-[var(--accent)]">.</span>
          </Link>

          {/* Center — Dark Mode toggle (absolute center) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <ThemeToggle />
          </div>

          {/* Right — MENU + LET'S TALK */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Mobile theme toggle */}
            <div className="md:hidden">
              <ThemeToggle />
            </div>

            {/* MENU button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-sm font-medium tracking-widest uppercase text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors cursor-pointer z-50 relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "CLOSE" : "MENU"}
            </button>

            {/* LET'S TALK CTA — Opens Quick Connect Modal */}
            <button
              onClick={handleOpenConnect}
              className="hidden sm:inline-flex items-center gap-2 bg-[var(--fg)] text-[var(--bg)] rounded-full px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity z-50 relative cursor-pointer"
            >
              LET&apos;S TALK&nbsp;&nbsp;&rarr;
            </button>
          </div>
        </div>

        {/* Full-screen Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[var(--bg)] z-40 flex flex-col items-center justify-center min-h-screen"
            >
              <nav className="flex flex-col items-center gap-8 w-full px-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                    className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.3 }}
                  className="mt-6 inline-flex items-center gap-2 bg-[var(--fg)] text-[var(--bg)] rounded-full px-8 py-4 text-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
                >
                  RESUME&nbsp;&nbsp;&rarr;
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Quick Connect Modal */}
      <QuickConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />
    </>
  );
}
