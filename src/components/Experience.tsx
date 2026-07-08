"use client";

import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {t.experienceHeading}
        </p>
      </Reveal>

      <div className="mt-10 space-y-4">
        {t.experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.06}>
            <div className="group rounded-2xl border border-ink-700 bg-ink-800/40 p-6 transition-colors hover:border-accent/40 sm:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {job.role} <span className="text-accent">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-slate-500">
                  {job.period} · {job.location}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
