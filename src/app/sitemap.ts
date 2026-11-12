import { execSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Only "/" is indexable. Stories are live Hacker News API data rendered client-side on
// the home page; there are no per-story routes in this app, so nothing else is listed.
// lastmod is the last commit touching the page source, falling back to build time when
// git history is unavailable (e.g. a shallow or stripped checkout).
function lastModified(paths: string[]): Date {
  try {
    const iso = execSync(`git log -1 --format=%cI -- ${paths.join(" ")}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    // fall through
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: lastModified(["src/app/page.tsx", "src/app/layout.tsx", "src/components"]),
      changeFrequency: "hourly",
      priority: 1,
    },
  ];
}
