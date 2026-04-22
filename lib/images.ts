// SEO-friendly image mapping — actual filenames kept internal; clean semantic keys used throughout code
// DO NOT expose raw filenames in alt text, structured data, or metadata

export const FALLBACK_IMAGE = "/images/placeholder.jpeg";

// 1×1 warm-stone GIF used as blur placeholder for all next/image instances
export const BLUR_DATA_URL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAPXw6AAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

// Canonical image mapping: semantic key → public path
export const IMAGES = {
  hero: "/images/1000_1768363139.jpeg",
  aegeanClarityBodrum: "/images/1000_1774658331.jpeg",
  fethiyeSurfYoga: "/images/1000_1736428509.jpeg",
  antalyaWomensRetreat: "/images/1000_1737372518.jpeg",
  gocekCouplesRetreat: "/images/1000_1739098479.jpeg",
  izmirDetoxRetreat: "/images/1000_1734087208.jpeg",
  kasLuxuryIntensive: "/images/1000_1736428473.jpeg",
  antalyaNomadResidency: "/images/1000_1774286068.jpeg",
  cappadociaYogaRetreat: "/images/1000_1736428500.jpeg",
  datcaSeasideRetreat: "/images/1000_1767723278.jpeg",
  generalYogaTurkey: "/images/original.jpeg",
} as const;
