"use client";

import Image from "next/image";
import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Creative() {
  const { t } = useLang();

  return (
    <section id="creative" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-coral">{t.creative.heading}</p>
        <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {t.creative.lead}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-ink-700 bg-ink-800/50 p-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-coral/80">
                {t.creative.music.label}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{t.creative.music.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.creative.music.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={t.profile.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink-600 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-coral hover:text-coral"
                >
                  Spotify
                </a>
                <a
                  href={t.profile.bandcamp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink-600 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-coral hover:text-coral"
                >
                  Bandcamp
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-ink-700">
              <Image
                src="/art/lepra-cover.jpg"
                alt="Lepra — album art"
                width={600}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
              {t.creative.art.label}
            </p>
            <div className="columns-2 gap-4 [column-fill:_balance] sm:columns-3">
              {t.art.map((a) => (
                <div
                  key={a.file}
                  className="mb-4 overflow-hidden rounded-xl border border-ink-700 bg-ink-800 break-inside-avoid"
                >
                  <Image
                    src={a.file}
                    alt="Artwork by Dario Tokić"
                    width={a.wide ? 800 : 600}
                    height={a.wide ? 520 : 700}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
