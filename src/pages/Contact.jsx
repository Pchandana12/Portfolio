import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { PageHeading, Button, Icon } from "../components/ui.jsx";
import { EMAIL, PHONE, LINKEDIN, GITHUB, RESUME } from "../data.js";

const LINKS = [
  ["mail", "Email", EMAIL, `mailto:${EMAIL}`],
  ["phone", "Phone", PHONE, `tel:${PHONE.replace(/\s/g, "")}`],
  ["linkedin", "LinkedIn", "chandana-potlabathini", LINKEDIN],
  ["github", "GitHub", "Pchandana12", GITHUB],
];
const field = "mt-1 w-full rounded-xl border border-line bg-bg/60 px-4 py-3 outline-none transition focus:border-acc focus:shadow-[0_0_0_4px_rgba(139,92,246,.18)]";

export default function Contact() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  // Opens the visitor's email app with the message filled in (no backend needed).
  const send = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Hello from " + name)}&body=${encodeURIComponent(msg)}`;
  };

  return (
    <section>
      <PageHeading title="Contact" sub="Open to frontend and React roles. The quickest way to reach me is email." />
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          {LINKS.map(([icon, label, text, href], i) => (
            <Reveal key={label} variant="left" delay={i * 90}>
              <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-surf/80 px-5 py-4 backdrop-blur transition duration-300 hover:translate-x-2 hover:border-acc">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-btn to-[#8b5cf6] text-white transition group-hover:rotate-12"><Icon name={icon} /></span>
                <span className="min-w-0"><span className="block text-sm text-mute">{label}</span><span className="block break-all font-bold">{text}</span></span>
              </a>
            </Reveal>
          ))}
          <Reveal variant="left" delay={380}><div className="pt-2"><Button solid href={RESUME} download="Chandana-Potlabathini-Resume.pdf">Download resume</Button></div></Reveal>
        </div>
        <Reveal variant="right" delay={120}>
          <form onSubmit={send} className="space-y-4 rounded-2xl border border-line bg-surf/80 p-6 backdrop-blur">
            <h2 className="text-2xl font-bold">Send a message</h2>
            <label className="block text-sm font-medium">Your name
              <input required value={name} onChange={(e) => setName(e.target.value)} className={field} /></label>
            <label className="block text-sm font-medium">Message
              <textarea required rows={5} value={msg} onChange={(e) => setMsg(e.target.value)} className={field} /></label>
            <button className="btn-shine rounded-full bg-gradient-to-r from-btn to-[#8b5cf6] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">Open in email app</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
