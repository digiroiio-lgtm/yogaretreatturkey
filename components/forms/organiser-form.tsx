import { VENUE_REGIONS } from "@/lib/constants";

const inputClass =
  "w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400";

/**
 * B2B lead form for yoga teachers and retreat organisers hiring a venue.
 * Deliberately asks more than the B2C InquiryForm: a single organiser lead is
 * worth an entire group, so qualification detail is worth the extra friction.
 */
export function OrganiserForm() {
  return (
    <form
      id="organiser-enquiry"
      className="space-y-3 rounded-3xl border border-stone-200 bg-white p-6"
    >
      <div>
        <h3 className="text-xl font-semibold text-stone-900">Request a retreat proposal</h3>
        <p className="mt-1 text-sm text-stone-600">
          Tell us your group size and dates and we will come back with matching venues,
          availability and group pricing.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input className={inputClass} type="text" name="name" placeholder="Your name" />
        </label>
        <label className="block">
          <span className="sr-only">Email or WhatsApp</span>
          <input
            className={inputClass}
            type="text"
            name="contact"
            placeholder="Email or WhatsApp"
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Group size</span>
          <input
            className={inputClass}
            type="number"
            min={1}
            name="groupSize"
            placeholder="Group size (guests)"
          />
        </label>
        <label className="block">
          <span className="sr-only">Rooms needed</span>
          <input
            className={inputClass}
            type="number"
            min={1}
            name="rooms"
            placeholder="Rooms needed"
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Preferred region</span>
          <select className={inputClass} name="region" defaultValue="">
            <option value="" disabled>
              Preferred region
            </option>
            {VENUE_REGIONS.map((region) => (
              <option key={region.slug} value={region.slug}>
                {region.name}
              </option>
            ))}
            <option value="undecided">Not decided yet</option>
          </select>
        </label>
        <label className="block">
          <span className="sr-only">Retreat length</span>
          <select className={inputClass} name="duration" defaultValue="">
            <option value="" disabled>
              Retreat length
            </option>
            <option value="3-4">3–4 nights</option>
            <option value="5-6">5–6 nights</option>
            <option value="7">7 nights</option>
            <option value="8+">8+ nights</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="sr-only">Preferred dates</span>
        <input
          className={inputClass}
          type="text"
          name="dates"
          placeholder="Preferred dates or month (e.g. October 2027)"
        />
      </label>

      <label className="block">
        <span className="sr-only">Practice space and meal requirements</span>
        <textarea
          className={`${inputClass} h-24`}
          name="requirements"
          placeholder="Practice space and meal requirements — shala size, indoor backup, vegan/vegetarian catering, teacher accommodation"
        />
      </label>

      <button className="w-full rounded-full bg-stone-900 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
        Request retreat proposal
      </button>
      <p className="text-xs text-stone-400">
        We reply to organiser enquiries within one working day.
      </p>
    </form>
  );
}
