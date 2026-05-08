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
  },
  {
    slug: "medical-wellness",
    name: "Medical Wellness Retreats",
    tag: "medical-wellness",
    description: "Turkey's unique blend of medical expertise and wellness tradition — from hormone optimization to longevity protocols and nervous system reset."
  }
];

export const RETREAT_TYPES = [
  { slug: "luxury-yoga-retreat", name: "Luxury Yoga Retreat", categoryTag: "luxury" },
  { slug: "detox-retreat", name: "Detox Retreat", categoryTag: "detox" },
  { slug: "womens-retreat", name: "Women's Retreat", categoryTag: "women's retreat" },
  { slug: "beginners-retreat", name: "Beginners Yoga Retreat", categoryTag: null },
  { slug: "spiritual-retreat", name: "Spiritual Retreat", categoryTag: null },
  { slug: "medical-wellness-retreat", name: "Medical Wellness Retreat", categoryTag: "medical-wellness" }
];

export const MEDICAL_WELLNESS_SUBCATEGORIES = [
  { slug: "longevity", name: "Longevity Retreats", description: "Anti-aging protocols, NAD+ therapy, and cellular optimization in Turkish wellness estates." },
  { slug: "hormone-balance", name: "Hormone Balance", description: "Evidence-based programs for hormonal restoration combining lab testing, nutrition, and movement therapy." },
  { slug: "burnout-recovery", name: "Burnout Recovery", description: "Medically supervised recovery from chronic stress and adrenal fatigue." },
  { slug: "nervous-system-reset", name: "Nervous System Reset", description: "Somatic therapies, breathwork, and vagal toning protocols for nervous system regulation." },
  { slug: "sleep-recovery", name: "Sleep Recovery", description: "Clinically designed sleep optimization programs with sleep lab protocols and restorative yoga." },
  { slug: "executive-reset", name: "Executive Reset", description: "Comprehensive health assessments and recovery programs designed for high-performing professionals." },
  { slug: "biohacking", name: "Biohacking Retreats", description: "Functional medicine meets cutting-edge optimization: HRV tracking, cold therapy, red light, and longevity biomarkers." },
  { slug: "womens-hormonal-wellness", name: "Women's Hormonal Wellness", description: "Integrative programs addressing perimenopause, cycle regulation, thyroid health, and female vitality." }
];

export const CITY_LOCATION_MAP: Record<string, string[]> = {
  antalya: ["Antalya", "Antalya Old Town", "Kas"],
  mugla: ["Bodrum Peninsula", "Bodrum Coast", "Fethiye", "Gocek", "Datca", "Oludeniz", "Alacati"],
  cappadocia: ["Cappadocia"],
  istanbul: ["Istanbul"]
};
