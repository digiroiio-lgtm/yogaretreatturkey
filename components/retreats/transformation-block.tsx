import { ArrowRight } from "lucide-react";

interface TransformationBlockProps {
  fromState: string;
  toState: string;
  emotionalOutcome: string;
}

export function TransformationBlock({ fromState, toState, emotionalOutcome }: TransformationBlockProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <div className="flex-1 rounded-2xl border border-red-100 bg-red-50 p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400">You arrive feeling</p>
          <p className="text-sm text-red-900">{fromState}</p>
        </div>
        <ArrowRight size={22} className="mx-auto shrink-0 text-stone-400" />
        <div className="flex-1 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-emerald-500">You leave feeling</p>
          <p className="text-sm text-emerald-900">{toState}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-stone-600 italic">{emotionalOutcome}</p>
    </div>
  );
}
