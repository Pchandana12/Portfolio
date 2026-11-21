import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const LINKS = [["/", "Home"], ["/about", "About"], ["/skills", "Skills"], ["/experience", "Experience"], ["/projects", "Projects"], ["/contact", "Contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "");

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => {
    const dark = theme ? theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  const cls = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? "bg-btn text-white" : "text-mute hover:text-ink"}`;

  return (
    <header className="sticky top-0 z-20 border-b border-line backdrop-blur" style={{ background: "var(--hd)" }}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <Link to="/" className="font-display text-lg font-extrabold">Chandana P.</Link>
        <nav className="hidden gap-1 md:flex" aria-label="Main">
          {LINKS.map(([to, label]) => <NavLink key={to} to={to} end className={cls}>{label}</NavLink>)}
        </nav>
        <div className="flex gap-2">
          <button onClick={toggle} className="rounded-full border border-line px-3 py-2 text-sm" aria-label="Switch light or dark theme">Theme</button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} className="rounded-full border border-line px-3 py-2 text-sm md:hidden">Menu</button>
        </div>
      </div>
      {open && (
        <nav className="grid px-5 pb-3 md:hidden" aria-label="Mobile">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} end onClick={() => setOpen(false)}
              className={({ isActive }) => `py-2 font-medium ${isActive ? "text-acc" : ""}`}>{label}</NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
