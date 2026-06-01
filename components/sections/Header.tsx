"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[var(--color-background)]"
    >
      <div className="px-5 h-14 flex items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Square avatar with rounded borders */}
          <div className="w-8 h-8 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center overflow-hidden group-hover:border-[var(--color-text-muted)] transition-colors">
            <svg className="w-4 h-4 text-[var(--color-text-secondary)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide text-[var(--color-text-primary)] font-heading uppercase">
            Pratyush
          </span>
        </Link>

        {/* Right side — Available for work status badge */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[var(--color-border)] bg-[var(--color-surface)] text-[10px] font-mono text-[var(--color-text-secondary)] rounded-md select-none tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
