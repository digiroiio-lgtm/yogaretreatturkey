import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/inquiry-form";

export const metadata: Metadata = {
  title: "Host & Partner with Us",
  description: "Join a premium marketplace trusted by global wellness travelers seeking curated retreat experiences in Turkey.",
  alternates: { canonical: "/hosts" },
  robots: { index: false, follow: true }
};

const metrics = [
  { label: "Avg. qualified enquiry rate", value: "37%" },
  { label: "Global high-intent audience", value: "42 countries" },
  { label: "Median response SLA", value: "< 24h" }
];

export default function HostsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-7">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Host / Partner</p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900">Fill your retreat with aligned, premium-fit guests.</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-stone-600">
            We help high-quality retreat brands convert better through trust-first listing design, AI-powered matching, and concierge-supported enquiries.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-stone-200 bg-white p-5">
                <p className="text-2xl font-semibold text-stone-900">{metric.value}</p>
                <p className="mt-1 text-sm text-stone-600">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-6 text-sm text-stone-700">
          <h2 className="mb-3 text-xl font-semibold text-stone-900">Why partner with us</h2>
            <ul className="mt-3 space-y-2">
              <li>• Premium brand presentation that protects your pricing power</li>
              <li>• Better guest-fit through AI + concierge qualification</li>
              <li>• Transparent lead tracking and conversion support</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-stone-900">List your retreat</h3>
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
