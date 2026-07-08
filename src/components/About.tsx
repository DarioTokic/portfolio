"use client";

import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.about.heading}</p>
        <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {t.about.lead}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          {t.about.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="leading-relaxed text-slate-400">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-ink-700 bg-ink-800/50 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
              {t.about.factsLabel}
            </p>
            <dl className="mt-4 space-y-3">
              {t.about.facts.map((f) => (
                <div key={f.k} className="flex justify-between gap-4 border-b border-ink-700/70 pb-3 last:border-0 last:pb-0">
                  <dt className="text-sm text-slate-500">{f.k}</dt>
                  <dd className="text-right text-sm font-medium text-slate-200">{f.v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 rounded-xl border border-accent/25 bg-accent/10 px-4 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent/80">
                {t.about.certLabel}
              </p>
              <p className="mt-1 text-sm font-medium text-white">{t.about.cert}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
