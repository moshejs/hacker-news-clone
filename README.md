# Hacker News clone (practice project)

A practice clone built while learning Next.js. It is **not affiliated with Hacker News or Y Combinator**.

## Status: hosted demo retired

The hosted demo was retired on 2026-11-24. The deployment now answers every path with a short
"demo retired" page, HTTP 410 Gone, and `noindex, nofollow` (both a `<meta name="robots">` tag and an
`X-Robots-Tag` header), via `src/middleware.ts` and `vercel.json`.

## Where the code is

The original practice app (Next.js 14 App Router, Tailwind, the public Hacker News Firebase API) is kept,
unbuilt, in [`archive/`](./archive):

- `archive/src/app/page.tsx` — top stories page
- `archive/src/components/` — `StoryList`, `StoryItem`
- `archive/src/contexts/SavedStoriesContext.tsx` — saved stories in local storage
- `archive/tailwind.config.ts`, `archive/postcss.config.mjs`, `archive/public/`

To run it locally again, move `archive/src`, `archive/public` and the two config files back to the repo
root (replacing the retired-page `src/`), then `npm ci && npm run dev`.

## Checks

```bash
npm ci
npx tsc --noEmit
npm run lint
npm run build
```
