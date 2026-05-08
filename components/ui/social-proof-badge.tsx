import { Flame } from "lucide-react";

interface SocialProofBadgeProps {
  recentBookings: number;
  personality?: string;
  tags?: string[];
}

export function SocialProofBadge({ recentBookings, personality, tags }: SocialProofBadgeProps) {
  const isTrending = recentBookings >= 10;
  const fitLabel = tags?.[0];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-medium text-amber-800">
        <Flame size={11} className="text-amber-500" />
        {recentBookings} booked this month
      </span>
      {isTrending && (
        <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-medium text-orange-700">
          🔥 Trending
        </span>
      )}
      {personality && (
        <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs text-stone-600">
          {personality}
        </span>
      )}
      {fitLabel && (
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs text-emerald-700">
          {fitLabel}
        </span>
      )}
    </div>
  );
}
