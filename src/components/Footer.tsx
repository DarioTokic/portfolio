"use client";

import { useLang } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-700/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-slate-500 sm:flex-row sm:px-8">
        <p>
          © {year} Dario Tokić. {t.footer.rights}
        </p>
        <p className="font-mono">{t.footer.built}</p>
      </div>
    </footer>
  );
}
