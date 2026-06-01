function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="px-5 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-text-muted)] font-mono flex items-center gap-1">
            Designed and Developed by{" "}
            <span className="text-[var(--color-text-secondary)]">Pratyush</span>.
          </p>
          <a
            href="https://twitter.com/pratyushkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <XIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
