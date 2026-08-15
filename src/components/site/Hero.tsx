import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Starfield } from "./Starfield";
import { HeroBackdrop } from "./HeroBackdrop";

const WORD_ONE = "LIGHT".split("");
const WORD_TWO = "KEEPER".split("");

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <HeroBackdrop />
      <Starfield />
      <div className="glow-bg absolute inset-0" />

      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="eyebrow mb-8"
        >
          Daniel Sushil — Photographer
        </motion.p>

        <h1 className="display-xl text-[18vw] leading-[0.82] sm:text-[15vw] lg:text-[11.5vw]">
          <span className="flex justify-center overflow-hidden">
            {WORD_ONE.map((c, i) => (
              <motion.span
                key={`a-${i}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
          </span>
          <span className="flex justify-center overflow-hidden text-primary">
            {WORD_TWO.map((c, i) => (
              <motion.span
                key={`b-${i}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="mt-8 font-display text-xs font-bold uppercase tracking-[0.42em] text-muted-foreground sm:text-sm"
        >
          Visual Artist &amp; Director
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-8 max-w-md text-balance text-sm text-muted-foreground sm:text-base"
        >
          Chasing available light across deserts, cities and quiet rooms — for people who want
          the real frame, not the posed one.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <span className="eyebrow">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="mx-auto mt-4 h-10 w-px bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
