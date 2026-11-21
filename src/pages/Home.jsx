import Reveal from "../components/Reveal.jsx";
import Typewriter from "../components/Typewriter.jsx";
import CountUp from "../components/CountUp.jsx";
import { Button, Icon } from "../components/ui.jsx";
import { LINKEDIN, GITHUB, RESUME } from "../data.js";

const ROLES = ["Frontend Developer", "React.js Developer", "Responsive UI Builder", "REST API Integrator"];
const STATS = [[2, "+", "Years of experience"], [4, "+", "Frontend apps shipped"], [10, "+", "REST APIs integrated"], [5, "", "Live projects"]];
const BADGES = [["React", "-left-4 top-10", "0s"], ["Tailwind", "-right-6 top-1/2", "1.2s"], ["Node.js", "-left-6 bottom-12", "2.2s"]];

/** Splits the name into words and letters so each letter can animate in with a stagger. */
function AnimatedName({ text }) {
  let k = 0;
  return (
    <h1 aria-label={text} className="mt-3 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
      {text.split(" ").map((word, wi) => (
        <span key={wi} aria-hidden="true" className="mr-[0.25em] inline-block whitespace-nowrap">
          {[...word].map((c, ci) => <span key={ci} className="letter" style={{ animationDelay: `${300 + k++ * 45}ms` }}>{c}</span>)}
        </span>
      ))}
    </h1>
  );
}

export default function Home() {
  return (
    <>
      <section className="grid min-h-[70vh] items-center gap-14 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <Reveal><p className="font-bold text-acc">Hi, I’m from Hyderabad, India</p></Reveal>
          <AnimatedName text="Chandana Potlabathini" />
          <Reveal delay={1100}>
            <p className="mt-4 font-display text-2xl font-bold sm:text-4xl"><Typewriter words={ROLES} /></p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
              I build fast, responsive web apps with React.js, REST API integration and reusable components, with Node.js
              and Express.js on the backend.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button solid href="/projects">View projects</Button>
              <Button solid href={RESUME} download="Chandana-Potlabathini-Resume.pdf">Download resume</Button>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surf/60 transition hover:-translate-y-1 hover:border-acc hover:text-acc"><Icon name="linkedin" /></a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surf/60 transition hover:-translate-y-1 hover:border-acc hover:text-acc"><Icon name="github" /></a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="zoom" delay={500} className="justify-self-center">
          <div className="float relative isolate w-64 sm:w-80">
            <div className="arch absolute inset-6 -z-10 bg-gradient-to-b from-[#8b5cf6] to-[#1e3a8a] opacity-60 blur-3xl" />
            <div className="ring arch">
              <div><img src="/profile.jpg" alt="Portrait of Chandana Potlabathini" className="aspect-[4/5] w-full object-cover" /></div>
            </div>
            {BADGES.map(([t, pos, d]) => (
              <span key={t} style={{ animationDelay: d }}
                className={`bob absolute ${pos} rounded-full border border-line bg-surf px-3 py-1.5 text-sm font-bold shadow-lg`}>{t}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map(([n, suf, label], i) => (
          <Reveal key={label} variant="zoom" delay={i * 120}>
            <div className="rounded-2xl border border-line bg-surf/70 p-5 text-center backdrop-blur">
              <p className="font-display text-4xl font-extrabold text-acc"><CountUp to={n} suffix={suf} /></p>
              <p className="mt-1 text-sm text-mute">{label}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
