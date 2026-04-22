export function LoadingSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="h-80 animate-pulse rounded-3xl bg-stone-200/70" />
      ))}
    </div>
  );
}
