import { Retreat } from "@/lib/types";

export const retreats: Retreat[] = [
  {
    id: "r1",
    slug: "aegean-clarity-bodrum",
    title: "Aegean Clarity Retreat",
    shortDescription: "Oceanfront Vinyasa and deep restoration on the Bodrum Peninsula.",
    fullDescription:
      "A seven-night luxury reset designed for high-performing professionals seeking stillness. Sunrise movement, mindful nutrition, and tailored recovery sessions unfold in a private cove estate.",
    locationArea: "Bodrum Peninsula",
    price: 2100,
    currency: "USD",
    duration: 7,
    dates: ["2026-05-12", "2026-06-16", "2026-09-08"],
    yogaStyle: "Vinyasa + Restorative",
    highlights: ["Sunrise deck practice", "Cold plunge ritual", "Private catamaran afternoon"],
    inclusions: ["Luxury suite", "Twice-daily yoga", "Chef-led meals", "Airport transfer"],
    exclusions: ["Flights", "Travel insurance", "Spa add-ons"],
    teacher: "Maya Elif",
    rating: 4.9,
    reviewCount: 128,
    images: [
      "/images/retreat-1.svg",
      "/images/retreat-2.svg",
      "/images/retreat-3.svg"
    ],
    accommodationType: "Boutique Villa",
    tags: ["wellness reset", "luxury", "beachfront"],
    suitableFor: ["Couples", "Solo travelers", "Intermediate"],
    featured: true,
    wellnessExtras: ["Breathwork", "Sound healing", "Massage"],
    schedule: [
      { time: "07:00", activity: "Sunrise Vinyasa" },
      { time: "10:30", activity: "Mediterranean brunch" },
      { time: "16:00", activity: "Nervous system workshop" },
      { time: "18:30", activity: "Restorative + Yoga Nidra" }
    ],
    hostProfile: {
      name: "Maya Elif",
      role: "Lead Teacher",
      bio: "Former movement therapist blending precise sequencing with trauma-aware relaxation.",
      avatar:
        "/images/retreat-4.svg"
    }
  },
  {
    id: "r2",
    slug: "fethiye-surf-flow-week",
    title: "Fethiye Surf + Flow Week",
    shortDescription: "Playful surf mornings and sunset yoga by turquoise bays.",
    fullDescription:
      "A social yet elevated retreat combining wave coaching with mobility-focused yoga. Built for travelers who want progress, adventure, and polished hospitality in one itinerary.",
    locationArea: "Fethiye",
    price: 1650,
    currency: "USD",
    duration: 6,
    dates: ["2026-06-02", "2026-07-14", "2026-08-18"],
    yogaStyle: "Power Flow",
    highlights: ["Beginner-friendly surf coaching", "Boat day in Oludeniz", "Beach bonfire dinner"],
    inclusions: ["Surf equipment", "Daily yoga", "Boutique hotel stay", "Breakfast + dinner"],
    exclusions: ["Flights", "Alcohol", "Private lessons"],
    teacher: "Can Yilmaz",
    rating: 4.8,
    reviewCount: 94,
    images: [
      "/images/retreat-5.svg",
      "/images/retreat-6.svg",
      "/images/retreat-7.svg"
    ],
    accommodationType: "Beach Boutique Hotel",
    tags: ["surf + yoga", "digital nomad friendly", "community"],
    suitableFor: ["Beginner", "Intermediate", "Friends"],
    featured: true,
    wellnessExtras: ["Ice bath", "Mobility clinic"],
    schedule: [
      { time: "07:30", activity: "Surf session" },
      { time: "11:00", activity: "Recovery brunch" },
      { time: "17:00", activity: "Power flow" },
      { time: "20:00", activity: "Community dinner" }
    ],
    hostProfile: {
      name: "Can Yilmaz",
      role: "Surf + Yoga Coach",
      bio: "Former competitive surfer helping modern travelers move with ease and confidence.",
      avatar:
        "/images/retreat-8.svg"
    }
  },
  {
    id: "r3",
    slug: "antalya-womens-sanctuary",
    title: "Antalya Women’s Sanctuary",
    shortDescription: "A calm coastal retreat designed for women’s restoration and connection.",
    fullDescription:
      "A curated women-only immersion with hormone-supportive meals, gentle movement, and deep journaling practices in a serene cliffside property.",
    locationArea: "Antalya",
    price: 1890,
    currency: "USD",
    duration: 5,
    dates: ["2026-05-20", "2026-09-22"],
    yogaStyle: "Hatha + Yin",
    highlights: ["Women-only environment", "Menstrual wellness workshops", "Sunset circle rituals"],
    inclusions: ["Private/shared room options", "Daily classes", "Nutrition program"],
    exclusions: ["Flights", "Personal shopping"],
    teacher: "Selin Aras",
    rating: 4.95,
    reviewCount: 76,
    images: [
      "/images/retreat-9.svg",
      "/images/retreat-10.svg",
      "/images/retreat-11.svg"
    ],
    accommodationType: "Cliffside Eco-Lodge",
    tags: ["women’s retreat", "healing", "detox"],
    suitableFor: ["Women", "All levels"],
    featured: true,
    wellnessExtras: ["Hormone health session", "Sound healing", "Breathwork"],
    schedule: [
      { time: "08:00", activity: "Gentle Hatha" },
      { time: "12:00", activity: "Nourishing lunch" },
      { time: "15:30", activity: "Workshop + journaling" },
      { time: "19:00", activity: "Yin + meditation" }
    ],
    hostProfile: {
      name: "Selin Aras",
      role: "Women’s Wellness Guide",
      bio: "Dedicated to creating grounded, emotionally safe retreat environments for modern women.",
      avatar:
        "/images/retreat-12.svg"
    }
  },
  {
    id: "r4",
    slug: "gocek-couples-harmony",
    title: "Gocek Couples Harmony Escape",
    shortDescription: "Reconnection retreat with partner yoga, sailing, and private dinners.",
    fullDescription:
      "A high-touch couples retreat balancing play and intimacy. Designed with shared rituals, coaching prompts, and premium experiences to reconnect with intention.",
    locationArea: "Gocek",
    price: 2450,
    currency: "USD",
    duration: 4,
    dates: ["2026-06-11", "2026-08-27"],
    yogaStyle: "Partner Flow",
    highlights: ["Couples coaching", "Private yacht evening", "Spa suite access"],
    inclusions: ["Luxury room", "Partner sessions", "Breakfast + dinner", "Transfer"],
    exclusions: ["Flights", "Alcoholic beverages"],
    teacher: "Leyla & Emre",
    rating: 4.9,
    reviewCount: 61,
    images: [
      "/images/retreat-1.svg",
      "/images/retreat-2.svg",
      "/images/retreat-3.svg"
    ],
    accommodationType: "Private Seaview Suites",
    tags: ["couples retreat", "luxury", "relationship wellness"],
    suitableFor: ["Couples", "All levels"],
    featured: false,
    wellnessExtras: ["Spa ritual", "Breath coaching"],
    schedule: [
      { time: "08:30", activity: "Partner mobility" },
      { time: "11:30", activity: "Coaching workshop" },
      { time: "17:30", activity: "Sunset flow" },
      { time: "20:30", activity: "Private dinner" }
    ],
    hostProfile: {
      name: "Leyla & Emre",
      role: "Relationship Wellbeing Hosts",
      bio: "A husband-wife facilitation duo focused on connection practices for busy couples.",
      avatar:
        "/images/retreat-4.svg"
    }
  },
  {
    id: "r5",
    slug: "izmir-detox-healing-immersion",
    title: "Izmir Detox & Healing Immersion",
    shortDescription: "A structured detox week with yoga therapy and functional nutrition.",
    fullDescription:
      "Reset body and mind with a clinically-informed wellness program in a minimalist estate near olive groves. Designed for guests seeking measurable change.",
    locationArea: "Izmir Countryside",
    price: 1980,
    currency: "USD",
    duration: 7,
    dates: ["2026-05-05", "2026-10-06"],
    yogaStyle: "Therapeutic Yoga",
    highlights: ["Guided detox protocol", "Functional testing", "Infrared sauna"],
    inclusions: ["Program meals", "Daily therapies", "Lab consultation"],
    exclusions: ["Flights", "Personal supplements"],
    teacher: "Dr. Aylin Demir",
    rating: 4.85,
    reviewCount: 84,
    images: [
      "/images/retreat-5.svg",
      "/images/retreat-6.svg",
      "/images/retreat-7.svg"
    ],
    accommodationType: "Healing Estate",
    tags: ["detox", "healing", "wellness reset"],
    suitableFor: ["Beginner", "Intermediate"],
    featured: false,
    wellnessExtras: ["Infrared sauna", "Nutrition consult", "Lymphatic massage"],
    schedule: [
      { time: "07:00", activity: "Therapeutic flow" },
      { time: "09:00", activity: "Detox breakfast" },
      { time: "14:00", activity: "Wellness diagnostics" },
      { time: "18:00", activity: "Meditation + sound bath" }
    ],
    hostProfile: {
      name: "Dr. Aylin Demir",
      role: "Functional Wellness Director",
      bio: "Medical doctor and yoga therapist bridging science-led detox with sustainable routines.",
      avatar:
        "/images/retreat-8.svg"
    }
  },
  {
    id: "r6",
    slug: "kas-luxury-teacher-intensive",
    title: "Kas Luxury Teacher-Led Intensive",
    shortDescription: "Advanced alignment, philosophy, and mentorship in a boutique cliff retreat.",
    fullDescription:
      "For dedicated practitioners and teachers seeking precision and depth. Includes workshops, assisted sequencing, and personalized mentorship.",
    locationArea: "Kas",
    price: 2600,
    currency: "USD",
    duration: 8,
    dates: ["2026-06-25", "2026-09-17"],
    yogaStyle: "Ashtanga + Alignment",
    highlights: ["Masterclass sessions", "Teaching labs", "Mentorship circles"],
    inclusions: ["Masterclasses", "Printed manuals", "Luxury villa stay"],
    exclusions: ["Flights", "Certification fees"],
    teacher: "Anya Rao",
    rating: 4.97,
    reviewCount: 55,
    images: [
      "/images/retreat-9.svg",
      "/images/retreat-10.svg",
      "/images/retreat-11.svg"
    ],
    accommodationType: "Private Cliff Villa",
    tags: ["luxury teacher-led retreat", "advanced", "education"],
    suitableFor: ["Intermediate", "Advanced"],
    featured: true,
    wellnessExtras: ["Mobility diagnostics", "Ocean therapy"],
    schedule: [
      { time: "06:30", activity: "Mysore practice" },
      { time: "11:00", activity: "Philosophy seminar" },
      { time: "16:00", activity: "Hands-on lab" },
      { time: "19:00", activity: "Yin recovery" }
    ],
    hostProfile: {
      name: "Anya Rao",
      role: "Senior Teacher",
      bio: "Known for high-precision teaching and immersive teacher-development programs.",
      avatar:
        "/images/retreat-12.svg"
    }
  },
  {
    id: "r7",
    slug: "antalya-nomad-balance-residency",
    title: "Nomad Balance Residency",
    shortDescription: "A yoga-friendly workcation with fast Wi-Fi, routines, and community.",
    fullDescription:
      "Designed for founders and remote professionals. Keep your productivity while building a healthier rhythm with movement, breathwork, and cowork lounges.",
    locationArea: "Antalya Old Town",
    price: 1320,
    currency: "USD",
    duration: 10,
    dates: ["2026-05-15", "2026-07-07", "2026-11-03"],
    yogaStyle: "Mobility + Vinyasa",
    highlights: ["Cowork lounge", "High-speed internet", "Mastermind dinners"],
    inclusions: ["Workspace access", "Daily classes", "Brunch"],
    exclusions: ["Flights", "Private coaching"],
    teacher: "Derya Koc",
    rating: 4.7,
    reviewCount: 111,
    images: [
      "/images/retreat-1.svg",
      "/images/retreat-2.svg",
      "/images/retreat-3.svg"
    ],
    accommodationType: "Design Aparthotel",
    tags: ["digital nomad friendly", "community", "city + coast"],
    suitableFor: ["Beginner", "Intermediate", "Solo travelers"],
    featured: false,
    wellnessExtras: ["Productivity coaching", "Breathwork"],
    schedule: [
      { time: "07:30", activity: "Morning mobility" },
      { time: "09:00", activity: "Cowork focus block" },
      { time: "17:30", activity: "Sunset flow" },
      { time: "20:00", activity: "Founder dinner" }
    ],
    hostProfile: {
      name: "Derya Koc",
      role: "Residency Host",
      bio: "Helps remote workers build sustainable routines without sacrificing momentum.",
      avatar:
        "/images/retreat-4.svg"
    }
  },
  {
    id: "r8",
    slug: "kapadokya-breath-and-silence",
    title: "Cappadocia Breath & Silence",
    shortDescription: "A contemplative retreat in cave suites and moonlit valleys.",
    fullDescription:
      "An intimate, low-stimulation retreat emphasizing meditation, pranayama, and deep sleep optimization surrounded by surreal landscapes.",
    locationArea: "Cappadocia",
    price: 1750,
    currency: "USD",
    duration: 5,
    dates: ["2026-06-04", "2026-10-15"],
    yogaStyle: "Pranayama + Yin",
    highlights: ["Sunrise balloon vista practice", "Digital detox protocol", "Silent dinner evening"],
    inclusions: ["Cave suite stay", "Daily classes", "Wellness meals"],
    exclusions: ["Flights", "Balloon ride ticket"],
    teacher: "Ozan Kaya",
    rating: 4.88,
    reviewCount: 67,
    images: [
      "/images/retreat-5.svg",
      "/images/retreat-6.svg",
      "/images/retreat-7.svg"
    ],
    accommodationType: "Luxury Cave Hotel",
    tags: ["wellness reset", "mindfulness", "healing"],
    suitableFor: ["All levels", "Solo travelers"],
    featured: false,
    wellnessExtras: ["Sleep clinic", "Sound bath"],
    schedule: [
      { time: "06:45", activity: "Breathwork" },
      { time: "10:00", activity: "Mindful brunch" },
      { time: "15:00", activity: "Guided silence walk" },
      { time: "19:30", activity: "Yin candlelight session" }
    ],
    hostProfile: {
      name: "Ozan Kaya",
      role: "Meditation Guide",
      bio: "Specializes in breath-led nervous system recovery and contemplative retreat design.",
      avatar:
        "/images/retreat-8.svg"
    }
  },
  {
    id: "r9",
    slug: "datca-seaside-reset",
    title: "Datca Seaside Reset",
    shortDescription: "Minimalist seaside retreat with farm-to-table nourishment.",
    fullDescription:
      "An elegant low-density retreat for guests seeking space, clean design, and gentle movement rhythms on one of Turkey’s most pristine coastlines.",
    locationArea: "Datca",
    price: 1580,
    currency: "USD",
    duration: 6,
    dates: ["2026-05-28", "2026-09-03"],
    yogaStyle: "Slow Flow",
    highlights: ["Private beach cove", "Olive grove dining", "Guided sunset hikes"],
    inclusions: ["Daily yoga", "Sea-view room", "Meals"],
    exclusions: ["Flights", "Alcohol"],
    teacher: "Ipek Tuna",
    rating: 4.75,
    reviewCount: 49,
    images: [
      "/images/retreat-9.svg",
      "/images/retreat-10.svg",
      "/images/retreat-11.svg"
    ],
    accommodationType: "Seaside Boutique House",
    tags: ["wellness reset", "beachfront", "detox"],
    suitableFor: ["Beginner", "Couples"],
    featured: false,
    wellnessExtras: ["Nature hikes", "Sound healing"],
    schedule: [
      { time: "08:00", activity: "Slow flow" },
      { time: "12:30", activity: "Farm lunch" },
      { time: "16:30", activity: "Hike + sea dip" },
      { time: "19:00", activity: "Restorative" }
    ],
    hostProfile: {
      name: "Ipek Tuna",
      role: "Retreat Curator",
      bio: "Curates nature-rich coastal experiences with refined hospitality.",
      avatar:
        "/images/retreat-12.svg"
    }
  },
  {
    id: "r10",
    slug: "bodrum-luxe-yacht-retreat",
    title: "Bodrum Luxe Yacht Retreat",
    shortDescription: "Boutique yacht living, floating yoga deck, and private bays.",
    fullDescription:
      "A rare luxury format: live aboard a modern gulet with daily anchorage in secluded turquoise waters. Designed for travelers who value exclusivity and style.",
    locationArea: "Bodrum Coast",
    price: 3200,
    currency: "USD",
    duration: 5,
    dates: ["2026-07-02", "2026-08-06"],
    yogaStyle: "Vinyasa",
    highlights: ["Private gulet stay", "Chef onboard", "Paddle + yoga sessions"],
    inclusions: ["Cabin suite", "All meals", "Daily classes", "Boat excursions"],
    exclusions: ["Flights", "Premium beverages"],
    teacher: "Nora Deniz",
    rating: 4.99,
    reviewCount: 38,
    images: [
      "/images/retreat-1.svg",
      "/images/retreat-2.svg",
      "/images/retreat-3.svg"
    ],
    accommodationType: "Luxury Yacht Cabin",
    tags: ["luxury", "couples retreat", "beachfront"],
    suitableFor: ["Couples", "Intermediate", "Advanced"],
    featured: true,
    wellnessExtras: ["Paddle coaching", "Massage"],
    schedule: [
      { time: "07:00", activity: "Deck flow" },
      { time: "11:30", activity: "Anchorage swim" },
      { time: "16:00", activity: "Workshop" },
      { time: "20:00", activity: "Chef tasting dinner" }
    ],
    hostProfile: {
      name: "Nora Deniz",
      role: "Luxury Host",
      bio: "Specializes in intimate, design-forward retreat experiences at sea.",
      avatar:
        "/images/retreat-4.svg"
    }
  },
  {
    id: "r11",
    slug: "oludeniz-healing-waters",
    title: "Oludeniz Healing Waters",
    shortDescription: "Ocean therapy, breathwork, and gentle detox by the Blue Lagoon.",
    fullDescription:
      "A restorative retreat centered around water rituals and low-impact movement. Ideal for guests recovering from burnout who want soft structure and visible care.",
    locationArea: "Oludeniz",
    price: 1720,
    currency: "USD",
    duration: 5,
    dates: ["2026-06-09", "2026-09-29"],
    yogaStyle: "Yin + Somatic",
    highlights: ["Lagoon immersion rituals", "Somatic release sessions", "Guided floating meditation"],
    inclusions: ["Hotel stay", "Daily treatments", "Meals"],
    exclusions: ["Flights", "Extra excursions"],
    teacher: "Rina Kantar",
    rating: 4.86,
    reviewCount: 73,
    images: [
      "/images/retreat-5.svg",
      "/images/retreat-6.svg",
      "/images/retreat-7.svg"
    ],
    accommodationType: "Lagoon Wellness Hotel",
    tags: ["healing", "detox", "wellness reset"],
    suitableFor: ["Beginner", "All levels"],
    featured: false,
    wellnessExtras: ["Ocean therapy", "Somatic coaching"],
    schedule: [
      { time: "07:30", activity: "Somatic stretch" },
      { time: "10:30", activity: "Lagoon ritual" },
      { time: "16:00", activity: "Breathwork" },
      { time: "19:00", activity: "Yin + nidra" }
    ],
    hostProfile: {
      name: "Rina Kantar",
      role: "Somatic Guide",
      bio: "Creates gentle, trauma-aware healing environments with a nature-first approach.",
      avatar:
        "/images/retreat-8.svg"
    }
  },
  {
    id: "r12",
    slug: "alacati-social-flow-house",
    title: "Alacati Social Flow House",
    shortDescription: "A design-led retreat house for movement, conversation, and creativity.",
    fullDescription:
      "For modern travelers who want premium but social. Expect dynamic classes, chef nights, and curated local experiences in a sophisticated old-town setting.",
    locationArea: "Alacati",
    price: 1490,
    currency: "USD",
    duration: 4,
    dates: ["2026-05-30", "2026-07-30", "2026-10-01"],
    yogaStyle: "Vinyasa",
    highlights: ["Designer retreat house", "Community dinners", "Local craft curation"],
    inclusions: ["Shared/private room", "Classes", "Brunch + dinner"],
    exclusions: ["Flights", "Personal shopping"],
    teacher: "Burcu Tan",
    rating: 4.72,
    reviewCount: 58,
    images: [
      "/images/retreat-9.svg",
      "/images/retreat-10.svg",
      "/images/retreat-11.svg"
    ],
    accommodationType: "Design Retreat House",
    tags: ["digital nomad friendly", "surf + yoga", "community"],
    suitableFor: ["Beginner", "Intermediate"],
    featured: false,
    wellnessExtras: ["Creative journaling", "Sound healing"],
    schedule: [
      { time: "08:00", activity: "Morning flow" },
      { time: "11:00", activity: "Brunch + cowork" },
      { time: "17:30", activity: "Sunset class" },
      { time: "20:30", activity: "Hosted dinner" }
    ],
    hostProfile: {
      name: "Burcu Tan",
      role: "Community Host",
      bio: "Design-minded host building meaningful social wellness experiences.",
      avatar:
        "/images/retreat-12.svg"
    }
  }
];
