import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];

  return [
    {
      url: siteUrl.toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
