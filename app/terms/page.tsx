import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms", description: "Terms and conditions placeholder for Saffron Retreats." };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-semibold text-stone-900">Terms & Conditions</h1>
      <p className="mt-4 text-stone-600">
        By using this platform, guests agree to booking, payment, and host communication terms. This is a launch placeholder and will be replaced with full legal terms.
      </p>
    </div>
  );
}
