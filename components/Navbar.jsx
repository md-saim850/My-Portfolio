import { Code2, Github } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-[#0a0a0c]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
        <a href="#about" className="group flex shrink-0 items-center gap-2.5" aria-label="Md. Saim home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900 shadow-[0_0_15px_rgba(255,255,255,0.08)] transition group-hover:border-white">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-lg font-bold tracking-tight text-transparent">
            Md. Saim
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-400 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-white">{label}</a>
          ))}
        </nav>

        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-2 rounded-lg border border-zinc-700/80 bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:border-white hover:text-white sm:px-4"
        >
          <span className="hidden sm:inline">Download Resume ↓</span>
          <span className="sm:hidden">Download Resume ↓</span>
        </a>
      </div>
    </header>
  );
}
