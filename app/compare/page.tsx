import type { Metadata } from "next";
import { CompareClient } from "@/app/compare/compare-client";

export const metadata: Metadata = {
  title: "Compare Retreats Side by Side — Yoga Retreat Turkey",
  description: "Compare Turkey's top yoga retreats across wellness scores, price, duration, trust badges, and more.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  return <CompareClient />;
}
