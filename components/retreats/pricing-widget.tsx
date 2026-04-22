import { formatPrice } from "@/lib/retreats";

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
      <p className="mt-1 text-sm text-stone-600">for {duration} days</p>
      <div className="mt-5 space-y-2">
        <button className="w-full rounded-full bg-stone-900 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
          Reserve now
        </button>
        <button className="w-full rounded-full border border-stone-300 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-100">
          Enquire via email
        </button>
        <button className="w-full rounded-full border border-emerald-300 bg-emerald-50 py-3 text-sm font-medium text-emerald-800 transition hover:bg-emerald-100">
          WhatsApp concierge
        </button>
      </div>
      <p className="mt-4 text-xs text-stone-500">No hidden fees. Response guaranteed within 24 hours.</p>
    </aside>
  );
}
