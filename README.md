# ragbuild-rebalances

Vite and React comparison tool for Ragbuild skill data and rebalance notes.

## Assets

Download Divine Pride images into `public/assets/divine-pride`:

```sh
npm run assets:download
```

## Build data

Configure `.env` with the values shown in `.env.example`, then run:

```sh
npm run build:data
```

The builder parses `current_skills.md`, reads `rebalance_*.md`, and calls the Divine Pride skill endpoint:

```text
/api/database/Skill/:id?apiKey=:apiKey
```

It writes sanitized public data to `src/generated/soulAsceticData.js`.

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
