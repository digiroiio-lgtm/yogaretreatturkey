import type { Metadata } from "next";
import { retreats } from "@/lib/data/retreats";
import { TOP10_PAGES, filterRetreatsForPage } from "@/lib/data/top10-pages";
import { Top10Template } from "@/components/top10/top10-template";

const config = TOP10_PAGES.find((p) => p.slug === "antalya")!;
const filteredRetreats = filterRetreatsForPage(config, retreats);

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  alternates: { canonical: "/top-10-yoga-retreats-antalya" }
};

export default function Page() {
  return <Top10Template config={config} retreats={filteredRetreats} />;
}
