import type { MetadataRoute } from "next";
import { retreats } from "@/lib/data/retreats";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/retreats", "/match", "/hosts", "/about", "/contact", "/privacy", "/terms", "/cancellation-policy"];

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date()
    })),
    ...retreats.map((retreat) => ({
      url: `${siteConfig.url}/retreats/${retreat.slug}`,
      lastModified: new Date()
    }))
  ];
}
