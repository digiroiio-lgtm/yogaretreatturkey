import { AFFILIATE_URL } from "@/lib/affiliate";
import { ExternalLink } from "lucide-react";

type AffiliateButtonProps = {
  label?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  size?: "sm" | "md" | "lg";
};

const variantClasses = {
  primary: "bg-stone-900 text-white hover:bg-stone-700",
  secondary: "bg-emerald-600 text-white hover:bg-emerald-500",
  outline: "border border-stone-300 bg-white text-stone-800 hover:bg-stone-100"
};

const sizeClasses = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base"
};

export function AffiliateButton({
  label = "Book Now",
  variant = "primary",
  className = "",
  size = "md"
}: AffiliateButtonProps) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="nofollow sponsored"
      className={`inline-flex items-center gap-2 rounded-full font-medium transition ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {label}
      <ExternalLink size={14} />
    </a>
  );
}
