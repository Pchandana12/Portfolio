import { useEffect, useRef, useState } from "react";

/** Returns [ref, seen]. `seen` flips to true the first time the element scrolls into view. */
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!("IntersectionObserver" in window)) { setSeen(true); return undefined; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

/** Wrap content to animate it in on scroll. variant: "up" | "left" | "right" | "zoom". delay in ms. */
export default function Reveal({ children, delay = 0, variant = "up", className = "" }) {
  const [ref, seen] = useInView();
  return (
    <div ref={ref} className={`reveal ${variant === "up" ? "" : variant} ${seen ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
