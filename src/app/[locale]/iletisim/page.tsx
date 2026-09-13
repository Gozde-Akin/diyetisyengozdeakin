import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import { ThemedContactRow } from "@/components/ui/ThemedCard";
import { SITE_CONFIG } from "@/lib/constants";
import { getContactTheme } from "@/lib/card-themes";

type Props = {
  params: Promise<{ locale: string }>;
};

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `${SITE_CONFIG.clinic.fullName}, ${SITE_CONFIG.clinic.postalAddress}`
)}&output=embed`;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: `${t("title")} | Gözde Akın` };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <Section variant="gradient" className="!py-16">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      </Section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <ThemedContactRow theme={getContactTheme("whatsapp")} href={SITE_CONFIG.whatsapp} external>
              <p className="font-medium text-navy">{t("whatsapp")}</p>
              <p className="text-sm text-navy/60">{t("whatsappDesc")}</p>
            </ThemedContactRow>
            <ThemedContactRow theme={getContactTheme("email")} href={`mailto:${SITE_CONFIG.email}`}>
              <p className="text-sm text-navy/50">{t("email")}</p>
              <p className="font-medium text-navy">{SITE_CONFIG.email}</p>
            </ThemedContactRow>
            <ThemedContactRow theme={getContactTheme("phone")} href={`tel:${SITE_CONFIG.phoneRaw}`}>
              <p className="text-sm text-navy/50">{t("phone")}</p>
              <p className="font-medium text-navy">{SITE_CONFIG.phone}</p>
            </ThemedContactRow>
            <ThemedContactRow theme={getContactTheme("hours")}>
              <p className="text-sm text-navy/50">{t("workingHours")}</p>
              <p className="font-medium text-navy">{t("workingHoursValue")}</p>
            </ThemedContactRow>
            <ThemedContactRow theme={getContactTheme("hospital")}>
              <p className="font-medium text-navy">{SITE_CONFIG.clinic.professionalTitle}</p>
              <p className="font-medium text-navy">{SITE_CONFIG.clinic.name}</p>
              <p className="mt-1 text-sm text-navy/50">{SITE_CONFIG.clinic.addressLine1}</p>
              <p className="text-sm text-navy/50">{SITE_CONFIG.clinic.addressLine2}</p>
            </ThemedContactRow>
            <ThemedContactRow theme={getContactTheme("instagram")} href={SITE_CONFIG.instagram} external>
              <p className="font-medium text-navy">Instagram</p>
              <p className="text-sm text-navy/50">{SITE_CONFIG.instagramHandle}</p>
            </ThemedContactRow>
            <ThemedContactRow theme={getContactTheme("linkedin")} href={SITE_CONFIG.linkedin} external>
              <p className="font-medium text-navy">LinkedIn</p>
              <p className="text-sm text-navy/50">{t("linkedinDesc")}</p>
            </ThemedContactRow>
            <Button href={SITE_CONFIG.whatsapp} className="w-full sm:w-auto">
              {t("whatsapp")}
            </Button>
          </div>

          <ContactForm />
        </div>
      </Section>

      <Section variant="light">
        <div className="mb-6">
          <p className="font-heading text-lg font-semibold text-navy">{SITE_CONFIG.clinic.professionalTitle}</p>
          <h2 className="font-heading text-2xl font-bold text-navy">{SITE_CONFIG.clinic.name}</h2>
          <p className="mt-1 text-sm text-navy/60">{SITE_CONFIG.clinic.postalAddress}</p>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <iframe
            title={SITE_CONFIG.clinic.fullName}
            src={MAP_EMBED_URL}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </Section>
    </>
  );
}
