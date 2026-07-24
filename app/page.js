
// export default function Home() {
//   return (
//     <main className="min-h-screen flex items-center justify-center">
//       <h1 className="text-5xl font-bold">AliFaazVerse</h1>
//     </main>
//   );
// }
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/HOmepagebackground.png')",
        }}
      >

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}

        <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center">

          <div className="max-w-2xl">

            <p className="text-cyan-400 text-xl mb-3">
              👋 Hi, I'm
            </p>

            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Ali Faaz
            </h1>

            <h2 className="mt-6 text-3xl font-semibold text-cyan-400">
              Future AI Software Engineer
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-8">
              Building AI-powered solutions, modern web applications,
              and turning ideas into reality.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex gap-5">

              <Link
                href="/projects"
                className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
              >
                Explore Projects
              </Link>

              {/* <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                Download Resume
              </a> */}
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURED PROJECT ================= */}

      <section className="bg-slate-950 py-24">

        <div className="max-w-6xl mx-auto px-8">

          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            🚀 Featured Project
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            CareSpeak AI
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-3xl">
            A privacy-first AI communication platform that enables
            gesture-based communication for speech-impaired patients
            using on-device Artificial Intelligence.
          </p>

          {/* Tech Stack */}

          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "Next.js",
              "TypeScript",
              "MediaPipe",
              "WebAssembly",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-slate-800 text-cyan-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}

          </div>

          <a
            href="https://care-speak.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-12 px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
          >
            View Live Project →
          </a>

        </div>

      </section>

      {/* ================= TECH STACK ================= */}

      <section className="bg-slate-900 py-24">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <h2 className="text-5xl font-bold text-white">
            Tech Stack
          </h2>

          <p className="text-gray-400 mt-5">
            Technologies I use to build modern software.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-14">

            {[
              "Java",
              "Python",
              "C++",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "AI",
            ].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 rounded-full border border-slate-700 bg-slate-800 text-white hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}