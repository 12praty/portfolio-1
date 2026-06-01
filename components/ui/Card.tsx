"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden transition-colors duration-200",
        hover && "hover:border-[var(--color-text-muted)]",
        className
      )}
    >
      {children}
    </div>
  );
}
