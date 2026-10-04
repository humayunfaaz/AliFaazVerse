import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[72px] max-w-6xl items-center justify-between gap-6 px-6 lg:px-8"
      >
        <Link href="/" className="shrink-0 text-xl font-bold tracking-tight">
          Ali<span className="text-cyan-400">Faaz</span>Verse
        </Link>

        <div className="flex items-center gap-1 overflow-x-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-1 hidden rounded-full border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950 sm:block"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
