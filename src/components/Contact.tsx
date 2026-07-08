"use client";

import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="scroll-mt-20 border-t border-ink-700/60 py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.contact.heading}</p>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">{t.contact.lead}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${t.profile.email}`}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              {t.contact.emailCta}
            </a>
            <a
              href={t.profile.cvEn}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink-600 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-accent hover:text-accent"
            >
              {t.contact.resumeEn}
            </a>
            <a
              href={t.profile.cvBs}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink-600 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-accent hover:text-accent"
            >
              {t.contact.resumeBs}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <a href={`mailto:${t.profile.email}`} className="hover:text-white">{t.profile.email}</a>
            <span className="hidden sm:inline">·</span>
            <a href={t.profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <span className="hidden sm:inline">·</span>
            <a href={t.profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <span className="hidden sm:inline">·</span>
            <a href={t.profile.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
