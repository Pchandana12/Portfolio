import Reveal from "../components/Reveal.jsx";
import Tilt from "../components/Tilt.jsx";
import { PageHeading, Chip } from "../components/ui.jsx";
import { SKILLS } from "../data.js";

const ALL = [...new Set(SKILLS.flatMap(([, items]) => items))];
const HALF = Math.ceil(ALL.length / 2);

function Marquee({ items, rev }) {
  return (
    <div className="mq">
      <div className={`marquee ${rev ? "rev" : ""}`}>
        {[...items, ...items].map((s, i) => (
          <span key={i} aria-hidden={i >= items.length} className="whitespace-nowrap rounded-full border border-line bg-surf px-5 py-2 font-medium">{s}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section>
      <PageHeading title="Skills" sub="The tools I use day to day to design, build and ship." />
      <Reveal className="mt-10 space-y-3">
        <Marquee items={ALL.slice(0, HALF)} />
        <Marquee items={ALL.slice(HALF)} rev />
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {SKILLS.map(([group, items], i) => (
          <Reveal key={group} delay={i * 90} variant={i % 2 ? "right" : "left"} className="h-full">
            <Tilt className="h-full rounded-2xl">
              <div className="h-full rounded-2xl border border-line bg-surf/80 p-6 backdrop-blur">
                <h2 className="text-xl font-bold">{group}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((s, j) => <span key={s} className="pop" style={{ "--d": `${300 + j * 80}ms` }}><Chip>{s}</Chip></span>)}
                </div>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
