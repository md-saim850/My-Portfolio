
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  Code2,
} from "lucide-react";
import { projects } from '../../../data/portfolio';

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;

  const project = projects.find(
    (item) => String(item.id) === id || item.slug === id
  );

  if (!project) notFound();

  const features = project.features ?? [];
  const tags = project.tags ?? [];

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Back navigation */}
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to projects
        </Link>

        {/* Header */}
        <header className="mb-10 border-b border-zinc-800 pb-8">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300">
              {project.category}
            </span>

            <span className="font-mono text-xs text-zinc-500">
              PROJECT / {String(project.id).padStart(2, "0")}
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {project.title}
            <span className="text-zinc-600">.</span>
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Live Demo
                <ExternalLink size={16} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-zinc-600"
              >
                <Github size={17} />
                Source Code
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </header>

        {/* Large project preview */}
        {project.image && (
          <div className="relative mb-14 aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="object-top"
            />
          </div>
        )}

        {/* Project content */}
        <div className="grid gap-12 md:grid-cols-[1fr_320px]">

          {/* Overview and features */}
          <div className="space-y-12">

            <section>
              <div className="mb-5 flex items-center gap-3">
                <Layers className="text-zinc-300" size={21} />
                <h2 className="text-2xl font-semibold">
                  Project Overview
                </h2>
              </div>

              <p className="max-w-3xl text-sm leading-8 text-zinc-400 sm:text-base">
                {project.overview || project.description}
              </p>
            </section>

            {features.length > 0 && (
              <section>
                <div className="mb-5 flex items-center gap-3">
                  <CheckCircle2 className="text-zinc-300" size={21} />
                  <h2 className="text-2xl font-semibold">
                    Key Features
                  </h2>
                </div>

                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li
                      key={`${feature}-${index}`}
                      className="flex items-start gap-3 text-sm leading-7 text-zinc-400"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-zinc-200"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

          </div>

          {/* Sidebar */}
          <aside className="space-y-8">

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="mb-5 flex items-center gap-3">
                <Code2 size={20} className="text-zinc-300" />
                <h2 className="text-lg font-semibold">
                  Tech Stack
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 font-mono text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h2 className="text-lg font-semibold">
                About this project
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {project.category} project showcasing my development
                skills, technical decisions, and approach to building
                web applications.
              </p>
            </section>

          </aside>
        </div>

        {/* Bottom navigation */}
        <div className="mt-16 border-t border-zinc-800 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Explore more projects
          </Link>
        </div>

      </div>
    </main>
  );
}
