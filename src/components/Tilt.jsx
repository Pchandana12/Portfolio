import { useRef } from "react";

/** 3D tilt + glare that follows the mouse. Does nothing on touch screens or with reduced motion. */
export default function Tilt({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const enabled = () => matchMedia("(hover: hover)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e) => {
    if (!enabled()) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg) translateY(-4px)`;
    el.style.setProperty("--gx", `${x * 100}%`);
    el.style.setProperty("--gy", `${y * 100}%`);
  };
  const onLeave = () => { ref.current.style.transform = ""; };

  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`tilt ${className}`}>{children}</div>;
}
