import Reveal, { useInView } from "../components/Reveal.jsx";
import { PageHeading } from "../components/ui.jsx";
import { JOBS } from "../data.js";

export default function Experience() {
  const [ref, seen] = useInView(0.05);
  return (
    <section>
      <PageHeading title="Experience" sub="Where I’ve worked and trained, most recent first." />
      <ol ref={ref} className="relative mt-10 space-y-10 pl-8">
        <span className={`tl-line ${seen ? "on" : ""}`} aria-hidden="true" />
        {JOBS.map((j, i) => (
          <li key={j.org} className="relative">
            <span className="dot" />
            <Reveal variant="right" delay={i * 80}>
              <div className="rounded-2xl border border-line bg-surf/80 p-6 backdrop-blur transition hover:border-acc">
                <h2 className="text-2xl font-bold">{j.role}</h2>
                <p className="font-medium text-acc">{j.org}</p>
                <p className="text-sm text-mute">{j.when}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-mute">{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
