import type { Metadata } from "next";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { retreats } from "@/lib/data/retreats";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Wellness Retreats in Turkey (2026) — Where Medicine Meets Ancient Healing",
  description:
    "Discover Turkey's world-class medical wellness retreats — from hormone optimization and burnout recovery to longevity protocols and nervous system reset.",
  alternates: { canonical: "/medical-wellness" },
};

const featuredRetreats = retreats.filter((r) =>
  r.tags.some((t) => ["detox", "healing", "wellness reset"].includes(t))
).slice(0, 3);

const subcategories = [
  { slug: "longevity", name: "Longevity Retreats", description: "Anti-aging protocols, NAD+ therapy, and cellular optimization in Turkish wellness estates." },
  { slug: "hormone-balance", name: "Hormone Balance", description: "Evidence-based programs for hormonal restoration combining lab testing, nutrition, and movement therapy." },
  { slug: "burnout-recovery", name: "Burnout Recovery", description: "Medically supervised recovery from chronic stress and adrenal fatigue." },
  { slug: "nervous-system-reset", name: "Nervous System Reset", description: "Somatic therapies, breathwork, and vagal toning protocols for nervous system regulation." },
  { slug: "sleep-recovery", name: "Sleep Recovery", description: "Clinically designed sleep optimization programs with sleep lab protocols and restorative yoga." },
  { slug: "executive-reset", name: "Executive Reset", description: "Comprehensive health assessments and recovery programs designed for high-performing professionals." },
  { slug: "biohacking", name: "Biohacking Retreats", description: "Functional medicine meets cutting-edge optimization: HRV tracking, cold therapy, red light, and longevity biomarkers." },
  { slug: "womens-hormonal-wellness", name: "Women's Hormonal Wellness", description: "Integrative programs addressing perimenopause, cycle regulation, thyroid health, and female vitality." },
];

const faqs = [
  { q: "What is a medical wellness retreat?", a: "A medical wellness retreat combines evidence-based medical protocols with traditional wellness practices — including functional diagnostics, therapeutic nutrition, movement therapy, and recovery modalities — in a retreat setting." },
  { q: "Do I need a referral to attend?", a: "Most retreats conduct a pre-arrival health consultation. Some programs require basic bloodwork results. All retreats in our selection have qualified wellness professionals on-site or available." },
  { q: "Why Turkey for medical wellness?", a: "Turkey has one of the world's most advanced medical tourism infrastructures. Internationally trained physicians, JCI-accredited facilities, and a thriving integrative wellness culture make it exceptional value — typically 40–60% below equivalent European programs." },
  { q: "Are these retreats suitable for chronic conditions?", a: "Several retreats cater specifically to chronic stress, hormonal imbalance, and metabolic conditions. Always disclose your health history during the pre-arrival consultation." },
];

export default function MedicalWellnessPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 space-y-16">
      <section className="max-w-3xl space-y-5">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Medical Wellness · Turkey</p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Medical Wellness Retreats in Turkey
        </h1>
        <p className="text-xl leading-relaxed text-stone-600">
          Where evidence-based medicine meets ancient healing tradition. Turkey&apos;s internationally trained physicians and Mediterranean climate create a unique environment for deep physiological restoration.
        </p>
        <Link href="/match" className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
          Find My Medical Wellness Retreat
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { stat: "40%", label: "cheaper than equivalent EU programs" },
          { stat: "3.5 hrs", label: "flight from London" },
          { stat: "320+", label: "sunny days per year" },
          { stat: "JCI", label: "accredited medical infrastructure" },
        ].map(({ stat, label }) => (
          <div key={stat} className="rounded-3xl border border-stone-200 bg-white p-6 text-center">
            <p className="text-3xl font-bold text-stone-900">{stat}</p>
            <p className="mt-1 text-sm text-stone-500">{label}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-stone-900">Specialisations</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subcategories.map((sub) => (
            <div key={sub.slug} className="rounded-3xl border border-stone-200 bg-white p-5 space-y-2">
              <p className="font-semibold text-stone-900 text-sm">{sub.name}</p>
              <p className="text-xs text-stone-500 leading-relaxed">{sub.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-stone-900">Featured medical wellness retreats</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredRetreats.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
        <Link href="/retreats" className="inline-flex text-sm font-medium text-stone-700 hover:text-stone-900 transition">
          View all retreats →
        </Link>
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

      <section>
        <div className="rounded-3xl bg-stone-900 p-8 text-white text-center space-y-4">
          <h3 className="text-2xl font-semibold">Ready to find your medical wellness retreat?</h3>
          <p className="text-stone-300 max-w-xl mx-auto">Answer 8 questions and our AI concierge will match you with the retreats that align with your health goals.</p>
          <Link href="/match" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100">
            Get AI-Matched →
          </Link>
        </div>
      </section>
    </div>
  );
}
