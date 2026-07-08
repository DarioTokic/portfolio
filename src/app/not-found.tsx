import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink-950 px-6 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">Page not found</h1>
        <p className="mt-2 text-slate-400">This page doesn&apos;t exist.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
