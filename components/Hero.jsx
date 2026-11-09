
import {
  ChevronRight,
  Mail,
  Sparkles,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

import { profile } from "../data/profileData";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/md-saim850",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-saim850",
    icon: Linkedin,
  },
];

export default function Hero() {
  return (
    <section
      data-aos="fade-in"
      id="home"
      className="flex scroll-mt-28 flex-col-reverse items-center justify-between gap-12 pt-6 md:flex-row md:pt-12"
    >
      {/* Hero Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">

        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/80 px-3.5 py-1.5 text-xs text-zinc-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open to learning and developer opportunities
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <p className="text-xl font-medium text-zinc-300">
          {profile.role}
        </p>

        <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400 md:mx-0">
          {profile.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-xl border border-zinc-800 bg-white text-black px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-800/50 hover:text-white hover:shadow-[0_5px_20px_rgba(255,255,255,0.06)]"
          >
            Explore Projects
            <ChevronRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-800/50 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-[0_5px_20px_rgba(255,255,255,0.06)]"
          >
            <Mail className="h-4 w-4" />
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="border-t border-zinc-800/80 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target={name === "Email" ? undefined : "_blank"}
                rel={name === "Email" ? undefined : "noopener noreferrer"}
                aria-label={name}
                className="group flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-800/50 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-[0_5px_20px_rgba(255,255,255,0.06)]"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="group relative shrink-0 [perspective:1000px]">

        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-white/30 via-white/5 to-transparent opacity-70 blur-xl transition duration-700 group-hover:opacity-100" />

        <div
          className="animate-float relative h-90 w-64 rounded-2xl border border-zinc-600/80 bg-gradient-to-b from-zinc-700 via-zinc-900 to-black p-2 shadow-[0_0_35px_rgba(255,255,255,0.15)] transition-transform duration-500 group-hover:[transform:rotateY(-5deg)_rotateX(4deg)] md:h-90 md:w-70 xl:h-100 xl:w-80"
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-zinc-950">

            <Image
              width={500}
              height={500}
              src={profile.image}
              alt={`${profile.name} — Full Stack Web Developer`}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-white/15 bg-black/65 p-3 backdrop-blur-md">

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-white">
                  {profile.handle}
                </span>
              </div>

              <Sparkles className="h-4 w-4 text-white" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
