import { ShieldCheck } from "lucide-react";

const BADGE_COLORS: Record<string, string> = {
  "Verified Host": "bg-blue-50 text-blue-800 border-blue-200",
  "Solo Female Safe": "bg-purple-50 text-purple-800 border-purple-200",
  "Medical Reviewed": "bg-red-50 text-red-800 border-red-200",
  "Airport Pickup Confirmed": "bg-amber-50 text-amber-800 border-amber-200",
  "Flexible Cancellation": "bg-green-50 text-green-800 border-green-200",
};

interface TrustBadgesProps {
  badges: string[];
  limit?: number;
}

export function TrustBadges({ badges, limit }: TrustBadgesProps) {
  const displayed = limit ? badges.slice(0, limit) : badges;
  return (
    <div className="flex flex-wrap gap-2">
      {displayed.map((badge) => (
        <span
          key={badge}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${BADGE_COLORS[badge] ?? "bg-stone-50 text-stone-700 border-stone-200"}`}
        >
          <ShieldCheck size={11} />
          {badge}
        </span>
      ))}
    </div>
  );
}
