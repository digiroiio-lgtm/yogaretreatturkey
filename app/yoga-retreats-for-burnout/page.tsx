import type { Metadata } from "next";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { retreats } from "@/lib/data/retreats";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Yoga Retreats for Burnout Recovery in Turkey (2026)",
  description:
    "Feeling burned out? These are Turkey's best retreats for nervous system recovery — curated for exhaustion, chronic stress, and genuine restoration.",
  alternates: { canonical: "/yoga-retreats-for-burnout" },
};

const burnoutRetreats = retreats.filter((r) =>
  r.fitTags.some((t) => t.toLowerCase().includes("burnout"))
);

const faqs = [
  { q: "How long does a burnout recovery retreat take?", a: "Most burnout-focused retreats run 5–8 nights. Research suggests a minimum of 5 nights for meaningful nervous system regulation. Longer stays (7–10 days) produce more lasting physiological change." },
  { q: "What makes a retreat good for burnout specifically?", a: "Low stimulation, high calm scores, ample unstructured time, sleep optimisation protocols, and trauma-informed teaching. Avoid retreats with packed schedules and heavy social programming." },
  { q: "Should I do yoga if I'm completely depleted?", a: "Yes — but gentle yoga specifically. Yin, restorative, and somatic movement are ideal for burnout. These practices activate the parasympathetic nervous system without further taxing the adrenal system." },
  { q: "Is Turkey safe for solo travel during burnout recovery?", a: "Turkey's primary retreat regions — Antalya, Muğla, and Cappadocia — are well-established and safe. Several retreats in our burnout selection carry the Solo Female Safe badge." },
];

export default function BurnoutRetreatsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 space-y-16">
      <section className="max-w-3xl space-y-5">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Burnout Recovery · Turkey 2026</p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Best Yoga Retreats for Burnout Recovery in Turkey (2026)
        </h1>
        <p className="text-xl leading-relaxed text-stone-600">
          Burned out isn&apos;t just tired. It&apos;s a nervous system crisis that requires intentional rest, not just a holiday. These retreats are specifically designed to regulate, restore, and reset.
        </p>
        <Link href="/match" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
          Find My Burnout Recovery Retreat →
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-stone-900">What burnout actually is (and what helps)</h2>
        <p className="text-stone-600 leading-relaxed max-w-3xl">
          Burnout is a state of chronic stress that leads to physical and emotional exhaustion, cynicism, and reduced sense of accomplishment. The WHO classifies it as an occupational phenomenon. Left unaddressed, it progresses into adrenal fatigue, sleep disorders, and depression.
        </p>
        <p className="text-stone-600 leading-relaxed max-w-3xl">
          The most effective recovery protocol combines: genuine rest (not stimulating activities), nervous system regulation (breathwork, yin yoga, somatic movement), restorative sleep, anti-inflammatory nutrition, and reduced decision-making load. Turkey&apos;s best retreats deliver all five.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-stone-900">
          Retreats matched for burnout recovery ({burnoutRetreats.length} found)
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {burnoutRetreats.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Low social pressure", desc: "Choose retreats with small groups (under 10) and plenty of unstructured rest time." },
          { title: "High calm score", desc: "Look for retreats scoring 8+ on calm. Silence, nature, and slow rhythm are essential." },
          { title: "Sleep recovery focus", desc: "Prioritise retreats with sleep optimisation protocols, early finishes, and digital detox options." },
        ].map((tip) => (
          <div key={tip.title} className="rounded-3xl border border-stone-200 bg-white p-6 space-y-2">
            <p className="font-semibold text-stone-900">{tip.title}</p>
            <p className="text-sm text-stone-600">{tip.desc}</p>
          </div>
        ))}
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
