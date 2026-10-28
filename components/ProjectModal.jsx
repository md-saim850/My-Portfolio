"use client";

import { useEffect } from "react";
import { CheckCircle2, Github, X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="project-modal-title" className="relative my-auto max-h-[90vh] w-full max-w-2xl space-y-6 overflow-y-auto rounded-2xl border border-zinc-700 bg-zinc-900 p-6 shadow-[0_0_50px_rgba(255,255,255,0.12)] sm:p-8">
        <button type="button" onClick={onClose} aria-label="Close project details" className="absolute right-5 top-5 rounded-xl bg-zinc-800 p-2 text-zinc-400 transition hover:text-white"><X className="h-5 w-5" /></button>
        <div className="space-y-3 pr-10">
          <span className="rounded border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-xs uppercase text-zinc-400">{project.category}</span>
          <h3 id="project-modal-title" className="text-2xl font-bold text-white">{project.title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-zinc-300">{project.description}</p>
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Features and focus</h4>
          <ul className="space-y-2">
            {project.features.map((feature) => <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-zinc-100" /><span>{feature}</span></li>)}
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Tech stack</h4>
          <div className="flex flex-wrap gap-1.5">{project.tags.map((tag) => <span key={tag} className="rounded border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-xs text-zinc-300">{tag}</span>)}</div>
        </div>
        <div className="flex flex-col gap-3 border-t border-zinc-800 pt-4 sm:flex-row">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3 text-xs font-semibold text-black transition hover:bg-zinc-200"><Github className="h-4 w-4" /> View Source Code</a>
          <button type="button" onClick={onClose} className="rounded-xl bg-zinc-800 px-6 py-3 text-xs font-semibold text-white transition hover:bg-zinc-700">Close</button>
        </div>
      </section>
    </div>
  );
}
