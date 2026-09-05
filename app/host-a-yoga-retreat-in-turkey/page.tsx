import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { OrganiserForm } from "@/components/forms/organiser-form";
import { VENUE_REGIONS, HOSTING_BENCHMARKS, CITIES } from "@/lib/constants";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Host a Yoga Retreat in Turkey | Venue & Organiser Guide 2026/2027",
  description:
    "Planning to lead a retreat in Turkey? Compare venue regions, group capacity, practice spaces, transfer times, season windows and real retreat-leader budgets. Request a proposal.",
  openGraph: {
    title: "Host a Yoga Retreat in Turkey | Venue & Organiser Guide",
    description:
      "Venue regions, capacity, practice spaces, transfers, seasonality and retreat-leader economics for teachers hosting a retreat in Turkey.",
    type: "article"
  },
  alternates: { canonical: "/host-a-yoga-retreat-in-turkey" }
};

const faqs = [
  {
    question: "How much does it cost to host a yoga retreat in Turkey?",
    answer:
      "Budget $1,000–$10,000+ for whole-venue hire for a week, depending on group size and exclusivity, plus $40–$80 per guest per day for food and beverage — Turkey sits at the lower end of that food range. Lodging and meals together usually account for 40–60% of a retreat budget. Most Turkish venues quote per person per night on a full-board basis, which makes budgeting simpler than venues that price rooms and catering separately."
  },
  {
    question: "How many guests do I need to break even?",
    answer:
      "Plan to break even at 60–70% of your capacity so the retreat still runs if a few places do not sell. The working formula is (total costs + your target profit) ÷ your minimum number of attendees. If your costs are $8,000 and you want $4,000 profit across a minimum of 8 guests, that is $1,500 per person — and every guest above 8 increases your margin."
  },
  {
    question: "What margin should I build into a retreat price?",
    answer:
      "A 25–40% margin is standard. Aim for 15–20% on a first retreat to keep the price accessible, 25–30% once established, and 30%+ for luxury positioning. The margin absorbs cancellations, currency movement, payment processing fees of roughly 2.9%, and the months of planning and promotion behind a single week."
  },
  {
    question: "When is the best time to run a retreat in Turkey?",
    answer:
      "April to June and September to November are the strongest windows: mid-20s°C, fewer tourists and lower venue rates. July and August are hot and crowded on the Aegean and Mediterranean coasts. Cappadocia's cave venues are weather-proof and work year-round, which makes them the practical choice for winter dates."
  },
  {
    question: "Which airport should my group fly into?",
    answer:
      "Dalaman (DLM) serves Fethiye and Ölüdeniz in 45–60 minutes and Kaş in about 2 hours 30 minutes. Antalya (AYT) serves the Antalya region in 20–60 minutes and has the widest direct European route network. Bodrum–Milas (BJV) serves the Bodrum peninsula in 30–50 minutes. Cappadocia is reached via Kayseri (ASR) or Nevşehir (NAV) in 45–75 minutes."
  },
  {
    question: "Do Turkish retreat venues provide yoga equipment?",
    answer:
      "Established retreat centres generally do — mats, blocks, belts, bolsters and blankets are standard at purpose-built venues, and the larger shalas hold up to around 28 practitioners. Villas and boutique hotels hired for exclusive use often do not, so confirm equipment in writing and budget for hire or shipping if it is not included."
  },
  {
    question: "Is the teacher's accommodation usually included?",
    answer:
      "It varies, and it is one of the most commonly missed line items in a retreat budget. Some venues include the lead teacher's room and board free once you reach a minimum group size; others charge for it. Ask specifically, and clarify whether an assistant teacher is covered on the same terms."
  },
  {
    question: "Can I hire an entire venue exclusively?",
    answer:
      "Yes. Exclusive-use hire is widely available in Turkey, particularly for private villas on the Bodrum peninsula and dedicated retreat centres near Fethiye. Whole-venue hire gives you full control of the schedule, catering and quiet hours, and is usually the better option for groups above roughly 12 guests."
  }
];

