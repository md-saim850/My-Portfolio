
import Link from "next/link";
import {
  Github,
  Linkedin,
  ArrowUp,
  Heart,
} from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/md-saim850",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/md-saim850",
    label: "LinkedIn",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer data-aos="fade-up" className="border-t border-white/10 bg-black px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="#home"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Md. Saim<span className="text-zinc-500">.</span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              A passionate developer focused on building modern,
              responsive, and user-friendly web applications.
              Always learning, building, and improving.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 text-zinc-400 transition hover:border-white/30 hover:bg-white hover:text-black"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Let's Connect
            </h3>

            <p className="max-w-xs text-sm leading-6 text-zinc-400">
              Have an idea or opportunity? I'd love to hear from you.
            </p>

            <Link
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-zinc-400"
            >
              Get in touch
              <ArrowUp size={15} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-zinc-300">
            © {new Date().getFullYear()} Md. Saim. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-zinc-300">
            Designed & built with
            <Heart size={12} className="fill-red-500 text-red-500" />
            using Next.js & Tailwind CSS
          </p>

          <Link
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:bg-white hover:text-black"
          >
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
