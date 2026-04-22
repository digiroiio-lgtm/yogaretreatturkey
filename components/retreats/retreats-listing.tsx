"use client";

import { EmptyState } from "@/components/ui/empty-state";
import { FilterPanel, Filters } from "@/components/retreats/filter-panel";
import { RetreatCard } from "@/components/retreats/retreat-card";
import { getUpcomingMonth } from "@/lib/retreats";
import { Retreat } from "@/lib/types";
import { SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

const initialFilters: Filters = {
  location: "all",
  duration: "all",
  maxPrice: 3500,
  yogaStyle: "all",
  accommodation: "all",
  wellness: "all",
  level: "all",
  month: "all"
};

export function RetreatsListing({ retreats }: { retreats: Retreat[] }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFilters, setMobileFilters] = useState(false);

  const options = useMemo(
    () => ({
      locations: [...new Set(retreats.map((retreat) => retreat.locationArea))],
      styles: [...new Set(retreats.map((retreat) => retreat.yogaStyle))],
      accommodations: [...new Set(retreats.map((retreat) => retreat.accommodationType))],
      wellnessExtras: [...new Set(retreats.flatMap((retreat) => retreat.wellnessExtras))],
      months: [...new Set(retreats.flatMap((retreat) => retreat.dates.map((date) => getUpcomingMonth(date))))]
    }),
    [retreats]
  );

  const filtered = useMemo(() => {
    const result = retreats.filter((retreat) => {
      const durationMatch =
        filters.duration === "all" ||
        (filters.duration === "short" && retreat.duration <= 5) ||
        (filters.duration === "medium" && retreat.duration >= 6 && retreat.duration <= 7) ||
        (filters.duration === "long" && retreat.duration >= 8);

      return (
        (filters.location === "all" || retreat.locationArea === filters.location) &&
        durationMatch &&
        retreat.price <= filters.maxPrice &&
        (filters.yogaStyle === "all" || retreat.yogaStyle === filters.yogaStyle) &&
        (filters.accommodation === "all" || retreat.accommodationType === filters.accommodation) &&
        (filters.wellness === "all" || retreat.wellnessExtras.includes(filters.wellness)) &&
        (filters.level === "all" || retreat.suitableFor.includes(filters.level) || retreat.suitableFor.includes("All levels")) &&
        (filters.month === "all" || retreat.dates.some((date) => getUpcomingMonth(date) === filters.month))
      );
    });

    return result.sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "upcoming") return new Date(a.dates[0]).getTime() - new Date(b.dates[0]).getTime();
      if (sortBy === "featured") return Number(b.featured) - Number(a.featured);
      return 0;
    });
  }, [filters, retreats, sortBy]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 md:px-6">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">Curated Turkey Retreats</h1>
          <p className="mt-2 max-w-2xl text-stone-600">
            Discover premium retreats by style, budget, and timing — each verified for quality, safety, and host trust.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm font-medium md:hidden"
            onClick={() => setMobileFilters(true)}
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
          <select
            className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Sort: Featured</option>
            <option value="price">Sort: Price (low to high)</option>
            <option value="rating">Sort: Highest rated</option>
            <option value="upcoming">Sort: Upcoming date</option>
          </select>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[280px_1fr]">
        <aside className="hidden h-fit rounded-3xl border border-stone-200 bg-white p-5 md:block">
          <FilterPanel {...options} filters={filters} setFilters={setFilters} />
        </aside>

        <section className="space-y-5">
          <p className="text-sm text-stone-500">{filtered.length} retreats found</p>
          {filtered.length ? (
            <div className="grid gap-6 md:grid-cols-2">
              {filtered.map((retreat) => (
                <RetreatCard key={retreat.id} retreat={retreat} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </section>
      </div>

      {mobileFilters ? (
        <div className="fixed inset-0 z-50 bg-black/40 p-4 md:hidden">
          <div className="mx-auto h-full max-w-sm overflow-y-auto rounded-3xl bg-[#f9f6f1] p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-medium text-stone-900">Filters</p>
              <button onClick={() => setMobileFilters(false)} className="rounded-full border border-stone-300 p-2">
                <X size={16} />
              </button>
            </div>
            <FilterPanel {...options} filters={filters} setFilters={setFilters} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
