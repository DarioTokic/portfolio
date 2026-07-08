"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[620px] -translate-x-1/2 accent-glow" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/60 px-3 py-1 text-xs font-medium text-slate-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t.hero.available}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent"
            >
              {t.hero.kicker}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              <span className="text-gradient">{t.hero.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
              >
                {t.hero.ctaWork}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink-600 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-accent hover:text-accent"
              >
                {t.hero.ctaContact}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-xs"
          >
            <div className="absolute -inset-3 rounded-3xl bg-accent/10 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-ink-600 bg-ink-800">
              <Image
                src="/photos/portrait.jpg"
                alt="Dario Tokić"
                width={640}
                height={800}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
