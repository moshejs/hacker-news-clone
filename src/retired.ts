// The hosted demo of this practice project was retired on 2026-11-24.
// Every path is answered by src/middleware.ts with this page and HTTP 410 Gone.
// The original practice app lives, unbuilt, in archive/src.

export const SOURCE_URL = "https://github.com/moshejs/hacker-news-clone";

export const ROBOTS = "noindex, nofollow";

export const RETIRED_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="${ROBOTS}">
<title>Demo retired</title>
<link rel="icon" href="data:,">
<style>
  body { margin: 0; padding: 48px 16px; font: 16px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; color: #1f2328; background: #ffffff; }
  main { max-width: 36rem; margin: 0 auto; }
  h1 { font-size: 1.5rem; line-height: 1.3; margin: 0 0 1rem; }
  a { color: #1f2328; }
  @media (prefers-color-scheme: dark) { body { color: #e6e6e6; background: #161616; } a { color: #e6e6e6; } }
</style>
</head>
<body>
<main>
<h1>This practice project&rsquo;s demo has been retired</h1>
<p>It was a learning exercise and is not affiliated with Hacker News or Y Combinator.</p>
<p><a href="${SOURCE_URL}">View the source on GitHub</a></p>
</main>
</body>
</html>
`;
