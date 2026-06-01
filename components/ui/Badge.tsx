import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "border-[var(--color-border)] text-[var(--color-text-muted)] bg-transparent",
    accent: "border-[var(--color-border)] text-[var(--color-text-secondary)] bg-[var(--color-surface)]",
    outline: "border-[var(--color-border)] text-[var(--color-text-muted)] bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-[11px] font-mono border transition-colors duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
