"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { experiences, certificates } from "@/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-10">
      <div className="px-5" ref={ref}>
        {/* Education */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-6"
        >
          Education
        </motion.h2>

        <div className="border-t border-b border-dashed border-[var(--color-border)] divide-y divide-dashed divide-[var(--color-border)] -mx-5 mb-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
              }
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-3 py-5 px-5 hover:bg-[var(--color-surface)] transition-all duration-200"
            >
              <div className="p-1.5 h-fit rounded-md border border-[var(--color-border)] text-[var(--color-text-secondary)] bg-[var(--color-surface)]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)] font-heading">
                    {exp.company}
                  </h3>
                  <span className="text-xs text-[var(--color-text-muted)] font-mono">{exp.duration}</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] font-mono mt-0.5">
                  {exp.role}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] font-mono mt-0.5">{exp.location}</p>
                <ul className="mt-2 space-y-1">
                  {exp.description.map((desc, j) => (
                    <li
                      key={j}
                      className="text-xs text-[var(--color-text-secondary)] leading-relaxed flex gap-1.5 font-mono"
                    >
                      <span className="text-[var(--color-text-muted)] mt-0.5 shrink-0">—</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-4"
        >
          Certificates
        </motion.h2>

        <div className="border-t border-b border-dashed border-[var(--color-border)] divide-y divide-dashed divide-[var(--color-border)] -mx-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-3 py-4 px-5 hover:bg-[var(--color-surface)] transition-all duration-200"
            >
              <Award className="w-4 h-4 text-[var(--color-text-muted)] shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[var(--color-text-primary)] font-heading font-medium">
                  {cert.institution}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] font-mono italic">{cert.title}</p>
              </div>
              <span className="text-xs text-[var(--color-text-muted)] font-mono shrink-0">{cert.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
