import type { Metadata } from "next";
import { RetreatsListing } from "@/components/retreats/retreats-listing";
import { retreats } from "@/lib/data/retreats";

export const metadata: Metadata = {
  title: "All Yoga Retreats in Turkey | Curated Listings 2026/2027",
  description:
    "Browse all curated yoga retreats in Turkey. Filter by location, style, budget, and date. 4.7 avg rating · 2,300+ verified reviews. Free cancellation available.",
  alternates: { canonical: "/retreats" }
};

export default function RetreatsPage() {
  return <RetreatsListing retreats={retreats} />;
}
