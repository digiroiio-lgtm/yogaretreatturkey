import { Retreat } from "@/lib/types";

export type Top10PageFilter = {
  /** Match retreats whose locationArea contains any of these strings (case-insensitive) */
  locationAreas?: string[];
  /** Match retreats whose tags array includes any of these values */
  tags?: string[];
  /** Match retreats whose suitableFor array includes any of these values */
  suitableFor?: string[];
  /** Upper bound on price (inclusive) */
  maxPrice?: number;
};

export type Top10PageConfig = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  subheadline: string;
  locationDescription: string;
  filter: Top10PageFilter;
  /** Related page slugs shown in the internal-linking block. Use "turkey" for the master Turkey page. */
  related: { slug: string; label: string }[];
};

/**
 * Filter and sort retreats for a given page config.
 * - Location pages:  filter by locationArea, sort by rating desc
 * - Category pages:  filter by tag, sort by rating desc
 * - Affordable page: filter by maxPrice, sort by price asc
 */
export function filterRetreatsForPage(
  config: Top10PageConfig,
  retreatList: Retreat[]
): Retreat[] {
  const { filter } = config;
  let result = [...retreatList];

  if (filter.locationAreas?.length) {
    result = result.filter((r) =>
      filter.locationAreas!.some((area) =>
        r.locationArea.toLowerCase().includes(area.toLowerCase())
      )
    );
  } else if (filter.tags?.length) {
    result = result.filter((r) =>
      filter.tags!.some((tag) => r.tags.includes(tag))
    );
  } else if (filter.suitableFor?.length) {
    result = result.filter((r) =>
      filter.suitableFor!.some((s) => r.suitableFor.includes(s))
    );
  }

  if (filter.maxPrice !== undefined) {
    result = result.filter((r) => r.price <= filter.maxPrice!);
  }

  // Sort by price asc for "affordable only" pages; otherwise by rating desc
  const sortByPrice =
    filter.maxPrice !== undefined &&
    !filter.locationAreas?.length &&
    !filter.tags?.length &&
    !filter.suitableFor?.length;

  result.sort((a, b) => (sortByPrice ? a.price - b.price : b.rating - a.rating));

  return result;
}

/** Returns the canonical URL for a top-10 page by slug ("turkey" points to the dedicated static page). */
export function getTop10Href(slug: string): string {
  return slug === "turkey"
    ? "/top-10-yoga-retreats-turkey"
    : `/top-10-yoga-retreats-${slug}`;
}

