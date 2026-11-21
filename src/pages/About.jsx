import Reveal, { useInView } from "../components/Reveal.jsx";
import { PageHeading } from "../components/ui.jsx";
import { EDUCATION } from "../data.js";

export default function About() {
  const [ref, seen] = useInView(0.1);
  return (
    <section>
      <PageHeading title="About me" sub="A frontend developer who likes interfaces that are quick, clear and easy to use." />
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <Reveal variant="left">
          <p className="text-lg leading-relaxed text-mute">
            I build responsive web applications with React.js, JavaScript (ES6), HTML5 and CSS3. I’m comfortable with React
            Hooks, reusable component architecture and connecting frontends to backend APIs with Axios and Fetch, and I’ve
            built APIs of my own with Node.js and Express.js.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-mute">
            I’m looking for work where I can ship user-friendly, high-performance products and keep learning.
          </p>
          <p className="mt-6"><span className="font-bold">Languages:</span> English, Telugu, Hindi</p>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <h2 className="text-2xl font-bold">Education</h2>
          <ol ref={ref} className="relative mt-5 space-y-6 pl-8">
            <span className={`tl-line ${seen ? "on" : ""}`} aria-hidden="true" />
            {EDUCATION.map(([t, s]) => (
              <li key={t} className="relative"><span className="dot" /><p className="font-bold">{t}</p><p className="text-sm text-mute">{s}</p></li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
