"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const perks = [
  "AI retreat recommendations personalised to you",
  "Seasonal wellness guide for Turkey",
  "Burnout recovery score + retreat shortlist",
];

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="rounded-3xl bg-stone-900 p-8 text-white md:p-10">
      {submitted ? (
        <div className="space-y-3 text-center">
          <div className="flex justify-center">
            <CheckCircle2 size={48} className="text-emerald-400" />
          </div>
          <h3 className="text-2xl font-semibold">You&apos;re on the list.</h3>
          <p className="text-stone-300">Your personalised retreat list and wellness guide will arrive shortly.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Free Retreat Guide</p>
            <h3 className="text-2xl font-semibold md:text-3xl">Get Your Personalised Retreat List</h3>
            <p className="text-stone-300">
              Tell us your email and we&apos;ll send your curated shortlist based on the latest Turkey retreat offerings.
            </p>
          </div>
          <ul className="space-y-2">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2 text-sm text-stone-300">
                <CheckCircle2 size={15} className="shrink-0 text-emerald-400" />
                {perk}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-stone-700 bg-stone-800 px-5 py-3 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-400"
            >
              Send My List
            </button>
          </form>
          <p className="text-xs text-stone-500">No spam. Unsubscribe anytime.</p>
        </div>
      )}
    </div>
  );
}
