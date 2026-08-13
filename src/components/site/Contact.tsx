import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Check, Copy, Instagram, Video, Palette } from "lucide-react";
import { Reveal } from "./Reveal";

const EMAIL = "studio@elenavoss.photo";

const SERVICES = [
  { name: "Editorial & campaign", note: "Day rate from $2,400" },
  { name: "Portrait sessions", note: "Studio or location, 90 min" },
  { name: "Wedding documentary", note: "Full day, two photographers" },
  { name: "Print sales", note: "Archival, edition of 15" },
];

const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { name: "Behance", href: "https://behance.net", Icon: Palette },
  { name: "Vimeo", href: "https://vimeo.com", Icon: Video },
];

export function Contact() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden border-t border-border/60">
      <div className="glow-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-40">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Working together</p>
              <h2 className="display-xl text-5xl sm:text-7xl">
                Let's create <span className="text-primary">together</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Booking commissions worldwide, currently based in Lisbon. Tell me the story and the
                light you have — I'll tell you what's possible.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={copy}
                  data-cursor="hover"
                  className="group inline-flex min-w-0 items-center gap-4 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 font-display text-base font-bold tracking-tight text-foreground transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_40px_-12px_var(--color-primary)] sm:text-lg"
                >
                  <span className="truncate">{EMAIL}</span>
                  {copied ? (
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4 shrink-0 text-primary" />
                  )}
                </button>
                <span
                  aria-live="polite"
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {copied ? "Copied" : "Click to copy"}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-wrap gap-3">
                {SOCIALS.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    {name}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.ul style={{ y }} className="divide-y divide-border/60 border-y border-border/60">
            {SERVICES.map((s) => (
              <li
                key={s.name}
                className="flex items-baseline justify-between gap-6 py-6 transition-colors hover:text-primary"
              >
                <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
                  {s.name}
                </span>
                <span className="text-right text-xs text-muted-foreground">{s.note}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Elena Voss Studio</span>
          <div className="flex gap-6">
            <a className="transition-colors hover:text-foreground" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-foreground" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-foreground" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
