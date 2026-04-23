import { buildSitemapXml, SitemapEntry, xmlResponse } from "@/lib/sitemap-helpers";
import { siteConfig } from "@/lib/site";
import { CITIES, CATEGORIES } from "@/lib/constants";
import { TOP10_PAGES } from "@/lib/data/top10-pages";

// Tier 1 location slugs — highest traffic intent, highest priority.
const TIER1_SLUGS = new Set(["bodrum", "fethiye", "antalya", "cappadocia"]);

// Money category slugs — high conversion value.
const MONEY_CATEGORY_SLUGS = new Set(["luxury", "affordable"]);

const HUB_DATE = "2026-01-15";
const TOP10_DATE = "2026-04-15";

export function GET() {
  const entries: SitemapEntry[] = [];

  // City hub pages (/yoga-retreats/turkey/[city])
  for (const city of CITIES) {
    entries.push({
      url: `${siteConfig.url}/yoga-retreats/turkey/${city.slug}`,
      lastModified: HUB_DATE,
      changeFrequency: "monthly",
      priority: 0.8
    });
  }

  // Category hub pages (/yoga-retreats/turkey/[category])
  for (const cat of CATEGORIES) {
    entries.push({
      url: `${siteConfig.url}/yoga-retreats/turkey/${cat.slug}`,
      lastModified: HUB_DATE,
      changeFrequency: "monthly",
      priority: 0.8
    });
  }

  // Top-10 programmatic pages (combo pages excluded — they carry noindex and are for navigation only)
  for (const page of TOP10_PAGES) {
    const isTier1 = TIER1_SLUGS.has(page.slug);
    const isMoneyCat = MONEY_CATEGORY_SLUGS.has(page.slug);
    const priority = isTier1 ? 0.9 : isMoneyCat ? 0.88 : 0.85;
    entries.push({
      url: `${siteConfig.url}/top-10-yoga-retreats-${page.slug}`,
      lastModified: TOP10_DATE,
      changeFrequency: isTier1 ? "weekly" : "monthly",
      priority
    });
  }

  return xmlResponse(buildSitemapXml(entries));
}
