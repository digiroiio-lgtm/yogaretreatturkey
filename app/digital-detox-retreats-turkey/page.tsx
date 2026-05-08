import type { Metadata } from "next";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { retreats } from "@/lib/data/retreats";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Digital Detox Retreats in Turkey (2026) — Disconnect to Reconnect",
  description:
    "Screen fatigue is real. These are Turkey's best digital detox retreats — from complete offline immersions to gentle tech-free zones that restore clarity and sleep.",
  alternates: { canonical: "/digital-detox-retreats-turkey" },
};

const detoxRetreats = retreats
  .filter((r) => r.wellnessScores.digitalDetox >= 7)
  .sort((a, b) => b.wellnessScores.digitalDetox - a.wellnessScores.digitalDetox);

const faqs = [
  { q: "What is a digital detox retreat?", a: "A digital detox retreat is a structured programme where participants intentionally reduce or eliminate screen time — phones, laptops, tablets — to allow the nervous system to downregulate and the mind to find natural rhythm again." },
  { q: "Is the Cappadocia Breath & Silence retreat fully offline?", a: "Yes. It operates a complete digital detox protocol — devices are stored on arrival and returned on departure. This is one of the most rigorous offline experiences available in Turkey." },
  { q: "Can I still work during a digital detox retreat?", a: "We recommend selecting retreats based on your intention. The Nomad Balance Residency offers a tech-friendly environment for those who need to balance work with wellness. True detox retreats are not suitable for working." },
  { q: "How quickly do people feel the benefits of digital detox?", a: "Most guests report improved sleep quality within 48 hours, reduced anxiety within 3–4 days, and significantly improved attention and creativity by day 5. A week is considered the optimal minimum." },
];

export default function DigitalDetoxRetreatsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 space-y-16">
      <section className="max-w-3xl space-y-5">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Digital Detox · Turkey 2026</p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Best Digital Detox Retreats in Turkey (2026)
        </h1>
        <p className="text-xl leading-relaxed text-stone-600">
          Disconnect to reconnect. Screen fatigue, notification anxiety, and fragmented attention are modern epidemics. These retreats create the conditions for genuine cognitive restoration.
        </p>
        <Link href="/match" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
          Find My Detox Retreat →
        </Link>
      </section>

      <section className="rounded-3xl bg-stone-900 text-white p-8 space-y-4 max-w-3xl">
        <h2 className="text-xl font-semibold">The science of disconnection</h2>
        <p className="text-stone-300 leading-relaxed text-sm">
          Research from UC Berkeley and the University of Sussex confirms that smartphone abstinence for 5+ days leads to measurable reductions in cortisol levels, improved slow-wave sleep, and increased default mode network activity — the brain state associated with creativity and self-reflection.
        </p>
        <p className="text-stone-300 leading-relaxed text-sm">
          Turkey&apos;s natural environments — Cappadocian valleys, Aegean coastlines, Mediterranean pine forests — accelerate this process. Nature immersion is itself a neurologically restorative act.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-stone-900">
          Digital detox retreats ({detoxRetreats.length} found)
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {detoxRetreats.map((retreat) => (
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
