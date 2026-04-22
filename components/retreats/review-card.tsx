import { Star } from "lucide-react";

type ReviewCardProps = {
  quote: string;
  author: string;
  retreat: string;
};

export function ReviewCard({ quote, author, retreat }: ReviewCardProps) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-5">
      <div className="mb-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} size={14} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-stone-700">“{quote}”</p>
      <p className="mt-4 text-sm font-medium text-stone-900">{author}</p>
      <p className="text-xs text-stone-500">{retreat}</p>
    </article>
  );
}
