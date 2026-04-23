import { buildSitemapIndexXml, xmlResponse } from "@/lib/sitemap-helpers";
import { siteConfig } from "@/lib/site";

// Last time ANY sub-sitemap was updated — bump this when adding new pages or clusters.
const LAST_UPDATED = "2026-04-23";

export function GET() {
  const xml = buildSitemapIndexXml([
    { url: `${siteConfig.url}/sitemap-pages.xml`, lastModified: LAST_UPDATED },
    { url: `${siteConfig.url}/sitemap-retreats.xml`, lastModified: LAST_UPDATED },
    { url: `${siteConfig.url}/sitemap-locations.xml`, lastModified: LAST_UPDATED },
    { url: `${siteConfig.url}/sitemap-blog.xml`, lastModified: "2026-03-01" },
    { url: `${siteConfig.url}/sitemap-guides.xml`, lastModified: "2026-02-01" }
  ]);

  return xmlResponse(xml);
}
