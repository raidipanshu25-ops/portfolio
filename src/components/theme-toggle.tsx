"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-28 rounded-full bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200/20 dark:border-neutral-800/20 animate-pulse" />
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
      className="relative flex items-center justify-center px-4 py-1.5 rounded-full bg-[var(--fg)] hover:bg-[var(--fg)]/90 text-[var(--bg)] border border-transparent transition-colors focus:outline-none cursor-pointer shadow-sm text-sm font-medium whitespace-nowrap"
      aria-label="Toggle theme"
    >
      <span>{label}</span>
    </motion.button>
  );
}
