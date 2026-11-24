import { RETIRED_HTML, ROBOTS } from "./retired";

// Answer every request (pages, assets, robots.txt, sitemap.xml) with the
// retired page and 410 Gone, so search engines drop the old URLs.
export function middleware() {
  return new Response(RETIRED_HTML, {
    status: 410,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": ROBOTS,
      "cache-control": "public, max-age=300",
    },
  });
}

export const config = {
  matcher: "/:path*",
};
