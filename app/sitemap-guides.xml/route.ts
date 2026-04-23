import { buildSitemapXml, xmlResponse } from "@/lib/sitemap-helpers";
import { siteConfig } from "@/lib/site";
import { guides } from "@/lib/data/guides";

const GUIDES_DATE = "2026-04-23";

export function GET() {
  const xml = buildSitemapXml(
    guides.map((guide) => ({
      url: `${siteConfig.url}/guides/${guide.slug}`,
      lastModified: GUIDES_DATE,
      // Guides are evergreen authority pages — monthly crawl is appropriate.
      changeFrequency: "monthly" as const,
      // High authority signal: guides build topical trust and flow PageRank to money pages.
      priority: 0.75
    }))
  );

  return xmlResponse(xml);
}
