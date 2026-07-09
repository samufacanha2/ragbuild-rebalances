# Repository Guidelines

## Project Structure & Module Organization

This Vite + React app browses Ragbuild rebalance data. Entry points are `index.html`, `src/main.jsx`, and `src/App.jsx`. Reusable UI is in `src/components/`, shared logic in `src/lib/`, and class selection metadata in `src/data/`. Generated datasets live in `src/generated/`; regenerate them with data scripts instead of hand-editing. Rebalance notes are stored by class under `rebalances/<class-slug>/`, with shared metadata in `rebalances/manifest.json`. Static images and downloaded Divine Pride assets live under `public/`.

## Build, Test, and Development Commands

- `npm ci`: install locked dependencies.
- `npm run dev`: start the Vite development server.
- `npm run build`: create a production build in `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run lint`: run oxlint with React and oxc rules.
- `npm run build:data`: rebuild `src/generated/*Data.js` from `rebalances/` and external skill data.
- `npm run assets:download`: download Divine Pride icons into `public/assets/divine-pride/`.
- `npm run rebalances:extract`: extract rebalance markdown from configured sources.

GitHub Pages deploys on pushes to `main` via `.github/workflows/deploy.yml`, using Node 24.

## Coding Style & Naming Conventions

Use ES modules throughout. React files use `.jsx`, PascalCase component names, and named exports. Match nearby style: two-space indentation, single quotes, trailing commas where already used, and no semicolons in React/Vite files. Node scripts in `scripts/` use double quotes and semicolons; match that style there. Class slugs and rebalance folders use kebab-case, for example `soul-ascetic`.

## Testing Guidelines

There is no dedicated test runner configured yet. Before opening a PR, run `npm run lint` and `npm run build`. For data changes, also run `npm run build:data` and inspect the relevant generated class file or UI screen. If adding tests later, prefer colocated `*.test.jsx` or `*.test.js` files and add the test command to `package.json`.

## Commit & Pull Request Guidelines

History is minimal, but existing messages include a lowercase type prefix such as `chore: fix workflow, rename page title`. Use concise imperative commits like `fix: handle empty class data` or `chore: update rebalance notes`. PRs should describe the change, list commands run, link related issues or rebalance sources, and include screenshots for UI updates.

## Security & Configuration Tips

Copy `.env.example` to `.env` for local data builds. Keep `DIVINE_PRIDE_API_KEY` and other secrets out of commits; `.env*` is ignored except for `.env.example`.
