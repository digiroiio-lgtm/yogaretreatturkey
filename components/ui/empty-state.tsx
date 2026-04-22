import Link from "next/link";

export function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-stone-300 bg-stone-50/80 p-8 text-center">
      <h3 className="text-xl font-semibold text-stone-900">No retreats match these filters</h3>
      <p className="mt-2 text-stone-600">Try broadening your dates, budget, or style preferences.</p>
      <Link
        href="/match"
        className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
      >
        Let AI Concierge Pick for You
      </Link>
    </div>
  );
}
