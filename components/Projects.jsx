"use client";

import { useMemo, useState } from "react";
import { Laptop } from "lucide-react";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

const filters = ["All", "Full Stack", "Frontend", "Backend", "Algorithms/DSA"];

export default function Projects({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState("All");
  const filteredProjects = useMemo(
    () => activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab),
    [activeTab]
  );

  return (
    <section id="projects" className="scroll-mt-28 space-y-10">
      <div className="flex flex-col items-center justify-between gap-6 border-b border-zinc-800 pb-6 md:flex-row">
        <div>
          <h2 className="flex items-center gap-2 text-3xl font-bold tracking-tight text-white"><Laptop className="h-7 w-7" /> Featured Projects</h2>
          <p className="mt-2 text-sm text-zinc-400">A selection of projects and learning work from my development journey.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-950 p-1.5" aria-label="Filter projects">
          {filters.map((tab) => (
            <button key={tab} type="button" onClick={() => setActiveTab(tab)} aria-pressed={activeTab === tab}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${activeTab === tab ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]" : "text-zinc-400 hover:text-white"}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => <ProjectCard key={project.id} project={project} onSelect={() => onSelectProject(project)} />)}
        </div>
      ) : <p className="rounded-xl border border-zinc-800 p-8 text-center text-zinc-400">No projects in this category yet.</p>}
    </section>
  );
}
