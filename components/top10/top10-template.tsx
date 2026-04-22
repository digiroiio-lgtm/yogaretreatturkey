import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { formatPrice } from "@/lib/retreats";
import { SELECTION_CRITERIA, PRICE_TIERS } from "@/lib/constants";
import { AFFILIATE_URL } from "@/lib/affiliate";
import { siteConfig } from "@/lib/site";
import { Top10PageConfig, getTop10Href } from "@/lib/data/top10-pages";
import { Retreat } from "@/lib/types";

const FAQS = [
  {
    question: "How are these retreats selected?",
    answer:
      "Every retreat is manually reviewed by our editorial team based on instructor credentials, accommodation quality, verified guest reviews (minimum 4.6 rating), and overall experience value. We do not rank by sponsorship or listing fees."
  },
  {
    question: "What is the best time of year for a yoga retreat in Turkey?",
    answer:
      "April to October offers the best conditions — warm weather, long golden hours, and an atmosphere of collective relaxation. May, June, and September are especially popular for avoiding peak summer heat."
  },
  {
    question: "Do prices include flights?",
    answer:
      "No — all prices shown are per person for the retreat duration, including accommodation and meals unless otherwise noted. Flights are always excluded."
  },
  {
    question: "Can I cancel if my plans change?",
    answer:
      "Most retreats listed here offer flexible cancellation. Check the individual retreat page for specific terms before booking."
  }
];

interface Props {
  config: Top10PageConfig;
  retreats: Retreat[];
}

