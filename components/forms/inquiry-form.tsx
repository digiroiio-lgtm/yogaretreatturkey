export function InquiryForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={`space-y-3 ${compact ? "" : "rounded-3xl border border-stone-200 bg-white p-6"}`}>
      <input
        className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
        type="text"
        placeholder="Full name"
      />
      <input
        className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
        type="email"
        placeholder="Email"
      />
      <textarea
        className="h-24 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
        placeholder="Tell us what kind of retreat you are looking for"
      />
      <button className="w-full rounded-full bg-stone-900 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
        Send enquiry
      </button>
    </form>
  );
}
