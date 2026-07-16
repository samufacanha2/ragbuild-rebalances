# RO Skills

Vite and React comparison tool for Ragbuild skill data and rebalance notes.

## Assets

Download Divine Pride images into `public/assets/divine-pride`:

```sh
npm run assets:download
```

## Build data

Download missing external source files:

```sh
npm run data:sources
```

Configure `.env` with the values shown in `.env.example` before downloading sources if you want Divine Pride API translations included. The source downloader saves Divine Pride, bROWiki, and iRO Wiki HTML/JSON under `data/sources/`.

To force-refresh every saved external source file when upstream data changes, run:

```sh
npm run data:sources:refresh
```

After that, rebuild generated data from the local source files:

```sh
npm run build:data
```

The builder parses `rebalances/`, reads the saved source files, and writes public generated datasets to `src/generated/`. It does not call the network during `npm run build:data`.

To download missing source files and rebuild in one step, run:

```sh
npm run build:data:fetch
```

Use `npm run build:data:refresh` when you need to force-refresh sources and rebuild in one command.

## Run the app

Install dependencies, build the data, then run the Vite dev server:

```sh
npm install
npm run build:data
npm run dev
```

Then visit the Vite URL printed in the terminal.

## GitHub Pages

This repo includes a GitHub Actions workflow for Pages. Push to `main`, and the workflow
will enable Pages for GitHub Actions and publish `dist`.
