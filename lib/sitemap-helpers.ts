export type SitemapEntry = {
  url: string;
  lastModified?: string; // ISO date string, e.g. "2026-04-15"
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

export function buildSitemapXml(entries: SitemapEntry[]): string {
  const urlElements = entries
    .map(({ url, lastModified, changeFrequency, priority }) => {
      const parts = [`  <url>`, `    <loc>${escapeXml(url)}</loc>`];
      if (lastModified) parts.push(`    <lastmod>${lastModified}</lastmod>`);
      if (changeFrequency) parts.push(`    <changefreq>${changeFrequency}</changefreq>`);
      if (priority !== undefined) parts.push(`    <priority>${priority.toFixed(2)}</priority>`);
      parts.push(`  </url>`);
      return parts.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

export function buildSitemapIndexXml(
  sitemaps: { url: string; lastModified?: string }[]
): string {
  const sitemapElements = sitemaps
    .map(({ url, lastModified }) => {
      const parts = [`  <sitemap>`, `    <loc>${escapeXml(url)}</loc>`];
      if (lastModified) parts.push(`    <lastmod>${lastModified}</lastmod>`);
      parts.push(`  </sitemap>`);
      return parts.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapElements}
</sitemapindex>`;
}

export function xmlResponse(xml: string): Response {
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=UTF-8" }
  });
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
