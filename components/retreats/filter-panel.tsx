"use client";

import { Dispatch, SetStateAction } from "react";

export type Filters = {
  location: string;
  duration: string;
  maxPrice: number;
  yogaStyle: string;
  accommodation: string;
  wellness: string;
  level: string;
  month: string;
};

type FilterPanelProps = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  locations: string[];
  styles: string[];
  accommodations: string[];
  wellnessExtras: string[];
  months: string[];
};

const baseSelect =
  "w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-800 outline-none focus:border-stone-400";

export function FilterPanel({
  filters,
  setFilters,
  locations,
  styles,
  accommodations,
  wellnessExtras,
  months
}: FilterPanelProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1 block text-xs uppercase tracking-wide text-stone-500">Location</label>
        <select
          className={baseSelect}
          value={filters.location}
          onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
        >
          <option value="all">All locations</option>
          {locations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase tracking-wide text-stone-500">Duration</label>
        <select
          className={baseSelect}
          value={filters.duration}
          onChange={(e) => setFilters((prev) => ({ ...prev, duration: e.target.value }))}
        >
          <option value="all">Any length</option>
          <option value="short">Up to 5 days</option>
          <option value="medium">6-7 days</option>
          <option value="long">8+ days</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase tracking-wide text-stone-500">
          Max price (${filters.maxPrice})
        </label>
        <input
          type="range"
          min={1200}
          max={3500}
          step={50}
          value={filters.maxPrice}
          className="w-full accent-stone-700"
          onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase tracking-wide text-stone-500">Yoga style</label>
        <select
          className={baseSelect}
          value={filters.yogaStyle}
          onChange={(e) => setFilters((prev) => ({ ...prev, yogaStyle: e.target.value }))}
        >
          <option value="all">All styles</option>
          {styles.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase tracking-wide text-stone-500">
          Accommodation style
        </label>
        <select
          className={baseSelect}
          value={filters.accommodation}
          onChange={(e) => setFilters((prev) => ({ ...prev, accommodation: e.target.value }))}
        >
          <option value="all">All accommodation</option>
          {accommodations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase tracking-wide text-stone-500">Wellness extras</label>
        <select
          className={baseSelect}
          value={filters.wellness}
          onChange={(e) => setFilters((prev) => ({ ...prev, wellness: e.target.value }))}
        >
          <option value="all">All extras</option>
          {wellnessExtras.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase tracking-wide text-stone-500">Skill level</label>
        <select
          className={baseSelect}
          value={filters.level}
          onChange={(e) => setFilters((prev) => ({ ...prev, level: e.target.value }))}
        >
          <option value="all">All levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="All levels">All levels</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase tracking-wide text-stone-500">Upcoming month</label>
        <select
          className={baseSelect}
          value={filters.month}
          onChange={(e) => setFilters((prev) => ({ ...prev, month: e.target.value }))}
        >
          <option value="all">Any month</option>
          {months.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={() =>
          setFilters({
            location: "all",
            duration: "all",
            maxPrice: 3500,
            yogaStyle: "all",
            accommodation: "all",
            wellness: "all",
            level: "all",
            month: "all"
          })
        }
        className="w-full rounded-full border border-stone-300 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
      >
        Reset filters
      </button>
    </div>
  );
}
