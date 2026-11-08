"use client";

export const skillCards = [
  // Languages
  {
    name: "JavaScript",
    category: "Languages",
    icon: "js",
    description: "Building interactive and dynamic web applications.",
  },
  {
    name: "Python",
    category: "Languages",
    icon: "python",
    description: "Writing clean code and developing backend applications.",
  },
  {
    name: "C",
    category: "Languages",
    icon: "c",
    description: "Understanding programming fundamentals and problem solving.",
  },
  {
    name: "C++",
    category: "Languages",
    icon: "cpp",
    description: "Practicing algorithms and data structures.",
  },
  {
    name: "HTML5",
    category: "Languages",
    icon: "html",
    description: "Creating structured and accessible web pages.",
  },
  {
    name: "CSS3",
    category: "Languages",
    icon: "css",
    description: "Designing responsive and visually appealing interfaces.",
  },

  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    icon: "react",
    description: "Building reusable components and interactive user interfaces.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "nextjs",
    description: "Developing modern full-stack React applications.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "tailwind",
    description: "Styling responsive interfaces with utility-first CSS.",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: "bootstrap",
    description: "Building responsive layouts with reusable UI components.",
  },
  {
    name: "React Hooks",
    category: "Frontend",
    icon: "react",
    description: "Managing component state and reusable React logic.",
  },
  {
    name: "Responsive Design",
    category: "Frontend",
    icon: "css",
    description: "Creating layouts that work across different screen sizes.",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: "nodejs",
    description: "Running JavaScript on the server side.",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "express",
    description: "Building RESTful APIs and backend services.",
  },
  {
    name: "Django",
    category: "Backend",
    icon: "django",
    description: "Developing secure and scalable Python web applications.",
  },
  {
    name: "Django REST Framework",
    category: "Backend",
    icon: "django",
    description: "Creating REST APIs using Django.",
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: "postman",
    description: "Designing and integrating APIs for web applications.",
  },
  {
    name: "Authentication",
    category: "Backend",
    icon: "htmx",
    description: "Implementing secure user authentication and authorization.",
  },

  // Database
  {
    name: "MongoDB",
    category: "Database",
    icon: "mongodb",
    description: "Working with flexible NoSQL databases.",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "postgres",
    description: "Managing relational data with PostgreSQL.",
  },
  {
    name: "SQLite",
    category: "Database",
    icon: "sqlite",
    description: "Working with lightweight relational databases.",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    icon: "git",
    description: "Tracking code changes and managing development workflows.",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "github",
    description: "Hosting repositories and managing source code.",
  },
  {
    name: "Postman",
    category: "Tools",
    icon: "postman",
    description: "Testing and debugging REST API endpoints.",
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: "vercel",
    description: "Deploying and hosting modern web applications.",
  },
  {
    name: "Data Structures & Algorithms",
    category: "Tools",
    icon: null,
    description: "Improving problem-solving skills through algorithmic thinking.",
  },
];

import { useState } from "react";
import {
  Code2,
  Cpu,
  Database,
  Layers,
  Server,
  Terminal,
  Github,
  Sparkles,
} from "lucide-react";

const filters = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Languages",
];

const filterIcons = {
  All: Sparkles,
  Frontend: Layers,
  Backend: Server,
  Database: Database,
  Tools: Terminal,
  Languages: Code2,
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skillCards
      : skillCards.filter(
          (skill) => skill.category === activeFilter
        );

  return (
    <section
      id="skills"
      className="scroll-mt-15 space-y-10"
    >
      {/* Section Heading */}
      <div className="space-y-3 text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-xs font-medium text-zinc-400">
          <Sparkles className="h-3.5 w-3.5" />
          My Technical Skills
        </div>

        <h2 className="flex items-center justify-center gap-2 text-3xl font-bold tracking-tight text-white">
          <Cpu className="h-7 w-7" />
          Technical Stack &amp; Expertise
        </h2>

        <p className="mx-auto max-w-xl text-sm leading-6 text-zinc-400">
          Technologies, frameworks, and tools I use to build
          modern web applications and solve real-world problems.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filters.map((filter) => {
          const Icon = filterIcons[filter];
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "border-white bg-white text-black shadow-lg shadow-white/5"
                  : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {filter}
            </button>
          );
        })}
      </div>

      {/* Skill Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-400">
          Showing{" "}
          <span className="text-white">
            {filteredSkills.length}
          </span>{" "}
          skills
        </p>

        <span className="text-xs text-zinc-500">
          {activeFilter === "All" ? "All Categories" : activeFilter}
        </span>
      </div>

      {/* Skills Grid */}
      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filteredSkills.map((skill) => (
          <article
            key={skill.name}
            className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:bg-zinc-900 hover:shadow-[0_10px_35px_rgba(255,255,255,0.04)]"
          >
            {/* Top Section */}
            <div className="mb-5 flex items-start justify-between">
              {/* Icon Badge */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-950 transition-all duration-300 group-hover:border-zinc-500 group-hover:bg-zinc-800">
                {skill.icon ? (
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`}
                    alt={`${skill.name} icon`}
                    loading="lazy"
                    className="h-7 w-7 object-contain"
                  />
                ) : (
                  <Code2 className="h-6 w-6 text-zinc-300" />
                )}
              </div>

              {/* Category Badge */}
              <span className="rounded-md border border-zinc-600 bg-zinc-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 transition group-hover:border-zinc-600 group-hover:text-zinc-300">
                {skill.category}
              </span>
            </div>

            {/* Skill Name */}
            <h3 className="mb-2 text-base font-bold text-white transition group-hover:text-zinc-200">
              {skill.name}
            </h3>

            {/* Description */}
            <p className="text-sm leading-6 text-zinc-400 transition group-hover:text-zinc-400">
              {skill.description}
            </p>

            {/* Bottom Decoration */}
            <div className="mt-5 h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-full" />
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filteredSkills.length === 0 && (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 py-12 text-center">
          <Code2 className="mx-auto mb-3 h-8 w-8 text-zinc-500" />
          <p className="text-sm text-zinc-400">
            No skills found in this category.
          </p>
        </div>
      )}
    </section>
  );
}
