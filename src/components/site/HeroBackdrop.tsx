import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import landscape from "@/assets/series-landscape.jpg";
import portraitSeries from "@/assets/series-portrait.jpg";

const FRAMES = [
  landscape,
  "/gallery-arch-1.jpg",
  "/gallery-street-2.jpg",
  portraitSeries,
];

/** Slow cross-fading, slowly zooming photo rotation behind the hero type. */
export function HeroBackdrop() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % FRAMES.length), 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <AnimatePresence mode="sync">
        <motion.img
          key={FRAMES[i]}
          src={FRAMES[i]}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.32, scale: 1.16 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ opacity: { duration: 1.8 }, scale: { duration: 7, ease: "linear" } }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
    </div>
  );
}
