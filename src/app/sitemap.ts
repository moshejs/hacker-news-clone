import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hacker-news-clone-eight-gules.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "hourly",
    },
  ];
}
