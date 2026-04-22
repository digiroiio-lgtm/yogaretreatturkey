import Link from "next/link";
import { CITIES, CATEGORIES } from "@/lib/constants";
import { getTop10Href } from "@/lib/data/top10-pages";

const FOOTER_TOP10_LINKS = [
  { href: "/top-10-yoga-retreats-turkey", label: "Top 10 Turkey" },
  { href: getTop10Href("bodrum"), label: "Top 10 Bodrum" },
  { href: getTop10Href("fethiye"), label: "Top 10 Fethiye" },
  { href: getTop10Href("antalya"), label: "Top 10 Antalya" },
  { href: getTop10Href("cappadocia"), label: "Top 10 Cappadocia" },
  { href: getTop10Href("kas"), label: "Top 10 Kaş" },
  { href: getTop10Href("datca"), label: "Top 10 Datça" },
  { href: getTop10Href("gocek"), label: "Top 10 Göcek" },
  { href: getTop10Href("oludeniz"), label: "Top 10 Ölüdeniz" },
  { href: getTop10Href("luxury"), label: "Luxury Retreats" },
  { href: getTop10Href("affordable"), label: "Affordable Retreats" },
  { href: getTop10Href("womens"), label: "Women's Retreats" },
  { href: getTop10Href("surf"), label: "Surf + Yoga Retreats" },
  { href: getTop10Href("detox"), label: "Detox Retreats" },
  { href: getTop10Href("digital-nomad"), label: "Digital Nomad Retreats" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200 bg-[#f5f1ea]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 md:grid-cols-5 md:px-6">
        <div className="space-y-3 md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Yoga Retreat Turkey</p>
          <p className="max-w-md text-sm leading-relaxed text-stone-700">
            Curated luxury yoga retreats in Turkey, paired with AI-powered matching and trusted hosts.
            Over 2,300 verified reviews. Free cancellation available.
          </p>
          <div className="pt-2">
            <a
              href="https://bookretreats.com/s/yoga-retreats/turkey?a=fwfncwdpylkdjfqemjuf"
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex items-center rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Browse All Retreats
            </a>
          </div>
        </div>

        <div className="space-y-2 text-sm text-stone-700">
          <p className="font-medium text-stone-900">Destinations</p>
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/yoga-retreats/turkey/${city.slug}`}
              className="block hover:text-stone-900"
            >
              {city.name}
            </Link>
          ))}
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/yoga-retreats/turkey/${cat.slug}`}
              className="block hover:text-stone-900"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <div className="space-y-2 text-sm text-stone-700">
          <p className="font-medium text-stone-900">Explore</p>
          <Link href="/retreats" className="block hover:text-stone-900">All Retreats</Link>
          <Link href="/yoga-retreats/turkey" className="block hover:text-stone-900">Turkey Hub</Link>
          <Link href="/blog" className="block hover:text-stone-900">Blog</Link>
          <Link href="/guides" className="block hover:text-stone-900">Guides</Link>
          <Link href="/match" className="block hover:text-stone-900">AI Concierge</Link>
          <Link href="/hosts" className="block hover:text-stone-900">Host with us</Link>
        </div>

        <div className="space-y-2 text-sm text-stone-700">
          <p className="font-medium text-stone-900">Legal</p>
          <Link href="/privacy" className="block hover:text-stone-900">Privacy Policy</Link>
          <Link href="/terms" className="block hover:text-stone-900">Terms</Link>
          <Link href="/cancellation-policy" className="block hover:text-stone-900">Refund & Cancellation</Link>
          <Link href="/about" className="block hover:text-stone-900">About</Link>
          <Link href="/contact" className="block hover:text-stone-900">Contact</Link>
        </div>
      </div>
      {/* TOP 10 GUIDES STRIP */}
      <div className="border-t border-stone-200 px-4 py-8 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-4">
          Top 10 Yoga Retreat Guides
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600">
          {FOOTER_TOP10_LINKS.map((link) => (
            <Link key={link.href + link.label} href={link.href} className="hover:text-stone-900 transition">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-stone-200 px-4 py-4 md:px-6">
        <p className="text-xs text-stone-400 text-center">
          © 2026 Yoga Retreat Turkey. Retreat links are affiliate partnerships with BookRetreats.
        </p>
      </div>
    </footer>
  );
}
