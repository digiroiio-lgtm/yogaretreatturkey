import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/blog";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { Clock, BookOpen } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Yoga Retreat Guides | Complete Beginner & Planning Guides",
  description:
    "Comprehensive guides for yoga retreat travellers — from first-timer preparation to what to expect on arrival. Expert advice backed by thousands of retreat experiences.",
  alternates: { canonical: "/guides" }
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Retreat Knowledge</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">
          Yoga Retreat Guides
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-stone-600">
          Everything you need to know before, during, and after your retreat — from first-timers to
          seasoned practitioners.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {guides.map((guide) => (
          <article
            key={guide.slug}
            className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={guide.coverImage}
                alt={guide.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-7 space-y-3">
              <h2 className="text-xl font-semibold text-stone-900">
                <Link href={`/guides/${guide.slug}`} className="hover:text-stone-700 transition">
                  {guide.title}
                </Link>
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">{guide.excerpt}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="flex items-center gap-1.5 text-xs text-stone-500">
                  <Clock size={12} /> {guide.readTime} min read
                </span>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="flex items-center gap-1.5 text-sm font-medium text-stone-700 hover:text-stone-900 transition"
                >
                  <BookOpen size={14} /> Read guide
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-stone-200 bg-stone-900 p-8 text-white text-center">
        <h2 className="text-2xl font-semibold">Ready to book your first retreat?</h2>
        <p className="mt-2 text-stone-300">Browse curated retreats matched to your goals and budget.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <AffiliateButton label="Browse Retreats" variant="outline" size="lg" />
          <Link
            href="/match"
            className="inline-flex items-center rounded-full border border-stone-600 px-8 py-4 text-base font-medium text-white transition hover:bg-stone-800"
          >
            Get AI-Matched
          </Link>
        </div>
      </div>
    </div>
  );
}
