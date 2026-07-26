import Link from "next/link";

export default function Contact() {
  return (
    <main className="bg-slate-950 text-white">

      {/* ================= HERO ================= */}

      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-5">
            Let's Build Something Amazing
          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
            Have a project idea, collaboration opportunity,
            or just want to say hello?
            <br />
            I'd love to hear from you.
          </p>

        </div>

      </section>

      {/* ================= CONTACT CARDS ================= */}

      <section className="pb-24 px-6">

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

          {/* Email */}

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl">📧</div>

            <h2 className="text-2xl font-bold mt-5">
              Email
            </h2>

            <a
              href="mailto:alifaaz931@gmail.com"
              className="text-cyan-400 mt-4 block break-all hover:underline"
            >
              alifaaz931@gmail.com
            </a>

            <p className="text-gray-400 mt-6 leading-7">
              Feel free to reach out anytime.
            </p>

          </div>

          {/* Phone */}

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl">📱</div>

            <h2 className="text-2xl font-bold mt-5">
              Phone
            </h2>

            <a
              href="tel:+919440054628"
              className="text-cyan-400 mt-4 block hover:underline"
            >
              +91 94400 54628
            </a>

            <p className="text-gray-400 mt-6 leading-7">
              Available for opportunities and collaborations.
            </p>

          </div>

          {/* Location */}

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl">📍</div>

            <h2 className="text-2xl font-bold mt-5">
              Location
            </h2>

            <p className="text-cyan-400 mt-4">
              Hyderabad,
              <br />
              Telangana, India
            </p>

            <p className="text-gray-400 mt-6 leading-7">
              Open to remote and on-site opportunities.
            </p>

          </div>

        </div>

      </section>

      {/* ================= SOCIAL ================= */}

      <section className="pb-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Connect With Me
          </h2>

          <div className="flex justify-center gap-6 mt-10 flex-wrap">

            <a
              href="https://github.com/humayunfaaz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/p-mohammed-ali-faaz-81068a408"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com/ali.faaz.005"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              Instagram
            </a>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-24 px-6">

        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-12 text-center">

          <h2 className="text-4xl font-bold">
            Interested in My Work?
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            Explore my projects or download my resume to learn
            more about my skills, experience, and journey as a
            software developer.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              Download Resume
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}