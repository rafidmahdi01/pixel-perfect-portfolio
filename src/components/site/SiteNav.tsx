import { motion, useScroll, useSpring } from "motion/react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border/40 bg-background/60 px-5 py-4 backdrop-blur-md sm:px-6">
        <a
          href="#top"
          className="truncate font-display text-sm font-extrabold uppercase tracking-[0.28em]"
        >
          Sushil Production
        </a>
        <div className="flex shrink-0 items-center gap-4 sm:gap-7">
          <nav className="hidden gap-7 text-xs uppercase tracking-[0.22em] text-muted-foreground sm:flex">
            {LINKS.map((l) => (
              <a key={l.href} className="transition-colors hover:text-foreground" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.18em] text-primary transition-colors hover:border-primary/70"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Available for hire
          </a>
        </div>
      </div>
      <motion.div className="h-px origin-left bg-primary" style={{ scaleX: progress }} />
    </header>
  );
}
