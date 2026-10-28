"use client";

import { useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0a0a0c] font-sans text-zinc-100">
      <ParticleBackground />
      <div className="pointer-events-none fixed left-1/2 top-0 z-0 h-[300px] w-[600px] max-w-full -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 z-0 h-[400px] w-[400px] rounded-full bg-zinc-400/5 blur-[160px]" />

      <Navbar />
      <main className="relative z-10 mx-auto max-w-6xl space-y-28 px-5 py-12 sm:px-6 md:space-y-32">
        <Hero />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
