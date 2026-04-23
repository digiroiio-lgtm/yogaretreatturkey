import { buildSitemapXml, xmlResponse } from "@/lib/sitemap-helpers";
import { siteConfig } from "@/lib/site";
import { retreats } from "@/lib/data/retreats";

// All retreat pages share the site-launch date as their lastModified.
// Update this constant whenever retreat data is bulk-updated to signal fresh content to crawlers.
const RETREAT_DATE = "2026-01-15";

export function GET() {
  const xml = buildSitemapXml(
    retreats.map((retreat) => ({
      url: `${siteConfig.url}/retreats/${retreat.slug}`,
      lastModified: RETREAT_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  );

  return xmlResponse(xml);
}
