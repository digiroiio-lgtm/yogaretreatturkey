import type { MetadataRoute } from "next";
import { retreats } from "@/lib/data/retreats";
import { siteConfig } from "@/lib/site";
import { CITIES, CATEGORIES, RETREAT_TYPES } from "@/lib/constants";
import { blogPosts } from "@/lib/data/blog";
import { guides } from "@/lib/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/retreats",
    "/yoga-retreats",
    "/yoga-retreats/turkey",
    "/blog",
    "/guides",
    "/match",
    "/hosts",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cancellation-policy"
  ];

  const cityPages = CITIES.map((c) => `/yoga-retreats/turkey/${c.slug}`);
  const categoryPages = CATEGORIES.map((c) => `/yoga-retreats/turkey/${c.slug}`);
  const comboPages = CITIES.flatMap((city) =>
    RETREAT_TYPES.map((type) => `/yoga-retreats/turkey/${city.slug}/${type.slug}`)
  );

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      priority: path === "" ? 1 : 0.8
    })),
    ...retreats.map((retreat) => ({
      url: `${siteConfig.url}/retreats/${retreat.slug}`,
      lastModified: new Date(),
      priority: 0.7
    })),
    ...cityPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      priority: 0.8
    })),
    ...categoryPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      priority: 0.8
    })),
    ...comboPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      priority: 0.7
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      priority: 0.7
    })),
    ...guides.map((guide) => ({
      url: `${siteConfig.url}/guides/${guide.slug}`,
      lastModified: new Date(),
      priority: 0.7
    }))
  ];
}
