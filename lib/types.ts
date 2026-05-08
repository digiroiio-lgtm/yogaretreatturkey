export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "All levels";

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  content: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  author: { name: string; role: string; bio: string };
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
};

export type Guide = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  content: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  coverImage: string;
  readTime: number;
};

export type Retreat = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  locationArea: string;
  price: number;
  currency: string;
  duration: number;
  dates: string[];
  yogaStyle: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  teacher: string;
  rating: number;
  reviewCount: number;
  images: string[];
  accommodationType: string;
  tags: string[];
  suitableFor: string[];
  featured: boolean;
  wellnessExtras: string[];
  schedule: { time: string; activity: string }[];
  hostProfile: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
  };
  fitTags: string[];
  wellnessScores: {
    calm: number;
    luxury: number;
    transformation: number;
    socialEnergy: number;
    natureImmersion: number;
    detoxDepth: number;
    digitalDetox: number;
    sleepRecovery: number;
  };
  transformation: {
    fromState: string;
    toState: string;
    emotionalOutcome: string;
  };
  trustBadges: string[];
  notFor: string[];
  groupSize: string;
  bestSeason: string;
  wifiQuality: "Excellent" | "Good" | "Limited" | "Offline (Digital Detox)";
  digitalNomadSuitable: boolean;
  personality: string;
  recentBookings: number;
};
