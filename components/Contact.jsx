"use client";

import { useState } from "react";
import { CheckCircle2, Copy, ExternalLink, Github, Linkedin, Mail, Send } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [notice, setNotice] = useState("");

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    setNotice("Your email app should open with the message ready to send. This form does not send messages directly.");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-28 space-y-10">
      <div className="space-y-3 text-center">
        <h2 className="flex items-center justify-center gap-2 text-3xl font-bold tracking-tight text-white"><Mail className="h-7 w-7" /> Let&apos;s Connect</h2>
        <p className="mx-auto max-w-xl text-sm text-zinc-400">Have a project idea, an opportunity, or want to talk about technology? Feel free to reach out.</p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        <aside className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
          <div>
            <h3 className="text-xl font-bold text-white">Contact Information</h3>
            <p className="mt-2 text-sm text-zinc-400">Connect with me by email or on GitHub and LinkedIn.</p>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="rounded-xl border border-zinc-700 bg-zinc-800 p-2.5"><Mail className="h-4 w-4" /></span>
              <div className="min-w-0">
                <p className="text-xs text-zinc-400">Email</p>
                <button type="button" onClick={handleCopyEmail} className="flex items-center gap-1.5 break-all text-left text-sm font-medium text-white hover:underline">{profile.email}<Copy className="h-3.5 w-3.5 shrink-0 text-zinc-400" /></button>
                {copied && <span className="mt-1 block text-[10px] text-emerald-400">Copied to clipboard!</span>}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-xl border border-zinc-700 bg-zinc-800 p-2.5"><Github className="h-4 w-4" /></span>
              <div className="min-w-0"><p className="text-xs text-zinc-400">GitHub</p><a href={profile.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 break-all text-sm font-medium text-white hover:underline">{profile.githubLabel}<ExternalLink className="h-3.5 w-3.5 shrink-0 text-zinc-400" /></a></div>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-xl border border-zinc-700 bg-zinc-800 p-2.5"><Linkedin className="h-4 w-4" /></span>
              <div><p className="text-xs text-zinc-400">LinkedIn</p><a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-white hover:underline">Connect on LinkedIn<ExternalLink className="h-3.5 w-3.5 text-zinc-400" /></a></div>
            </div>
          </div>
        </aside>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-[0_0_20px_rgba(255,255,255,0.03)] backdrop-blur-sm sm:p-8 lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2"><label htmlFor="contact-name" className="text-xs font-semibold text-zinc-300">Your Name</label><input id="contact-name" name="name" autoComplete="name" required value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} placeholder="Your name" className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-white" /></div>
              <div className="space-y-2"><label htmlFor="contact-email" className="text-xs font-semibold text-zinc-300">Your Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} placeholder="you@example.com" className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-white" /></div>
            </div>
            <div className="space-y-2"><label htmlFor="contact-message" className="text-xs font-semibold text-zinc-300">Message</label><textarea id="contact-message" name="message" rows={4} required value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} placeholder="Let's discuss an opportunity..." className="w-full resize-y rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-white" /></div>
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(255,255,255,0.15)] transition hover:bg-zinc-200"><Send className="h-4 w-4" /> Open Email App</button>
            {notice && <p role="status" className="flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-xs leading-relaxed text-emerald-300"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />{notice}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
