"use client";

import { useEffect, useRef, ReactNode } from "react";

// Progressive-enhancement reveal: content is visible by default (SSR / no-JS).
// The "hide then reveal on scroll" is applied entirely from this effect, so if
// the script never runs (any browser, any failure), the content simply stays visible.
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("reveal-in");
      return;
    }

    el.classList.add("reveal-pre");
    if (delay) el.style.transitionDelay = `${delay}s`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("reveal-in");
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
