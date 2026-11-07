import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://hacker-news-clone-eight-gules.vercel.app/sitemap.xml",
  };
}
