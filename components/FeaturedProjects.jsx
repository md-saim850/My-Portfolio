
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, FolderCode } from "lucide-react";
import {projects} from '../data/projectsData'


// export const projects = [
//   {
//     id: 1,
//     title: "StudioSpace",
//     category: "Studio Booking Platform",
//     description:
//       "A studio booking marketplace where creators can discover studios, explore facilities, and manage their bookings.",
//     image: "/projects/studiospace.png",
//     technologies: ["Next.js", "Express.js", "MongoDB", "Better Auth"],
//     liveUrl: "https://studio-space-client-one.vercel.app",
//     githubUrl: "https://github.com/md-saim850/StudioSpace-client",
//   },
//   {
//     id: 2,
//     title: "Bazar Dor",
//     category: "E-commerce Application",
//     description:
//       "An online shopping application designed to provide users with a smooth product browsing and shopping experience.",
//     image: "/projects/bazaar-dor.png",
//     technologies: ["Next.js", "Tailwind CSS", "API", "Authentication"],
//     liveUrl: "#",
//     githubUrl: "https://github.com/sayeemahmed12/Bazar_Dor",
//   },
//   {
//     id: 3,
//     title: "FitLog",
//     category: "Fitness Tracking Application",
//     description:
//       "A fitness tracking application that helps users manage their fitness activities and monitor their progress.",
//     image: "/projects/fitlog.png",
//     technologies: ["Next.js", "Tailwind CSS", "DaisyUI", "API"],
//     liveUrl: "#",
//     githubUrl: "https://github.com/sayeemahmed12/FitLogWithNextJS",
//   },
//   {
//     id: 4,
//     title: "Cake E-commerce",
//     category: "E-commerce API",
//     description:
//       "A cake shopping platform featuring product management, authentication, and an integrated shopping experience.",
//     image: "/projects/cake-shop.png",
//     technologies: ["React", "Django", "DRF", "PostgreSQL"],
//     liveUrl: "https://cake-website-api-1.onrender.com",
//     githubUrl: "https://github.com/md-saim850/Ecommerce-Cake-API",
//   },
// ];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Section Header */}
        <div data-aos="fade-in" className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              <span className="h-px w-8 bg-zinc-500" />
              My Work
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured <span className="text-zinc-500">Projects.</span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
              Some of the projects I&apos;ve built while exploring
              modern web technologies and improving my development skills.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-xs text-zinc-500 sm:flex">
            <FolderCode size={16} />
            <span>Selected Work / 01—04</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <Link
              data-aos="fade-up"
              href={`/projects/${project.id}`}
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/30 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900/70"
            >

              {/* Project Image */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-zinc-800 bg-zinc-950">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-transparent" />

                <span className="absolute left-4 top-4 rounded-lg border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-zinc-200 backdrop-blur-md">
                  PROJECT 0{index + 1}
                </span>

                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/70 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black group-hover:opacity-100"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              {/* Project Details */}
              <div className="space-y-4 p-5 sm:p-6">

                <div>
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-zinc-500">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-zinc-200">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-400">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-zinc-800 bg-zinc-950/80 px-2.5 py-1 text-[11px] font-medium text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between border-t border-zinc-800 pt-4">

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-zinc-400 transition hover:text-white"
                  >
                    <Github size={16} />
                    Source Code
                  </Link>

                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-white transition hover:text-zinc-400"
                  >
                    Live Preview
                    <ExternalLink size={14} />
                  </Link>

                </div>
              </div>
            </Link>
          )).slice(0, 4)}

        </div>

        {/* Explore More */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="group flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900/50 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            Explore More Projects

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
