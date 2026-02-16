# movie-search-engine

A movie search engine that retrieves information from The Movie DB API.

## Tech stack

- Vue 3 + Vite
- TypeScript
- Pinia
- Vue Router
- Tailwind CSS

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create env file (already included in this repository):

```bash
cp .env.example .env
```

3. Run locally:

```bash
npm run dev
```

## Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - type-check and build production bundle
- `npm run preview` - preview production build
- `npm run type-check` - run TypeScript checks

## Deploy to Vercel

1. Import this repository into Vercel.
2. Keep the default framework preset (`Vite`) and build settings.
3. Add environment variable `VITE_TMDB_API_KEY` in the Vercel project settings.
4. Deploy.

`vercel.json` includes a SPA rewrite so Vue Router history routes (for example `/movies` and `/movie/:id`) resolve correctly.
