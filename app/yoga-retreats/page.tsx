import type { Metadata } from "next";
import Link from "next/link";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { getFeaturedRetreats } from "@/lib/retreats";
import { CITIES, CATEGORIES } from "@/lib/constants";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Yoga Retreats | Turkey, Bali, Portugal & Beyond",
  description:
    "Browse curated yoga retreats worldwide. Filter by destination, style, budget, and date. Over 2,300 verified reviews. Free cancellation available.",
  alternates: { canonical: "/yoga-retreats" }
};

const faqs = [
  {
    question: "How are retreats selected for this platform?",
    answer:
      "Every retreat is manually reviewed for host credentials, accommodation standards, teaching quality, and guest support. We verify reviews and conduct ongoing quality checks."
  },
  {
    question: "Can I trust the prices shown?",
    answer:
      "Prices shown are starting rates per person for the specified duration, including accommodation and meals as listed. Final pricing is confirmed on the booking platform."
  },
  {
    question: "What if I want to cancel my booking?",
    answer:
      "Cancellation policies vary by retreat. Many offer free cancellation up to 30 days before start. Always check the specific retreat's policy before booking."
  }
];

export default function YogaRetreatsPage() {
  const featured = getFeaturedRetreats().slice(0, 6);

  return (
    <div>
      <section className="bg-[#f5f0ea] border-b border-stone-200">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Verified & curated</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Yoga Retreats for Every Intention
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            From luxury Aegean cliff villas to contemplative Cappadocia cave stays — curated retreats
            matched to your practice, budget, and timing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AffiliateButton label="Browse All Retreats" size="lg" />
            <Link
              href="/match"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-8 py-4 text-base font-medium text-stone-800 transition hover:bg-stone-100"
            >
              Get AI-Matched
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-stone-600">
            <span>✓ 2,300+ verified reviews</span>
            <span>✓ 4.7 avg rating</span>
            <span>✓ Free cancellation options</span>
            <span>✓ Airport pickup available</span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
        <h2 className="text-2xl font-semibold text-stone-900 mb-2">Top Destinations in Turkey</h2>
        <p className="text-stone-600 mb-8">Turkey&apos;s finest yoga retreat regions, each with a distinct energy.</p>
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
              <p className="text-sm text-stone-500">{city.description}</p>
              <p className="mt-3 text-xs font-medium text-stone-700 group-hover:text-stone-900 transition">
                View retreats →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
          <h3 className="text-2xl font-semibold text-stone-900 mb-8">Browse by Category</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/yoga-retreats/turkey/${cat.slug}`}
                className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-lg font-medium text-stone-900">{cat.name}</p>
                <p className="mt-1 text-sm text-stone-500">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
        <h3 className="text-2xl font-semibold text-stone-900 mb-2">Editor&apos;s Top Picks</h3>
        <p className="text-stone-600 mb-8">Highest-rated retreats across Turkey, verified by our curation team.</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <AffiliateButton label="See More Retreats on BookRetreats" size="lg" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-12 md:px-6">
        <h3 className="text-2xl font-semibold text-stone-900 mb-8 text-center">Common Questions</h3>
        <FAQAccordion items={faqs} />
      </section>
    </div>
  );
}
