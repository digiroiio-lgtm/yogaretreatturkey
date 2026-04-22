import Link from "next/link";
import { CITIES, CATEGORIES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200 bg-[#f5f1ea]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 md:grid-cols-5 md:px-6">
        <div className="space-y-3 md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Yoga Retreats Turkey</p>
          <p className="max-w-md text-sm leading-relaxed text-stone-700">
            Curated luxury yoga retreats in Turkey, paired with AI-powered matching and trusted hosts.
            Over 2,300 verified reviews. Free cancellation available.
          </p>
          <div className="pt-2">
            <a
              href="https://bookretreats.com/?a=fwfncwdpylkdjfqemjuf"
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
      <div className="border-t border-stone-200 px-4 py-4 md:px-6">
        <p className="text-xs text-stone-400 text-center">
          © 2026 Yoga Retreats Turkey. Retreat links are affiliate partnerships with BookRetreats.
        </p>
      </div>
    </footer>
  );
}
