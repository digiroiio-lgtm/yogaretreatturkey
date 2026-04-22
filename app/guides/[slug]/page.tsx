import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { getGuideBySlug, getAllGuides } from "@/lib/blog";
import { getFeaturedRetreats } from "@/lib/retreats";
import { Clock } from "lucide-react";
import Image from "next/image";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Not Found" };
  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${slug}` }
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const featured = getFeaturedRetreats().slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    image: [`https://yogaretreatturkey.com${guide.coverImage}`],
    publisher: {
      "@type": "Organization",
      name: "Yoga Retreat Turkey",
      url: "https://yogaretreatturkey.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 md:px-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: guide.title }
        ]}
      />

      <div className="relative mt-6 h-64 overflow-hidden rounded-3xl md:h-80">
        <Image
          src={guide.coverImage}
          alt={guide.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>

      <div className="mt-8">
        <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
          Retreat Guide
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">{guide.title}</h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-stone-500">
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {guide.readTime} min read
          </span>
        </div>
        <p className="mt-5 text-lg leading-relaxed text-stone-600">{guide.excerpt}</p>
      </div>

      <div className="mt-10 rounded-3xl border border-stone-200 bg-stone-50 p-6">
        <p className="text-sm font-medium text-stone-700 mb-3">Ready to book a retreat?</p>
        <p className="text-sm text-stone-600 mb-4">
          Browse 2,300+ verified yoga retreats in Turkey with free cancellation options.
        </p>
        <AffiliateButton label="Browse Retreats on BookRetreats" />
      </div>

      <article className="mt-10 space-y-10">
        {guide.content.map((section, i) => (
          <section key={i}>
            <h2 className="text-2xl font-semibold text-stone-900 mb-3">{section.heading}</h2>
            <p className="text-stone-700 leading-relaxed">{section.body}</p>
          </section>
        ))}
      </article>

      <div className="mt-12 rounded-3xl border border-stone-900 bg-stone-900 p-8 text-white">
        <h3 className="text-2xl font-semibold">Find Your Retreat</h3>
        <p className="mt-2 text-stone-300">
          Use our AI concierge to match your dates, budget, and style — shortlist in under a minute.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <AffiliateButton label="Book on BookRetreats" variant="outline" />
          <Link
            href="/match"
            className="inline-flex items-center rounded-full border border-stone-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            AI Match Me
          </Link>
        </div>
      </div>

      {guide.faqs.length > 0 && (
        <section className="mt-14">
          <h3 className="text-2xl font-semibold text-stone-900 mb-6">Frequently Asked Questions</h3>
          <FAQAccordion items={guide.faqs} />
        </section>
      )}

      <section className="mt-14">
        <h3 className="text-2xl font-semibold text-stone-900 mb-6">Recommended Retreats</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
      </section>

      <div className="mt-8">
        <Link href="/guides" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition">
          ← Back to Guides
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
