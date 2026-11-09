
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your-email@gmail.com",
    href: "mailto:your-email@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/md-saim850",
    href: "https://github.com/md-saim850",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/md-saim850",
    href: "https://www.linkedin.com/in/md-saim850",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div data-aos="fade-in" className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Get in touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let's work <span className="text-zinc-500">together.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            Have a project idea, a question, or just want to connect?
            My inbox is always open. Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Information */}
          <div data-aos="fade-right" className="space-y-6">
            <div>
              <h3 className="mb-5 text-xl font-semibold text-white">
                Contact Information
              </h3>

              <div className="space-y-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === "Email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-zinc-300 transition-colors group-hover:bg-white group-hover:text-black">
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-zinc-500">{item.label}</p>
                        <p className="mt-1 truncate text-sm font-medium text-zinc-200">
                          {item.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="text-zinc-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <MessageCircle size={19} />
                </div>

                <div>
                  <p className="font-medium text-white">Open to opportunities</p>
                  <p className="mt-1 text-sm text-zinc-500">
                    Always interested in learning and collaborating.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Send me a message
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Fill out the form and I'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your idea..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Send Message
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
