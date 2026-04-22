"use client";

import { Badge } from "@/components/ui/badge";
import { UrgencyBadge } from "@/components/ui/urgency-badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { formatPrice } from "@/lib/retreats";
import { Retreat } from "@/lib/types";
import { AFFILIATE_URL } from "@/lib/affiliate";
import { MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function RetreatCard({ retreat }: { retreat: Retreat }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_12px_30px_-24px_rgba(0,0,0,0.35)]"
    >
      <div className="relative h-52 overflow-hidden">
        <OptimizedImage
          src={retreat.images[0]}
          alt={`${retreat.title} yoga retreat in ${retreat.locationArea} Turkey`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {retreat.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-700 backdrop-blur">
            Editor&apos;s pick
          </span>
        )}
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-stone-900">
              <Link href={`/retreats/${retreat.slug}`}>{retreat.title}</Link>
            </h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-stone-600">
              <MapPin size={14} /> {retreat.locationArea}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-stone-500">from</p>
            <p className="text-lg font-semibold text-stone-900">
              {formatPrice(retreat.price, retreat.currency)}
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-stone-600">{retreat.shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          <Badge>{retreat.yogaStyle}</Badge>
          <Badge>{retreat.duration} days</Badge>
          <Badge>{retreat.accommodationType}</Badge>
        </div>

        <div className="flex items-center justify-between text-sm">
          <p className="flex items-center gap-1 text-stone-700">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            {retreat.rating.toFixed(2)} ({retreat.reviewCount})
          </p>
          <UrgencyBadge type={retreat.featured ? "viewing" : "limited"} />
        </div>

        <div className="flex gap-2 pt-1">
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored"
            className="flex-1 rounded-full bg-stone-900 py-2 text-center text-sm font-medium text-white transition hover:bg-stone-700"
          >
            Check Availability
          </a>
          <Link
            href={`/retreats/${retreat.slug}`}
            className="flex-1 rounded-full border border-stone-300 py-2 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
