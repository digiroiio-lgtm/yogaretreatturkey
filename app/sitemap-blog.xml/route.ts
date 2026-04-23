import { buildSitemapXml, xmlResponse } from "@/lib/sitemap-helpers";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/data/blog";

export function GET() {
  const xml = buildSitemapXml(
    blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      // Use real publication date — never use new Date() which fakes freshness on every build.
      lastModified: post.publishedAt,
      // Blog posts are published once and rarely updated → low crawl frequency.
      // Featured (high-intent) posts get monthly; others get yearly.
      changeFrequency: post.featured ? ("monthly" as const) : ("yearly" as const),
      // Featured posts are high-conversion traffic pages; others are supporting content.
      priority: post.featured ? 0.75 : 0.65
    }))
  );

  return xmlResponse(xml);
}
