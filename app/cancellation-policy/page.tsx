import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Refund and cancellation policy placeholder for Yoga Retreat Turkey bookings."
};

export default function CancellationPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-semibold text-stone-900">Refund & Cancellation Policy</h1>
      <p className="mt-4 text-stone-600">
        Deposit, refund windows, and host-specific cancellation rules will be clearly shown on each retreat before checkout. This is a placeholder pending final legal approval.
      </p>
    </div>
  );
}
