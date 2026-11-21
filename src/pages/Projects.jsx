import Reveal from "../components/Reveal.jsx";
import Tilt from "../components/Tilt.jsx";
import { PageHeading, Chip, Button } from "../components/ui.jsx";
import { PROJECTS } from "../data.js";

export default function Projects() {
  return (
    <section>
      <PageHeading title="Projects" sub="Five projects, each deployed and live. Hover a card to tilt it." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 120} variant={i % 2 ? "right" : "left"} className="h-full">
            <Tilt className="h-full rounded-2xl">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surf/80 p-6 backdrop-blur">
                <div className="card-top" />
                <h2 className="text-2xl font-bold">{p.name}</h2>
                <p className="mt-3 flex-1 text-mute">{p.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                <div className="mt-5 flex gap-3">
                  <Button solid href={p.demo}>Live demo</Button>
                  {p.code && <Button href={p.code}>Code</Button>}
                </div>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
