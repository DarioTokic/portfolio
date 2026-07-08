export type Lang = "en" | "bs";

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type CaseStudy = {
  title: string;
  tag: string;
  summary: string;
  points: string[];
  stack: string[];
};

export type Artwork = {
  file: string;
  title: string;
  kind: string;
  wide?: boolean;
};

const profile = {
  name: "Dario Tokić",
  email: "dariotokicjajce@gmail.com",
  phone: "+387 64 4079034",
  github: "https://github.com/DarioTokic",
  githubLabel: "github.com/DarioTokic",
  linkedin: "https://www.linkedin.com/in/dariotokic/",
  linkedinLabel: "/in/dariotokic",
  instagram: "https://www.instagram.com/dario.tsx/",
  instagramLabel: "@dario.tsx",
  bandcamp: "https://officiallepra.bandcamp.com/",
  spotify: "https://open.spotify.com/artist/0xeUYY5YV1DfEXR2RiCSTS",
  cvEn: "/Dario_Tokic_CV_EN.pdf",
  cvBs: "/Dario_Tokic_CV_BS.pdf",
};

// Shared art list (titles localized below via kind labels)
const artFiles: { file: string; wide?: boolean }[] = [
  { file: "/art/passat-space.jpg", wide: true },
  { file: "/art/lepra-cover-v2.jpg" },
  { file: "/art/ciga-throwup.jpg", wide: true },
  { file: "/art/guzla.jpg", wide: true },
  { file: "/art/dylan-dog.jpg" },
  { file: "/art/cat-knight.jpg" },
  { file: "/art/lakeside-bench.jpg", wide: true },
  { file: "/art/sunset-swing.jpg", wide: true },
];

