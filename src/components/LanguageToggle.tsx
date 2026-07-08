"use client";

import { useLang } from "@/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center rounded-full border border-ink-600 bg-ink-800/60 p-0.5 text-xs font-medium">
      {(["en", "bs"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
            lang === l ? "bg-accent text-ink-950" : "text-slate-400 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
