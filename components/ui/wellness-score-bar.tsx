interface WellnessScoreBarProps {
  label: string;
  score: number; // 1-10
  color?: string;
}

export function WellnessScoreBar({ label, score, color = "bg-stone-700" }: WellnessScoreBarProps) {
  const pct = (score / 10) * 100;
  return (
    <div className="flex items-center gap-3">
      <span className="w-36 shrink-0 text-sm text-stone-600">{label}</span>
      <div className="flex-1 overflow-hidden rounded-full bg-stone-100 h-2">
        <div className={`${color} h-2 rounded-full transition-all`} style={{ width: `${pct}%` }} />
      </div>
      <span className="w-8 text-right text-sm font-medium text-stone-800">{score}/10</span>
    </div>
  );
}
