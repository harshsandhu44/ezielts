# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands use Bun as the package manager.

**From repo root (Turborepo):**
```bash
bun run dev          # Run all apps in dev mode
bun run build        # Build all apps
bun run lint         # Lint all apps
bun run type-check   # Type-check all workspaces
bun run format       # Prettier format (TS/TSX/MD/JSON)
bun run clean        # Clean build artifacts + node_modules
```

**From `apps/web` directly:**
```bash
bun run dev          # Next.js dev server
bun run build        # Next.js production build
bun run lint         # ESLint
```

## Architecture

**Monorepo:** Turborepo + Bun workspaces. Currently one app (`apps/web`), `packages/` is empty but reserved for future shared libraries.

**`apps/web`** — Next.js 15 App Router landing page for ezieltsonline.com (IELTS coaching).

- **`src/app/`** — App Router entry. `page.tsx` composes all landing sections in order; `layout.tsx` handles global metadata/font/analytics.
- **`src/components/landing/`** — All landing page sections (Navbar, Hero, TrustBar, Problem, Solution, HowItWorks, Modules, Programs, VideoSection, Testimonials, FAQ, FinalCTA, Footer).
- **`src/components/ui/`** — shadcn/ui components (accordion, badge, button, card).
- **`src/lib/constants/landing.ts`** — Single source of truth for all copy, data structures, and site config (contact info, WhatsApp link, YouTube ID, program details, testimonials, FAQs). **Edit copy here, not in components.**
- **`src/lib/utils.ts`** — `cn()` utility (clsx + tailwind-merge).

**Key tech choices:**
- Tailwind CSS v4 (via `@tailwindcss/postcss`) with CSS variables, base color: zinc
- shadcn/ui with Radix primitives, icons via lucide-react
- React Compiler enabled in `next.config.ts`
- Vercel Analytics in root layout
- Space Grotesk font via `next/font/google`
- SEO: metadata in `layout.tsx`, `app/robots.ts`, `app/sitemap.ts` — site URL is `https://www.ezieltsonline.com`

**Path alias:** `@/*` maps to `./src/*` in all imports.
