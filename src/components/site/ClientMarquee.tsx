const CLIENTS = [
  "MERCEDES BENZ",
  "UNIVERSITY OF READING",
  "UNIVERSITY OF SOUTHAMPTON",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const row = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <div className="relative">
      <div
        className={`flex w-max gap-16 pr-16 will-change-transform ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        }`}
      >
        {row.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="font-display text-2xl font-extrabold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground sm:text-3xl"
          >
            {c}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

export function ClientMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 py-10">
      <p className="eyebrow mb-8 px-6 text-center">Companies worked with</p>
      <div className="flex flex-col gap-8">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
