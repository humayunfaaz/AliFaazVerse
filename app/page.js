import Link from "next/link";

const skills = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "SQL",
  "Git",
  "AI / ML",
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <section
        className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/HOmepagebackground.png')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              CSE student • builder • AI enthusiast
            </p>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-cyan-400">Ali Faaz.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300 sm:text-2xl">
              I&apos;m a B.Tech CSE student at MGIT learning by building software,
              exploring AI, and turning ideas into projects people can actually use.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                See my work
              </a>
              <Link
                href="/about"
                className="rounded-full border border-slate-500 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                More about me
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span>📍 Hyderabad, India</span>
              <span>🎓 MGIT • CSE</span>
              <span>🤖 AI + Software Engineering</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-slate-900 bg-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What I&apos;ve built
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              One project I&apos;m especially proud of.
            </h2>
          </div>

          <article className="mt-12 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
            <div className="grid lg:grid-cols-[1.2fr_1fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
                    Featured
                  </span>
                  <span className="text-sm text-slate-500">Hackathon project</span>
                </div>

                <h3 className="mt-6 text-4xl font-bold">CareSpeak AI</h3>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  An assistive communication project that uses hand and eye
                  gestures to help people with speech or mobility limitations
                  communicate through text-to-speech.
                </p>

                <p className="mt-5 leading-7 text-slate-400">
                  We focused on keeping processing local in the browser, using
                  MediaPipe and WebAssembly instead of sending interaction data
                  to a remote server.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "MediaPipe", "WebAssembly", "Tailwind CSS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <a
                  href="https://care-speak.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Open CareSpeak AI ↗
                </a>
              </div>

              <div className="border-t border-slate-800 bg-slate-950/60 p-8 sm:p-10 lg:border-l lg:border-t-0">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  A milestone
                </p>
                <p className="mt-5 text-5xl font-bold text-cyan-400">Top 5</p>
                <p className="mt-2 text-xl font-semibold">
                  VYNEDAM Talent Hunt 2K26
                </p>
                <p className="mt-4 leading-7 text-slate-400">
                  Our team placed in the Top 5 out of 179 teams, with nearly
                  700 participants, during the 36-hour event at Malla Reddy
                  University.
                </p>
                <div className="mt-8 border-t border-slate-800 pt-6 text-sm text-slate-500">
                  July 2026 • Team project
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-slate-900/60 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Currently learning
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              I&apos;m still building the basics.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              I don&apos;t want this portfolio to pretend I already know everything.
              Right now I&apos;m spending time on DSA, AI engineering, full-stack
              development, backend systems, and better software practices.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-4xl">💻</p>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            More projects are on the way.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            I&apos;m using this site as a record of what I build and what I learn.
            As the projects get better, this portfolio will keep changing too.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              My journey
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}