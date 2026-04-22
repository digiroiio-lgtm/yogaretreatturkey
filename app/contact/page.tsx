import type { Metadata } from "next";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Speak with our concierge team for retreat recommendations, booking questions, and host partnerships."
};

const items = [
  {
    question: "How quickly do you respond?",
    answer: "Our concierge replies in under 24 hours, usually sooner for active retreat dates."
  },
  {
    question: "Can I book through WhatsApp?",
    answer: "Yes, you can complete enquiry and reservation steps via WhatsApp with our team."
  }
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Contact</p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900">We help you decide with confidence.</h1>
          <p className="text-stone-600">
            Ask about dates, retreat fit, room options, or host credentials. We’ll guide you with clear recommendations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-800">
              WhatsApp concierge
            </Link>
            <Link href={`mailto:${siteConfig.contact.email}`} className="rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-medium text-stone-800">
              {siteConfig.contact.email}
            </Link>
          </div>
          <FAQAccordion items={items} />
        </div>
        <InquiryForm />
      </div>
    </div>
  );
}
