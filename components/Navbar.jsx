import { ArrowDown, Code2, Github } from "lucide-react";

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
          href="/MD-Saim-Resume.pdf"
          download="MD-Saim-Resume.pdf"
          className="group relative flex shrink-0 items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm font-semibold text-black transition-all duration-300 ease-out transform-gpu [perspective:1000px] hover:scale-100 hover:-translate-y-0.5 hover:rotate-x-6 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-100 active:translate-y-0 active:rotate-x-0"
        >
          <span>Download Resume</span>
          <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-z-2 group-hover:translate-y-0.5" />
        </a>

      </div>
    </header>
  );
}
