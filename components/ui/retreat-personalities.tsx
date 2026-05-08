"use client";

import { useState } from "react";
import Link from "next/link";

const PERSONALITIES = [
  {
    id: "quiet-healer",
    emoji: "🌿",
    title: "The Quiet Healer",
    description: "You need silence, nature, and a nervous system reset. You're running on empty.",
  },
  {
    id: "executive-reset",
    emoji: "🎯",
    title: "The Executive Reset",
    description: "High performer, but depleted. You need structure, luxury, and genuine rest.",
  },
  {
    id: "creative-nomad",
    emoji: "🎨",
    title: "The Creative Nomad",
    description: "You're seeking depth, philosophy, and a place that inspires new thinking.",
  },
  {
    id: "burned-out-founder",
    emoji: "⚡",
    title: "The Burned-Out Founder",
    description: "Work and wellness need to coexist — you want rhythm, not withdrawal.",
  },
  {
    id: "emotional-recovery",
    emoji: "💙",
    title: "The Emotional Recovery Escape",
    description: "You're carrying something heavy. You need space to release, not perform.",
  },
  {
    id: "luxury-seeker",
    emoji: "✨",
    title: "The Luxury Seeker",
    description: "You want the finest experience — beautiful, exclusive, and effortlessly elevated.",
  },
  {
    id: "social-explorer",
    emoji: "🌊",
    title: "The Social Explorer",
    description: "Adventure, connection, and playful movement. You want to feel alive again.",
  },
];

export function RetreatPersonalities() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Find Your Retreat Match</p>
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900">Which retreat personality are you?</h2>
        <p className="text-stone-600 max-w-xl mx-auto">Select the archetype that resonates most. We&apos;ll point you to retreats that genuinely fit.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PERSONALITIES.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(selected === p.id ? null : p.id)}
            className={`rounded-3xl border p-5 text-left transition ${
              selected === p.id
                ? "border-stone-800 bg-stone-900 text-white"
                : "border-stone-200 bg-white text-stone-800 hover:border-stone-400"
            }`}
          >
            <span className="text-2xl">{p.emoji}</span>
            <p className={`mt-2 font-semibold text-sm ${selected === p.id ? "text-white" : "text-stone-900"}`}>{p.title}</p>
            <p className={`mt-1 text-xs leading-relaxed ${selected === p.id ? "text-stone-300" : "text-stone-500"}`}>{p.description}</p>
          </button>
        ))}
      </div>
      {selected && (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-center space-y-3">
          <p className="text-sm text-emerald-800 font-medium">
            Great. Let our AI concierge find retreats that match{" "}
            <strong>{PERSONALITIES.find((p) => p.id === selected)?.title}</strong> exactly.
          </p>
          <Link
            href="/match"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            Get My AI Match →
          </Link>
        </div>
      )}
    </div>
  );
}
