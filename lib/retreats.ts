import { retreats } from "@/lib/data/retreats";
import { Retreat } from "@/lib/types";

export const getFeaturedRetreats = () => retreats.filter((retreat) => retreat.featured);

export const getRetreatBySlug = (slug: string) => retreats.find((retreat) => retreat.slug === slug);

export const getSimilarRetreats = (current: Retreat) =>
  retreats
    .filter((retreat) => retreat.slug !== current.slug)
    .filter(
      (retreat) =>
        retreat.tags.some((tag) => current.tags.includes(tag)) ||
        retreat.locationArea === current.locationArea
    )
    .slice(0, 3);

export const getUpcomingMonth = (date: string) =>
  new Date(date).toLocaleString("en-US", { month: "long", year: "numeric" });

export const formatPrice = (price: number, currency: string) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(price);
