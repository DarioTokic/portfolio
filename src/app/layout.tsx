import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const siteUrl = "https://dariotokic.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dario Tokić — Full-Stack Engineer",
  description:
    "Full-stack developer (Node.js, React, Next.js) with ~3 years building production automation and scalable content systems. Currently Senior AI Engineer at FlyRank.",
  keywords: [
    "Dario Tokić",
    "Full-Stack Engineer",
    "Node.js Developer",
    "Next.js",
    "React",
    "AI Engineer",
    "Sarajevo",
  ],
  authors: [{ name: "Dario Tokić" }],
  openGraph: {
    title: "Dario Tokić — Full-Stack Engineer",
    description:
      "Full-stack developer building production automation and scalable content systems with Node.js, React & Next.js.",
    url: siteUrl,
    siteName: "Dario Tokić",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dario Tokić — Full-Stack Engineer",
    description:
      "Full-stack developer building production automation and scalable content systems.",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dario Tokić",
  jobTitle: "Full-Stack Engineer",
  worksFor: { "@type": "Organization", name: "FlyRank" },
  address: { "@type": "PostalAddress", addressLocality: "Sarajevo", addressCountry: "BA" },
  url: siteUrl,
  sameAs: [
    "https://github.com/DarioTokic",
    "https://www.linkedin.com/in/dariotokic/",
    "https://www.instagram.com/dario.tsx/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
