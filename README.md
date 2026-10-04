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

The Brazilian class names, skill names, and wiki links are maintained separately in
`src/data/browiki-pt-br.json`. To refresh them from bROWiki, run:

```sh
npm run browiki:update
```

Use `npm run browiki:update:refresh` to recheck all existing skill names and
links after bROWiki changes its pages (a slower, throttled full crawl).

The updater follows the class skill tables and accepts a skill translation only
when its bROWiki page contains a matching numeric skill ID. It reuses previously
verified entries and leaves English names for skills not yet documented on bROWiki.
It does not query Divine Pride. Class pages without up-to-date skill tables can
still have correct class links but no translated skills.

Divine Pride API calls made by the data builders are serialized at one request
start per second, including retries. Do not run multiple data builders at once,
since each process has its own queue.

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

## Deployment

The production site is deployed on Vercel at `https://roskills.cc/`. Set
`VITE_SITE_URL=https://roskills.cc/` in the deployment environment so generated canonical
URLs and metadata stay aligned with the public domain.
