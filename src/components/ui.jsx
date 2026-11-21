import Reveal from "./Reveal.jsx";

export function Button({ href, solid, children, ...rest }) {
  const external = href?.startsWith("http");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${
        solid ? "btn-shine bg-gradient-to-r from-btn to-[#8b5cf6] text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
              : "border border-line bg-surf/60 text-ink backdrop-blur hover:border-acc"}`}>
      {children}
    </a>
  );
}

export function PageHeading({ title, sub }) {
  return (
    <Reveal>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
      <span className="bar" />
      <p className="mt-4 max-w-xl text-mute">{sub}</p>
    </Reveal>
  );
}

export const Chip = ({ children, style }) => (
  <span style={style} className="inline-block rounded-full border border-line bg-surf px-3 py-1 text-sm transition hover:-translate-y-0.5 hover:border-acc">{children}</span>
);

export function Icon({ name, className = "h-5 w-5" }) {
  const p = { className, viewBox: "0 0 24 24", "aria-hidden": true };
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "github") return <svg {...p} fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.76 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" /></svg>;
  if (name === "linkedin") return <svg {...p} fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4V21H3zM9.75 9.75h3.8v1.6h.06c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.64 4.74 6.07V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4z" /></svg>;
  if (name === "mail") return <svg {...p} {...s}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
  return <svg {...p} {...s}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" /></svg>;
}
