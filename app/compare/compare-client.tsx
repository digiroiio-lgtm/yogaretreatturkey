"use client";

import { retreats } from "@/lib/data/retreats";
import { Retreat } from "@/lib/types";
import { WellnessScoreBar } from "@/components/ui/wellness-score-bar";
import { FitTags } from "@/components/ui/fit-tags";
import { TrustBadges } from "@/components/ui/trust-badges";
import { formatPrice } from "@/lib/retreats";
import { useState } from "react";
import Link from "next/link";

export function CompareClient() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= 3) return prev;
      return [...prev, slug];
    });
  };

  const compared: Retreat[] = selected
    .map((slug) => retreats.find((r) => r.slug === slug))
    .filter((r): r is Retreat => !!r);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 space-y-10">
      <div className="space-y-3 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Retreat Comparison</p>
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">Compare Retreats Side by Side</h1>
        <p className="text-stone-600">Select 2–3 retreats to compare across all wellness dimensions.</p>
      </div>

      {/* Selector */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-stone-700">Select retreats to compare ({selected.length}/3)</p>
        <div className="flex flex-wrap gap-2">
          {retreats.map((r) => {
            const isSelected = selected.includes(r.slug);
            const isDisabled = !isSelected && selected.length >= 3;
            return (
              <button
                key={r.slug}
                onClick={() => toggle(r.slug)}
                disabled={isDisabled}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isSelected
                    ? "border-stone-800 bg-stone-900 text-white"
                    : isDisabled
                    ? "border-stone-200 text-stone-400 cursor-not-allowed"
                    : "border-stone-300 text-stone-700 hover:border-stone-500"
                }`}
              >
                {r.title}
              </button>
            );
          })}
        </div>
      </div>

      {compared.length >= 2 && (
        <div className="space-y-8">
          {/* Overview */}
          <div className={`grid gap-4 ${compared.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {compared.map((r) => (
              <div key={r.slug} className="rounded-3xl border border-stone-200 bg-white p-5 space-y-2">
                <p className="font-semibold text-stone-900">{r.title}</p>
                <p className="text-sm text-stone-500">{r.locationArea}</p>
                <p className="text-xl font-bold text-stone-900">{formatPrice(r.price, r.currency)}</p>
                <p className="text-xs text-stone-500">{r.duration} days · {r.accommodationType}</p>
                <FitTags tags={r.fitTags} limit={2} />
                <Link href={`/retreats/${r.slug}`} className="inline-flex text-xs text-stone-500 hover:text-stone-900 underline transition">
                  View details →
                </Link>
              </div>
            ))}
          </div>

          {/* Wellness Scores */}
          <div className="rounded-3xl border border-stone-200 bg-white p-6 space-y-6">
            <h2 className="text-xl font-semibold text-stone-900">Wellness scores</h2>
            {(["calm", "luxury", "transformation", "socialEnergy", "natureImmersion", "detoxDepth", "digitalDetox", "sleepRecovery"] as const).map((key) => {
              const labels: Record<string, string> = {
                calm: "Calm & stillness",
                luxury: "Luxury",
                transformation: "Transformation",
                socialEnergy: "Social energy",
                natureImmersion: "Nature immersion",
                detoxDepth: "Detox depth",
                digitalDetox: "Digital detox",
                sleepRecovery: "Sleep recovery",
              };
              const colorMap: Record<string, string> = {
                calm: "bg-sky-500", luxury: "bg-amber-500", transformation: "bg-purple-500",
                socialEnergy: "bg-rose-400", natureImmersion: "bg-emerald-500", detoxDepth: "bg-teal-500",
                digitalDetox: "bg-indigo-500", sleepRecovery: "bg-violet-500",
              };
              return (
                <div key={key}>
                  <p className="mb-2 text-sm font-medium text-stone-700">{labels[key]}</p>
                  <div className={`grid gap-3 ${compared.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                    {compared.map((r) => (
                      <div key={r.slug}>
                        <p className="mb-1 text-xs text-stone-500">{r.title.split(" ").slice(0, 2).join(" ")}</p>
                        <WellnessScoreBar label="" score={r.wellnessScores[key]} color={colorMap[key]} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Details table */}
          <div className="overflow-hidden rounded-3xl border border-stone-200">
            <table className="w-full text-sm">
              <thead className="bg-stone-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-stone-700">Detail</th>
                  {compared.map((r) => (
                    <th key={r.slug} className="px-4 py-3 text-left font-semibold text-stone-700">{r.title.split(" ").slice(0, 2).join(" ")}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Price", render: (r: Retreat) => formatPrice(r.price, r.currency) },
                  { label: "Duration", render: (r: Retreat) => `${r.duration} days` },
                  { label: "Group size", render: (r: Retreat) => r.groupSize },
                  { label: "Best season", render: (r: Retreat) => r.bestSeason },
                  { label: "Wi-Fi", render: (r: Retreat) => r.wifiQuality },
                  { label: "Digital nomad", render: (r: Retreat) => r.digitalNomadSuitable ? "✓ Yes" : "✗ No" },
                  { label: "Personality", render: (r: Retreat) => r.personality },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-medium text-stone-700">{row.label}</td>
                    {compared.map((r) => (
                      <td key={r.slug} className="px-4 py-3 text-stone-600">{row.render(r)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Trust badges */}
          <div className={`grid gap-4 ${compared.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {compared.map((r) => (
              <div key={r.slug} className="rounded-3xl border border-stone-200 bg-white p-5 space-y-3">
                <p className="font-semibold text-stone-900 text-sm">{r.title.split(" ").slice(0, 2).join(" ")}</p>
                <TrustBadges badges={r.trustBadges} />
              </div>
            ))}
          </div>
        </div>
      )}

      {compared.length < 2 && (
        <div className="rounded-3xl border border-dashed border-stone-300 bg-stone-50 p-10 text-center space-y-2">
          <p className="text-stone-500 font-medium">Select at least 2 retreats above to start comparing</p>
          <p className="text-sm text-stone-400">Up to 3 retreats can be compared at once</p>
        </div>
      )}
    </div>
  );
}
