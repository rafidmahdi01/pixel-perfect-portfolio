import { Counter } from "./Counter";
import { ZoomIn } from "./ZoomIn";


const STATS = [
  { lead: "Shot across", value: 34, suffix: "+ countries", tail: "since 2011" },
  { lead: "Published in", value: 120, suffix: " editorials", tail: "Vogue, Kinfolk, Monocle" },
  { lead: "Documented", value: 460, suffix: " weddings", tail: "and still counting" },
];

export function Stats() {
  return (
    <section className="relative border-t border-border/60 px-6 py-32 sm:py-44">
      <div className="mx-auto max-w-6xl space-y-32 sm:space-y-48">
        {STATS.map((s) => (
          <ZoomIn key={s.lead} from={0.5} to={1} out={1.4}>
            <div className="grid items-end gap-4 md:grid-cols-[1fr_auto]">
              <div>
                <p className="eyebrow mb-5">{s.lead}</p>
                <h2 className="display-xl text-[13vw] leading-[0.85] sm:text-6xl lg:text-8xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </h2>
              </div>
              <p className="text-sm text-muted-foreground md:pb-3 md:text-right">{s.tail}</p>
            </div>
          </ZoomIn>
        ))}
      </div>
    </section>
  );
}

