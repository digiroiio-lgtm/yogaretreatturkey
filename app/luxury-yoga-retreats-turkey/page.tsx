import type { Metadata } from "next";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { retreats } from "@/lib/data/retreats";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Luxury Yoga Retreats in Turkey (2026) — Ultra-Premium Wellness Experiences",
  description:
    "Turkey's finest luxury yoga retreats — private cliff villas, yacht-based escapes, and boutique estates with world-class teaching. Genuinely premium, genuinely worth it.",
  alternates: { canonical: "/luxury-yoga-retreats-turkey" },
};

const luxuryRetreats = retreats
  .filter((r) => r.wellnessScores.luxury >= 8 || r.fitTags.some((t) => t.toLowerCase().includes("luxury")))
  .sort((a, b) => b.wellnessScores.luxury - a.wellnessScores.luxury);

const faqs = [
  { q: "What defines a luxury yoga retreat in Turkey?", a: "True luxury in Turkey means: boutique private accommodation (not resort blocks), exceptional chef-led nutrition, master-level teaching, low guest-to-staff ratios, curated excursions, and genuine attentiveness. It's not about branding — it's about the totality of experience." },
  { q: "How much do luxury yoga retreats in Turkey cost?", a: "Premium retreats typically run $2,000–$3,500 per person for 5–8 nights, including accommodation, meals, twice-daily yoga, and transfers. This compares favourably to equivalent quality in Portugal ($3,500–$5,000) or the Swiss Alps ($6,000–$15,000)." },
  { q: "Is the Bodrum Luxe Yacht Retreat truly a luxury experience?", a: "Yes. The yacht retreat includes private cabin accommodation on a modern gulet, onboard chef, twice-daily yoga on a floating deck, and anchorage in private bays. It's one of the rarest retreat formats in Europe." },
  { q: "Do luxury retreats in Turkey cater to beginners?", a: "Many do. The Kas Luxury Teacher-Led Intensive caters to dedicated practitioners, but the Aegean Clarity Retreat and Bodrum Luxe Yacht Retreat welcome all levels with attentive teaching." },
];

export default function LuxuryRetreatsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 space-y-16">
      <section className="max-w-3xl space-y-5">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Luxury · Turkey 2026</p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Best Luxury Yoga Retreats in Turkey (2026)
        </h1>
        <p className="text-xl leading-relaxed text-stone-600">
          Ultra-premium wellness experiences — private cliff villas, yacht-based escapes, and boutique estates with world-class teaching. Turkey delivers luxury at a price point that Europe simply cannot match.
        </p>
        <Link href="/match" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
          Find My Luxury Retreat →
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Private chef-led dining", icon: "🍽️" },
          { label: "Master-level teachers", icon: "🧘" },
          { label: "Exclusive property access", icon: "🏛️" },
          { label: "Curated group sizes (6–12)", icon: "✨" },
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-stone-200 bg-white p-5 text-center space-y-2">
            <span className="text-2xl">{item.icon}</span>
            <p className="text-sm text-stone-700 font-medium">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-stone-900">
          Luxury retreats ({luxuryRetreats.length} found)
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {luxuryRetreats.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
      </section>

      <section className="max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold text-stone-900">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-stone-200 bg-white p-5">
              <p className="font-semibold text-stone-900 text-sm">{faq.q}</p>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
