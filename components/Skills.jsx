"use client";

import { Code2, Cpu, Database, Layers, Server, Terminal } from "lucide-react";
import { skills } from "../data/portfolio";

const iconMap = { Terminal, Layers, Server, Database };

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 space-y-10">
      <div className="space-y-3 text-center">
        <h2 className="flex items-center justify-center gap-2 text-3xl font-bold tracking-tight text-white">
          <Cpu className="h-7 w-7" /> Technical Stack &amp; Expertise
        </h2>
        <p className="mx-auto max-w-xl text-sm text-zinc-400">
          Technologies and tools I use while building web applications and learning new engineering skills.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((group) => {
          const Icon = iconMap[group.icon] || Code2;
          return (
            <article key={group.category} className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-[0_0_20px_rgba(255,255,255,0.03)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-xl border border-zinc-700 bg-zinc-800 p-2.5 transition group-hover:border-zinc-400"><Icon className="h-5 w-5" /></span>
                <h3 className="text-lg font-bold tracking-wide text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span key={skill} className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/80 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" /> {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
