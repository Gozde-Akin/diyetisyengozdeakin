export const SITE_CONFIG = {
  name: "Uzman Diyetisyen & Psikolog Gözde Akın",
  shortName: "Dyt. Gözde Akın",
  domain: "diyetisyengozdeakin.com",
  url: "https://www.diyetisyengozdeakin.com",
  email: "dytgozdeakin@gmail.com",
  phone: "+90 538 935 92 14",
  phoneRaw: "+905389359214",
  whatsapp: "https://wa.me/905389359214",
  instagram: "https://www.instagram.com/diyetisyengozdeakin/",
  instagramHandle: "@diyetisyengozdeakin",
  linkedin:
    "https://www.linkedin.com/in/g%C3%B6zde-akin-3a09a8106?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  clinic: {
    professionalTitle: "Uzman Diyetisyen & Psikolog",
    name: "Gözde Akın Özel Klinik",
    fullName: "Uzman Diyetisyen & Psikolog — Gözde Akın Özel Klinik",
    addressLine1: "Fikirtepe, Barış Sokak No:1 Kat:14 Daire:162",
    addressLine2: "Alya Life Residence, Kadıköy / İstanbul",
    streetAddress: "Barış Sokak No:1 Kat:14 Daire:162, Alya Life Residence",
    district: "Kadıköy",
    city: "İstanbul",
    country: "TR",
    postalAddress: "Fikirtepe, Barış Sokak No:1 Kat:14 Daire:162, Alya Life Residence, Kadıköy / İstanbul",
  },
} as const;

export const YOUTUBE_VIDEOS = [
  { id: "keto", videoId: "mwosCkjruR0", titleKey: "video1Title", format: "video" },
  { id: "thyroid-pcos", videoId: "ganblUqgs4s", titleKey: "video2Title", format: "video" },
  { id: "stress-diet", videoId: "edWS0pHs2v0", titleKey: "video3Title", format: "video" },
  { id: "parent-testimonial", videoId: "v_C0M4N_eGs", titleKey: "video4Title", format: "short" },
  { id: "obesity-diet-only", videoId: "G4CjbyXts-g", titleKey: "video5Title", format: "video" },
] as const;

export const EXPERTISE_AREAS = [
  "pregnancy", "pcos", "diabetes", "insulinResistance", "obesity", "weightManagement",
  "functionalMedicine", "sportsNutrition", "gutHealth", "hormonalBalance", "corporateNutrition",
  "childrenNutrition", "menopause", "healthyAging",
] as const;

export const SERVICE_SLUGS = [
  "kilo-yonetimi", "pcos", "gebelikte-beslenme", "diyabet", "insulin-direnci", "obezite",
  "fonksiyonel-tip", "kurumsal-beslenme", "sporcu-beslenmesi", "cocuk-beslenmesi",
  "hormon-dengesi", "menopoz",
] as const;

export const BLOG_CATEGORIES = [
  "nutrition", "recipes", "hormones", "womensHealth", "pcos", "insulinResistance",
  "pregnancy", "children", "gutHealth", "functionalMedicine", "psychology", "healthyLifestyle",
] as const;

export const LOCALES = ["tr", "en", "de", "fr", "ru", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  fr: "Français",
  ru: "Русский",
  ar: "العربية",
};

export const RTL_LOCALES: Locale[] = ["ar"];
