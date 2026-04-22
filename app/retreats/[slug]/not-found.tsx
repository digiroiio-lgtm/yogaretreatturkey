import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold text-stone-900">Retreat not found</h1>
      <p className="mt-3 text-stone-600">This retreat may be unavailable. Browse our current curation instead.</p>
      <Link href="/retreats" className="mt-6 inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white">
        Explore all retreats
      </Link>
    </div>
  );
}
