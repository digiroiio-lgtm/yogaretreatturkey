"use client";

import { RetreatCard } from "@/components/retreats/retreat-card";
import { retreats } from "@/lib/data/retreats";
import { getUpcomingMonth } from "@/lib/retreats";
import { Retreat } from "@/lib/types";
import { Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

type Preferences = {
  dates: string;
  budget: string;
  vibe: string;
  level: string;
  room: string;
  healing: string;
  setting: string;
};

const initial: Preferences = {
  dates: "May 2026",
  budget: "2000",
  vibe: "wellness reset",
  level: "Beginner",
  room: "Private",
  healing: "Breathwork",
  setting: "Beach"
};

export function AIMatchInterface() {
  const [prefs, setPrefs] = useState<Preferences>(initial);
  const [submitted, setSubmitted] = useState(false);

  const matches = useMemo(() => {
    const budget = Number(prefs.budget) || 3500;
    return retreats
      .map((retreat) => {
        let score = 0;
        if (retreat.price <= budget) score += 2;
        if (retreat.tags.some((tag) => tag.toLowerCase().includes(prefs.vibe.toLowerCase()))) score += 2;
        if (retreat.suitableFor.includes(prefs.level) || retreat.suitableFor.includes("All levels")) score += 1;
        if (retreat.wellnessExtras.some((extra) => extra.toLowerCase().includes(prefs.healing.toLowerCase()))) score += 1;
        if (
          (prefs.setting === "Beach" && retreat.tags.includes("beachfront")) ||
          (prefs.setting === "Nature / Ubud-style calm" && retreat.tags.includes("healing")) ||
          (prefs.setting === "Social / Canggu-style energy" && retreat.tags.includes("community"))
        ) {
          score += 1;
        }
        if (retreat.dates.some((date) => getUpcomingMonth(date) === prefs.dates)) score += 1;

        return { retreat, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.retreat);
  }, [prefs]);

  const update = (key: keyof Preferences, value: string) => setPrefs((prev) => ({ ...prev, [key]: value }));

  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-stone-200 bg-white p-6">
        <div className="mb-5 flex items-center gap-2 text-stone-900">
          <Sparkles size={18} />
          <p className="font-medium">AI Concierge Preferences</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm text-stone-600">
            Dates
            <select className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2" value={prefs.dates} onChange={(e) => update("dates", e.target.value)}>
              <option>May 2026</option>
              <option>June 2026</option>
              <option>July 2026</option>
              <option>August 2026</option>
              <option>September 2026</option>
            </select>
          </label>
          <label className="text-sm text-stone-600">
            Budget (USD)
            <input className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2" value={prefs.budget} onChange={(e) => update("budget", e.target.value)} />
          </label>
          <label className="text-sm text-stone-600">
            Retreat vibe
            <select className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2" value={prefs.vibe} onChange={(e) => update("vibe", e.target.value)}>
              <option>wellness reset</option>
              <option>surf + yoga</option>
              <option>women’s retreat</option>
              <option>couples retreat</option>
              <option>detox / healing</option>
            </select>
          </label>
          <label className="text-sm text-stone-600">
            Skill level
            <select className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2" value={prefs.level} onChange={(e) => update("level", e.target.value)}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </label>
          <label className="text-sm text-stone-600">
            Room type
            <select className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2" value={prefs.room} onChange={(e) => update("room", e.target.value)}>
              <option>Private</option>
              <option>Shared</option>
            </select>
          </label>
          <label className="text-sm text-stone-600">
            Healing focus
            <select className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2" value={prefs.healing} onChange={(e) => update("healing", e.target.value)}>
              <option>Breathwork</option>
              <option>Sound healing</option>
              <option>Massage</option>
              <option>Detox support</option>
            </select>
          </label>
          <label className="text-sm text-stone-600 md:col-span-2">
            Setting preference
            <select className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2" value={prefs.setting} onChange={(e) => update("setting", e.target.value)}>
              <option>Beach</option>
              <option>Nature / Ubud-style calm</option>
              <option>Social / Canggu-style energy</option>
            </select>
          </label>
        </div>

        <button
          className="mt-6 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
          onClick={() => setSubmitted(true)}
        >
          Generate best matches
        </button>
      </div>

      {submitted ? (
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Best matches for you</p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {matches.map((retreat: Retreat) => (
              <RetreatCard key={retreat.id} retreat={retreat} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
