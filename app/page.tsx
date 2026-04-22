import { FAQAccordion } from "@/components/ui/faq-accordion";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { ReviewCard } from "@/components/retreats/review-card";
import { SectionHeader } from "@/components/ui/section-header";
import { retreatStyles, trustPoints } from "@/lib/constants";
import { getFeaturedRetreats } from "@/lib/retreats";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "How curated are the retreats?",
    answer:
      "Every listing is manually reviewed for host quality, accommodation standards, teaching credentials, and guest support before going live."
  },
  {
    question: "Can I reserve now and confirm details later?",
    answer:
      "Yes. You can place a soft reservation, then finalize room type and transfer preferences with our concierge team."
  },
  {
    question: "Do you only list Turkey retreats?",
    answer:
      "Turkey is our launch market. Our architecture is built to expand into other premium wellness destinations next."
  }
];

const featured = getFeaturedRetreats().slice(0, 4);

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-12 md:grid-cols-2 md:items-center md:px-6 md:pt-20">
        <div className="space-y-7">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Luxury Yoga Retreat Discovery</p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-6xl">
            Find your next retreat with precision, beauty, and calm certainty.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-stone-600">
            Yoga Retreats Turkey curates Turkey’s most refined yoga and wellness stays — then matches you in minutes with an AI concierge designed for real preferences.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/retreats"
              className="inline-flex items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Explore Retreats
            </Link>
            <Link
              href="/match"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
            >
              Get Matched
            </Link>
          </div>
        </div>
        <div className="relative h-[440px] overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.4)]">
          <Image
            src="/images/retreat-1.svg"
            alt="Luxury yoga retreat in Turkey"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.15em] text-stone-500">This month’s top booking</p>
            <p className="text-lg font-semibold text-stone-900">Aegean Clarity Retreat · Bodrum</p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white/70">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-5 md:grid-cols-4 md:px-6">
          {trustPoints.map((point) => (
            <p key={point} className="text-sm text-stone-700">
              {point}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
        <SectionHeader
          eyebrow="Find your retreat style"
          title="Curated paths for different intentions"
          description="Browse by emotional goal, travel rhythm, and wellness depth."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {retreatStyles.map((style) => (
            <Link
              key={style}
              href="/retreats"
              className="group rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-lg font-medium capitalize text-stone-900">{style}</p>
              <p className="mt-1 text-sm text-stone-500">Curated options available</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
        <SectionHeader
          eyebrow="Featured retreats"
          title="High-demand experiences chosen by our editors"
          description="Premium stays with exceptional hosts, service standards, and guest outcomes."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-16 md:grid-cols-3 md:px-6">
        <div className="rounded-3xl border border-stone-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-stone-900">Curated, not crowded</h3>
          <p className="mt-2 text-sm text-stone-600">We focus on quality over listing volume so your decision stays clear.</p>
        </div>
        <div className="rounded-3xl border border-stone-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-stone-900">AI + human concierge</h3>
          <p className="mt-2 text-sm text-stone-600">Machine speed with hospitality judgment for better-fit recommendations.</p>
        </div>
        <div className="rounded-3xl border border-stone-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-stone-900">Premium support end-to-end</h3>
          <p className="mt-2 text-sm text-stone-600">From first shortlist to transfer details, we stay with you throughout.</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 md:flex md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-stone-500">
              <Sparkles size={14} /> AI Concierge
            </p>
            <h3 className="text-3xl font-semibold tracking-tight text-stone-900">Tell us your preferences. Get your shortlist in under a minute.</h3>
            <p className="mt-3 text-stone-600">
              Dates, budget, vibe, room style, and wellness focus — we instantly map to your best-fit retreats.
            </p>
          </div>
          <Link
            href="/match"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700 md:mt-0"
          >
            Start AI Match <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
        <SectionHeader
          eyebrow="Guest stories"
          title="Why discerning travelers keep coming back"
          align="center"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <ReviewCard quote="The curation quality is exceptional. It felt private, polished, and deeply restorative." author="A. Morgan" retreat="Aegean Clarity Retreat" />
          <ReviewCard quote="AI matching was surprisingly accurate — first recommendation was exactly my style and budget." author="R. Khan" retreat="Nomad Balance Residency" />
          <ReviewCard quote="Everything from transfer to host communication felt seamless and high trust." author="L. Foster" retreat="Cappadocia Breath & Silence" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6">
        <div className="rounded-3xl border border-stone-200 bg-stone-900 p-8 text-white">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-300">For hosts and retreat brands</p>
          <h3 className="mt-2 text-3xl font-semibold">Reach premium global guests without discounting your brand.</h3>
          <p className="mt-3 max-w-2xl text-stone-300">List once, get qualified enquiries, and scale your occupancy with better fit guests.</p>
          <Link href="/hosts" className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900">
            Partner with us
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 md:px-6">
        <SectionHeader title="Questions, answered elegantly" align="center" />
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 md:px-6">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 text-center">
          <h3 className="text-3xl font-semibold tracking-tight text-stone-900">Ready to choose your retreat season?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-stone-600">
            Browse hand-picked options now or let our AI concierge prepare your personalized shortlist.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/retreats" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white">
              Explore Retreats
            </Link>
            <Link href="/match" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800">
              Get Matched
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Yoga Retreats Turkey",
            url: "https://saffronretreats.com",
            description: "Curated luxury yoga retreats in Turkey with AI matching."
          })
        }}
      />
    </div>
  );
}
