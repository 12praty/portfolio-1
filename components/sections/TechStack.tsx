"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { techStack, categoryLabels, type TechItem } from "@/data/techStack";
import {
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiVercel,
} from "react-icons/si";
import { Shield, Mail, Code2 } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  cpp: SiCplusplus,
  typescript: SiTypescript,
  javascript: SiJavascript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: SiCss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  prisma: SiPrisma,
  postgresql: SiPostgresql,
  nextauth: Shield,
  git: SiGit,
  github: SiGithub,
  vscode: Code2,
  colab: SiGooglecolab,
  vercel: SiVercel,
  mailjet: Mail,
};

function TechIcon({ item }: { item: TechItem }) {
  const Icon = iconMap[item.iconKey];

  return (
    <div className="group relative flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-transparent hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background)] transition-all duration-200 text-[var(--color-text-secondary)] select-none overflow-hidden cursor-default">
      {/* Icon wrapper */}
      <div className="shrink-0 flex items-center justify-center relative">
        {Icon ? <Icon className="w-4 h-4" /> : <span className="text-[10px] font-bold font-mono">{item.name.slice(0, 2)}</span>}
      </div>

      {/* Tech Name */}
      <span className="text-[11px] font-mono leading-none tracking-wide">
        {item.name}
      </span>

      {/* Dot Matrix Screen Filter Overlay */}
      <div className="dot-matrix-filter" />

      {/* Marching Ants Rotating Dashed Border SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg">
        <rect
          className="marching-ants marching-ants-rect"
          rx="6"
          fill="none"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categories = Object.keys(categoryLabels) as TechItem["category"][];

  return (
    <section id="stack" className="py-10">
      <div className="px-5">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-6"
        >
          Stack
        </motion.h2>

        <div ref={ref} className="space-y-8">
          {categories.map((category, catIdx) => {
            const items = techStack.filter((t) => t.category === category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 15 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                }
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              >
                <h3 className="text-xs font-mono text-[var(--color-text-muted)] mb-3 uppercase tracking-widest">
                  {categoryLabels[category]}
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.9 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: catIdx * 0.1 + i * 0.03,
                      }}
                    >
                      <TechIcon item={item} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
