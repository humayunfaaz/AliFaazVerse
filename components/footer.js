import Link from "next/link";
// import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-white"
            >
              Ali<span className="text-cyan-400">Faaz</span>Verse
            </Link>

            <p className="mt-4 text-gray-400 leading-7">
              Welcome to my digital universe. I build modern web applications,
              AI-powered solutions, and love turning ideas into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/projects" className="hover:text-cyan-400 transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
               
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                
              </a>

              <a
                href="mailto:your@email.com"
                className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                
              </a>
            </div>

            <p className="mt-6 text-gray-400">
              Let's build something amazing together.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
          © {currentYear}{" "}
          <span className="text-white font-semibold">
            AliFaazVerse
          </span>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}