export const TOP10_PAGES: Top10PageConfig[] = [
  // ── TIER 1: Core location pages ───────────────────────────────────────
  {
    slug: "bodrum",
    title: "Top Yoga Retreats in Bodrum (2026 Guide)",
    metaTitle: "Top Yoga Retreats in Bodrum (2026) — Compare & Book",
    metaDescription:
      "Discover the best yoga retreats in Bodrum, Turkey. Luxury beachfront villas, Aegean views, and expert instructors. Compare prices and book.",
    subheadline:
      "Luxury beachfront yoga retreats on the Bodrum Peninsula — compared by price, style, and guest ratings.",
    locationDescription:
      "Bodrum is Turkey's premier luxury yoga destination. Set along crystal-clear Aegean bays, retreats here combine boutique villa living with high-calibre instruction. Expect sunrise deck practices, private catamaran afternoons, and farm-to-table cuisine prepared by dedicated wellness chefs.",
    filter: { locationAreas: ["Bodrum Peninsula", "Bodrum Coast"] },
    related: [
      { slug: "fethiye", label: "Yoga Retreats in Fethiye" },
      { slug: "antalya", label: "Yoga Retreats in Antalya" },
      { slug: "luxury", label: "Luxury Yoga Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "fethiye",
    title: "Top Yoga Retreats in Fethiye (2026 Guide)",
    metaTitle: "Top Yoga Retreats in Fethiye (2026) — Compare & Book",
    metaDescription:
      "Find the best yoga retreats in Fethiye, Turkey. Surf & yoga, Blue Lagoon wellness, and Ölüdeniz coastal escapes. Compare prices and book.",
    subheadline:
      "Surf, yoga, and turquoise bays — the best wellness retreats in Fethiye and the surrounding Aegean coast.",
    locationDescription:
      "Fethiye is where adventure meets wellness. Known for the Blue Lagoon at Ölüdeniz, paragliding cliffs, and a laid-back coastal culture, it's the ideal setting for active yoga retreats blending morning surf sessions with sunset flow classes.",
    filter: { locationAreas: ["Fethiye", "Oludeniz"] },
    related: [
      { slug: "bodrum", label: "Yoga Retreats in Bodrum" },
      { slug: "antalya", label: "Yoga Retreats in Antalya" },
      { slug: "surf", label: "Surf + Yoga Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "antalya",
    title: "Top Yoga Retreats in Antalya (2026 Guide)",
    metaTitle: "Top Yoga Retreats in Antalya (2026) — Compare & Book",
    metaDescription:
      "Discover the best yoga retreats in Antalya, Turkey. Resort wellness, Mediterranean coast, and women's sanctuaries. Compare prices and book.",
    subheadline:
      "Mediterranean wellness, resort luxury, and ancient coastal culture — yoga retreats in Antalya for every style.",
    locationDescription:
      "Antalya combines dramatic Mediterranean coastline with world-class resort hospitality. Its historic old town and surrounding hills offer everything from women's sanctuaries to digital nomad residencies — all steps from turquoise waters.",
    filter: { locationAreas: ["Antalya", "Antalya Old Town"] },
    related: [
      { slug: "bodrum", label: "Yoga Retreats in Bodrum" },
      { slug: "cappadocia", label: "Yoga Retreats in Cappadocia" },
      { slug: "womens", label: "Women's Yoga Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "cappadocia",
    title: "Top Yoga Retreats in Cappadocia (2026 Guide)",
    metaTitle: "Top Yoga Retreats in Cappadocia (2026) — Compare & Book",
    metaDescription:
      "Find the best yoga retreats in Cappadocia, Turkey. Cave suites, hot-air balloon vistas, pranayama, and deep silence. Compare & book.",
    subheadline:
      "Surreal landscapes, cave hotels, and transformative silence — yoga retreats in Cappadocia unlike anywhere else.",
    locationDescription:
      "Cappadocia is unlike anywhere else on Earth. Volcanic rock formations and sweeping balloon-dotted horizons create a naturally contemplative environment. Retreats here lean into silence, breathwork, and deep spiritual practice.",
    filter: { locationAreas: ["Cappadocia"] },
    related: [
      { slug: "antalya", label: "Yoga Retreats in Antalya" },
      { slug: "bodrum", label: "Yoga Retreats in Bodrum" },
      { slug: "detox", label: "Detox Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  // ── TIER 2: Niche location pages ──────────────────────────────────────
  {
    slug: "kas",
    title: "Top Yoga Retreats in Kaş (2026 Guide)",
    metaTitle: "Top Yoga Retreats in Kaş (2026) — Compare & Book",
    metaDescription:
      "Discover yoga retreats in Kaş, Turkey. Boutique cliff villas, expert-led intensives, and Aegean waters. Compare & book.",
    subheadline:
      "Boutique cliff retreats and expert-led intensives in one of Turkey's most beautiful coastal towns.",
    locationDescription:
      "Kaş is a hidden gem on the Turkish Riviera — a compact, characterful town perched above the Aegean with dramatic cliff views. It attracts serious practitioners looking for precision teaching in an extraordinary setting far from the tourist crowds.",
    filter: { locationAreas: ["Kas"] },
    related: [
      { slug: "bodrum", label: "Yoga Retreats in Bodrum" },
      { slug: "fethiye", label: "Yoga Retreats in Fethiye" },
      { slug: "luxury", label: "Luxury Yoga Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "datca",
    title: "Top Yoga Retreats in Datça (2026 Guide)",
    metaTitle: "Top Yoga Retreats in Datça (2026) — Compare & Book",
    metaDescription:
      "Find the best yoga retreats in Datça, Turkey. Untouched coastline, minimalist boutique stays, and slow wellness.",
    subheadline:
      "Pristine coastline, minimalist wellness, and farm-to-table simplicity on Turkey's least-discovered peninsula.",
    locationDescription:
      "The Datça Peninsula is one of Turkey's most pristine stretches of coast. Its isolation is its strength — retreats here attract guests who want to genuinely disconnect, slow down, and restore on a dramatically beautiful Aegean shoreline.",
    filter: { locationAreas: ["Datca"] },
    related: [
      { slug: "bodrum", label: "Yoga Retreats in Bodrum" },
      { slug: "fethiye", label: "Yoga Retreats in Fethiye" },
      { slug: "affordable", label: "Affordable Yoga Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "gocek",
    title: "Top Yoga Retreats in Göcek (2026 Guide)",
    metaTitle: "Top Yoga Retreats in Göcek (2026) — Compare & Book",
    metaDescription:
      "Discover yoga retreats in Göcek, Turkey. Sailing bays, luxury seaview suites, and couples wellness escapes.",
    subheadline:
      "Sailing bays, private yacht evenings, and intimate luxury wellness — Göcek's boutique retreat scene.",
    locationDescription:
      "Göcek is an exclusive marina town in Muğla province — known for its sheltered bays and low-key luxury. It's a favourite for couples, offering an intimate, premium retreat experience away from the crowds.",
    filter: { locationAreas: ["Gocek"] },
    related: [
      { slug: "bodrum", label: "Yoga Retreats in Bodrum" },
      { slug: "fethiye", label: "Yoga Retreats in Fethiye" },
      { slug: "luxury", label: "Luxury Yoga Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "oludeniz",
    title: "Top Yoga Retreats in Ölüdeniz (2026 Guide)",
    metaTitle: "Top Yoga Retreats in Ölüdeniz (2026) — Compare & Book",
    metaDescription:
      "Find yoga retreats in Ölüdeniz, Turkey. Blue Lagoon healing, somatic wellness, and breathwork by Turkey's iconic beach.",
    subheadline:
      "Ocean rituals, somatic healing, and the Blue Lagoon — wellness retreats at Turkey's most iconic coastal setting.",
    locationDescription:
      "Ölüdeniz is home to Turkey's most photographed beach — the turquoise Blue Lagoon. Retreats here harness the healing energy of water: lagoon immersion rituals, somatic release, and breathwork sessions with views that restore the nervous system.",
    filter: { locationAreas: ["Oludeniz"] },
    related: [
      { slug: "fethiye", label: "Yoga Retreats in Fethiye" },
      { slug: "bodrum", label: "Yoga Retreats in Bodrum" },
      { slug: "detox", label: "Detox Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  // ── CATEGORY PAGES ────────────────────────────────────────────────────
  {
    slug: "luxury",
    title: "Top Luxury Yoga Retreats in Turkey (2026)",
    metaTitle: "Top Luxury Yoga Retreats in Turkey (2026) — Compare & Book",
    metaDescription:
      "Discover the best luxury yoga retreats in Turkey. Boutique villas, yacht experiences, premium instruction, and 5-star wellness. Compare & book.",
    subheadline:
      "Five-star yoga experiences across Turkey's most exclusive locations — boutique villas, yacht retreats, and world-class instruction.",
    locationDescription:
      "Turkey's luxury retreat landscape is exceptional — from Bodrum's private estate villas to yacht-based experiences off the Aegean coast. Expect personalised programs, premium accommodation, and teaching at the highest standard.",
    filter: { tags: ["luxury", "luxury teacher-led retreat"] },
    related: [
      { slug: "bodrum", label: "Yoga Retreats in Bodrum" },
      { slug: "kas", label: "Yoga Retreats in Kaş" },
      { slug: "gocek", label: "Yoga Retreats in Göcek" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "affordable",
    title: "Top Affordable Yoga Retreats in Turkey (2026)",
    metaTitle: "Top Affordable Yoga Retreats in Turkey (2026) — Budget Guide",
    metaDescription:
      "Find the best affordable yoga retreats in Turkey. Great-value options from $600–$1,750 per person, including accommodation and meals.",
    subheadline:
      "Great-value yoga retreats in Turkey under $1,800 — without compromising on quality, location, or teaching.",
    locationDescription:
      "Turkey is one of the best-value yoga retreat destinations in the world. Even at budget and mid-range price points, you get beautiful settings, qualified instructors, and full-board accommodation — far better value than equivalent retreats in Bali or Portugal.",
    filter: { maxPrice: 1750 },
    related: [
      { slug: "fethiye", label: "Yoga Retreats in Fethiye" },
      { slug: "datca", label: "Yoga Retreats in Datça" },
      { slug: "digital-nomad", label: "Digital Nomad Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "womens",
    title: "Top Women's Yoga Retreats in Turkey (2026)",
    metaTitle: "Top Women's Yoga Retreats in Turkey (2026) — Compare & Book",
    metaDescription:
      "Discover the best women's yoga retreats in Turkey. Women-only spaces for healing, connection, and deep restoration across Antalya, Bodrum and beyond.",
    subheadline:
      "Women-only wellness spaces in Turkey — curated for healing, connection, and deep restoration.",
    locationDescription:
      "Turkey's women's retreat scene is one of the most thoughtful in the Mediterranean. These spaces offer hormone-supportive nutrition, trauma-informed teaching, and a genuinely safe community environment for women of all ages.",
    filter: { tags: ["women's retreat"] },
    related: [
      { slug: "antalya", label: "Yoga Retreats in Antalya" },
      { slug: "bodrum", label: "Yoga Retreats in Bodrum" },
      { slug: "detox", label: "Detox Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "surf",
    title: "Top Surf & Yoga Retreats in Turkey (2026)",
    metaTitle: "Top Surf & Yoga Retreats in Turkey (2026) — Compare & Book",
    metaDescription:
      "Find the best surf and yoga retreats in Turkey. Morning surf sessions, sunset flow, and community vibes in Fethiye and beyond.",
    subheadline:
      "Morning waves, sunset flow, and community energy — the best surf & yoga retreats on Turkey's Aegean coast.",
    locationDescription:
      "Turkey's Aegean coast is an increasingly popular surf yoga destination. Fethiye and Alacatı offer consistent conditions, warm waters, and a boho-meets-boutique atmosphere attracting an international wellness community.",
    filter: { tags: ["surf + yoga"] },
    related: [
      { slug: "fethiye", label: "Yoga Retreats in Fethiye" },
      { slug: "oludeniz", label: "Yoga Retreats in Ölüdeniz" },
      { slug: "affordable", label: "Affordable Yoga Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "detox",
    title: "Top Detox & Healing Yoga Retreats in Turkey (2026)",
    metaTitle: "Top Detox & Healing Yoga Retreats in Turkey (2026) — Compare & Book",
    metaDescription:
      "Discover the best detox yoga retreats in Turkey. Functional nutrition, guided cleansing, and therapeutic yoga across the Turkish coast.",
    subheadline:
      "Guided detox, therapeutic yoga, and functional nutrition — Turkey's best healing retreat programs.",
    locationDescription:
      "Turkey's detox retreat scene combines Eastern healing traditions with modern functional medicine. From olive grove estates near Izmir to lagoon-side wellness programs in Fethiye, these retreats offer structured, evidence-informed detox alongside daily yoga.",
    filter: { tags: ["detox"] },
    related: [
      { slug: "antalya", label: "Yoga Retreats in Antalya" },
      { slug: "oludeniz", label: "Yoga Retreats in Ölüdeniz" },
      { slug: "womens", label: "Women's Yoga Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "digital-nomad",
    title: "Top Digital Nomad Yoga Retreats in Turkey (2026)",
    metaTitle: "Top Digital Nomad Yoga Retreats in Turkey (2026) — Work & Wellness",
    metaDescription:
      "Find the best digital nomad yoga retreats in Turkey. Fast Wi-Fi, cowork spaces, daily yoga, and community on the Turkish coast.",
    subheadline:
      "Fast Wi-Fi, cowork lounges, daily yoga, and community dinners — Turkey's best retreats for remote workers.",
    locationDescription:
      "Turkey has become a top destination for digital nomads seeking wellness infrastructure alongside productive work environments. Antalya and Fethiye offer retreats with high-speed internet, dedicated cowork lounges, and daily yoga that fits around a working day.",
    filter: { tags: ["digital nomad friendly"] },
    related: [
      { slug: "antalya", label: "Yoga Retreats in Antalya" },
      { slug: "fethiye", label: "Yoga Retreats in Fethiye" },
      { slug: "affordable", label: "Affordable Yoga Retreats Turkey" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  // ── NICHE AUDIENCE PAGES ──────────────────────────────────────────────
  {
    slug: "beginners",
    title: "Top Yoga Retreats for Beginners in Turkey (2026)",
    metaTitle: "Top Yoga Retreats for Beginners in Turkey (2026) — Compare & Book",
    metaDescription:
      "First yoga retreat? Discover the best beginner-friendly yoga retreats in Turkey. Supportive teachers, all-levels classes, and beautiful coastal settings. Compare & book.",
    subheadline:
      "Welcoming, all-levels retreats in Turkey — chosen specifically for first-timers and beginner practitioners.",
    locationDescription:
      "Turkey is one of the best countries in the world for a first yoga retreat. The combination of experienced teachers who genuinely enjoy working with beginners, beautiful and calming coastal environments, and warm Turkish hospitality creates an ideal setting for your introduction to retreat life. Every retreat in this selection explicitly welcomes beginners and structures daily programs to meet all levels.",
    filter: { suitableFor: ["Beginner", "All levels"] },
    related: [
      { slug: "affordable", label: "Affordable Yoga Retreats Turkey" },
      { slug: "womens", label: "Women's Yoga Retreats Turkey" },
      { slug: "fethiye", label: "Yoga Retreats in Fethiye" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "couples",
    title: "Top Yoga Retreats for Couples in Turkey (2026)",
    metaTitle: "Top Yoga Retreats for Couples in Turkey (2026) — Compare & Book",
    metaDescription:
      "Discover the best couples yoga retreats in Turkey. Private villas, partner practices, shared wellness, and romantic Aegean settings. Compare & book.",
    subheadline:
      "Shared practice, private spaces, and romantic coastlines — yoga retreats designed for couples in Turkey.",
    locationDescription:
      "Couples yoga retreats in Turkey offer something rare: genuine shared transformation in a setting of extraordinary beauty. From private cliff villas in Bodrum to intimate cave suites in Cappadocia, these retreats blend partner yoga practices, couples meditation, and relationship-supportive workshops with the restorative backdrop of Turkey's finest coastal and cultural landscapes.",
    filter: { tags: ["couples retreat"] },
    related: [
      { slug: "luxury", label: "Luxury Yoga Retreats Turkey" },
      { slug: "bodrum", label: "Yoga Retreats in Bodrum" },
      { slug: "gocek", label: "Yoga Retreats in Göcek" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  },
  {
    slug: "solo",
    title: "Top Yoga Retreats for Solo Travellers in Turkey (2026)",
    metaTitle: "Top Yoga Retreats for Solo Travellers in Turkey (2026) — Compare & Book",
    metaDescription:
      "Travelling alone? Find the best solo yoga retreats in Turkey. Safe, social, and supportive programs on the Turkish coast with single supplement options. Compare & book.",
    subheadline:
      "Safe, social, and deeply restorative — the best solo-traveller yoga retreats on Turkey's Aegean and Mediterranean coasts.",
    locationDescription:
      "Turkey's yoga retreat community is exceptionally welcoming to solo travellers. The combination of small group sizes, communal mealtimes, and shared practice creates an environment where meaningful connections happen naturally — most solo guests leave with lasting friendships. These retreats are selected for their social community culture, single room options, and track record of solo traveller satisfaction.",
    filter: { suitableFor: ["Solo travelers"] },
    related: [
      { slug: "affordable", label: "Affordable Yoga Retreats Turkey" },
      { slug: "digital-nomad", label: "Digital Nomad Retreats Turkey" },
      { slug: "fethiye", label: "Yoga Retreats in Fethiye" },
      { slug: "turkey", label: "All Turkey Retreats" }
    ]
  }
];
