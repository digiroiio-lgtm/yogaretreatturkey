import type { Metadata } from "next";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { retreats } from "@/lib/data/retreats";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Women's Solo Retreats in Turkey (2026) — Safe, Curated & Transformative",
  description:
    "Planning a solo women's retreat in Turkey? Discover safe, verified, and deeply restorative women-only and solo-female-friendly retreats curated for 2026.",
  alternates: { canonical: "/solo-women-retreats-turkey" },
};

const soloWomenRetreats = retreats.filter((r) =>
  r.fitTags.some((t) => t.toLowerCase().includes("solo women") || t.toLowerCase().includes("solo")) &&
  r.trustBadges.includes("Solo Female Safe")
);

const faqs = [
  { q: "Is Turkey safe for solo female travelers?", a: "Turkey's main retreat regions — Antalya, Muğla, Fethiye, and Cappadocia — are among the country's most visited and safest areas. Retreat environments offer an added layer of security through vetted hosts, structured programming, and pre-arrival support. All retreats marked 'Solo Female Safe' in our collection have been specifically reviewed for this." },
  { q: "Are there women-only retreats in Turkey?", a: "Yes. The Antalya Women's Sanctuary and Oludeniz Healing Waters are specifically designed for women, offering women-only environments with hormone-supportive programming, emotional safety, and deep sisterhood." },
  { q: "What should I look for in a solo women's retreat?", a: "Look for: small group sizes (under 12), Solo Female Safe trust badge, women-led facilitation or women-majority groups, airport pickup included, and flexible cancellation. Emotional safety is as important as physical safety." },
  { q: "How do I meet other solo women at a retreat?", a: "Most retreat formats include shared meals, group practices, and optional social evenings. Solo travelers consistently report forming meaningful friendships at retreats — it's one of the most cited benefits of attending solo." },
];

export default function SoloWomenRetreatsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 space-y-16">
      <section className="max-w-3xl space-y-5">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Solo Women · Turkey 2026</p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Best Women&apos;s Solo Retreats in Turkey (2026)
        </h1>
        <p className="text-xl leading-relaxed text-stone-600">
          Safe, curated, and deeply transformative. These are Turkey&apos;s best retreats for solo women — with full transparency on safety, environment, and what to genuinely expect.
        </p>
        <Link href="/match" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
          Find My Solo Retreat →
        </Link>
      </section>

      <section className="rounded-3xl bg-stone-50 border border-stone-200 p-8 space-y-4 max-w-3xl">
        <h2 className="text-xl font-semibold text-stone-900">Our Solo Female Safe standard</h2>
        <p className="text-stone-600 text-sm leading-relaxed">
          Every retreat marked &ldquo;Solo Female Safe&rdquo; in our collection has been reviewed against these criteria: vetted and background-checked host team, documented solo female guest history, airport pickup included or available, on-site host contact available 24/7, and strong female guest review base.
        </p>
        <div className="flex flex-wrap gap-3">
          {["Vetted host team", "Airport pickup", "24/7 host contact", "Female guest reviews", "Clear cancellation policy"].map((item) => (
            <span key={item} className="rounded-full bg-white border border-stone-200 px-3 py-1 text-xs text-stone-700">✓ {item}</span>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-stone-900">
          Solo female-friendly retreats ({soloWomenRetreats.length} found)
        </h2>
        {soloWomenRetreats.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {soloWomenRetreats.map((retreat) => (
              <RetreatCard key={retreat.id} retreat={retreat} />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {retreats.filter((r) => r.trustBadges.includes("Solo Female Safe")).slice(0, 3).map((retreat) => (
              <RetreatCard key={retreat.id} retreat={retreat} />
            ))}
          </div>
        )}
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
