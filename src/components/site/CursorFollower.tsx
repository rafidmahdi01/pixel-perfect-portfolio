import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Dot + ring cursor companion. Hidden on touch / coarse pointers. */
export function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("a,button,[data-cursor='hover']")));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      <motion.div
        style={{ x, y }}
        className="absolute -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-primary"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: active ? 1.9 : 1, opacity: active ? 0.9 : 0.45 }}
        transition={{ duration: 0.25 }}
        className="absolute -ml-5 -mt-5 h-10 w-10 rounded-full border border-primary/70"
      />
    </div>
  );
}
