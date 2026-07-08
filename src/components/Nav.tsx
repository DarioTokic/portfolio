"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import LanguageToggle from "./LanguageToggle";

export default function Nav() {
  const { t, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#work", label: t.nav.work },
    { href: "#creative", label: t.nav.creative },
    { href: "#contact", label: t.nav.contact },
  ];

  const cv = lang === "bs" ? t.profile.cvBs : t.profile.cvEn;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-ink-700/80 bg-ink-950/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-white">
          dario<span className="text-accent">.tsx</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-ink-950 sm:inline-block"
          >
            {t.nav.resume}
          </a>
        </div>
      </nav>
    </header>
  );
}
