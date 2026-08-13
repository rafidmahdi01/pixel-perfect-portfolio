import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Scroll-driven depth reveal: content starts small and far away, rushes
 * toward the viewer as it crosses the viewport, then recedes again.
 */
export function ZoomIn({
  children,
  className,
  from = 0.55,
  to = 1,
  out = 1.35,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
  out?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [from, to, out]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, 12]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <div ref={ref} className={className} style={{ perspective: 1200 }}>
      <motion.div style={{ scale, opacity, filter, transformOrigin: "center center" }}>
        {children}
      </motion.div>
    </div>
  );
}
