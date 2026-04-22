export const navLinks = [
  { href: "/retreats", label: "Retreats" },
  { href: "/yoga-retreats/turkey", label: "Destinations" },
  { href: "/blog", label: "Blog" },
  { href: "/guides", label: "Guides" },
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
    description: "Mediterranean coastline, ancient ruins, and luxury resort culture."
  },
  {
    slug: "mugla",
    name: "Muğla",
    description: "Turquoise Aegean bays from Bodrum to Fethiye and pristine Datça."
  },
  {
    slug: "cappadocia",
    name: "Cappadocia",
    description: "Surreal cave landscapes, hot-air balloon vistas and deep stillness."
  },
  {
    slug: "istanbul",
    name: "Istanbul",
    description: "Vibrant metropolis bridging Europe and Asia with world-class wellness."
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
  antalya: ["Antalya", "Antalya Old Town", "Kas"],
  mugla: ["Bodrum Peninsula", "Bodrum Coast", "Fethiye", "Gocek", "Datca", "Oludeniz", "Alacati"],
  cappadocia: ["Cappadocia"],
  istanbul: ["Istanbul"]
};

// Slugs of retreats shown in the homepage comparison table.
// Derived from the retreats data source in page.tsx to avoid data duplication.
export const HOMEPAGE_COMPARISON_SLUGS = [
  "aegean-clarity-bodrum",
  "fethiye-surf-flow-week",
  "antalya-womens-sanctuary",
  "kapadokya-breath-and-silence",
  "bodrum-luxe-yacht-retreat"
] as const;

// Selection criteria shown in the E-E-A-T "How We Select" block
export const SELECTION_CRITERIA = [
  { label: "Accommodation quality", detail: "We inspect room standards, cleanliness, privacy, and amenities." },
  { label: "Instructor experience", detail: "Every teacher is verified for credentials, lineage, and teaching continuity." },
  { label: "Guest reviews", detail: "Only retreats with a sustained 4.6+ rating from verified bookings qualify." },
  { label: "Location & environment", detail: "Setting, safety, accessibility, and natural surroundings are assessed on-site or via trusted hosts." },
  { label: "Overall experience quality", detail: "From arrival to departure — we evaluate service touchpoints, meal quality, and holistic flow." }
];

// Price tiers shown in the pricing transparency block
export const PRICE_TIERS = [
  {
    tier: "Budget",
    range: "$600 – $1,200",
    description: "Shared rooms, group classes, simple local meals. Great for first-time retreat guests and longer stays.",
    badge: "Best value"
  },
  {
    tier: "Mid-range",
    range: "$1,200 – $2,000",
    description: "Private or semi-private rooms, smaller groups, quality accommodation and full meal programs.",
    badge: "Most popular"
  },
  {
    tier: "Luxury",
    range: "$2,000 – $4,000+",
    description: "Boutique villas, yacht experiences, private transfers, personalised programs, and premium teaching.",
    badge: "Premium"
  }
];

// Trust signals shown in the homepage trust block
export const TRUST_SIGNALS = [
  { icon: "✔", label: "Real guest reviews", detail: "Every review is from a verified booking — no anonymous submissions." },
  { icon: "✔", label: "Verified hosts only", detail: "All retreat hosts are vetted before listing. We remove listings that fall below standards." },
  { icon: "✔", label: "Secure booking partners", detail: "Reservations are processed through trusted, PCI-compliant booking platforms." },
  { icon: "✔", label: "Free cancellation options", detail: "Most retreats offer flexible cancellation — clearly shown before you book." }
];

// Internal SEO links shown in the homepage hub block and the Top 10 Turkey page
export const INTERNAL_SEO_LINKS = [
  { href: "/top-10-yoga-retreats-bodrum", label: "Best Yoga Retreats in Bodrum" },
  { href: "/top-10-yoga-retreats-fethiye", label: "Yoga Retreats in Fethiye" },
  { href: "/top-10-yoga-retreats-antalya", label: "Yoga Retreats in Antalya" },
  { href: "/top-10-yoga-retreats-cappadocia", label: "Yoga Retreats in Cappadocia" },
  { href: "/top-10-yoga-retreats-luxury", label: "Luxury Yoga Retreats Turkey" },
  { href: "/top-10-yoga-retreats-detox", label: "Detox Yoga Retreats Turkey" },
  { href: "/top-10-yoga-retreats-womens", label: "Women's Yoga Retreats Turkey" },
  { href: "/top-10-yoga-retreats-affordable", label: "Affordable Yoga Retreats Turkey" }
];
