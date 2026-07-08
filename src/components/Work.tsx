"use client";

import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Work() {
  const { t } = useLang();

  return (
    <section id="work" className="scroll-mt-20 border-y border-ink-700/60 bg-ink-900/40 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.workHeading}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">{t.workNote}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-ink-700 bg-ink-800/50 p-6 transition-colors hover:border-accent/40">
                <span className="mb-4 inline-flex w-fit rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent">
                  {c.tag}
                </span>
                <h3 className="text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.summary}</p>
                <ul className="mt-4 space-y-2">
                  {c.points.map((p, j) => (
                    <li key={j} className="flex gap-2.5 text-xs leading-relaxed text-slate-500">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-ink-700/70 pt-4">
                  {c.stack.map((s) => (
                    <span key={s} className="rounded-md bg-ink-700/70 px-2 py-1 font-mono text-[10px] text-slate-400">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{t.skillsHeading}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.skills.map((s) => (
                <div key={s.group} className="rounded-xl border border-ink-700 bg-ink-800/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent/90">{s.group}</p>
                  <ul className="mt-2 space-y-1">
                    {s.items.map((it) => (
                      <li key={it} className="text-sm text-slate-300">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
