# Dario Tokić — Portfolio

Personal portfolio site. Built with Next.js (App Router), Tailwind CSS, and Framer Motion. Bilingual (English / Bosnian), dark theme with a subtle creative corner.

## Run locally

Uses [Bun](https://bun.sh) as the package manager and runtime (Next.js 16 / React 19).
Install Bun once: `curl -fsSL https://bun.sh/install | bash`

```bash
bun install
bun run dev
```

Open http://localhost:3000

## Build for production

```bash
bun run build
bun run start
```

## Project structure

```
src/
  app/
    layout.tsx      # SEO metadata, JSON-LD, fonts, language provider
    page.tsx        # assembles all sections
    globals.css     # theme + base styles
  components/       # Nav, Hero, About, Experience, Work, Creative, Contact, Footer
  data/content.ts   # ALL site copy (EN + BS) — edit text here
  i18n/             # language provider + toggle
public/
  photos/           # portrait
  art/              # gallery images + Lepra cover
  *.pdf             # downloadable CVs (EN + BS)
```

## Editing content

Almost all text lives in `src/data/content.ts`, split into `en` and `bs` objects.
Change copy, experience bullets, case studies, and skills there — no component edits needed.

## Images

Web-optimized images are in `public/art` and `public/photos`. To swap one, replace the file
(keep the same name) or add a new entry to the `artFiles` array in `src/data/content.ts`.

## Deploy

See `../DEPLOY.md` for step-by-step Vercel + custom domain instructions.
