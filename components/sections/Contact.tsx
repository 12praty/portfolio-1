"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const contactItems = [
  {
    Icon: MailIcon,
    label: "Mail",
    value: "kumarpratyush674@gmail.com",
    href: "mailto:kumarpratyush674@gmail.com",
  },
  {
    Icon: XIcon,
    label: "X",
    value: "@pratyushkumar",
    href: "https://twitter.com/pratyushkumar",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Pratyush-Kumar",
    href: "https://linkedin.com/in/Pratyush-Kumar",
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    value: "pratyushkumar",
    href: "https://github.com/pratyushkumar",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("kumarpratyush674@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-10">
      <div className="px-5" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-5"
        >
          Contact
        </motion.h2>

        {/* 2-column flat grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-b border-dashed border-[var(--color-border)] -mx-5 bg-transparent overflow-hidden">
          {contactItems.map(({ Icon, label, value, href }, i) => {
            const isLeftColumn = i % 2 === 0;
            const isTopRow = i < 2;
            const isLinkedInMobile = i === 2;
            const isMail = label === "Mail";

            return (
              <motion.a
                key={label}
                href={href}
                onClick={isMail ? handleCopyEmail : undefined}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                whileHover="hover"
                className={`flex items-center gap-3 px-5 py-4 hover:bg-[var(--color-surface)] transition-all duration-200 group cursor-pointer ${
                  isTopRow ? "border-b border-dashed border-[var(--color-border)]" : ""
                } ${
                  isLinkedInMobile ? "max-sm:border-b max-sm:border-dashed max-sm:border-[var(--color-border)]" : ""
                } ${
                  isLeftColumn ? "sm:border-r sm:border-dashed sm:border-[var(--color-border)]" : ""
                }`}
              >
                {/* Monochrome chip-style icon box with dot matrix overlay */}
                <div className="w-8 h-8 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center shrink-0 text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] group-hover:border-[var(--color-text-muted)] transition-all duration-200 relative overflow-hidden">
                  <Icon className="w-4 h-4" />
                  
                  {/* Cohesive Dot Matrix overlay filter */}
                  <div className="dot-matrix-filter" />
                </div>

                {/* Text details */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] font-heading leading-tight flex items-center gap-1.5">
                    {label}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] font-mono truncate transition-colors duration-200">
                    {value}
                  </p>
                </div>

                {/* Micro-interaction Right Indicators */}
                {isMail ? (
                  <div className="shrink-0 ml-auto flex items-center">
                    {copied ? (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20"
                      >
                        <Check className="w-3 h-3 shrink-0" />
                        Copied!
                      </motion.div>
                    ) : (
                      <div className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] opacity-0 group-hover:opacity-100 transition-all duration-200 p-1 rounded hover:bg-[var(--color-surface)]">
                        <Copy className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                ) : (
                  <motion.div
                    variants={{
                      hover: { x: 1.5, y: -1.5, opacity: 1 }
                    }}
                    initial={{ opacity: 0.3 }}
                    className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] shrink-0 ml-auto"
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                )}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
