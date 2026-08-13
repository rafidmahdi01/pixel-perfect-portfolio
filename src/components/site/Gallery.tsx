import { useMemo, useState, useEffect } from "react";
import landscape from "@/assets/series-landscape.jpg";
import portraitSeries from "@/assets/series-portrait.jpg";
import streetSeries from "@/assets/series-street.jpg";
import archSeries from "@/assets/series-architecture.jpg";
import weddingSeries from "@/assets/series-wedding.jpg";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowLeft, ArrowRight, Expand } from "lucide-react";

type Shot = {
  src: string;
  title: string;
  category: "Editorial" | "Architecture" | "Portrait" | "Documentary";
  place: string;
  w: number;
  h: number;
};

const SHOTS: Shot[] = [
  {
    src: "/gallery-editorial-1.jpg",
    title: "Coat of Night",
    category: "Editorial",
    place: "Lisbon, 2025",
    w: 1200,
    h: 1600,
  },
  {
    src: landscape,
    title: "Cold Horizon",
    category: "Documentary",
    place: "Lofoten, 2024",
    w: 1408,
    h: 1008,
  },
  {
    src: "/gallery-portrait-1.jpg",
    title: "Window Study",
    category: "Portrait",
    place: "Studio 4, 2025",
    w: 1200,
    h: 1500,
  },
  {
    src: "/gallery-arch-1.jpg",
    title: "Concrete Angles",
    category: "Architecture",
    place: "Rotterdam, 2024",
    w: 1600,
    h: 1100,
  },
  {
    src: streetSeries,
    title: "After Rain",
    category: "Documentary",
    place: "Tokyo, 2023",
    w: 1408,
    h: 1008,
  },
  {
    src: portraitSeries,
    title: "Held Light",
    category: "Portrait",
    place: "Porto, 2025",
    w: 1408,
    h: 1008,
  },
  {
    src: archSeries,
    title: "Grid & Sky",
    category: "Architecture",
    place: "Milan, 2024",
    w: 1408,
    h: 1008,
  },
  {
    src: "/gallery-street-2.jpg",
    title: "Neon Passage",
    category: "Documentary",
    place: "Osaka, 2023",
    w: 1600,
    h: 1000,
  },
  {
    src: weddingSeries,
    title: "First Look",
    category: "Editorial",
    place: "Provence, 2025",
    w: 1408,
    h: 1008,
  },
];

const FILTERS = ["All", "Editorial", "Architecture", "Portrait", "Documentary"] as const;

export function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const shots = useMemo(
    () => (filter === "All" ? SHOTS : SHOTS.filter((s) => s.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => ((i ?? 0) + 1) % shots.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => ((i ?? 0) - 1 + shots.length) % shots.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, shots.length]);

  const current = openIndex === null ? null : shots[openIndex];

  return (
    <section id="work" className="relative border-t border-border/60 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:justify-between">
          <div className="min-w-0">
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="display-xl text-4xl sm:text-6xl">The Archive</h2>
          </div>
          <span className="shrink-0 text-xs text-muted-foreground">{shots.length} frames</span>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setOpenIndex(null);
              }}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                filter === f
                  ? "border-primary/70 bg-primary/15 text-primary shadow-[0_0_28px_-8px_var(--color-primary)]"
                  : "border-border/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          <AnimatePresence mode="popLayout">
            {shots.map((shot, i) => (
              <motion.button
                key={shot.src}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.06 }}
                onClick={() => setOpenIndex(i)}
                data-cursor="hover"
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-lg border border-border/60 text-left transition-colors duration-500 hover:border-primary/50"
              >
                <img
                  src={shot.src}
                  alt={`${shot.title} — ${shot.category} photograph, ${shot.place}`}
                  loading="lazy"
                  decoding="async"
                  width={shot.w}
                  height={shot.h}
                  className="w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between gap-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="min-w-0">
                    <span className="block font-display text-lg font-bold tracking-tight">
                      {shot.title}
                    </span>
                    <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-primary">
                      {shot.category} · {shot.place}
                    </span>
                  </span>
                  <Expand className="h-5 w-5 shrink-0 text-primary" />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            onClick={() => setOpenIndex(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl sm:p-10"
          >
            <button
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-full border border-border/70 p-2.5 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.figure
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full w-full max-w-5xl"
            >
              <img
                src={current.src}
                alt={`${current.title} — ${current.category}`}
                width={current.w}
                height={current.h}
                className="mx-auto max-h-[74vh] w-auto rounded-lg border border-border/60 object-contain shadow-[var(--shadow-frame)]"
              />
              <figcaption className="mx-auto mt-5 flex max-w-5xl items-center justify-between gap-4">
                <span className="min-w-0">
                  <span className="block truncate font-display text-xl font-bold tracking-tight">
                    {current.title}
                  </span>
                  <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {current.category} · {current.place}
                  </span>
                </span>
                <span className="flex shrink-0 gap-2">
                  <button
                    aria-label="Previous photo"
                    onClick={() =>
                      setOpenIndex((i) => ((i ?? 0) - 1 + shots.length) % shots.length)
                    }
                    className="rounded-full border border-border/70 p-2.5 transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Next photo"
                    onClick={() => setOpenIndex((i) => ((i ?? 0) + 1) % shots.length)}
                    className="rounded-full border border-border/70 p-2.5 transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
