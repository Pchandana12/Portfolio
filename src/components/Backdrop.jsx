import { useEffect, useRef } from "react";

/** Fixed background layers: aurora blobs, dot grid, cursor spotlight and a scroll-progress bar. */
export default function Backdrop() {
  const bar = useRef(null);
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--mx", e.clientX + "px");
        root.style.setProperty("--my", e.clientY + "px");
      });
    };
    const onScroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={bar} className="progress" aria-hidden="true" />
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="spot" aria-hidden="true" />
    </>
  );
}