export function Top10Template({ config, retreats }: Props) {
  const canonical = getTop10Href(config.slug);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: config.title,
    description: config.subheadline,
    url: `${siteConfig.url}${canonical}`,
    numberOfItems: retreats.length,
    itemListElement: retreats.map((retreat, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: retreat.title,
      url: `${siteConfig.url}/retreats/${retreat.slug}`,
      description: retreat.shortDescription
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <div>
      {/* HERO */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-12 md:px-6 md:pt-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
            Expert-curated · Updated 2026
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            {config.title}
          </h1>
          <p className="text-lg leading-relaxed text-stone-600">{config.subheadline}</p>
          <div className="flex flex-col gap-2 text-sm text-stone-700">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
              2,300+ verified reviews
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
              Only curated retreats
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
              Free cancellation available
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <AffiliateButton label="Find My Retreat" size="lg" />
            <Link
              href="/match"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-8 py-4 text-base font-medium text-stone-800 transition hover:bg-stone-100"
            >
              Get AI-Matched
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION DESCRIPTION */}
      <section className="border-y border-stone-200 bg-stone-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
          <p className="max-w-3xl text-stone-700 leading-relaxed">{config.locationDescription}</p>
        </div>
      </section>

      {/* RETREAT LIST */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
        <SectionHeader
          eyebrow="2026 ranking"
          title="Best Yoga Retreats — Ranked"
          description="Ranked by verified guest ratings, instructor quality, and overall experience. Each retreat has been manually reviewed."
        />

        {retreats.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-8 text-center text-stone-500">
            <p>No retreats currently match this filter. Check back soon — we add new retreats regularly.</p>
            <Link
              href="/retreats"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-stone-900 transition"
            >
              Browse all retreats <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <ol className="mt-10 space-y-10">
            {retreats.map((retreat, index) => (
              <li
                key={retreat.slug}
                className="grid gap-6 rounded-3xl border border-stone-200 bg-white p-6 md:grid-cols-[80px_1fr] md:p-8 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.2)]"
              >
                {/* Rank number */}
                <div className="flex items-start" aria-hidden="true">
                  <span className="text-5xl font-bold text-stone-200 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="space-y-4">
                  {/* Title row */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-semibold text-stone-900">
                        <Link
                          href={`/retreats/${retreat.slug}`}
                          className="hover:text-stone-600 transition"
                        >
                          {retreat.title}
                        </Link>{" "}
                        <span className="text-stone-400 font-normal">— {retreat.locationArea}</span>
                      </h2>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-stone-500">
                        <span className="flex items-center gap-1">
                          <Star size={13} className="fill-amber-400 text-amber-400" />
                          {retreat.rating.toFixed(2)} ({retreat.reviewCount} reviews)
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} /> {retreat.locationArea}
                        </span>
                        <span>·</span>
                        <span>{retreat.duration} days</span>
                        <span>·</span>
                        <span className="font-medium text-stone-700">
                          From {formatPrice(retreat.price, retreat.currency)}
                        </span>
                      </div>
                    </div>
                    {retreat.featured && (
                      <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-medium text-emerald-700">
                        Editor&apos;s pick
                      </span>
                    )}
                  </div>

                  {/* Style + accommodation */}
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
                    {retreat.yogaStyle} · {retreat.accommodationType}
                  </p>

                  {/* Why we picked it */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                      Why we picked it
                    </p>
                    <p className="text-stone-600 leading-relaxed">{retreat.shortDescription}</p>
                  </div>

                  {/* Best for */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                      Best for
                    </p>
                    <p className="text-stone-600">{retreat.suitableFor.join(", ")}</p>
                  </div>

                  {/* Highlights */}
                  <ul className="flex flex-wrap gap-2">
                    {retreat.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-stone-50 border border-stone-200 px-3 py-1 text-xs text-stone-600"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 pt-1">
                    <a
                      href={AFFILIATE_URL}
                      target="_blank"
                      rel="nofollow sponsored"
                      className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
                    >
                      Check Availability
                    </a>
                    <Link
                      href={`/retreats/${retreat.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        )}
      </section>

      {/* COMPARISON TABLE */}
      {retreats.length > 1 && (
        <section className="border-y border-stone-200 bg-stone-50">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
            <SectionHeader
              eyebrow="Side-by-side comparison"
              title="Compare These Yoga Retreats"
              description="Quick-scan table to find the right retreat by location, price, and style."
            />
            <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
              <table className="w-full text-sm text-left text-stone-700">
                <thead className="bg-stone-100 text-xs uppercase tracking-wider text-stone-500">
                  <tr>
                    <th className="px-5 py-4">#</th>
                    <th className="px-5 py-4">Retreat</th>
                    <th className="px-5 py-4">Location</th>
                    <th className="px-5 py-4">Price / person</th>
                    <th className="px-5 py-4">Duration</th>
                    <th className="px-5 py-4">Rating</th>
                    <th className="px-5 py-4">Style</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {retreats.map((retreat, index) => (
                    <tr key={retreat.slug} className="hover:bg-stone-50 transition">
                      <td className="px-5 py-4 font-bold text-stone-300">{index + 1}</td>
                      <td className="px-5 py-4 font-medium text-stone-900">
                        <Link
                          href={`/retreats/${retreat.slug}`}
                          className="hover:text-stone-600 transition"
                        >
                          {retreat.title}
                        </Link>
                      </td>
                      <td className="px-5 py-4">{retreat.locationArea}</td>
                      <td className="px-5 py-4 font-medium">
                        {formatPrice(retreat.price, retreat.currency)}
                      </td>
                      <td className="px-5 py-4">{retreat.duration} days</td>
                      <td className="px-5 py-4 text-amber-600 font-medium">
                        {retreat.rating.toFixed(2)} ★
                      </td>
                      <td className="px-5 py-4 text-stone-500">{retreat.yogaStyle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <AffiliateButton label="Compare All Turkey Retreats" />
            </div>
          </div>
        </section>
      )}

      {/* HOW WE SELECTED – E-E-A-T */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-start">
          <div>
            <SectionHeader
              eyebrow="Our methodology"
              title="How We Selected These Yoga Retreats"
              description="Every retreat on this list was manually reviewed. We do not rank by sponsorship or listing fees."
            />
            <ul className="mt-8 space-y-4">
              {SELECTION_CRITERIA.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-900">{item.label}</p>
                    <p className="text-sm text-stone-500">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 md:mt-0 rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <p className="text-sm text-stone-500 leading-relaxed">
              Our editorial team evaluates retreats year-round. Each listing must maintain a minimum 4.6 rating from verified guest bookings to remain on this list. Rankings are updated seasonally.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-semibold text-stone-900">4.6+</p>
                <p className="text-xs text-stone-500 mt-1">Min. rating required</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-stone-900">4.7</p>
                <p className="text-xs text-stone-500 mt-1">Platform avg rating</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-stone-900">2,300+</p>
                <p className="text-xs text-stone-500 mt-1">Verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE BLOCK */}
      <section className="border-y border-stone-200 bg-stone-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
          <SectionHeader
            eyebrow="Budgeting your trip"
            title="How Much Do Yoga Retreats in Turkey Cost?"
            description="Turkey offers exceptional value compared to Bali, Portugal, or the Maldives. Here's what to expect at each price tier."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PRICE_TIERS.map((tier) => (
              <div key={tier.tier} className="rounded-2xl border border-stone-200 bg-white p-6">
                <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 mb-3">
                  {tier.badge}
                </span>
                <p className="text-xl font-semibold text-stone-900">{tier.tier}</p>
                <p className="text-2xl font-bold text-stone-800 mt-1">{tier.range}</p>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI MATCH CTA */}
      <section className="bg-stone-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:flex md:items-center md:justify-between gap-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              Find Your Perfect Yoga Retreat
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed">
              Answer a few quick questions and get matched with your ideal retreat — based on your dates, budget, yoga style, and wellness goals.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-wrap gap-4 shrink-0">
            <Link
              href="/match"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100"
            >
              Start AI Match <ArrowRight size={14} />
            </Link>
            <AffiliateButton label="Browse All Retreats" variant="outline" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-4xl px-4 py-16 md:px-6">
        <SectionHeader title="Frequently Asked Questions" align="center" as="h2" />
        <div className="mt-8">
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
            <h3 className="text-lg font-semibold text-stone-900 mb-5">
              Explore More Yoga Retreats in Turkey
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
              {config.related.map((link) => (
                <Link
                  key={link.slug}
                  href={getTop10Href(link.slug)}
                  className="flex items-center gap-2 text-stone-700 hover:text-stone-900 transition font-medium"
                >
                  <ArrowRight size={14} className="text-stone-400" /> {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
