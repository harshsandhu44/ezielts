# ezielts

Monorepo for [ezieltsonline.com](https://www.ezieltsonline.com) — an IELTS coaching landing page.

## Stack

- **Turborepo** — task orchestration across workspaces
- **Bun** — package manager and runtime
- **Apps:** `apps/web` — Next.js 15 App Router landing page

## Prerequisites

- [Bun](https://bun.sh) v1.3.10+

## Getting started

```bash
bun install
bun run dev
```

## Commands

| Command | Description |
|---|---|
| `bun run dev` | Start all apps in dev mode |
| `bun run build` | Build all apps |
| `bun run lint` | Lint all workspaces |
| `bun run type-check` | Type-check all workspaces |
| `bun run format` | Format TS/TSX/MD/JSON with Prettier |
| `bun run clean` | Remove build artifacts and node_modules |

## Structure

```
ezielts/
├── apps/
│   └── web/          # Next.js landing page
├── packages/         # Shared libraries (reserved)
├── turbo.json
└── package.json
```
