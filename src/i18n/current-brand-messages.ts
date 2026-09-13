type Messages = Record<string, unknown>;

const overrides: Record<string, Messages> = {
  tr: {
    cta: { subtitle: "Kadıköy'deki özel klinikte veya online görüşme için randevu alın." },
    footer: { descriptionLine3: "Özel Klinik • Kadıköy / İstanbul" },
    site: { imageAlt: "Uzman Diyetisyen & Psikolog Gözde Akın — Özel Klinik" },
    contact: {
      subtitle: "Özel klinik randevusu ve bilgi için bize ulaşın",
      mapTitle: "Gözde Akın Özel Klinik — Kadıköy / İstanbul"
    }
  },
  en: {
    cta: { subtitle: "Book an appointment at the private clinic in Kadıköy or online." },
    footer: { descriptionLine3: "Private Clinic • Kadıköy / Istanbul" },
    site: { imageAlt: "Expert Dietitian & Psychologist Gözde Akın — Private Clinic" },
    contact: {
      subtitle: "Contact us for private-clinic appointments and information",
      mapTitle: "Gözde Akın Private Clinic — Kadıköy / Istanbul"
    }
  },
  de: {
    cta: { subtitle: "Vereinbaren Sie einen Termin in der Privatklinik in Kadıköy oder online." },
    footer: { descriptionLine3: "Privatklinik • Kadıköy / Istanbul" },
    site: { imageAlt: "Gözde Akın — Ernährungsberaterin & Psychologin, Privatklinik" },
    contact: {
      subtitle: "Kontakt für Termine in der Privatklinik und weitere Informationen",
      mapTitle: "Gözde Akın Privatklinik — Kadıköy / Istanbul"
    }
  },
  fr: {
    cta: { subtitle: "Prenez rendez-vous à la clinique privée de Kadıköy ou en ligne." },
    footer: { descriptionLine3: "Clinique privée • Kadıköy / Istanbul" },
    site: { imageAlt: "Gözde Akın — Diététicienne experte & Psychologue, clinique privée" },
    contact: {
      subtitle: "Contactez-nous pour un rendez-vous à la clinique privée ou pour toute information",
      mapTitle: "Clinique privée Gözde Akın — Kadıköy / Istanbul"
    }
  },
  ru: {
    cta: { subtitle: "Запишитесь на приём в частную клинику в Кадыкёе или онлайн." },
    footer: { descriptionLine3: "Частная клиника • Кадыкёй / Стамбул" },
    site: { imageAlt: "Гёзде Акын — диетолог и психолог, частная клиника" },
    contact: {
      subtitle: "Свяжитесь с нами для записи в частную клинику и получения информации",
      mapTitle: "Частная клиника Gözde Akın — Кадыкёй / Стамбул"
    }
  },
  ar: {
    cta: { subtitle: "احجز موعداً في العيادة الخاصة في كاديكوي أو عبر الإنترنت." },
    footer: { descriptionLine3: "عيادة خاصة • كاديكوي / إسطنبول" },
    site: { imageAlt: "غوزده أكين — أخصائية تغذية وخبيرة نفسية، عيادة خاصة" },
    contact: {
      subtitle: "تواصلوا معنا لحجز موعد في العيادة الخاصة أو للحصول على معلومات",
      mapTitle: "عيادة Gözde Akın الخاصة — كاديكوي / إسطنبول"
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