const budgetChecklist = [
  "Venue hire or per-person full-board rate",
  "Your own flights, transfers and accommodation",
  "Assistant teacher or co-host costs",
  "Airport transfers for guests",
  "Excursions, boat trips and entrance fees",
  "Massage, spa or bodywork practitioners",
  "Payment processing fees (~2.9%)",
  "Travel and liability insurance",
  "Photographer or content creator",
  "Pre-retreat marketing spend",
  "Welcome gifts and printed materials",
  "Tips for local venue staff"
];

export default function HostRetreatPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to host a yoga retreat in Turkey",
    description:
      "A step-by-step process for yoga teachers and retreat organisers planning and filling a retreat in Turkey.",
    step: [
      {
        "@type": "HowToStep",
        name: "Set your group size and break-even point",
        text: "Decide your maximum capacity, then plan to break even at 60–70% of it."
      },
      {
        "@type": "HowToStep",
        name: "Choose a region and airport",
        text: "Match the region to your group's budget, transfer tolerance and practice-space needs."
      },
      {
        "@type": "HowToStep",
        name: "Shortlist and confirm venues",
        text: "Confirm capacity, practice space, wet-weather cover, catering, equipment and teacher accommodation in writing."
      },
      {
        "@type": "HowToStep",
        name: "Price the retreat",
        text: "Apply the formula (total costs + target profit) ÷ minimum attendees, with a 25–40% margin."
      },
      {
        "@type": "HowToStep",
        name: "Open bookings and fill the retreat",
        text: "Take deposits, confirm rooming, and hold your final numbers deadline with the venue."
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Yoga retreat venue sourcing in Turkey",
    serviceType: "Retreat venue sourcing and group proposals",
    areaServed: { "@type": "Country", name: "Turkey" },
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    audience: {
      "@type": "Audience",
      audienceType: "Yoga teachers, retreat leaders and wellness organisers"
    }
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-7xl px-4 pt-8 md:px-6">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Host a Yoga Retreat in Turkey" }]}
        />
      </div>

      <section className="mt-4 border-b border-stone-200 bg-[#f5f0ea]">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
            For yoga teachers &amp; retreat organisers
          </p>
          <h1 className="mt-2 max-w-4xl text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
            Host a Yoga Retreat in Turkey
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-700">
            Turkey is one of the most cost-effective retreat destinations within a short flight of
            Europe: full-board venues, purpose-built shalas, and an April–November season across
            five distinct regions. This guide covers what you actually need to decide — capacity,
            practice space, transfers, season windows and the numbers that make a retreat profitable.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#organiser-enquiry"
              className="inline-flex items-center rounded-full bg-stone-900 px-8 py-4 text-base font-medium text-white transition hover:bg-stone-700"
            >
              Request a Retreat Proposal
            </a>
            <a
              href="#venue-regions"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-8 py-4 text-base font-medium text-stone-800 transition hover:bg-stone-100"
            >
              Compare Venue Regions
            </a>
          </div>
        </div>
      </section>

      {/* Direct-answer block — answer first, expand after (AI Overview / answer-engine extraction) */}
      <section className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
        <h2 className="text-2xl font-semibold text-stone-900">
          How much does it cost to host a yoga retreat in Turkey?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-stone-700">
          Expect <strong>$1,000–$10,000+ for whole-venue hire for one week</strong>, depending on
          group size and exclusivity, plus <strong>$40–$80 per guest per day</strong> for food and
          beverage — Turkey sits at the lower end of that food range. Together, lodging and meals
          typically consume <strong>40–60% of a retreat budget</strong>. Most Turkish venues quote a
          single per-person, per-night full-board rate, which makes forecasting simpler than in
          destinations where rooms and catering are priced separately.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Retreat-leader cost benchmarks for hosting a yoga retreat
            </caption>
            <thead>
              <tr className="border-b border-stone-300">
                <th scope="col" className="py-3 pr-4 font-semibold text-stone-900">
                  Budget line
                </th>
                <th scope="col" className="py-3 pr-4 font-semibold text-stone-900">
                  Benchmark
                </th>
                <th scope="col" className="py-3 font-semibold text-stone-900">
                  Note
                </th>
              </tr>
            </thead>
            <tbody>
              {HOSTING_BENCHMARKS.map((row) => (
                <tr key={row.label} className="border-b border-stone-200">
                  <th scope="row" className="py-3 pr-4 font-medium text-stone-800">
                    {row.label}
                  </th>
                  <td className="py-3 pr-4 text-stone-900">{row.value}</td>
                  <td className="py-3 text-stone-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-stone-500">
          Benchmarks are industry ranges reported by retreat-planning publications, not quotes from
          any single Turkish venue. Request a proposal for current, venue-specific pricing.
        </p>
      </section>

      {/* Venue region comparison — the core information gain of this page */}
      <section id="venue-regions" className="border-y border-stone-200 bg-stone-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            Where should you host a retreat in Turkey?
          </h2>
          <p className="mt-3 max-w-3xl text-stone-600">
            Five regions take almost all of Turkey&apos;s retreat traffic. They differ most in
            transfer time, wet-weather cover and the group size they comfortably hold — the three
            things that cause the most trouble once a retreat is booked.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparison of yoga retreat venue regions in Turkey
              </caption>
              <thead>
                <tr className="border-b border-stone-300">
                  <th scope="col" className="py-3 pr-4 font-semibold text-stone-900">Region</th>
                  <th scope="col" className="py-3 pr-4 font-semibold text-stone-900">Airport</th>
                  <th scope="col" className="py-3 pr-4 font-semibold text-stone-900">Transfer</th>
                  <th scope="col" className="py-3 pr-4 font-semibold text-stone-900">Typical capacity</th>
                  <th scope="col" className="py-3 pr-4 font-semibold text-stone-900">Practice space</th>
                  <th scope="col" className="py-3 font-semibold text-stone-900">Season</th>
                </tr>
              </thead>
              <tbody>
                {VENUE_REGIONS.map((region) => (
                  <tr key={region.slug} className="border-b border-stone-200 align-top">
                    <th scope="row" className="py-3 pr-4 font-medium text-stone-900">
                      {region.name}
                    </th>
                    <td className="py-3 pr-4 text-stone-700">{region.airport}</td>
                    <td className="py-3 pr-4 text-stone-700">{region.transfer}</td>
                    <td className="py-3 pr-4 text-stone-700">{region.typicalCapacity}</td>
                    <td className="py-3 pr-4 text-stone-700">{region.practiceSpace}</td>
                    <td className="py-3 text-stone-700">{region.season}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {VENUE_REGIONS.map((region) => (
              <div
                key={region.slug}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >
                <h3 className="text-lg font-medium text-stone-900">{region.name}</h3>
                <p className="mt-2 text-sm text-stone-600">{region.venueCharacter}</p>
                <p className="mt-3 text-sm text-stone-700">
                  <span className="font-medium">Best for:</span> {region.bestFor}
                </p>
                {CITIES.some((c) => c.slug === region.slug) && (
                  <Link
                    href={`/yoga-retreats/turkey/${region.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-stone-700 underline underline-offset-4 hover:text-stone-900"
                  >
                    See retreats running in {region.name.split(" ")[0]} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing model — direct answer */}
      <section className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
        <h2 className="text-2xl font-semibold text-stone-900">
          How do you price a yoga retreat?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-stone-700">
          Use one formula:{" "}
          <strong>(total costs + your target profit) ÷ your minimum number of attendees</strong>.
          If your costs come to $8,000 and you want $4,000 profit across a minimum of 8 guests,
          your price is $1,500 per person, and every guest above 8 is margin.
        </p>
        <p className="mt-4 leading-relaxed text-stone-700">
          Build in a 25–40% margin — 15–20% on a first retreat, 30%+ for luxury positioning — and
          set your break-even at 60–70% of capacity so the retreat still runs if a few places go
          unsold. The margin is not just profit: it absorbs cancellations, currency movement,
          payment processing fees of around 2.9%, and the months of planning and promotion behind
          a single week.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-stone-900">
          Costs organisers most often forget
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {budgetChecklist.map((item) => (
            <li key={item} className="flex gap-2 text-stone-700">
              <span aria-hidden="true" className="text-stone-400">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Practice space + logistics */}
      <section className="border-y border-stone-200 bg-stone-50">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            What to confirm with a venue before you sign
          </h2>
          <p className="mt-3 text-stone-600">
            Most retreat problems are logistics problems. Get these in writing rather than in a
            phone call.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-stone-900">Practice space</h3>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                <li>• Shala capacity in mats, not guests — a 28-mat shala is comfortable for 20</li>
                <li>• Whether there is indoor or covered backup for wind and rain</li>
                <li>• Equipment included: mats, blocks, belts, bolsters, blankets</li>
                <li>• Whether the space is exclusively yours or shared with other guests</li>
                <li>• Sound: acoustics, power sockets, and quiet hours for the property</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-stone-900">Rooms &amp; catering</h3>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                <li>• Room mix: singles, twins, doubles, and the single-supplement rate</li>
                <li>• Whether every room is en suite</li>
                <li>• Vegetarian and vegan catering as standard, plus allergy handling</li>
                <li>• Teacher and assistant accommodation — included, or charged?</li>
                <li>• Deadline for final numbers and the cancellation terms behind it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample structure */}
      <section className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
        <h2 className="text-2xl font-semibold text-stone-900">
          A workable day structure for a Turkish retreat
        </h2>
        <p className="mt-3 text-stone-600">
          Coastal heat shapes the timetable more than anything else. Practice early, leave the
          middle of the day open, and return in the late afternoon.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-left text-sm">
            <caption className="sr-only">Sample daily retreat schedule</caption>
            <thead>
              <tr className="border-b border-stone-300">
                <th scope="col" className="py-3 pr-6 font-semibold text-stone-900">Time</th>
                <th scope="col" className="py-3 font-semibold text-stone-900">Session</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["07:30", "Meditation or pranayama"],
                ["08:00", "Dynamic morning practice (2 hrs)"],
                ["10:00", "Brunch"],
                ["11:30", "Free time, beach, excursion or treatments"],
                ["17:00", "Restorative or yin practice (90 min)"],
                ["19:00", "Dinner"],
                ["20:30", "Optional circle, sound or rest"]
              ].map(([time, session]) => (
                <tr key={time} className="border-b border-stone-200">
                  <th scope="row" className="py-3 pr-6 font-medium text-stone-800">
                    {time}
                  </th>
                  <td className="py-3 text-stone-700">{session}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Lead capture */}
      <section className="border-y border-stone-200 bg-[#f5f0ea]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1fr_1fr] md:px-6">
          <div>
            <h2 className="text-2xl font-semibold text-stone-900">
              Tell us your group size and dates
            </h2>
            <p className="mt-4 leading-relaxed text-stone-700">
              We will match your requirements against venues in the regions above and come back
              with availability, group pricing and the details that are easy to miss — practice
              space dimensions, room mix, single supplements and teacher accommodation terms.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-stone-700">
              <li>• Proposals for whole-venue hire and per-person full board</li>
              <li>• Shoulder-season dates where rates drop</li>
              <li>• Transfer and airport logistics for international groups</li>
            </ul>
          </div>
          <OrganiserForm />
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
        <h2 className="mb-8 text-center text-2xl font-semibold text-stone-900">
          Hosting a Retreat in Turkey: FAQs
        </h2>
        <FAQAccordion items={faqs} />
      </section>

      <section className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
          <h2 className="mb-4 text-lg font-semibold text-stone-900">Related</h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/yoga-retreats/turkey"
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 transition hover:bg-stone-100"
            >
              Yoga retreats in Turkey
            </Link>
            {CITIES.filter((c) => VENUE_REGIONS.some((r) => r.slug === c.slug)).map((city) => (
              <Link
                key={city.slug}
                href={`/yoga-retreats/turkey/${city.slug}`}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 transition hover:bg-stone-100"
              >
                Retreats in {city.name}
              </Link>
            ))}
            <Link
              href="/hosts"
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 transition hover:bg-stone-100"
            >
              List your retreat venue
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  );
}
