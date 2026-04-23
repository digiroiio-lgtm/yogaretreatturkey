import { buildSitemapXml, xmlResponse } from "@/lib/sitemap-helpers";
import { siteConfig } from "@/lib/site";

// Fixed dates — update when page content changes significantly, not on every build.
const SITE_LAUNCH = "2026-01-15";
const TOP10_CREATED = "2026-04-15";

// Core static pages — /match and /hosts are intentionally excluded (noindex utility pages).
const CORE_PAGES = [
  { path: "", priority: 1.0, lastModified: SITE_LAUNCH },
  { path: "/yoga-retreats/turkey", priority: 0.9, lastModified: SITE_LAUNCH },
  { path: "/top-10-yoga-retreats-turkey", priority: 0.9, lastModified: TOP10_CREATED },
  { path: "/retreats", priority: 0.8, lastModified: SITE_LAUNCH },
  { path: "/yoga-retreats", priority: 0.75, lastModified: SITE_LAUNCH },
  { path: "/blog", priority: 0.8, lastModified: SITE_LAUNCH },
  { path: "/guides", priority: 0.7, lastModified: SITE_LAUNCH },
  { path: "/about", priority: 0.4, lastModified: SITE_LAUNCH },
  { path: "/contact", priority: 0.4, lastModified: SITE_LAUNCH },
  { path: "/privacy", priority: 0.3, lastModified: SITE_LAUNCH },
  { path: "/terms", priority: 0.3, lastModified: SITE_LAUNCH },
  { path: "/cancellation-policy", priority: 0.3, lastModified: SITE_LAUNCH }
];

export function GET() {
  const xml = buildSitemapXml(
    CORE_PAGES.map(({ path, priority, lastModified }) => ({
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency: priority >= 0.9 ? ("weekly" as const) : ("monthly" as const),
      priority
    }))
  );

  return xmlResponse(xml);
}
