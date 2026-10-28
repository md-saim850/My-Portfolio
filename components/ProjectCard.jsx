
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project}) {
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/30 md:grid-cols-[1.15fr_1fr]">

      {/* Large Project Image */}
      <Link href={`/projects/${project.slug ?? project.id}`} className="relative min-h-[260px] cursor-pointer overflow-hidden bg-zinc-900 sm:min-h-[340px] md:min-h-[400px]">
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
          {project.category}
        </span>

        <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs text-white/80">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Featured Project
        </div>

        <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
          <ArrowUpRight size={20} />
        </div>
      </Link>

      {/* Project Information */}
      <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
        <div>
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.2em] text-zinc-500">
              SELECTED WORK
            </span>

            <span className="font-mono text-sm text-zinc-600">
              {project.number || "01"} / PROJECT
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-300 sm:text-3xl lg:text-4xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="mt-7">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 transition-colors duration-300 group-hover:border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-zinc-800 pt-6">
          <Link
            href={`/projects/${project.slug ?? project.id}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-800 py-3 text-xs font-semibold text-white transition hover:bg-zinc-700"
          >
            View Details
            <ArrowUpRight size={15} />
          </Link>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white"
            >
              Live Demo
              <ExternalLink size={15} />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 text-zinc-300 transition hover:border-white hover:text-white"
            >
              <Github size={17} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
