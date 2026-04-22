export function UrgencyBadge({ type }: { type: "viewing" | "limited" | "popular" }) {
  const configs = {
    viewing: {
      text: "3 people viewing now",
      className: "bg-amber-50 text-amber-800 border-amber-200"
    },
    limited: {
      text: "Limited spots left",
      className: "bg-red-50 text-red-700 border-red-200"
    },
    popular: {
      text: "Most popular this season",
      className: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  };

  const { text, className } = configs[type];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
      {text}
    </span>
  );
}
