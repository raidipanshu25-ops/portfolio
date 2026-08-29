"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="text-sm font-medium whitespace-nowrap">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[1px] h-[14px] bg-current ml-[1px] align-middle"
      />
    </span>
  );
}

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-24 rounded-full bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200/20 dark:border-neutral-800/20 animate-pulse" />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  // Show opposite: in light mode show "Dark Mode", in dark mode show "Light Mode"
  const label = isDark ? "Light Mode" : "Dark Mode";

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center px-5 py-2 rounded-full bg-[var(--fg)] hover:bg-[var(--fg)]/90 text-[var(--bg)] border border-transparent transition-colors focus:outline-none cursor-pointer overflow-hidden shadow-sm min-w-[120px]"
      aria-label="Toggle theme"
    >
      <TypewriterText text={label} />
    </motion.button>
  );
}
