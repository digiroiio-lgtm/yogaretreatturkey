import { blogPosts } from "@/lib/data/blog";
import { guides } from "@/lib/data/guides";
import { BlogPost, Guide } from "@/lib/types";

export const getAllPosts = (): BlogPost[] => blogPosts;
export const getFeaturedPosts = (): BlogPost[] => blogPosts.filter((p) => p.featured);
export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const getAllGuides = (): Guide[] => guides;
export const getGuideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);
