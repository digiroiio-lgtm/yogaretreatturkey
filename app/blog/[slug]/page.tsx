import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { getFeaturedRetreats } from "@/lib/retreats";
import { Clock, Calendar, User } from "lucide-react";
import Image from "next/image";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [{ url: post.coverImage }],
      type: "article",
      publishedTime: post.publishedAt
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const featured = getFeaturedRetreats().slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: [`https://yogaretreatturkey.com${post.coverImage}`],
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role
    },
    publisher: {
      "@type": "Organization",
      name: "Yoga Retreat Turkey",
      url: "https://yogaretreatturkey.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
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
          { label: "Blog", href: "/blog" },
          { label: post.title }
        ]}
      />

      <div className="relative mt-6 h-64 overflow-hidden rounded-3xl md:h-80">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>

      <div className="mt-8">
        <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
          {post.category}
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">{post.title}</h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-stone-500">
          <span className="flex items-center gap-1.5">
            <User size={14} /> {post.author.name} · {post.author.role}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />{" "}
            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {post.readTime} min read
          </span>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-stone-600">{post.excerpt}</p>
      </div>

      <div className="mt-10 rounded-3xl border border-stone-200 bg-stone-50 p-6">
        <p className="text-sm font-medium text-stone-700 mb-3">Ready to book?</p>
        <p className="text-sm text-stone-600 mb-4">
          Browse 2,300+ verified yoga retreats in Turkey — with free cancellation options.
        </p>
        <AffiliateButton label="Browse Retreats on BookRetreats" />
      </div>

      <article className="mt-10 space-y-10">
        {post.content.map((section, i) => (
          <section key={i}>
            <h2 className="text-2xl font-semibold text-stone-900 mb-3">{section.heading}</h2>
            <p className="text-stone-700 leading-relaxed">{section.body}</p>
          </section>
        ))}
      </article>

      <div className="mt-12 rounded-3xl border border-stone-900 bg-stone-900 p-8 text-white">
        <h3 className="text-2xl font-semibold">Find Your Perfect Retreat</h3>
        <p className="mt-2 text-stone-300">
          Use our AI-powered concierge to get a personalised shortlist in under a minute.
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

      {post.faqs.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={post.faqs} />
        </section>
      )}

      <div className="mt-10 rounded-3xl border border-stone-200 bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 flex-shrink-0 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-semibold text-lg">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-stone-900">{post.author.name}</p>
            <p className="text-sm text-stone-500">{post.author.role}</p>
            <p className="mt-2 text-sm text-stone-600">{post.author.bio}</p>
          </div>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-stone-900 mb-6">Featured Retreats</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
      </section>

      <div className="mt-8">
        <Link href="/blog" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition">
          ← Back to Blog
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
