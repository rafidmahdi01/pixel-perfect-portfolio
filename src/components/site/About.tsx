import { Reveal } from "./Reveal";

const FACTS = [
  ["Based", "Malaysia"],
  ["Since", "2017"],
  ["Focus", "Real moments"],
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border/60 py-24 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-border/60">
            <img
              src="/gallery-portrait-1.jpg"
              alt="Portrait of Daniel Sushil on location"
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
              I'm Daniel Sushil, the photographer behind Sushil Production. Based in Malaysia, I've
              been documenting weddings, portraits, families and celebrations since 2017 — no forced
              poses, just the light and emotion that's already there.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Available for commissions across Malaysia and beyond. Reach me at
              sushilphotography25@gmail.com or 0108222519.
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
