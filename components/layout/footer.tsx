import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200 bg-[#f5f1ea]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="space-y-3 md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Saffron Retreats</p>
          <p className="max-w-md text-sm leading-relaxed text-stone-700">
            Curated luxury yoga retreats in Turkey, paired with AI-powered matching and trusted hosts.
          </p>
        </div>
        <div className="space-y-2 text-sm text-stone-700">
          <p className="font-medium text-stone-900">Explore</p>
          <Link href="/retreats" className="block hover:text-stone-900">
            Retreats
          </Link>
          <Link href="/match" className="block hover:text-stone-900">
            AI Concierge
          </Link>
          <Link href="/hosts" className="block hover:text-stone-900">
            Host with us
          </Link>
        </div>
        <div className="space-y-2 text-sm text-stone-700">
          <p className="font-medium text-stone-900">Legal</p>
          <Link href="/privacy" className="block hover:text-stone-900">
            Privacy Policy
          </Link>
          <Link href="/terms" className="block hover:text-stone-900">
            Terms
          </Link>
          <Link href="/cancellation-policy" className="block hover:text-stone-900">
            Refund & Cancellation
          </Link>
        </div>
      </div>
    </footer>
  );
}
