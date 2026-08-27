"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)] py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-heading font-bold text-[var(--fg)] tracking-tight hover:opacity-80 transition-opacity"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          dipanshu<span className="text-[var(--accent)]">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--accent)] transition-colors group flex items-center gap-1"
              >

                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--accent)] text-[var(--accent)] rounded px-4 py-2 text-sm font-mono hover:bg-[var(--accent-tint)] transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--accent)] p-2 z-50 relative"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[var(--bg)] z-40 flex flex-col items-center justify-center min-h-screen"
          >
            <nav className="flex flex-col items-center gap-8 w-full px-6">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xl font-medium text-[var(--fg)] hover:text-[var(--accent)] transition-colors flex flex-col items-center gap-1"
                >

                  {link.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 border border-[var(--accent)] text-[var(--accent)] rounded px-8 py-4 text-lg font-mono hover:bg-[var(--accent-tint)] transition-colors w-[80%] text-center"
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
