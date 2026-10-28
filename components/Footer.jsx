import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#0a0a0c] py-8 text-xs text-zinc-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:px-6 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-white">Email</a>
          <a href="#about" className="transition hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
