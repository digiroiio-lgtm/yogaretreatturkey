import type { Metadata } from "next";
import Link from "next/link";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { BlogCard } from "@/components/blog/blog-card";
import { getFeaturedRetreats } from "@/lib/retreats";
import { getFeaturedPosts } from "@/lib/blog";
import { CITIES, CATEGORIES, RETREAT_TYPES } from "@/lib/constants";
import { MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Yoga Retreat Turkey | Best Turkish Yoga & Wellness Retreats 2026",
  description:
    "Find the best yoga retreats in Turkey for 2026 — luxury Aegean villas, spiritual Cappadocia experiences, detox programs, and women's sanctuaries. 4.7 stars, 2,300+ reviews.",
  openGraph: {
    title: "Yoga Retreat Turkey | Curated Wellness Stays 2026",
    description:
      "Luxury yoga retreats across Turkey's finest destinations. AI-matched, verified, and curated.",
    type: "website"
  },
  alternates: { canonical: "/yoga-retreats/turkey" }
};

const faqs = [
  {
    question: "What is the best time of year for a yoga retreat in Turkey?",
    answer:
      "May, June, September, and October offer ideal weather — warm temperatures, fewer crowds, and golden light. July and August are peak season with higher demand; book 3–4 months ahead."
  },
  {
    question: "How much do yoga retreats in Turkey cost?",
    answer:
      "Prices range from approximately $1,200 for a 4-night stay to $3,200+ for a 7-night luxury villa experience. The average is $1,600–$2,000 for 5–7 nights including meals and accommodation."
  },
  {
    question: "Are yoga retreats in Turkey suitable for beginners?",
    answer:
      "Yes. Many retreats explicitly welcome all levels. Look for 'suitable for: all levels' or 'beginners welcome' tags when filtering."
  },
  {
    question: "Do retreats in Turkey include airport transfers?",
    answer:
      "Many luxury and mid-range retreats include airport transfers. Always check the inclusions list — it's listed on each retreat detail page."
  },
  {
    question: "Is it safe to attend a yoga retreat in Turkey as a solo female traveller?",
    answer:
      "Yes. Turkey's main retreat regions — Antalya, Muğla, and Cappadocia — are well-established tourism areas. Retreat properties provide a community and supported environment."
  }
];

export default function TurkeyHubPage() {
  const featured = getFeaturedRetreats().slice(0, 4);
  const posts = getFeaturedPosts().slice(0, 3);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yoga Retreat Turkey",
    url: "https://yogaretreatturkey.com",
    description:
      "Curated luxury yoga retreat discovery for Turkey with AI-powered matching and verified host standards."
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Yoga Retreats in Turkey",
    description: "Curated selection of yoga retreats across Turkey's finest destinations",
    itemListElement: featured.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.title,
      url: `https://yogaretreatturkey.com/retreats/${r.slug}`
    }))
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-7xl px-4 pt-8 md:px-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Yoga Retreats", href: "/yoga-retreats" },
            { label: "Turkey" }
          ]}
        />
      </div>

      <section className="bg-[#f5f0ea] border-b border-stone-200 mt-4">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
            Turkey · 2026 Season
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
            Yoga Retreats in Turkey
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Turkey&apos;s ancient coastlines, cave landscapes, and world-class teachers create a retreat
            experience unlike anywhere else. Discover curated programs from Antalya to Cappadocia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AffiliateButton label="Browse Turkey Retreats" size="lg" />
            <Link
              href="/match"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-8 py-4 text-base font-medium text-stone-800 transition hover:bg-stone-100"
            >
              AI Match Me
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone-600">
            <span className="flex items-center gap-1.5">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              4.7 avg rating · 2,300+ reviews
            </span>
            <span>✓ Verified retreats only</span>
            <span>✓ Free cancellation available</span>
            <span>✓ Airport pickup offered</span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
        <h2 className="text-2xl font-semibold text-stone-900 mb-2">Retreat Destinations in Turkey</h2>
        <p className="text-stone-600 mb-8">
          Each region offers a distinct energy, climate, and retreat character.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/yoga-retreats/turkey/${city.slug}`}
              className="group rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-stone-400" />
                <p className="text-lg font-medium text-stone-900">{city.name}</p>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed">{city.description}</p>
              <div className="mt-4 grid gap-1">
                {RETREAT_TYPES.slice(0, 3).map((type) => (
                  <Link
                    key={type.slug}
                    href={`/yoga-retreats/turkey/${city.slug}/${type.slug}`}
                    className="text-xs text-stone-500 hover:text-stone-800 transition"
                  >
                    → {type.name} in {city.name}
                  </Link>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
          <h3 className="text-2xl font-semibold text-stone-900 mb-8">Browse by Retreat Type</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/yoga-retreats/turkey/${cat.slug}`}
                className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-lg font-medium text-stone-900">{cat.name}</p>
                <p className="mt-1 text-sm text-stone-500">{cat.description}</p>
                <p className="mt-4 text-xs font-medium text-stone-700">View retreats →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
        <h3 className="text-2xl font-semibold text-stone-900 mb-2">Featured Turkey Retreats</h3>
        <p className="text-stone-600 mb-8">
          Editor-curated selections across Turkey — verified for quality, safety, and host standards.
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <AffiliateButton label="See All Turkey Retreats" size="lg" />
        </div>
      </section>

      {posts.length > 0 && (
        <section className="border-t border-stone-200 bg-stone-50">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
            <h3 className="text-2xl font-semibold text-stone-900 mb-2">Turkey Retreat Guides</h3>
            <p className="text-stone-600 mb-8">Expert insights for planning your Turkey yoga retreat.</p>
            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="mt-6">
              <Link href="/blog" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition">
                Read all articles →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
        <h3 className="text-2xl font-semibold text-stone-900 mb-8 text-center">
          Frequently Asked Questions
        </h3>
        <FAQAccordion items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer }
              }))
            })
          }}
        />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </div>
  );
}
