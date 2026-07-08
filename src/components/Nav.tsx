"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import LanguageToggle from "./LanguageToggle";

export default function Nav() {
  const { t, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#work", label: t.nav.work },
    { href: "#creative", label: t.nav.creative },
    { href: "#contact", label: t.nav.contact },
  ];

  const cv = lang === "bs" ? t.profile.cvBs : t.profile.cvEn;

  return (
    <>
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

      {/* Mobile floating navigation */}
      <div className="md:hidden">
        {/* scrim */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-40 bg-ink-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden
        />

        {/* menu panel */}
        <div
          className={`fixed bottom-24 right-5 z-50 w-52 origin-bottom-right rounded-2xl border border-ink-700 bg-ink-900/95 p-2 shadow-2xl backdrop-blur-md transition-all duration-200 ${
            open ? "scale-100 opacity-100" : "pointer-events-none translate-y-2 scale-95 opacity-0"
          }`}
          role="menu"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-ink-700/60 hover:text-white"
              role="menuitem"
            >
              {l.label}
            </a>
          ))}
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-ink-950"
            role="menuitem"
          >
            {t.nav.resume}
          </a>
        </div>

        {/* toggle button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink-950 shadow-xl shadow-accent/20 transition-transform active:scale-95"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>
    </>
  );
}
