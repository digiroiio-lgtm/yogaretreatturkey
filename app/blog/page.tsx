import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/blog-card";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Yoga Retreat Blog | Guides, Tips & Turkey Travel Insights",
  description:
    "Expert guides and insights on yoga retreats in Turkey — planning tips, safety guides, cost breakdowns, and destination reviews from experienced retreat travellers.",
  alternates: { canonical: "/blog" }
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Yoga Retreat Blog</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">
          Retreat Guides & Travel Insights
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-stone-600">
          Expert guidance on planning, booking, and experiencing yoga retreats in Turkey and beyond.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-stone-200 bg-stone-50 p-8 text-center">
        <h2 className="text-2xl font-semibold text-stone-900">Ready to find your retreat?</h2>
        <p className="mt-2 text-stone-600">Browse 2,300+ verified yoga retreats in Turkey and beyond.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <AffiliateButton label="Browse Retreats" size="lg" />
        </div>
      </div>
    </div>
  );
}
