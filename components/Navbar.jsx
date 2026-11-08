"use client";

import { act, useEffect, useState } from "react";
import {
  ArrowDown,
  Code2,
  Menu,
  X,
} from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = links  
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          const currentSection = visibleSections[0].target.id;

          setActiveSection(`#${currentSection}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-[#0a0a0c]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 sm:h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="Md. Saim home"
        >
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900 shadow-[0_0_15px_rgba(255,255,255,0.08)] transition group-hover:border-white">
            <Code2 className="h-5 w-5" />
          </span>

          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-lg font-bold tracking-tight text-transparent">
            Md. Saim
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 text-sm font-medium text-zinc-400 md:flex"
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            activeSection === href ?(
              <a
                key={href}
                href={`/${href}`}
                className="text-white underline underline-offset-12"
              >
                {label}
              </a>
            ) : (

              <a
                key={href}
                href={`/${href}`}
                onClick={() => setActiveLink(href)}
                className="relative py-2 transition-colors duration-300 hover:text-white
                after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            )
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">

          {/* Resume Button */}
          <a
            href="/MD-Saim-Resume.pdf"
            download="MD-Saim-Resume.pdf"
            className="group flex shrink-0 items-center gap-1.5 rounded-lg border border-zinc-200 bg-gradient-to-r from-white to-zinc-300 px-2.5 py-2 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] active:translate-y-0 sm:px-3 sm:text-sm"
          >
            <span>Resume</span>
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-zinc-600 hover:text-white md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            className="border-t border-zinc-800/70 bg-[#0a0a0c] px-5 py-3"
            aria-label="Mobile navigation"
          >
            {links.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-zinc-400 transition-all duration-200 hover:bg-zinc-900 hover:text-white"
              >
                <span>{label}</span>
                <span className="text-xs text-zinc-600">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
