# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with Astro. The codebase is in transition from a legacy Next.js implementation (located in the `legacy/` directory) to the new Astro-based implementation.

## Common Commands

All commands are run from the root of the project:

- `npm run dev` - Start local development server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally
- `npm run astro ...` - Run Astro CLI commands (e.g., `npm run astro add`, `npm run astro check`)

### Legacy Next.js Project

The `legacy/` directory contains the previous Next.js implementation:

- `cd legacy && npm run dev` - Start Next.js dev server at `localhost:3000`
- `cd legacy && npm run build` - Build Next.js production site
- `cd legacy && npm run lint` - Run ESLint

## Architecture

### Current Astro Implementation

- **Routing**: File-based routing in `src/pages/` (e.g., `index.astro`)
- **Components**: Reusable Astro components in `src/components/`
- **Layouts**: Page layouts in `src/layouts/`
- **Assets**: Static assets in `src/assets/` and `public/`
- **TypeScript**: Strict TypeScript configuration (`astro/tsconfigs/strict`)
- **Styling**: Tailwind CSS v4 configured via Vite plugin; global styles in `src/styles/app.css`

### Legacy Next.js Implementation

Located in `legacy/` directory:
- **Pages**: React pages in `legacy/pages/` with file-based routing
- **Components**: React components in `legacy/src/components/`
- **API Routes**: Next.js API routes in `legacy/pages/api/`
- **Data**: Project data in `legacy/src/data/`

### Code Style Preferences

- Avoid using `React.FC<>` - use `props: Props` instead
- Avoid type assertions when possible
