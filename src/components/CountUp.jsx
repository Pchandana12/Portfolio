import { useEffect, useState } from "react";
import { useInView } from "./Reveal.jsx";

/** Counts from 0 to `to` when scrolled into view. */
export default function CountUp({ to, suffix = "", duration = 1600 }) {
  const [ref, seen] = useInView(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return undefined;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(to); return undefined; }
    let raf = 0;
    let start;
    const tick = (t) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}
