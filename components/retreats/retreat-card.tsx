"use client";

import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/retreats";
import { Retreat } from "@/lib/types";
import { MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function RetreatCard({ retreat }: { retreat: Retreat }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_12px_30px_-24px_rgba(0,0,0,0.35)]"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={retreat.images[0]}
          alt={retreat.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
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
          <Link href={`/retreats/${retreat.slug}`} className="font-medium text-stone-900 hover:text-stone-700">
            View retreat
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
