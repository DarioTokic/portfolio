"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090c",
          color: "#e7ebf0",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p style={{ color: "#2dd4bf", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Error
          </p>
          <h1 style={{ fontSize: 28, fontWeight: 600, margin: "12px 0" }}>Something went wrong</h1>
          <p style={{ color: "#94a3b8", marginBottom: 24 }}>An unexpected error occurred. Please try again.</p>
          <button
            onClick={reset}
            style={{
              background: "#2dd4bf",
              color: "#08090c",
              border: "none",
              borderRadius: 999,
              padding: "10px 22px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
