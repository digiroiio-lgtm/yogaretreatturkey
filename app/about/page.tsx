import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Yoga Retreat Turkey — Our Story, Standards & Mission",
  description:
    "Learn how Yoga Retreat Turkey curates Turkey's finest wellness stays — our editorial philosophy, trust architecture, and commitment to exceptional guest outcomes.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:px-6 space-y-16">
      {/* Mission */}
      <section className="space-y-5">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">About Yoga Retreat Turkey</p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900">
          A more intentional way to discover and book yoga retreats.
        </h1>
        <p className="text-lg leading-relaxed text-stone-600">
          We built Yoga Retreat Turkey to replace overwhelming listing directories with an elegant, high-trust marketplace for wellness travel. Every retreat is curated for quality, emotional clarity, and practical confidence.
        </p>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { stat: "2,300+", label: "verified guest reviews" },
          { stat: "12", label: "curated retreats (and growing)" },
          { stat: "4.7★", label: "average retreat rating" },
          { stat: "8", label: "Turkish regions covered" },
        ].map(({ stat, label }) => (
          <div key={stat} className="rounded-3xl border border-stone-200 bg-white p-6 text-center">
            <p className="text-3xl font-bold text-stone-900">{stat}</p>
            <p className="mt-1 text-sm text-stone-500">{label}</p>
          </div>
        ))}
      </section>

      {/* Founding story */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-stone-900">How we started</h2>
        <p className="text-stone-600 leading-relaxed">
          Yoga Retreat Turkey began from frustration. Scrolling through aggregator sites full of unverified listings, manipulated reviews, and vague descriptions — we decided there had to be a better way to help people find genuinely transformative retreats.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Turkey was our first chapter because we believed in it deeply: a country with extraordinary diversity — from Cappadocia&apos;s cave-suite silence to Bodrum&apos;s sea-view luxury — and a hospitality culture rooted in genuine care.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Every retreat in our collection has been reviewed, not just listed. We look at teaching credentials, accommodation standards, guest experience history, communication quality, and host philosophy.
        </p>
      </section>

      {/* Editorial philosophy */}
      <section className="rounded-3xl bg-stone-50 border border-stone-200 p-8 space-y-5">
        <h2 className="text-2xl font-semibold text-stone-900">Our editorial curation philosophy</h2>
        <p className="text-stone-600 leading-relaxed">
          We believe retreat discovery should be an act of trust, not speculation. That means every listing we publish meets a minimum standard of transparency, verified quality, and emotional honesty.
        </p>
        <ul className="space-y-3 text-sm text-stone-700">
          {[
            "We reject listings that use misleading imagery or inflated claims",
            "We prioritise retreats with documented guest outcomes over marketing language",
            "We include a 'Not for' section on every retreat — because clarity serves guests better than conversion",
            "We display wellness scores honestly, including social energy and digital detox suitability",
            "We update listings when host quality or programme structure changes",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Why Turkey */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-stone-900">Why Turkey</h2>
        <p className="text-stone-600 leading-relaxed">
          Turkey is unlike any other wellness destination. It combines the natural beauty of Bali, the hospitality depth of Japan, the medical infrastructure of Germany, and the culinary richness of Greece — at a cost that makes genuine wellness accessible.
        </p>
        <p className="text-stone-600 leading-relaxed">
          The country is 3.5 hours from London. It has 320+ sunny days per year. Its Mediterranean diet is one of the world&apos;s most evidence-backed for longevity. And its retreat scene is maturing rapidly — with world-class teachers increasingly choosing Turkey as their primary programme location.
        </p>
      </section>

      {/* Trust architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-stone-900">Our trust architecture</h2>
        <p className="text-stone-600 leading-relaxed">
          Trust in wellness travel is fragile. Guests are making significant emotional and financial investments based on descriptions they can&apos;t verify until they arrive. We take that responsibility seriously.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Verified Host", desc: "Host identity, credentials, and operating history confirmed." },
            { label: "Solo Female Safe", desc: "Reviewed specifically for solo female traveller safety and comfort." },
            { label: "Medical Reviewed", desc: "Programme content reviewed by qualified wellness practitioners." },
            { label: "Flexible Cancellation", desc: "Policy allows cancellation with reasonable notice and refund." },
          ].map(({ label, desc }) => (
            <div key={label} className="rounded-2xl border border-stone-200 bg-white p-4 space-y-1">
              <p className="font-semibold text-stone-900 text-sm">🛡 {label}</p>
              <p className="text-xs text-stone-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promise */}
      <section className="rounded-3xl bg-stone-900 text-white p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Our promise to you</h2>
        <ul className="space-y-2 text-stone-300 text-sm">
          {[
            "We will never list a retreat we wouldn't recommend to someone we care about",
            "We will always show you why a retreat might not be right for you, not just why it is",
            "We will keep pricing, inclusions, and exclusions accurate and current",
            "We will keep improving the AI match based on real guest outcomes, not conversion metrics",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
