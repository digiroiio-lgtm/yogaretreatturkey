import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: [
      `${siteConfig.url}/sitemap.xml`,
      `${siteConfig.url}/sitemap-pages.xml`,
      `${siteConfig.url}/sitemap-retreats.xml`,
      `${siteConfig.url}/sitemap-locations.xml`,
      `${siteConfig.url}/sitemap-blog.xml`,
      `${siteConfig.url}/sitemap-guides.xml`
    ]
  };
}
