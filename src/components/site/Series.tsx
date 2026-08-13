import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import portrait from "@/assets/series-portrait.jpg";
import landscape from "@/assets/series-landscape.jpg";
import street from "@/assets/series-street.jpg";
import wedding from "@/assets/series-wedding.jpg";
import architecture from "@/assets/series-architecture.jpg";

type Item = {
  index: string;
  title: string;
  tags: string[];
  headline: string;
  body: string;
  image: string;
  alt: string;
};

const SERIES: Item[] = [
  {
    index: "01",
    title: "Chiaroscuro",
    tags: ["Portrait", "Studio", "Editorial"],
    headline: "One light, one truth",
    body: "A monochrome portrait study built on a single hard source. No retouching beyond dust — the shadow does the storytelling.",
    image: portrait,
    alt: "Black and white studio portrait in profile with deep shadows",
  },
  {
    index: "02",
    title: "Dust Lines",
    tags: ["Landscape", "Large format", "Personal"],
    headline: "Twelve days without a road",
    body: "Dunes photographed at the last minutes of light, when the ridges turn into drawn lines and the temperature drops fast.",
    image: landscape,
    alt: "Desert dunes at dusk in warm muted tones",
  },
  {
    index: "03",
    title: "After Rain",
    tags: ["Street", "Night", "Reportage"],
    headline: "The city doubles itself",
    body: "Shot handheld at 1/30s across four wet winters. Neon on asphalt gives you a second city to compose with.",
    image: street,
    alt: "Night street scene with neon reflections on wet asphalt",
  },
  {
    index: "04",
    title: "Golden Vows",
    tags: ["Wedding", "Documentary", "Film"],
    headline: "Unposed, always",
    body: "Wedding coverage without a shot list. I follow the day and photograph what actually happens, mostly in the last hour of sun.",
    image: wedding,
    alt: "Couple embracing in tall grass at golden hour",
  },
  {
    index: "05",
    title: "Hard Edge",
    tags: ["Architecture", "Monochrome", "Commission"],
    headline: "Concrete keeps time",
    body: "A commissioned survey of brutalist facades, photographed only when the shadow cut the wall diagonally.",
    image: architecture,
    alt: "Brutalist concrete facade with a hard diagonal shadow",
  },
];

function SeriesCard({ item, i }: { item: Item; i: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1, 1.25]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.75, 1], [0.72, 1, 1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.45], [10, 0]);

  return (
    <div
      ref={ref}
      className="sticky top-16 sm:top-20"
      style={{ zIndex: i + 1, perspective: 1400 }}
    >
      <motion.article
        style={{ scale, opacity, rotateX, transformOrigin: "center top" }}
        className="overflow-hidden rounded-lg border border-border/60 bg-card shadow-[var(--shadow-frame)]"
      >

        <div className="grid gap-0 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="flex flex-col justify-between gap-10 p-8 sm:p-12">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-bold tracking-widest text-primary">
                {item.index}
              </span>
              <div className="flex flex-wrap justify-end gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="display-xl text-4xl sm:text-5xl">{item.title}</h3>
              <p className="mt-5 text-lg text-foreground/90 sm:text-xl">{item.headline}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          </div>

          <div className="relative h-[46vh] overflow-hidden lg:h-[70vh]">
            <motion.img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              width={1408}
              height={1008}
              style={{ y: imgY, scale: imgScale }}
              className="absolute inset-0 h-[120%] w-full object-cover"

            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function Series() {
  return (
    <section id="series" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto mb-16 max-w-6xl">
        <p className="eyebrow mb-5">Selected series</p>
        <h2 className="display-xl max-w-3xl text-5xl sm:text-7xl">
          Bodies of work, not <span className="text-primary">single shots</span>
        </h2>
      </div>
      <div className="mx-auto max-w-6xl space-y-8">
        {SERIES.map((item, i) => (
          <SeriesCard key={item.index} item={item} i={i} />
        ))}
      </div>
    </section>
  );
}
