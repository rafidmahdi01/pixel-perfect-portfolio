import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/** Long scroll canvas where a line of type rushes from far away past the viewer. */
export function ZoomStatement() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.25, 1, 4.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.72, 0.95], [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.75, 1], [14, 0, 0, 18]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  const subScale = useTransform(scrollYProgress, [0, 0.6, 1], [0.6, 1, 1.8]);
  const subOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.6], [0, 1, 0]);

  return (
    <div ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden px-6">
        <div className="glow-bg pointer-events-none absolute inset-0" />
        <motion.p
          style={{ scale, opacity, filter }}
          className="display-xl relative text-center text-[13vw] leading-[0.85] sm:text-[9vw]"
        >
          Shoot the <span className="text-primary">light</span>,
          <br />
          not the subject
        </motion.p>
        <motion.span
          style={{ scale: subScale, opacity: subOpacity }}
          className="eyebrow absolute bottom-16"
        >
          Twelve years behind the viewfinder
        </motion.span>
      </div>
    </div>
  );
}
