import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn why Yoga Retreat Turkey is building a curated, AI-enabled wellness marketplace starting with Turkey.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-stone-500">About Yoga Retreat Turkey</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">A more intentional way to discover and book yoga retreats.</h1>
      <div className="mt-7 space-y-6 text-stone-700">
        <p>
          We built Yoga Retreat Turkey to replace overwhelming listing directories with an elegant, high-trust marketplace for wellness travel. Every retreat is curated for quality, emotional clarity, and practical confidence.
        </p>
        <p>
          Turkey is our first chapter: rare coastlines, heritage hospitality, and globally respected teachers. The country offers diversity most destinations cannot — from yacht-based luxury escapes to contemplative cave-stay retreats.
        </p>
        <p>
          Unlike generic OTAs, we focus on curated inventory and fit quality. Our AI concierge accelerates shortlisting while human hospitality standards keep every recommendation grounded and believable.
        </p>
      </div>
    </div>
  );
}
