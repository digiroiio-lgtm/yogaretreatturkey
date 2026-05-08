import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Turkey for a Yoga Retreat? — Europe's Wellness Reset Capital",
  description:
    "Discover why Turkey became Europe's premier yoga retreat destination — 40% cheaper than Bali, 3.5hrs from London, 320 sunny days, and world-class wellness infrastructure.",
  alternates: { canonical: "/why-turkey" },
};

const stats = [
  { stat: "40%", label: "cheaper than equivalent Bali retreats" },
  { stat: "3.5 hrs", label: "direct flight from London" },
  { stat: "320+", label: "sunny days per year" },
  { stat: "2,300+", label: "verified guest reviews" },
];

const months = [
  { month: "April", temp: "18–22°C", note: "Ideal start. Quiet, green, warm." },
  { month: "May", temp: "22–27°C", note: "Peak shoulder season. Perfect." },
  { month: "June", temp: "27–32°C", note: "Hot but stunning. Early mornings ideal." },
  { month: "July", temp: "30–36°C", note: "Peak season. Vibrant energy." },
  { month: "August", temp: "30–36°C", note: "Hottest month. Sea is warm." },
  { month: "September", temp: "26–30°C", note: "Best overall month. Warm sea, fewer crowds." },
  { month: "October", temp: "20–25°C", note: "Shoulder season magic. Quiet and golden." },
  { month: "November", temp: "14–18°C", note: "Cappadocia season. Inland retreats shine." },
];

const quotes = [
  { text: "I compared Bali, Portugal, and Turkey. Turkey offered twice the quality for the same price — and the hospitality was unmatched.", author: "Emma R., London" },
  { text: "The medical wellness program in Izmir changed my relationship with my body. I wouldn't have expected that from a holiday destination.", author: "Marc D., Paris" },
  { text: "Turkey surprised me. The culture, the food, the sea — it accelerated my retreat experience in ways I didn't anticipate.", author: "Priya S., Dubai" },
];

export default function WhyTurkeyPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 space-y-20">
      <section className="max-w-3xl space-y-5">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Why Turkey</p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Why Turkey Became Europe&apos;s Wellness Reset Capital
        </h1>
        <p className="text-xl leading-relaxed text-stone-600">
          In five years, Turkey went from overlooked to unmissable on the wellness travel map. Here&apos;s why the world&apos;s most discerning retreat-goers are choosing it over Bali, Portugal, and Thailand.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ stat, label }) => (
          <div key={stat} className="rounded-3xl border border-stone-200 bg-white p-6 text-center">
            <p className="text-3xl font-bold text-stone-900">{stat}</p>
            <p className="mt-1 text-sm text-stone-500">{label}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-stone-900">The Mediterranean advantage</h2>
          <p className="text-stone-600 leading-relaxed">
            Turkish cuisine is one of the healthiest on Earth. Fresh Aegean herbs, cold-pressed olive oil, legumes, fish, and seasonal produce form the backbone of every retreat meal — not as a dietary programme, but as a cultural inheritance.
          </p>
          <p className="text-stone-600 leading-relaxed">
            When retreat guests eat well without trying, the nervous system relaxes differently. The food itself becomes part of the healing.
          </p>
        </div>
        <div className="rounded-3xl bg-stone-50 border border-stone-200 p-8 space-y-3">
          <p className="font-semibold text-stone-900">A typical retreat meal</p>
          <ul className="space-y-2 text-sm text-stone-600">
            {["Meze of grilled aubergine, olive oil, and fresh herbs", "Aegean fish with lemon and wild greens", "Seasonal fruit, walnuts, and local honey", "Herbal tea infusions from Anatolian mountains"].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-stone-400 mt-0.5">•</span>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl bg-stone-900 text-white p-8 md:p-12 space-y-6">
        <h2 className="text-3xl font-semibold">What $2,000 gets you in Turkey vs elsewhere</h2>
        <div className="grid gap-6 md:grid-cols-3 text-sm">
          {[
            { label: "Turkey ($2,000)", items: ["7-night luxury boutique villa", "Twice-daily yoga with master teacher", "Chef-prepared therapeutic meals", "Airport transfers included", "Spa treatment included", "Group size: 6–12"], ticks: [true, true, true, true, true, true] },
            { label: "Bali ($2,000)", items: ["5-night shared villa", "Once-daily yoga", "Meals included (basic)", "Transfers extra", "Treatments extra", "Group size: 10–20"], ticks: [true, true, true, false, false, true] },
            { label: "Portugal ($2,000)", items: ["5-night boutique hotel", "Daily yoga", "Breakfast only", "Transfers extra", "Treatments extra", "Group size: 8–16"], ticks: [true, true, true, false, false, true] },
          ].map((col) => (
            <div key={col.label} className="space-y-2">
              <p className="font-semibold text-white">{col.label}</p>
              <ul className="space-y-1 text-stone-300">
                {col.items.map((item, i) => (
                  <li key={item}>{col.ticks[i] ? "✓" : "✗"} {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-stone-900">Climate guide by month</h2>
        <div className="overflow-hidden rounded-3xl border border-stone-200">
          <table className="w-full text-sm">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-stone-700">Month</th>
                <th className="px-4 py-3 text-left font-semibold text-stone-700">Temperature</th>
                <th className="px-4 py-3 text-left font-semibold text-stone-700">Retreat note</th>
              </tr>
            </thead>
            <tbody>
              {months.map((m, i) => (
                <tr key={m.month} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                  <td className="px-4 py-3 font-medium text-stone-900">{m.month}</td>
                  <td className="px-4 py-3 text-stone-600">{m.temp}</td>
                  <td className="px-4 py-3 text-stone-500">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-stone-900">What guests say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <div key={q.author} className="rounded-3xl border border-stone-200 bg-white p-6 space-y-3">
              <p className="text-stone-600 leading-relaxed italic">&ldquo;{q.text}&rdquo;</p>
              <p className="text-xs font-medium text-stone-500">— {q.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="rounded-3xl bg-stone-900 p-8 text-white text-center space-y-4">
          <h3 className="text-2xl font-semibold">Find your perfect Turkey retreat</h3>
          <p className="text-stone-300 max-w-xl mx-auto">Answer 8 questions and our AI concierge will match you with the Turkey retreat that fits your goals, budget, and energy.</p>
          <Link href="/match" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100">
            Get AI-Matched →
          </Link>
        </div>
      </section>
    </div>
  );
}
