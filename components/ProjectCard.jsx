import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-6 shadow-[0_0_20px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="rounded border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-400">{project.category}</span>
          <button type="button" onClick={onSelect} aria-label={`View ${project.title} details`} className="text-zinc-400 transition hover:text-white"><ArrowUpRight className="h-5 w-5" /></button>
        </div>
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="line-clamp-3 text-xs leading-relaxed text-zinc-400">{project.description}</p>
      </div>
      <div className="space-y-4 pt-6">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => <span key={tag} className="rounded border border-zinc-700/50 bg-zinc-800/80 px-2 py-1 font-mono text-[10px] text-zinc-300">{tag}</span>)}
        </div>
        <div className="flex items-center gap-3 border-t border-zinc-800/60 pt-4">
          <button type="button" onClick={onSelect} className="flex-1 rounded-lg bg-zinc-800 py-2 text-xs font-semibold text-white transition hover:bg-zinc-700">View Details</button>
          <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`} className="rounded-lg border border-zinc-800 bg-zinc-950 p-2 text-zinc-300 transition hover:border-white hover:text-white"><Github className="h-4 w-4" /></a>
        </div>
      </div>
    </article>
  );
}
