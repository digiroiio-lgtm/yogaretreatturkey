import { Heart } from "lucide-react";

interface FitTagsProps {
  tags: string[];
  limit?: number;
}

export function FitTags({ tags, limit }: FitTagsProps) {
  const displayed = limit ? tags.slice(0, limit) : tags;
  return (
    <div className="flex flex-wrap gap-2">
      {displayed.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 border border-emerald-200"
        >
          <Heart size={10} className="fill-emerald-500 text-emerald-500" />
          {tag}
        </span>
      ))}
    </div>
  );
}
