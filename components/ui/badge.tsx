import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-xs font-medium text-stone-700">
      {children}
    </span>
  );
}
