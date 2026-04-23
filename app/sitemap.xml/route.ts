import { buildSitemapIndexXml, xmlResponse } from "@/lib/sitemap-helpers";
import { siteConfig } from "@/lib/site";

// Last time ANY sub-sitemap was updated — bump this when adding new pages or clusters.
const LAST_UPDATED = "2026-04-23";

export function GET() {
  // Ordered by crawl importance: highest-value content first.
  // Sitemap index has no <priority> field — ordering + lastModified are the only valid signals.
  const xml = buildSitemapIndexXml([
    // Tier 1: core money & hub pages (homepage, top-10s, geo hubs)
    { url: `${siteConfig.url}/sitemap-pages.xml`, lastModified: LAST_UPDATED },
    // Tier 2: location + top-10 programmatic pages
    { url: `${siteConfig.url}/sitemap-locations.xml`, lastModified: LAST_UPDATED },
    // Tier 3: guide authority pages — recently expanded, signal active maintenance
    { url: `${siteConfig.url}/sitemap-guides.xml`, lastModified: LAST_UPDATED },
    // Tier 4: individual retreat product pages
    { url: `${siteConfig.url}/sitemap-retreats.xml`, lastModified: "2026-01-15" },
    // Tier 5: blog traffic pages — lower crawl frequency, older lastModified
    { url: `${siteConfig.url}/sitemap-blog.xml`, lastModified: "2026-04-10" }
  ]);

  return xmlResponse(xml);
}
