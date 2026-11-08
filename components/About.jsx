
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  GraduationCap,
  Laptop,
  ArrowDown,
  Sparkles,
  Terminal,
} from "lucide-react";

import { profile } from "../data/profileData";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building modern and responsive web applications.",
  },
  {
    icon: Laptop,
    title: "Problem Solving",
    description: "Practicing DSA, algorithms, and writing clean code.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Exploring new technologies and improving my skills.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        {/* Section Heading */}
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            <span className="h-px w-8 bg-zinc-500" />
            Get to know me
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About <span className="text-zinc-500">Me.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
            A little introduction about who I am, what I do, and
            what drives me as a developer.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* Profile Image */}
          <div className="relative mx-auto w-full max-w-sm">

            {/* Background Decoration */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-zinc-600/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-900 p-2 shadow-[0_0_40px_rgba(255,255,255,0.06)]">

              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-950">
                <Image
                  src={profile.image}
                  alt={`${profile.name} - Full Stack Web Developer`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover object-top transition duration-700 hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-xl font-bold text-white">
                    {profile.name}
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    {profile.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-3 top-8 flex items-center gap-2 rounded-xl border border-zinc-700 bg-[#111113] px-4 py-3 shadow-xl sm:-right-6">
              <Sparkles className="h-4 w-4 text-zinc-300" />
              <span className="text-xs font-medium text-zinc-300">
                Always Learning
              </span>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute -bottom-5 -left-4 -z-10 h-24 w-24 rounded-2xl border border-zinc-800" />
          </div>

          {/* About Content */}
          <div className="space-y-7">

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs text-zinc-400">
                <Terminal className="h-3.5 w-3.5" />
                A bit about myself
              </div>

              <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
                Passionate about building
                <span className="text-zinc-500">
                  {" "}web experiences
                </span>
              </h3>

              <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                Hello! I&apos;m {profile.name}, a passionate
                Full-Stack Web Developer who enjoys turning ideas
                into functional and user-friendly web applications.
                I love exploring new technologies, solving
                programming problems, and continuously improving
                my development skills.
              </p>

              <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                My primary focus is full-stack development,
                especially building modern frontend experiences
                with React and Next.js and developing backend
                applications using Node.js and Express.js.
                I also have experience working with Django and
                REST APIs.
              </p>

              <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                Beyond coding, I enjoy learning Data Structures
                and Algorithms, exploring software development
                concepts, and working on personal projects that
                challenge me to grow as a developer.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 transition group-hover:border-zinc-500">
                      <Icon size={18} />
                    </div>

                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Resume */}
            <div className="flex flex-wrap items-center gap-4 border-t border-zinc-800 pt-6">
              <a
                href="/MD-Saim-Resume.pdf"
                download="MD-Saim-Resume.pdf"
                className="group flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
              >
                Download Resume
                <ArrowDown
                  size={16}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>

              <Link
                href="#contact"
                className="text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                Let&apos;s Connect →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
