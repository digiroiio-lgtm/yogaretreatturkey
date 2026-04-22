export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "All levels";

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
};
