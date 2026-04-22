"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItem = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <article key={item.question} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="font-medium text-stone-900">{item.question}</span>
              <ChevronDown className={`h-4 w-4 text-stone-500 transition ${open ? "rotate-180" : ""}`} />
            </button>
            {open ? <p className="px-5 pb-5 text-sm leading-relaxed text-stone-600">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
