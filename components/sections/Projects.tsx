"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Only show the first two projects on the main page
  const mainPageProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="pt-10 pb-5">
      <div className="px-5">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-6"
        >
          Projects
        </motion.h2>

        <div ref={ref} className="relative grid grid-cols-1 sm:grid-cols-2 border-t border-b border-dashed border-[var(--color-border)] -mx-5">
          {mainPageProjects.map((project, i) => {
            const isFirstMobile = i === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="h-full"
                whileHover="hover"
              >
                {/* Card — flat border box (on mobile, first gets bottom border to separate it from second) */}
                <div className={`group bg-transparent overflow-hidden transition-all duration-300 hover:bg-[var(--color-surface)] h-full flex flex-col ${
                  isFirstMobile ? "max-sm:border-b max-sm:border-dashed max-sm:border-[var(--color-border)]" : ""
                } cursor-default`}>

                  {/* Project image area with blueprint grid backdrop */}
                  <div className="relative aspect-[16/10] bg-[#080808] drafting-grid overflow-hidden border-b border-dashed border-[var(--color-border)] transition-colors duration-300 group-hover:bg-[#0c0c0c]">
                    
                    {/* Blueprint Coordinate Decal Label */}
                    <div className="absolute z-10 top-2.5 left-2.5 text-[8px] font-mono text-[var(--color-text-muted)] tracking-wider select-none bg-black/70 px-1.5 py-0.5 rounded border border-[var(--color-border)] backdrop-blur-sm">
                      {"[0" + (i + 1) + " // " + project.title.slice(0, 5).toUpperCase() + "]"}
                    </div>

                    {/* ↗ Arrow icon - top right of image with spring scale and slide translation */}
                    <motion.a
                      href={project.liveUrl || project.githubUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={{
                        hover: { scale: 1.05 }
                      }}
                      transition={{ type: "spring", stiffness: 450, damping: 15 }}
                      className="absolute top-2.5 right-2.5 w-7 h-7 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-muted)] transition-all z-10 cursor-pointer"
                    >
                      <motion.div
                        variants={{
                          hover: { x: 1.5, y: -1.5 }
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      >
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                      </motion.div>
                    </motion.a>

                    {/* Project Image */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Title + Live badge */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-semibold text-[#e0e0e0] font-heading flex items-center gap-1">
                        {project.title}
                        {/* Subtle diagonal link slide indicator next to the title */}
                        <motion.span
                          variants={{
                            hover: { opacity: 0.8, x: 1.5, y: -1.5 }
                          }}
                          initial={{ opacity: 0.25, x: 0, y: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 18 }}
                          className="text-[var(--color-text-muted)] text-[10px]"
                        >
                          ↗
                        </motion.span>
                      </h3>
                      
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-[#aaa] hover:text-[#e0e0e0] transition-colors cursor-pointer"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                          Live
                          <ArrowUpRightIcon className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <p className="text-[13px] text-[#888] leading-relaxed flex-1 mb-4 font-mono">
                      {project.description}
                    </p>

                    {/* Tags with group hover border lighting */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono text-[#666] border border-[#2a2a2a] rounded-sm bg-[#080808] transition-colors duration-300 group-hover:text-[var(--color-text-secondary)] group-hover:border-[var(--color-text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono text-[#666] border border-[#2a2a2a] rounded-sm bg-[#080808] transition-colors duration-300 group-hover:text-[var(--color-text-secondary)] group-hover:border-[var(--color-text-muted)]">
                          +{project.tags.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Github link with spring sliding icon translation */}
                    <div className="pt-3 border-t border-[#1e1e1e]">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-mono text-[#666] hover:text-[#aaa] transition-colors cursor-pointer"
                        >
                          <motion.div
                            variants={{
                              hover: { x: 1.5, y: -0.5 }
                          }}
                          className="flex items-center gap-1.5"
                          transition={{ type: "spring", stiffness: 400, damping: 18 }}
                        >
                          <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                          <span>Github</span>
                        </motion.div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#444]">
                        <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>Github (private)</span>
                      </div>
                    )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Continuous Center Vertical Dashed Divider */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l border-dashed border-[var(--color-border)] pointer-events-none hidden sm:block z-10" />
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center pt-5">
          <Button variant="secondary" size="md" href="/projects">
            <span>View All Projects</span>
            <ArrowUpRightIcon className="w-4 h-4 shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  );
}
