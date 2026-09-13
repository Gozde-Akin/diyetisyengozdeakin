import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { applyClinicMessageOverrides } from "./clinic-messages";
import { applyCurrentBrandOverrides } from "./current-brand-messages";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  const messages = (await import(`./messages/${locale}.json`)).default;
  const clinicMessages = applyClinicMessageOverrides(locale, messages);
  const currentMessages = applyCurrentBrandOverrides(locale, clinicMessages);

  return {
    locale,
    messages: currentMessages as typeof messages,
  };
});
