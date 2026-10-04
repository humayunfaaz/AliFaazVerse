import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    href: "https://github.com/humayunfaaz",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://linkedin.com/in/p-mohammed-ali-faaz-81068a408",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://instagram.com/ali.faaz.005",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "mailto:alifaaz931@gmail.com",
    label: "Email",
    icon: MdEmail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="text-2xl font-bold text-white">
            Ali<span className="text-cyan-400">Faaz</span>Verse
          </Link>
          <p className="mt-4 max-w-sm leading-7">
            A personal space for the things I build, learn, and experiment with
            as a CSE student.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-white">Explore</h2>
          <div className="mt-4 flex flex-col items-start gap-3">
            <Link href="/" className="transition hover:text-cyan-400">Home</Link>
            <Link href="/about" className="transition hover:text-cyan-400">About</Link>
            <Link href="/#projects" className="transition hover:text-cyan-400">Projects</Link>
            <Link href="/contact" className="transition hover:text-cyan-400">Contact</Link>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-white">Find me online</h2>
          <div className="mt-4 flex gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="rounded-full border border-slate-700 p-3 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Ali Faaz. Built while learning.
      </div>
    </footer>
  );
}
