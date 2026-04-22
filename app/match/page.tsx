import type { Metadata } from "next";
import { AIMatchInterface } from "@/components/forms/ai-match-interface";

export const metadata: Metadata = {
  title: "AI Concierge Match",
  description: "Share your preferences and receive personalized retreat matches powered by our AI concierge logic.",
  alternates: { canonical: "/match" }
};

export default function MatchPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-stone-500">AI Match Concierge</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">Your ideal retreat, intelligently shortlisted.</h1>
      <p className="mt-3 max-w-3xl text-stone-600">
        Answer a few preference prompts and receive a polished shortlist optimized by budget, dates, style, and wellness intent.
      </p>
      <div className="mt-8">
        <AIMatchInterface />
      </div>
    </div>
  );
}
