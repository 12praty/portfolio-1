"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="pt-10 pb-8">
      <div className="px-5">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-4"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-mono text-[14px] text-[var(--color-text-secondary)] leading-[1.9] tracking-wide"
        >
          <p>
            Hi there, I&apos;m{" "}
            <span className="text-[var(--color-text-primary)] font-semibold underline underline-offset-3 decoration-1">
              Pratyush Kumar
            </span>
            . I&apos;m a{" "}
            <span className="text-[var(--color-text-primary)] font-semibold underline underline-offset-3 decoration-1">
              full-stack developer
            </span>{" "}
            and a B.Tech graduate in Computer Science, with a focus on building{" "}
            <span className="text-[var(--color-text-primary)] font-semibold underline underline-offset-3 decoration-1">
              modern web applications
            </span>
            . I work with{" "}
            <span className="text-[var(--color-text-primary)] font-semibold underline underline-offset-3 decoration-1">
              React, Next.js, and Node.js
            </span>{" "}
            to create{" "}
            <span className="text-[var(--color-text-primary)] font-semibold underline underline-offset-3 decoration-1">
              clean UIs
            </span>{" "}
            with{" "}
            <span className="text-[var(--color-text-primary)] font-semibold underline underline-offset-3 decoration-1">
              robust backends
            </span>{" "}
            and attention to detail.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
