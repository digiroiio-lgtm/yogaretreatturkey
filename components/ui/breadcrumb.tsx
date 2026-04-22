import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://yogaretreatsturkey.com${item.href}` } : {})
    }))
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-stone-500">
        {items.map((item, index) => (
          <span key={item.label} className="flex items-center gap-1">
            {index > 0 && <ChevronRight size={12} className="flex-shrink-0" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-stone-800 transition">
                {item.label}
              </Link>
            ) : (
              <span className="text-stone-800 font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
