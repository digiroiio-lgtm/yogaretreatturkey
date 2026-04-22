import type { Metadata } from "next";
import { RetreatsListing } from "@/components/retreats/retreats-listing";
import { retreats } from "@/lib/data/retreats";

export const metadata: Metadata = {
  title: "Retreat Listings",
  description: "Explore curated luxury yoga retreats across Turkey with premium filters and fast enquiry paths."
};

export default function RetreatsPage() {
  return <RetreatsListing retreats={retreats} />;
}
