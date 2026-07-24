
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-white"
            >
              Ali<span className="text-cyan-400">Faaz</span>Verse
            </Link>

            <p className="mt-4 text-gray-400 leading-7">
              Welcome to my digital universe. I build modern web
              applications, and love turning ideas
              into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-400 transition"
                >
                  About
                </Link>
              </li>

              

              

              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition"
                >
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

              {/* GitHub */}

              <a
                href="https://github.com/humayunfaaz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={22} />
              </a>

              {/* LinkedIn */}

              <a
                href="https://linkedin.com/in/p-mohammed-ali-faaz-81068a408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={22} />
              </a>

              {/* Instagram */}

              <a
                href="https://instagram.com/ali.faaz.005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={22} />
              </a>

              {/* Email */}

              <a
                href="mailto:alifaaz931@gmail.com"
                className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <MdEmail size={22} />
              </a>

            </div>

            <p className="mt-6 text-gray-400">
              Let's build something amazing together.
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800 py-6 text-center text-sm text-gray-500">

        © {currentYear}{" "}
        <span className="font-semibold text-white">
          AliFaazVerse
        </span>
        . All Rights Reserved.

      </div>

    </footer>
  );
}