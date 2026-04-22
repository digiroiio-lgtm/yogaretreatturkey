import { LoadingSkeleton } from "@/components/ui/loading-skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <LoadingSkeleton count={6} />
    </div>
  );
}
