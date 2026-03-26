# apps/web

Next.js 15 App Router landing page for [ezieltsonline.com](https://www.ezieltsonline.com).

## Stack

- **Next.js 15** with App Router and React Compiler
- **Tailwind CSS v4** with CSS variables, base color: zinc
- **shadcn/ui** with Radix primitives
- **lucide-react** for icons
- **Space Grotesk** font via `next/font/google`
- **Vercel Analytics**

## Dev

Run from repo root (recommended):

```bash
bun run dev
```

Or directly from this directory:

```bash
bun run dev    # Next.js dev server → http://localhost:3000
bun run build  # Production build
bun run lint   # ESLint
```

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — metadata, font, analytics
│   ├── page.tsx            # Landing page — composes all sections
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── landing/            # Page sections (Navbar, Hero, Footer, …)
│   └── ui/                 # shadcn/ui primitives
└── lib/
    ├── constants/
    │   └── landing.ts      # All copy and data — edit content here
    └── utils.ts            # cn() utility
```

## Editing content

All copy, program details, testimonials, and FAQs live in `src/lib/constants/landing.ts`. Edit there rather than in the components directly.