export const content = {
  en: {
    profile,
    nav: {
      about: "About",
      experience: "Experience",
      work: "Work",
      creative: "Creative",
      contact: "Contact",
      resume: "Résumé",
    },
    hero: {
      kicker: "Full-Stack Engineer",
      title: "I build systems that turn messy inputs into reliable outputs.",
      subtitle:
        "Full-stack developer with ~3 years shipping production software. Currently Senior AI Engineer at FlyRank, building automation and scalable content infrastructure with Node.js, React, and Next.js.",
      ctaWork: "See my work",
      ctaContact: "Get in touch",
      location: "Sarajevo, Bosnia & Herzegovina",
      available: "Open to full-stack roles",
    },
    about: {
      heading: "About",
      lead: "I like systems that are simple and dependable.",
      body: [
        "I'm a full-stack developer focused on Node.js, currently a Senior AI Engineer at FlyRank (part of the 10x.ai ecosystem). Over ~3 years I've built production systems where the job is turning messy inputs into clean, reliable outputs that teams can actually depend on.",
        "Most of my work lives in automation and scalable content infrastructure — writing tooling that removes repetitive work, keeps pipelines running, and connects services and data sources across generation, localization, publishing, and optimization.",
        "I care about clear inputs and outputs, strong logging and observability, and failure handling that makes jobs resilient — so they scale from \"run it once\" to \"run it daily in production.\"",
      ],
      factsLabel: "At a glance",
      facts: [
        { k: "Focus", v: "Full-stack · automation · AI" },
        { k: "Core", v: "Node.js, React, Next.js" },
        { k: "Also", v: "Supabase, Bun, TypeScript" },
        { k: "Based in", v: "Sarajevo, open to relocation" },
      ],
      certLabel: "Certified",
      cert: "Claude Certified Architect — Anthropic",
    },
    experienceHeading: "Experience",
    experience: [
      {
        company: "FlyRank AI",
        role: "Senior AI Engineer",
        period: "Jan 2026 — Present",
        location: "Sarajevo",
        bullets: [
          "Design and build automation systems and content pipelines powering FlyRank's AI-driven SEO and localization platform.",
          "Develop backend services, APIs, and scripts for content generation, localization, publishing, and optimization.",
          "Built integrations with Shopify, Webflow, WordPress, Beehiiv, Shopline, and Upload-post.",
          "Co-developed \"Streams\" — drag-and-drop assembly of modular pipelines — plus report generation, bulk AI editing, and scheduled content dripping.",
          "Focus on scalability, observability, and resilience for unattended production jobs.",
        ],
      },
      {
        company: "Power Commerce",
        role: "Full-Stack Developer",
        period: "Mar 2025 — Jan 2026",
        location: "Sarajevo",
        bullets: [
          "Built and maintained full-stack features for a content generation engine enabling automated, scalable content creation.",
          "Contributed across backend logic and frontend interfaces with cross-functional teams to ship production-ready solutions.",
        ],
      },
      {
        company: "HulkApps",
        role: "Junior Full-Stack Developer",
        period: "Aug 2023 — Jan 2025",
        location: "Sarajevo",
        bullets: [
          "Developed full-stack features across backend and frontend using Vue.js and Node.js in a production e-commerce environment.",
          "Grew from junior tasks to owning end-to-end features and shipping dependable, maintainable code.",
        ],
      },
    ] as Job[],
    workHeading: "Selected Work",
    workNote:
      "Most of my production work is proprietary, so here's the impact and how it was built rather than the raw code.",
    cases: [
      {
        title: "Streams — modular pipeline builder",
        tag: "Automation",
        summary:
          "A drag-and-drop system for assembling content pipelines from modular blocks — flexible workflows non-engineers can compose.",
        points: [
          "Co-developed the logic for composing generation, localization, publishing, and optimization steps.",
          "Turned rigid one-off scripts into reusable, configurable building blocks.",
        ],
        stack: ["Node.js", "TypeScript", "Supabase"],
      },
      {
        title: "Platform integration layer",
        tag: "Integrations",
        summary:
          "One reliable delivery layer that pushes generated content into six external platforms automatically.",
        points: [
          "Built integrations with Shopify, Webflow, WordPress, Beehiiv, Shopline, and Upload-post.",
          "Normalized wildly different APIs behind a consistent, observable interface.",
        ],
        stack: ["Node.js", "REST APIs", "Webhooks"],
      },
      {
        title: "Content automation engine",
        tag: "Scale",
        summary:
          "Generation, localization, and scheduled \"dripping\" that runs unattended in production, day after day.",
        points: [
          "Implemented report generation, bulk AI content editing, and keyword filtering.",
          "Built a content-dripping scheduler with strong logging, monitoring, and failure handling.",
        ],
        stack: ["Node.js", "Bun", "AI / LLM"],
      },
    ] as CaseStudy[],
    skillsHeading: "Toolbox",
    skills: [
      { group: "Core", items: ["Node.js", "JavaScript / TypeScript", "REST APIs", "Automation"] },
      { group: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS"] },
      { group: "Data & Infra", items: ["Supabase", "Bun", "Logging & observability"] },
      { group: "AI / LLM", items: ["Claude", "MCP", "RAG", "Agentic workflows"] },
    ],
    creative: {
      heading: "Off the Clock",
      lead: "When I'm not shipping code, I'm making noise and pictures.",
      music: {
        label: "Music",
        title: "Bass in Lepra",
        text: "I play bass guitar in the metal band Lepra. Loud, fast, and a lot of fun.",
        listen: "Listen",
      },
      art: {
        label: "Visual art",
        title: "Drawing & painting",
        text: "Graffiti, illustration, comic ink, and digital landscapes — a different way to solve problems.",
      },
    },
    contact: {
      heading: "Let's talk",
      lead: "Open to full-stack roles — local, relocation, or a coffee in Sarajevo. I prefer working with people in person.",
      emailCta: "Email me",
      resumeCta: "Download résumé",
      resumeEn: "Résumé (EN)",
      resumeBs: "CV (BS)",
    },
    footer: {
      built: "Built with Next.js, Tailwind & Framer Motion.",
      rights: "All rights reserved.",
    },
    art: artFiles.map((a) => ({
      ...a,
      title: "",
      kind: "",
    })) as Artwork[],
  },

  bs: {
    profile,
    nav: {
      about: "O meni",
      experience: "Iskustvo",
      work: "Radovi",
      creative: "Kreativa",
      contact: "Kontakt",
      resume: "CV",
    },
    hero: {
      kicker: "Full-Stack Inženjer",
      title: "Gradim sisteme koji neuredne ulaze pretvaraju u pouzdane izlaze.",
      subtitle:
        "Full-stack developer sa oko 3 godine iskustva u produkciji. Trenutno Senior AI inženjer u FlyRank-u, gradim automatizaciju i skalabilnu sadržajnu infrastrukturu uz Node.js, React i Next.js.",
      ctaWork: "Pogledaj radove",
      ctaContact: "Kontaktiraj me",
      location: "Sarajevo, Bosna i Hercegovina",
      available: "Otvoren za full-stack pozicije",
    },
    about: {
      heading: "O meni",
      lead: "Volim sisteme koji su jednostavni i pouzdani.",
      body: [
        "Full-stack developer sam fokusiran na Node.js, trenutno Senior AI inženjer u FlyRank-u (dio 10x.ai ekosistema). Kroz oko 3 godine gradim produkcijske sisteme gdje je zadatak pretvoriti neuredne ulaze u čiste, pouzdane izlaze na koje se timovi mogu osloniti.",
        "Većina mog rada je u automatizaciji i skalabilnoj sadržajnoj infrastrukturi — pišem alate koji uklanjaju repetitivan posao, održavaju pipeline-ove i povezuju servise i izvore podataka kroz generisanje, lokalizaciju, objavljivanje i optimizaciju.",
        "Stalo mi je do jasnih ulaza i izlaza, snažnog logovanja i osmatranja, te rukovanja greškama koje poslove čini otpornim — da skaliraju od „pokreni jednom” do „pokreni svaki dan u produkciji”.",
      ],
      factsLabel: "Ukratko",
      facts: [
        { k: "Fokus", v: "Full-stack · automatizacija · AI" },
        { k: "Osnovno", v: "Node.js, React, Next.js" },
        { k: "Također", v: "Supabase, Bun, TypeScript" },
        { k: "Lokacija", v: "Sarajevo, otvoren za selidbu" },
      ],
      certLabel: "Certifikat",
      cert: "Claude Certified Architect — Anthropic",
    },
    experienceHeading: "Iskustvo",
    experience: [
      {
        company: "FlyRank AI",
        role: "Senior AI Inženjer",
        period: "Jan 2026 — Trenutno",
        location: "Sarajevo",
        bullets: [
          "Dizajniram i gradim sisteme automatizacije i sadržajne pipeline-ove koji pokreću FlyRank-ovu AI platformu za SEO i lokalizaciju.",
          "Razvijam backend servise, API-je i skripte za generisanje, lokalizaciju, objavljivanje i optimizaciju sadržaja.",
          "Izgradio integracije sa Shopify, Webflow, WordPress, Beehiiv, Shopline i Upload-post.",
          "Su-razvijao „Streams” — drag-and-drop sklapanje modularnih pipeline-ova — te generisanje izvještaja, masovno AI uređivanje i raspoređeno objavljivanje.",
          "Fokus na skalabilnost, osmatranje i otpornost za poslove bez nadzora u produkciji.",
        ],
      },
      {
        company: "Power Commerce",
        role: "Full-Stack Developer",
        period: "Mar 2025 — Jan 2026",
        location: "Sarajevo",
        bullets: [
          "Izgradio i održavao full-stack funkcionalnosti za engine za generisanje sadržaja uz automatizovano i skalabilno kreiranje.",
          "Doprinosio backend logici i frontend sučeljima sa cross-funkcionalnim timovima na produkcijski spremnim rješenjima.",
        ],
      },
      {
        company: "HulkApps",
        role: "Junior Full-Stack Developer",
        period: "Avg 2023 — Jan 2025",
        location: "Sarajevo",
        bullets: [
          "Razvijao full-stack funkcionalnosti na backendu i frontendu koristeći Vue.js i Node.js u produkcijskom e-commerce okruženju.",
          "Napredovao od junior zadataka do vlasništva nad end-to-end funkcionalnostima i isporuke pouzdanog koda.",
        ],
      },
    ] as Job[],
    workHeading: "Odabrani radovi",
    workNote:
      "Većina mog produkcijskog rada je vlasnički, pa su ovdje rezultati i način izrade umjesto sirovog koda.",
    cases: [
      {
        title: "Streams — modularni graditelj pipeline-ova",
        tag: "Automatizacija",
        summary:
          "Drag-and-drop sistem za sklapanje sadržajnih pipeline-ova od modularnih blokova — fleksibilni tokovi koje i ne-inženjeri mogu složiti.",
        points: [
          "Su-razvijao logiku za spajanje koraka generisanja, lokalizacije, objavljivanja i optimizacije.",
          "Pretvorio krute jednokratne skripte u ponovo upotrebljive, konfigurabilne blokove.",
        ],
        stack: ["Node.js", "TypeScript", "Supabase"],
      },
      {
        title: "Sloj za integraciju platformi",
        tag: "Integracije",
        summary:
          "Jedan pouzdan sloj isporuke koji automatski šalje generisani sadržaj na šest vanjskih platformi.",
        points: [
          "Izgradio integracije sa Shopify, Webflow, WordPress, Beehiiv, Shopline i Upload-post.",
          "Normalizovao vrlo različite API-je iza konzistentnog, osmatranog sučelja.",
        ],
        stack: ["Node.js", "REST API-ji", "Webhooks"],
      },
      {
        title: "Engine za automatizaciju sadržaja",
        tag: "Skaliranje",
        summary:
          "Generisanje, lokalizacija i raspoređeno objavljivanje koje radi bez nadzora u produkciji, dan za danom.",
        points: [
          "Implementirao generisanje izvještaja, masovno AI uređivanje i filtriranje ključnih riječi.",
          "Izgradio scheduler za objavljivanje uz snažno logovanje, monitoring i rukovanje greškama.",
        ],
        stack: ["Node.js", "Bun", "AI / LLM"],
      },
    ] as CaseStudy[],
    skillsHeading: "Alati",
    skills: [
      { group: "Osnovno", items: ["Node.js", "JavaScript / TypeScript", "REST API-ji", "Automatizacija"] },
      { group: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS"] },
      { group: "Podaci i infra", items: ["Supabase", "Bun", "Logovanje i osmatranje"] },
      { group: "AI / LLM", items: ["Claude", "MCP", "RAG", "Agentni workflow-ovi"] },
    ],
    creative: {
      heading: "Van posla",
      lead: "Kad ne pišem kod, pravim buku i slike.",
      music: {
        label: "Muzika",
        title: "Bas u bendu Lepra",
        text: "Sviram bas gitaru u metal bendu Lepra. Glasno, brzo i jako zabavno.",
        listen: "Slušaj",
      },
      art: {
        label: "Vizuelna umjetnost",
        title: "Crtanje i slikanje",
        text: "Grafiti, ilustracija, strip i digitalni pejzaži — drugačiji način rješavanja problema.",
      },
    },
    contact: {
      heading: "Javi se",
      lead: "Otvoren za full-stack pozicije — lokalno, selidba ili kafa u Sarajevu. Volim raditi s ljudima uživo.",
      emailCta: "Pošalji email",
      resumeCta: "Preuzmi CV",
      resumeEn: "CV (EN)",
      resumeBs: "CV (BS)",
    },
    footer: {
      built: "Napravljeno uz Next.js, Tailwind i Framer Motion.",
      rights: "Sva prava zadržana.",
    },
    art: artFiles.map((a) => ({
      ...a,
      title: "",
      kind: "",
    })) as Artwork[],
  },
};
