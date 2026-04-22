import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy placeholder for Yoga Retreat Turkey.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-semibold text-stone-900">Privacy Policy</h1>
      <p className="mt-4 text-stone-600">
        We collect only necessary booking and enquiry details to provide recommendations, reservations, and support. This placeholder policy will be replaced with full legal copy before launch.
      </p>
    </div>
  );
}
