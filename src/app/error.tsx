"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink-950 px-6 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Error</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">Something went wrong</h1>
        <p className="mt-2 text-slate-400">An unexpected error occurred. Please try again.</p>
        <button
          onClick={reset}
          className="mt-6 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
