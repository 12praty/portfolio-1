"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ type: "spring", stiffness: 450, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-muted)] hover:bg-[var(--color-background)] transition-all duration-200 cursor-pointer shadow-xl shadow-black/35 z-50 overflow-hidden group"
          aria-label="Scroll to top"
        >
          {/* ArrowUp Icon with micro-spring translation on hover */}
          <motion.div
            variants={{
              hover: { y: -2 }
            }}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.div>

          {/* Cohesive Dot Matrix Display overlay filter */}
          <div className="dot-matrix-filter" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
