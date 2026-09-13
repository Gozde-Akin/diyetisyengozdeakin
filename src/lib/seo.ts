import { SITE_CONFIG, LOCALES } from "@/lib/constants";
import { routing } from "@/i18n/routing";

const PHYSICIAN_ALTERNATE_NAMES = [
  "Diyetisyen Gözde Akın",
  "Dyt. Gözde Akın",
  "Gözde Akın",
  "Uzman Diyetisyen Gözde Akın",
  "Diyetisyen Gozde Akin",
] as const;

export function getAlternates(path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const languages: Record<string, string> = {};

  for (const locale of LOCALES) {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    languages[locale] = `${SITE_CONFIG.url}${prefix}${normalized || ""}`;
  }

  languages["x-default"] = `${SITE_CONFIG.url}${normalized || ""}`;

  return { canonical: languages[routing.defaultLocale], languages };
}

const clinicAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE_CONFIG.clinic.streetAddress,
  addressLocality: SITE_CONFIG.clinic.district,
  addressRegion: SITE_CONFIG.clinic.city,
  addressCountry: SITE_CONFIG.clinic.country,
};

export function organizationJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_CONFIG.clinic.name,
    alternateName: PHYSICIAN_ALTERNATE_NAMES,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    image: `${SITE_CONFIG.url}/images/gozde/profile.jpg`,
    address: clinicAddress,
    sameAs: [SITE_CONFIG.instagram, SITE_CONFIG.linkedin],
    availableLanguage: LOCALES,
    inLanguage: locale,
  };
}

export function physicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gözde Akın",
    alternateName: PHYSICIAN_ALTERNATE_NAMES,
    jobTitle: "Uzman Diyetisyen & Psikolog",
    description:
      "Beslenme ve psikolojiyi birleştiren bilim temelli, kişiselleştirilmiş danışmanlık hizmetleri. Danışanlarını İstanbul Kadıköy'deki özel kliniğinde ve online olarak kabul etmektedir.",
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    image: `${SITE_CONFIG.url}/images/gozde/profile.jpg`,
    worksFor: {
      "@type": "MedicalBusiness",
      name: SITE_CONFIG.clinic.name,
      url: SITE_CONFIG.url,
      address: clinicAddress,
    },
    knowsAbout: ["Nutrition", "Psychology", "Functional Medicine"],
    address: clinicAddress,
    sameAs: [SITE_CONFIG.instagram, SITE_CONFIG.linkedin],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Diyetisyen Gözde Akın",
    alternateName: PHYSICIAN_ALTERNATE_NAMES,
    url: SITE_CONFIG.url,
    inLanguage: LOCALES,
    publisher: {
      "@type": "Person",
      name: "Gözde Akın",
    },
  };
}
