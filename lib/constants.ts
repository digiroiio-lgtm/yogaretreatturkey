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
