import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PricingWidget } from "@/components/retreats/pricing-widget";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { ReviewCard } from "@/components/retreats/review-card";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { UrgencyBadge } from "@/components/ui/urgency-badge";
import { Badge } from "@/components/ui/badge";
import { getRetreatBySlug, getSimilarRetreats, getUpcomingMonth } from "@/lib/retreats";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const retreat = getRetreatBySlug(slug);

  if (!retreat) {
    return {
      title: "Retreat Not Found"
    };
  }

  return {
    title: retreat.title,
    description: retreat.shortDescription,
    openGraph: {
      title: retreat.title,
      description: retreat.shortDescription,
      images: retreat.images.slice(0, 1).map((url) => ({ url }))
    }
  };
}

export default async function RetreatDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const retreat = getRetreatBySlug(slug);

  if (!retreat) notFound();

  const similar = getSimilarRetreats(retreat);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Retreats", href: "/retreats" },
          { label: retreat.title }
        ]}
      />

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="relative h-80 overflow-hidden rounded-3xl border border-stone-200 md:col-span-2 md:h-[420px]">
          <Image src={retreat.images[0]} alt={retreat.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" priority />
        </div>
        <div className="grid gap-4">
          {retreat.images.slice(1, 3).map((image) => (
            <div key={image} className="relative h-[200px] overflow-hidden rounded-3xl border border-stone-200">
              <Image src={image} alt={retreat.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_330px]">
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-900">{retreat.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-stone-600">
              <p className="inline-flex items-center gap-1">
                <MapPin size={15} /> {retreat.locationArea}
              </p>
              <p>{retreat.duration} days</p>
              <p className="inline-flex items-center gap-1">
                <Star size={14} className="fill-amber-400 text-amber-400" /> {retreat.rating.toFixed(2)} ({retreat.reviewCount})
              </p>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">{retreat.fullDescription}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {retreat.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <UrgencyBadge type="viewing" />
              <UrgencyBadge type="limited" />
              <AffiliateButton label="Book Now on BookRetreats" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-stone-900">Retreat highlights</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {retreat.highlights.map((item) => (
                <li key={item} className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-stone-900">Daily schedule</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200 bg-white">
              {retreat.schedule.map((item) => (
                <div key={`${item.time}-${item.activity}`} className="grid grid-cols-[90px_1fr] border-b border-stone-100 px-4 py-3 text-sm last:border-0">
                  <p className="font-medium text-stone-900">{item.time}</p>
                  <p className="text-stone-600">{item.activity}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-stone-900">What&apos;s included</h2>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                {retreat.inclusions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-stone-900">Not included</h2>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                {retreat.exclusions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-stone-900">Instructor & host profile</h2>
            <div className="mt-4 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-stone-200">
                <Image src={retreat.hostProfile.avatar} alt={retreat.hostProfile.name} fill className="object-cover" sizes="64px" />
              </div>
              <div>
                <p className="font-medium text-stone-900">{retreat.hostProfile.name}</p>
                <p className="text-sm text-stone-500">{retreat.hostProfile.role}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">{retreat.hostProfile.bio}</p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-stone-900">Accommodation</h2>
            <p className="mt-2 text-stone-600">{retreat.accommodationType} with curated room categories for private and shared preferences.</p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-stone-900">Map</h2>
            <div className="mt-4 grid h-48 place-items-center rounded-2xl border border-dashed border-stone-300 bg-stone-50 text-sm text-stone-500">
              Interactive map placeholder — {retreat.locationArea}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-stone-900">Guest reviews</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <ReviewCard quote="Refined hospitality and genuine teaching quality. Every detail felt considered." author="S. Parker" retreat={retreat.title} />
              <ReviewCard quote="I booked with confidence because the listing was transparent and beautifully organized." author="J. Chen" retreat={retreat.title} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-stone-900">Similar retreats</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {similar.map((item) => (
                <RetreatCard key={item.id} retreat={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <PricingWidget price={retreat.price} currency={retreat.currency} duration={retreat.duration} />
          <div className="rounded-3xl border border-stone-200 bg-white p-5">
            <p className="text-sm font-medium text-stone-900">Upcoming dates</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              {retreat.dates.map((date) => (
                <li key={date}>{getUpcomingMonth(date)}</li>
              ))}
            </ul>
          </div>
          <InquiryForm compact />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: retreat.title,
            description: retreat.shortDescription,
            offers: {
              "@type": "Offer",
              price: retreat.price,
              priceCurrency: retreat.currency
            },
            provider: {
              "@type": "Organization",
              name: "Yoga Retreat Turkey",
              url: "https://yogaretreatturkey.com"
            }
          })
        }}
      />
    </div>
  );
}
