import { formatPrice } from "@/lib/retreats";
import { AFFILIATE_URL } from "@/lib/affiliate";
import { Shield, Clock } from "lucide-react";

export function PricingWidget({
  price,
  currency,
  duration
}: {
  price: number;
  currency: string;
  duration: number;
}) {
  return (
    <aside className="sticky top-24 rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.35)]">
      <p className="text-sm text-stone-500">From</p>
      <p className="text-3xl font-semibold text-stone-900">{formatPrice(price, currency)}</p>
      <p className="mt-1 text-sm text-stone-600">for {duration} days · all meals included</p>

      <div className="mt-2 flex items-center gap-2 rounded-xl bg-amber-50 px-3 py-2 text-xs text-amber-800">
        <Clock size={12} />
        <span>3 people viewing this retreat now</span>
      </div>

      <div className="mt-5 space-y-2">
        <a
          href={AFFILIATE_URL}
          target="_blank"
          rel="nofollow sponsored"
          className="block w-full rounded-full bg-stone-900 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-700"
        >
          Reserve Now
        </a>
        <a
          href={AFFILIATE_URL}
          target="_blank"
          rel="nofollow sponsored"
          className="block w-full rounded-full border border-stone-300 py-3 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
        >
          Check Availability
        </a>
        <a
          href={AFFILIATE_URL}
          target="_blank"
          rel="nofollow sponsored"
          className="block w-full rounded-full border border-emerald-300 bg-emerald-50 py-3 text-center text-sm font-medium text-emerald-800 transition hover:bg-emerald-100"
        >
          View on BookRetreats
        </a>
      </div>

      <div className="mt-4 space-y-1.5 text-xs text-stone-500">
        <p className="flex items-center gap-1.5"><Shield size={11} /> No hidden fees</p>
        <p className="flex items-center gap-1.5"><Shield size={11} /> Free cancellation available</p>
        <p className="flex items-center gap-1.5"><Shield size={11} /> Response guaranteed within 24 h</p>
      </div>
    </aside>
  );
}
