import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-slate-950 text-white">

      {/* ================= Banner ================= */}
      <section className="w-full">
        <Image
          src="/images/about-banner.png"
          alt="Building Ideas into Reality"
          width={1920}
          height={800}
          priority
          className="w-full h-auto object-cover"
        />
      </section>

      {/* ================= Hero Section ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <p className="text-cyan-400 font-semibold uppercase tracking-[5px]">
              ABOUT ME
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-5 leading-tight">
              Hi, I'm
              <span className="text-cyan-400"> Ali Faaz</span> 👋
            </h1>

            <h2 className="text-2xl text-gray-300 mt-6">
              Future AI Software Engineer
            </h2>

            <p className="text-gray-400 mt-8 leading-8 text-lg">
              I'm a passionate software developer who enjoys creating
              beautiful websites, solving real-world problems, and exploring
              Artificial Intelligence. I believe technology should make life
              easier, smarter, and more accessible.

              <br /><br />

              I love learning new technologies, participating in hackathons,
              and constantly challenging myself by building innovative
              projects.
            </p>

            <div className="flex gap-5 mt-10">

              <Link
                href="/contact"
                className="px-8 py-3 bg-cyan-500 rounded-full hover:bg-cyan-400 transition duration-300 font-semibold"
              >
                Contact Me
              </Link>

              <Link
                href="/resume"
                className="px-8 py-3 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300 font-semibold"
              >
                Resume
              </Link>

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute -inset-2 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

              <Image
                src="/images/profile.jpg"
                alt="Ali Faaz"
                width={380}
                height={380}
                className="relative rounded-full border-4 border-cyan-400 object-cover shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= Who Am I ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

          <h2 className="text-4xl font-bold mb-8">
            Who Am I?
          </h2>

          <p className="text-gray-300 leading-9 text-lg">

            My name is <span className="text-cyan-400 font-semibold">Ali Faaz</span>,
            and I started my programming journey in 2022 with Java.

            Since then, I've explored multiple programming languages,
            web development technologies, and modern frameworks while
            continuously improving my problem-solving skills.

            <br /><br />

            I enjoy transforming ideas into real products that people
            can use. Whether it's a responsive website, a full-stack
            application, or an AI-powered solution, I'm always excited
            to learn and build something meaningful.

            <br /><br />

            My long-term goal is to become a world-class AI Software
            Engineer, contribute to innovative technologies, and create
            products that positively impact millions of people.

          </p>

        </div>

      </section>
            {/* ================= My Journey ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            MY JOURNEY
          </p>

          <h2 className="text-5xl font-bold mt-4">
            From Curiosity to Creation 🚀
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Every step in my programming journey has helped me become a better
            developer. Here's how everything started and where I'm heading.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 h-full w-1 bg-cyan-500 rounded-full"></div>

          <div className="space-y-16">

            {/* 2022 */}

            <div className="relative pl-16">

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-500 border-4 border-slate-950"></div>

              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 transition duration-300">

                <span className="text-cyan-400 font-bold text-lg">
                  2022
                </span>

                <h3 className="text-3xl font-bold mt-3">
                  Started Programming
                </h3>

                <p className="text-gray-400 mt-5 leading-8">
                  My coding journey began with a simple curiosity about how
                  software works. I chose Java as my first programming language
                  and learned programming fundamentals.
                </p>

              </div>

            </div>

            {/* Java */}

            <div className="relative pl-16">

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-500 border-4 border-slate-950"></div>

              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 transition">

                <h3 className="text-3xl font-bold">
                  Java
                </h3>

                <p className="text-gray-400 mt-5 leading-8">
                  Completed Core Java and Object-Oriented Programming.
                  Learned classes, objects, inheritance, polymorphism,
                  encapsulation, abstraction, collections and problem solving.
                </p>

              </div>

            </div>

            {/* Python */}

            <div className="relative pl-16">

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-500 border-4 border-slate-950"></div>

              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 transition">

                <h3 className="text-3xl font-bold">
                  Python
                </h3>

                <p className="text-gray-400 mt-5 leading-8">
                  Expanded into Python to understand scripting,
                  automation, data handling, and AI-related programming.
                </p>

              </div>

            </div>

            {/* C++ */}

            <div className="relative pl-16">

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-500 border-4 border-slate-950"></div>

              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 transition">

                <h3 className="text-3xl font-bold">
                  C++
                </h3>

                <p className="text-gray-400 mt-5 leading-8">
                  Learned C++ to strengthen problem-solving abilities and
                  prepare for Data Structures & Algorithms.
                </p>

              </div>

            </div>

            {/* Web Development */}

            <div className="relative pl-16">

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-500 border-4 border-slate-950"></div>

              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 transition">

                <h3 className="text-3xl font-bold">
                  Web Development
                </h3>

                <p className="text-gray-400 mt-5 leading-8">
                  Entered the world of web development by learning
                  HTML, CSS and JavaScript, eventually building
                  responsive websites and interactive user interfaces.
                </p>

              </div>

            </div>

            {/* React */}

            <div className="relative pl-16">

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-500 border-4 border-slate-950"></div>

              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 transition">

                <h3 className="text-3xl font-bold">
                  React & Next.js
                </h3>

                <p className="text-gray-400 mt-5 leading-8">
                  Started building modern web applications using
                  React, Next.js and Tailwind CSS with reusable
                  components and responsive design principles.
                </p>

              </div>

            </div>

            {/* Hackathons */}

            <div className="relative pl-16">

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-500 border-4 border-slate-950"></div>

              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 transition">

                <h3 className="text-3xl font-bold">
                  Hackathons
                </h3>

                <p className="text-gray-400 mt-5 leading-8">
                  Participated in hackathons where I collaborated with
                  talented teams, built real-world projects under time
                  constraints, and improved teamwork and innovation skills.
                </p>

              </div>

            </div>

            {/* Current */}

            <div className="relative pl-16">

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-500 border-4 border-slate-950"></div>

              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-8 rounded-3xl shadow-xl">

                <h3 className="text-3xl font-bold">
                  Today & Beyond 🚀
                </h3>

                <p className="mt-5 leading-8 text-lg">
                  Currently exploring Artificial Intelligence,
                  Full Stack Development, Data Structures &
                  Algorithms and System Design while working
                  towards becoming a world-class AI Software Engineer.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= My Mission ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-12 text-center shadow-2xl">

          <p className="uppercase tracking-[5px] font-semibold">
            MY MISSION
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Building Technology That Matters
          </h2>

          <p className="mt-8 text-lg leading-9 max-w-4xl mx-auto text-gray-100">
            My mission is to build software that solves real-world problems,
            improves people's lives, and makes technology more accessible.
            I believe every project is an opportunity to learn, innovate,
            and create meaningful impact through code.
          </p>

        </div>

      </section>



      {/* ================= Current Focus ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            CURRENT FOCUS
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What I'm Learning
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-5">🤖</div>
            <h3 className="text-2xl font-bold">
              Artificial Intelligence
            </h3>
            <p className="text-gray-400 mt-4 leading-8">
              Exploring LLMs, Machine Learning, Computer Vision and AI
              applications.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-5">💻</div>
            <h3 className="text-2xl font-bold">
              Full Stack Development
            </h3>
            <p className="text-gray-400 mt-4 leading-8">
              Building scalable web applications using React, Next.js,
              Node.js and modern technologies.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-5">🌍</div>
            <h3 className="text-2xl font-bold">
              Open Source
            </h3>
            <p className="text-gray-400 mt-4 leading-8">
              Learning from the community and contributing to open-source
              projects whenever possible.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-5">🏗</div>
            <h3 className="text-2xl font-bold">
              System Design
            </h3>
            <p className="text-gray-400 mt-4 leading-8">
              Understanding scalable architectures, APIs,
              databases and cloud-based systems.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-5">🧩</div>
            <h3 className="text-2xl font-bold">
              DSA
            </h3>
            <p className="text-gray-400 mt-4 leading-8">
              Improving logical thinking through Data Structures,
              Algorithms and competitive programming.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-5">🚀</div>
            <h3 className="text-2xl font-bold">
              Building Products
            </h3>
            <p className="text-gray-400 mt-4 leading-8">
              Turning innovative ideas into real products that solve
              everyday challenges.
            </p>
          </div>

        </div>

      </section>



      {/* ================= Fun Facts ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            FUN FACTS
          </p>

          <h2 className="text-5xl font-bold mt-4">
            A Little More About Me
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-slate-900 rounded-3xl p-8 text-center hover:scale-105 transition duration-300 border border-slate-800">
            <div className="text-6xl">🚀</div>
            <h3 className="text-xl font-bold mt-6">
              Love Building Projects
            </h3>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center hover:scale-105 transition duration-300 border border-slate-800">
            <div className="text-6xl">🤖</div>
            <h3 className="text-xl font-bold mt-6">
              AI Enthusiast
            </h3>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center hover:scale-105 transition duration-300 border border-slate-800">
            <div className="text-6xl">💡</div>
            <h3 className="text-xl font-bold mt-6">
              Always Learning
            </h3>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center hover:scale-105 transition duration-300 border border-slate-800">
            <div className="text-6xl">🌙</div>
            <h3 className="text-xl font-bold mt-6">
              Night Coder
            </h3>
          </div>

        </div>

      </section>



      {/* ================= Resume CTA ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="bg-slate-900 rounded-3xl border border-cyan-500 p-14 text-center">

          <h2 className="text-5xl font-bold">
            Interested in My Work?
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8 text-lg">
            Feel free to explore my projects, connect with me,
            or download my resume to learn more about my
            journey and technical experience.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-cyan-500 rounded-full font-semibold hover:bg-cyan-400 transition duration-300"
            >
              📄 Download Resume
            </a>

            <a
              href="/contact"
              className="px-8 py-4 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300 font-semibold"
            >
              📩 Contact Me
            </a>

          </div>

        </div>

      </section>

    

    </main>
  );
}