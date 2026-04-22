import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { getRetreatsByCity, getRetreatsByCategory, getFeaturedRetreats } from "@/lib/retreats";
import { CITIES, RETREAT_TYPES } from "@/lib/constants";

type Props = { params: Promise<{ segment: string; type: string }> };

export async function generateStaticParams() {
  return CITIES.flatMap((city) =>
    RETREAT_TYPES.map((rtype) => ({ segment: city.slug, type: rtype.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { segment, type } = await params;
  const city = CITIES.find((c) => c.slug === segment);
  const retreatType = RETREAT_TYPES.find((t) => t.slug === type);

  if (!city || !retreatType) return { title: "Not Found" };

  return {
    title: `${retreatType.name} in ${city.name}, Turkey | 2026 Guide`,
    description: `Find the best ${retreatType.name.toLowerCase()} in ${city.name}, Turkey. Verified retreats, transparent pricing, and AI-matched recommendations. Free cancellation options.`,
    alternates: { canonical: `/yoga-retreats/turkey/${segment}/${type}` }
  };
}

export default async function CityTypePage({ params }: Props) {
  const { segment, type } = await params;
  const city = CITIES.find((c) => c.slug === segment);
  const retreatType = RETREAT_TYPES.find((t) => t.slug === type);

  if (!city || !retreatType) notFound();

  const cityRetreats = getRetreatsByCity(segment);
  const categoryRetreats = retreatType.categoryTag
    ? getRetreatsByCategory(retreatType.categoryTag)
    : [];

  const combined = cityRetreats.filter((r) =>
    categoryRetreats.length === 0 ? true : categoryRetreats.some((c) => c.id === r.id)
  );

  const displayRetreats = combined.length ? combined : getFeaturedRetreats().slice(0, 4);

  const pageTitle = `${retreatType.name} in ${city.name}, Turkey`;

  const faqs = [
    {
      question: `What is a ${retreatType.name.toLowerCase()} in ${city.name}?`,
      answer: `A ${retreatType.name.toLowerCase()} in ${city.name} combines ${city.name}'s unique landscape and culture with a structured yoga and wellness program. ${city.description}`
    },
    {
      question: `How much does a ${retreatType.name.toLowerCase()} in ${city.name} cost?`,
      answer:
        "Prices vary by duration and accommodation type. Expect $1,200–$3,200 per person for 4–8 nights including accommodation and meals. Luxury options may be higher."
    },
    {
      question: `When is the best time for a ${retreatType.name.toLowerCase()} in ${city.name}?`,
      answer:
        segment === "cappadocia"
          ? "April through June and September through October offer the clearest skies and most comfortable temperatures for Cappadocia retreats."
          : "May through October is the prime season. June and September offer the best balance of weather, availability, and value."
    },
    {
      question: `Are ${retreatType.name.toLowerCase()}s in ${city.name} suitable for beginners?`,
      answer:
        "Many programs welcome all levels. Check each retreat's 'suitable for' tags — beginners should look for Hatha, Slow Flow, or Yin-focused programs."
    }
  ];

  const relatedCityLinks = CITIES.filter((c) => c.slug !== segment).map((c) => ({
    label: `${retreatType.name} in ${c.name}`,
    href: `/yoga-retreats/turkey/${c.slug}/${type}`
  }));

  const relatedTypeLinks = RETREAT_TYPES.filter((t) => t.slug !== type).slice(0, 3).map((t) => ({
    label: `${t.name} in ${city.name}`,
    href: `/yoga-retreats/turkey/${segment}/${t.slug}`
  }));

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: pageTitle,
    itemListElement: displayRetreats.map((r, i) => ({
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
            { label: "Turkey", href: "/yoga-retreats/turkey" },
            { label: city.name, href: `/yoga-retreats/turkey/${segment}` },
            { label: retreatType.name }
          ]}
        />
      </div>

      <section className="bg-[#f5f0ea] border-b border-stone-200 mt-4">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:py-18">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
            {city.name} · {retreatType.name}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            {pageTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Discover the finest {retreatType.name.toLowerCase()} options in {city.name}, Turkey.{" "}
            {city.description} Verified programs with free cancellation options.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AffiliateButton label={`Book in ${city.name}`} size="lg" />
            <Link
              href="/match"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-8 py-4 text-base font-medium text-stone-800 transition hover:bg-stone-100"
            >
              Get AI-Matched
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
        <p className="text-stone-500 text-sm mb-6">
          {combined.length} matched retreat{combined.length !== 1 ? "s" : ""}
          {combined.length === 0 && " — showing top-rated alternatives while we add more"}
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayRetreats.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <AffiliateButton label="See All Options on BookRetreats" size="lg" />
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
          <h3 className="text-lg font-semibold text-stone-900 mb-4">
            {retreatType.name} in Other Turkish Cities
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedCityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-stone-900 mt-8 mb-4">
            Other Retreat Types in {city.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedTypeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
        <h3 className="text-2xl font-semibold text-stone-900 mb-8 text-center">
          Frequently Asked Questions
        </h3>
        <FAQAccordion items={faqs} />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </div>
  );
}
