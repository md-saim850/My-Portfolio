
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  Search,
  Code2,
} from "lucide-react";

import { projects } from "../../data/projectsData";
import ParticleBackground from "../../components/ParticleBackground";

const filters = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
];

export default function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" ||
        project.type === activeFilter;

      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.category
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <main className="min-h-screen bg-[#09090b] px-5 py-16 text-white sm:px-8 lg:px-12">
      <ParticleBackground />

      <div className="mx-auto max-w-7xl">

        {/* Back Navigation */}
        <Link
          href="/#projects"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Page Heading */}
        <div data-aos="fade-in" className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-white" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              My Portfolio
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            All Projects
            <span className="text-zinc-600">.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Explore my collection of projects, experiments, and
            practical applications built using modern web
            technologies.
          </p>
        </div>

        {/* Project Count */}
        <div data-aos="fade-right" className="mb-8 flex items-center justify-between border-y border-zinc-800 py-5">
          <div className="flex items-center gap-3">
            <Code2 size={19} className="text-zinc-400" />
            <span className="text-sm text-zinc-400">
              Showing{" "}
              <span className="font-semibold text-white">
                {filteredProjects.length}
              </span>{" "}
              of {projects.length} projects
            </span>
          </div>
        </div>

        {/* Filters and Search */}
        <div data-aos="fade-right" className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-white bg-white text-black"
                    : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-500 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-xs">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-zinc-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {filteredProjects.map((project, index) => (
              <Link
                href={`/projects/${project.id}`}
                data-aos="fade-right"
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/30 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900/70"
              >

                {/* Project Image */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-zinc-800 bg-zinc-950">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 transition group-hover:bg-transparent" />

                  <span className="absolute left-4 top-4 rounded-lg border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-zinc-200 backdrop-blur-md">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>

                  {project.status && (
                    <span className="absolute bottom-4 left-4 rounded-md border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] font-medium text-zinc-300 backdrop-blur-md">
                      {project.status}
                    </span>
                  )}

                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      onClick={(e) => e.stopPropagation()}
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/70 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black group-hover:opacity-100"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-4 p-5 sm:p-6">

                  <div>
                    <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-zinc-500">
                      {project.category}
                    </p>

                    <h2 className="text-xl font-bold text-white transition-colors group-hover:text-zinc-300">
                      {project.title}
                    </h2>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex min-h-16 flex-wrap content-start gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-zinc-800 bg-zinc-950/80 px-2.5 py-1.5 text-[11px] font-medium text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between gap-3 border-t border-zinc-800 pt-4">

                    {project.githubUrl && project.githubUrl !== "#" ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-medium text-zinc-400 transition hover:text-white"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    ) : (
                      <span className="text-xs text-zinc-600">
                        Source unavailable
                      </span>
                    )}

                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center gap-2 text-xs font-semibold text-white transition hover:text-zinc-400"
                    >
                      View Details
                      <ArrowUpRight size={15} />
                    </Link>

                  </div>

                </div>
              </Link>
            ))}

          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-20 text-center">
            <Search
              size={32}
              className="mx-auto mb-4 text-zinc-600"
            />

            <h3 className="text-lg font-semibold text-white">
              No projects found
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Try another search term or category.
            </p>

            <button
              onClick={() => {
                setActiveFilter("All");
                setSearchQuery("");
              }}
              className="mt-6 rounded-lg border border-zinc-700 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Bottom Section */}
        <div data-aos="fade-up" className="mt-20 border-t border-zinc-800 pt-10 text-center">
          <p className="text-sm text-zinc-500">
            Interested in my work?
          </p>

          <Link
            href="/#contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-zinc-400"
          >
            Let's Connect
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
}
