type Messages = Record<string, unknown>;

const BRAND_TITLE = "Uzman Diyetisyen & Psikolog";
const BRAND_CLINIC = "Gözde Akın Özel Klinik";
const BRAND_FULL = `${BRAND_TITLE} • ${BRAND_CLINIC}`;

const overrides: Record<string, Messages> = {
  tr: {
    hero: { badge: BRAND_FULL },
    about: { hospital: BRAND_FULL },
    cta: { subtitle: "Kadıköy'deki özel klinikte veya online görüşme için randevu alın." },
    footer: {
      descriptionLine1: BRAND_TITLE,
      descriptionLine2: BRAND_CLINIC,
      descriptionLine3: "Kadıköy / İstanbul"
    },
    site: { imageAlt: `${BRAND_TITLE} — ${BRAND_CLINIC}` },
    contact: {
      subtitle: "Özel klinik randevusu ve bilgi için bize ulaşın",
      mapTitle: `${BRAND_TITLE} — ${BRAND_CLINIC}`
    }
  },
  en: {
    hero: { badge: BRAND_FULL },
    about: { hospital: BRAND_FULL },
    cta: { subtitle: "Book an appointment at the private clinic in Kadıköy or online." },
    footer: {
      descriptionLine1: BRAND_TITLE,
      descriptionLine2: BRAND_CLINIC,
      descriptionLine3: "Kadıköy / Istanbul"
    },
    site: { imageAlt: `${BRAND_TITLE} — ${BRAND_CLINIC}` },
    contact: {
      subtitle: "Contact us for private-clinic appointments and information",
      mapTitle: `${BRAND_TITLE} — ${BRAND_CLINIC}`
    }
  },
  de: {
    hero: { badge: BRAND_FULL },
    about: { hospital: BRAND_FULL },
    cta: { subtitle: "Vereinbaren Sie einen Termin in der Privatklinik in Kadıköy oder online." },
    footer: {
      descriptionLine1: BRAND_TITLE,
      descriptionLine2: BRAND_CLINIC,
      descriptionLine3: "Kadıköy / Istanbul"
    },
    site: { imageAlt: `${BRAND_TITLE} — ${BRAND_CLINIC}` },
    contact: {
      subtitle: "Kontakt für Termine in der Privatklinik und weitere Informationen",
      mapTitle: `${BRAND_TITLE} — ${BRAND_CLINIC}`
    }
  },
  fr: {
    hero: { badge: BRAND_FULL },
    about: { hospital: BRAND_FULL },
    cta: { subtitle: "Prenez rendez-vous à la clinique privée de Kadıköy ou en ligne." },
    footer: {
      descriptionLine1: BRAND_TITLE,
      descriptionLine2: BRAND_CLINIC,
      descriptionLine3: "Kadıköy / Istanbul"
    },
    site: { imageAlt: `${BRAND_TITLE} — ${BRAND_CLINIC}` },
    contact: {
      subtitle: "Contactez-nous pour un rendez-vous à la clinique privée ou pour toute information",
      mapTitle: `${BRAND_TITLE} — ${BRAND_CLINIC}`
    }
  },
  ru: {
    hero: { badge: BRAND_FULL },
    about: { hospital: BRAND_FULL },
    cta: { subtitle: "Запишитесь на приём в частную клинику в Кадыкёе или онлайн." },
    footer: {
      descriptionLine1: BRAND_TITLE,
      descriptionLine2: BRAND_CLINIC,
      descriptionLine3: "Кадыкёй / Стамбул"
    },
    site: { imageAlt: `${BRAND_TITLE} — ${BRAND_CLINIC}` },
    contact: {
      subtitle: "Свяжитесь с нами для записи в частную клинику и получения информации",
      mapTitle: `${BRAND_TITLE} — ${BRAND_CLINIC}`
    }
  },
  ar: {
    hero: { badge: BRAND_FULL },
    about: { hospital: BRAND_FULL },
    cta: { subtitle: "احجز موعداً في العيادة الخاصة في كاديكوي أو عبر الإنترنت." },
    footer: {
      descriptionLine1: BRAND_TITLE,
      descriptionLine2: BRAND_CLINIC,
      descriptionLine3: "كاديكوي / إسطنبول"
    },
    site: { imageAlt: `${BRAND_TITLE} — ${BRAND_CLINIC}` },
    contact: {
      subtitle: "تواصلوا معنا لحجز موعد في العيادة الخاصة أو للحصول على معلومات",
      mapTitle: `${BRAND_TITLE} — ${BRAND_CLINIC}`
    }
  }
};

function merge(base: Messages, override: Messages): Messages {
  const result: Messages = { ...base };
  for (const [key, value] of Object.entries(override)) {
    const current = result[key];
    if (
      value && typeof value === "object" && !Array.isArray(value) &&
      current && typeof current === "object" && !Array.isArray(current)
    ) {
      result[key] = merge(current as Messages, value as Messages);
    } else {
      result[key] = value;
    }
  }
  return result;
}

export function applyCurrentBrandOverrides(locale: string, messages: Messages): Messages {
  return merge(messages, overrides[locale] ?? overrides.tr);
}
