"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200/20 dark:border-neutral-800/20 animate-pulse" />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:hover:bg-neutral-800/85 border border-neutral-200/50 dark:border-neutral-800/50 text-neutral-800 dark:text-neutral-200 transition-colors focus:outline-none cursor-pointer overflow-hidden shadow-sm"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {currentTheme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: -90 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Sun className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Moon className="w-5 h-5 text-indigo-600 fill-indigo-600/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
