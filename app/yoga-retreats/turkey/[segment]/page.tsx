import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { getRetreatsByCity, getRetreatsByCategory, getFeaturedRetreats } from "@/lib/retreats";
import { CITIES, CATEGORIES } from "@/lib/constants";

type Props = { params: Promise<{ segment: string }> };

function getSegmentData(segment: string) {
  const city = CITIES.find((c) => c.slug === segment);
  if (city) return { type: "city" as const, data: city };
  const category = CATEGORIES.find((c) => c.slug === segment);
  if (category) return { type: "category" as const, data: category };
  return null;
}

export async function generateStaticParams() {
  return [
    ...CITIES.map((c) => ({ segment: c.slug })),
    ...CATEGORIES.map((c) => ({ segment: c.slug }))
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { segment } = await params;
  const found = getSegmentData(segment);
  if (!found) return { title: "Not Found" };

  const { type, data } = found;
  if (type === "city") {
    return {
      title: `Yoga Retreats in ${data.name}, Turkey | 2026 Curated Guide`,
      description: `Discover the best yoga retreats in ${data.name}, Turkey. ${data.description} Verified reviews, free cancellation, AI-matched recommendations.`
    };
  }
  return {
    title: `${data.name} in Turkey | Curated Yoga Retreats 2026`,
    description: `Browse curated ${data.name.toLowerCase()} in Turkey. ${data.description} Verified reviews, transparent pricing, and expert curation.`
  };
}

export default async function SegmentPage({ params }: Props) {
  const { segment } = await params;
  const found = getSegmentData(segment);
  if (!found) notFound();

  const { type, data } = found;

  const retreats =
    type === "city"
      ? getRetreatsByCity(segment)
      : getRetreatsByCategory((data as (typeof CATEGORIES)[number]).tag);

  const fallback = getFeaturedRetreats().slice(0, 4);
  const displayRetreats = retreats.length ? retreats : fallback;

  const cityName = type === "city" ? data.name : undefined;
  const categoryName = type === "category" ? data.name : undefined;
  const pageTitle =
    type === "city"
      ? `Yoga Retreats in ${data.name}, Turkey`
      : `${data.name} in Turkey`;

  const relatedLinks =
    type === "city"
      ? CATEGORIES.map((c) => ({
          label: `${c.name} in ${data.name}`,
          href: `/yoga-retreats/turkey/${segment}/${c.slug}`
        }))
      : CITIES.map((c) => ({
          label: `${data.name} in ${c.name}`,
          href: `/yoga-retreats/turkey/${c.slug}/${segment}`
        }));

  const faqs =
    type === "city"
      ? [
          {
            question: `When is the best time to visit ${data.name} for a yoga retreat?`,
            answer: `${data.name} retreats run predominantly April through October. ${segment === "cappadocia" ? "Spring and autumn offer the most comfortable temperatures and clearest balloon-flight conditions." : "May, June, September, and October offer the perfect balance of warmth and availability."}`
          },
          {
            question: `How do I get to ${data.name} for a yoga retreat?`,
            answer: `${segment === "antalya" ? "Antalya Airport (AYT) has direct international connections from major European cities." : segment === "cappadocia" ? "Fly to Kayseri (ASR) or Nevşehir (NAV) airport, or take the overnight bus from Istanbul." : "Fly to Dalaman (DLM) or Bodrum-Milas (BJV) airport depending on your exact destination."}`
          },
          {
            question: `What types of yoga retreats are available in ${data.name}?`,
            answer: `${data.name} offers a range of retreat styles including luxury villa programs, detox immersions, women's retreats, and beginners' programs. Check our curated listings for current availability.`
          }
        ]
      : [
          {
            question: `What defines a ${categoryName?.toLowerCase()} in Turkey?`,
            answer:
              type === "category" && segment === "luxury"
                ? "Luxury retreats in Turkey feature private or boutique accommodation, small group sizes (6–12 guests), Michelin-level catering, and highly credentialled teachers. Many include airport transfers, spa treatments, and bespoke programming."
                : type === "category" && segment === "detox"
                ? "Detox retreats in Turkey use a structured combination of therapeutic yoga, clinically-informed nutrition, infrared sauna, and functional wellness assessments. Many source organic produce from local farms."
                : "Women's retreats in Turkey provide safe, supportive environments for female practitioners. They often incorporate hormone wellness education, somatic movement, journaling, and ceremonial practices alongside yoga."
          },
          {
            question: `How much do ${categoryName?.toLowerCase()} cost in Turkey?`,
            answer:
              type === "category" && segment === "luxury"
                ? "Luxury yoga retreats in Turkey range from $2,200 to $3,500+ per person for 5–8 nights, reflecting boutique accommodation, premium service ratios, and high-calibre teachers."
                : "Specialist retreat programs in Turkey average $1,600–$2,400 per person for 5–7 nights including accommodation, meals, and the specific program activities."
          },
          {
            question: "Are these retreats available year-round?",
            answer:
              "Most Turkey retreats run April through October. Some year-round options exist in Antalya and Cappadocia. Check specific retreat dates before booking."
          }
        ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Yoga Retreats", href: "/yoga-retreats" },
    { label: "Turkey", href: "/yoga-retreats/turkey" },
    { label: data.name }
  ];

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
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="bg-[#f5f0ea] border-b border-stone-200 mt-4">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:py-18">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
            Turkey · {type === "city" ? "Destination Guide" : "Retreat Type"}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            {pageTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">{data.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AffiliateButton label={`Book a ${type === "city" ? cityName : categoryName} Retreat`} size="lg" />
            <Link
              href="/match"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-8 py-4 text-base font-medium text-stone-800 transition hover:bg-stone-100"
            >
              AI Match Me
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
        <p className="text-stone-500 text-sm mb-6">
          {retreats.length} retreat{retreats.length !== 1 ? "s" : ""} found
          {retreats.length === 0 && " — showing featured picks while we expand this destination"}
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayRetreats.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <AffiliateButton label="See More Retreats on BookRetreats" size="lg" />
          <p className="text-xs text-stone-400">
            Booking links are affiliate partnerships with BookRetreats.
          </p>
        </div>
      </section>

      {relatedLinks.length > 0 && (
        <section className="border-t border-stone-200 bg-stone-50">
          <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
            <h2 className="text-lg font-semibold text-stone-900 mb-4">
              {type === "city" ? "Retreat Types in " + data.name : "This Category by City"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedLinks.map((link) => (
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
      )}

      <section className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
        <h2 className="text-2xl font-semibold text-stone-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
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
