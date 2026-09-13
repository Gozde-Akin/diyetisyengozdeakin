import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Gözde Akın — Uzman Diyetisyen & Psikolog",
    short_name: "Gözde Akın",
    description:
      "Sürdürülebilir beslenme, fonksiyonel tıp ve psikoloji destekli danışmanlık. İstanbul Kadıköy'de özel klinik ve online danışmanlık.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F4",
    theme_color: "#4A5A45",
    orientation: "portrait-primary",
    scope: "/",
    lang: "tr",
    categories: ["health", "medical", "lifestyle"],
    icons: [
      {
        src: "/brand/logo-mark-official.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/opengraph-image",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
        label: SITE_CONFIG.shortName,
      },
    ],
    shortcuts: [
      {
        name: "Randevu Al",
        short_name: "Randevu",
        url: "/iletisim",
        icons: [{ src: "/brand/logo-mark-official.svg", sizes: "any", type: "image/svg+xml" }],
      },
      {
        name: "Hesaplayıcılar",
        short_name: "Hesapla",
        url: "/#hesaplayicilar",
        icons: [{ src: "/brand/logo-mark-official.svg", sizes: "any", type: "image/svg+xml" }],
      },
      {
        name: "Blog",
        short_name: "Blog",
        url: "/blog",
        icons: [{ src: "/brand/logo-mark-official.svg", sizes: "any", type: "image/svg+xml" }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
