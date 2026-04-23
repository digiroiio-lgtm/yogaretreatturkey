import { buildSitemapXml, xmlResponse } from "@/lib/sitemap-helpers";
import { siteConfig } from "@/lib/site";
import { guides } from "@/lib/data/guides";

const GUIDES_DATE = "2026-02-01";

export function GET() {
  const xml = buildSitemapXml(
    guides.map((guide) => ({
      url: `${siteConfig.url}/guides/${guide.slug}`,
      lastModified: GUIDES_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  );

  return xmlResponse(xml);
}
