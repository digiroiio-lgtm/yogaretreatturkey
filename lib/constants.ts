export const navLinks = [
  { href: "/retreats", label: "Retreats" },
  { href: "/yoga-retreats/turkey", label: "Destinations" },
  { href: "/blog", label: "Blog" },
  { href: "/guides", label: "Guides" },
  { href: "/host-a-yoga-retreat-in-turkey", label: "Host a Retreat" },
  { href: "/match", label: "AI Match" },
  { href: "/about", label: "About" }
];

export const retreatStyles = [
  "wellness reset",
  "surf + yoga",
  "women's retreat",
  "couples retreat",
  "detox / healing",
  "luxury teacher-led retreat",
  "digital nomad friendly"
];

export const trustPoints = [
  "✓ 4.7 avg rating · 2,300+ reviews",
  "✓ Curated & verified retreats",
  "✓ Free cancellation options",
  "✓ Airport pickup available"
];

export const CITIES = [
  {
    slug: "antalya",
    name: "Antalya",
    description: "Mediterranean coastline, ancient ruins, and luxury resort culture.",
    nearestAirport: "Antalya (AYT)",
    transferTime: "20–60 min",
    season: "April–November"
  },
  {
    slug: "fethiye",
    name: "Fethiye",
    description:
      "Turkey's busiest retreat hub — pine-covered mountains meeting the Ölüdeniz lagoon and the Lycian Way.",
    nearestAirport: "Dalaman (DLM)",
    transferTime: "45–60 min",
    season: "April–October"
  },
  {
    slug: "bodrum",
    name: "Bodrum",
    description: "Whitewashed Aegean peninsula with boutique villa retreats and sailing culture.",
    nearestAirport: "Bodrum–Milas (BJV)",
    transferTime: "30–50 min",
    season: "May–October"
  },
  {
    slug: "kas",
    name: "Kaş",
    description:
      "A small Lycian fishing town for quiet, small-group retreats with rooftop practice and diving.",
    nearestAirport: "Dalaman (DLM)",
    transferTime: "2h 30m",
    season: "April–October"
  },
  {
    slug: "cappadocia",
    name: "Cappadocia",
    description: "Surreal cave landscapes, hot-air balloon vistas and deep stillness.",
    nearestAirport: "Kayseri (ASR) or Nevşehir (NAV)",
    transferTime: "45–75 min",
    season: "Year-round"
  },
  {
    slug: "istanbul",
    name: "Istanbul",
    description: "Vibrant metropolis bridging Europe and Asia with world-class wellness.",
    nearestAirport: "Istanbul (IST) or Sabiha Gökçen (SAW)",
    transferTime: "45–90 min",
    season: "Year-round"
  }
];

export const CATEGORIES = [
  {
    slug: "luxury",
    name: "Luxury Retreats",
    tag: "luxury",
    description: "High-end retreat experiences with five-star hospitality and exclusive locations."
  },
  {
    slug: "detox",
    name: "Detox Retreats",
    tag: "detox",
    description: "Cleanse, reset, and restore with guided detox programs and functional nutrition."
  },
  {
    slug: "womens",
    name: "Women's Retreats",
    tag: "women's retreat",
    description: "Empowering women-only spaces for healing, connection, and deep restoration."
  }
];

export const RETREAT_TYPES = [
  { slug: "luxury-yoga-retreat", name: "Luxury Yoga Retreat", categoryTag: "luxury" },
  { slug: "detox-retreat", name: "Detox Retreat", categoryTag: "detox" },
  { slug: "womens-retreat", name: "Women's Retreat", categoryTag: "women's retreat" },
  { slug: "beginners-retreat", name: "Beginners Yoga Retreat", categoryTag: null },
  { slug: "spiritual-retreat", name: "Spiritual Retreat", categoryTag: null }
];

export const CITY_LOCATION_MAP: Record<string, string[]> = {
  antalya: ["Antalya", "Antalya Old Town"],
  fethiye: ["Fethiye", "Oludeniz", "Gocek"],
  bodrum: ["Bodrum Peninsula", "Bodrum Coast", "Datca"],
  kas: ["Kas"],
  cappadocia: ["Cappadocia"],
  istanbul: ["Istanbul"]
};

// B2B: regions evaluated for hosting/leading a retreat in Turkey.
// Capacity and transfer figures reflect the venue profiles typical of each region
// rather than a single property — see /host-a-yoga-retreat-in-turkey.
export const VENUE_REGIONS = [
  {
    slug: "fethiye",
    name: "Fethiye & Ölüdeniz",
    airport: "Dalaman (DLM)",
    transfer: "45–60 min",
    typicalCapacity: "12–28 guests",
    venueCharacter: "Eco-ranch, mountain valley and pine-forest retreat centres",
    practiceSpace: "Open-sided wooden shalas, most covered and mat-equipped",
    season: "April–October",
    bestFor: "First-time retreat leaders who want an all-inclusive, turnkey venue"
  },
  {
    slug: "antalya",
    name: "Antalya & Geyikbayırı",
    airport: "Antalya (AYT)",
    transfer: "20–60 min",
    typicalCapacity: "10–40 guests",
    venueCharacter: "Wellness hotels and clinical wellness resorts with spa infrastructure",
    practiceSpace: "Indoor studios plus outdoor decks — the most weather-proof option",
    season: "April–November",
    bestFor: "Larger groups, shoulder-season dates and yoga + spa programming"
  },
  {
    slug: "bodrum",
    name: "Bodrum Peninsula",
    airport: "Bodrum–Milas (BJV)",
    transfer: "30–50 min",
    typicalCapacity: "8–20 guests",
    venueCharacter: "Private villas and boutique hotels available for whole-venue hire",
    practiceSpace: "Terraces and garden decks; indoor backup is not always available",
    season: "May–October",
    bestFor: "Premium pricing, exclusive-use buyouts and smaller luxury groups"
  },
  {
    slug: "kas",
    name: "Kaş & the Lycian Coast",
    airport: "Dalaman (DLM)",
    transfer: "2h 30m",
    typicalCapacity: "8–16 guests",
    venueCharacter: "Family-run hotels with rooftop practice space",
    practiceSpace: "Rooftop terraces with sea views; limited wet-weather cover",
    season: "April–October",
    bestFor: "Intimate groups where the town itself is part of the programme"
  },
  {
    slug: "cappadocia",
    name: "Cappadocia",
    airport: "Kayseri (ASR) / Nevşehir (NAV)",
    transfer: "45–75 min",
    typicalCapacity: "10–24 guests",
    venueCharacter: "Cave hotels and stone-built boutique properties",
    practiceSpace: "Converted cave halls — excellent acoustics, fully weather-proof",
    season: "Year-round, best March–May and September–November",
    bestFor: "Meditation-led and off-season retreats"
  }
];

// Verified retreat-leader cost benchmarks. Figures are industry ranges reported by
// retreat-planning publications, not quotes from any single Turkish venue.
export const HOSTING_BENCHMARKS = [
  { label: "Whole-venue hire, one week", value: "$1,000–$10,000+", note: "Scales with group size and exclusivity" },
  { label: "Food & beverage", value: "$40–$80 per guest per day", note: "Turkey sits at the lower end of this range" },
  { label: "Lodging + meals as a share of budget", value: "40–60%", note: "The dominant line item in every retreat budget" },
  { label: "Standard organiser margin", value: "25–40%", note: "15–20% is typical for a first retreat" },
  { label: "Planned break-even point", value: "60–70% capacity", note: "Protects you if a few places do not sell" }
];
