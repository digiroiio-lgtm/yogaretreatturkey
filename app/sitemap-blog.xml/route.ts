import { buildSitemapXml, xmlResponse } from "@/lib/sitemap-helpers";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/data/blog";

export function GET() {
  const xml = buildSitemapXml(
    blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      // Use real publication date — never use new Date() which fakes freshness on every build.
      lastModified: post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  );

  return xmlResponse(xml);
}
