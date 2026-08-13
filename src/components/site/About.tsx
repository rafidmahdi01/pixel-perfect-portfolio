import { Reveal } from "./Reveal";

const FACTS = [
  ["Based", "Lisbon / worldwide"],
  ["Since", "2012"],
  ["Focus", "Available light"],
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border/60 py-24 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-border/60">
            <img
              src="/gallery-portrait-1.jpg"
              alt="Portrait of Elena Voss in her studio"
              loading="lazy"
              decoding="async"
              width={1200}
              height={1500}
              className="w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/10" />
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.08}>
            <p className="eyebrow mb-6">About</p>
            <h2 className="display-xl text-4xl sm:text-6xl">
              Light first, <span className="text-primary">always</span>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              I photograph people and places the way they actually happen — no strobes, no staging,
              just the light that's already in the room. Fifteen years of editorial commissions,
              documentary weddings and long night walks have taught me that patience is the only
              real technique.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Work published in Kinfolk, Monocle and Le Monde; commissions across 34 countries.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 sm:grid-cols-3">
              {FACTS.map(([k, v]) => (
                <div key={k} className="bg-background/80 p-5 backdrop-blur-sm">
                  <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-2 font-display text-base font-bold tracking-tight">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
