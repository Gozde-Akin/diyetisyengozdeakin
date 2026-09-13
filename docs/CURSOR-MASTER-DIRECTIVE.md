# CURSOR MASTER PRODUCTION DIRECTIVE

## Canonical project facts — September 2026

**Client:** Uzman Diyetisyen & Psikolog Gözde Akın  
**Domain:** diyetisyengozdeakin.com  
**Email:** dytgozdeakin@gmail.com  
**Phone:** +90 538 935 92 14  
**Instagram:** https://www.instagram.com/diyetisyengozdeakin/

### Current professional status

Gözde Akın **does not currently work at or represent any hospital**. She sees clients at her own private clinic and online.

**Current clinic:** Gözde Akın Özel Klinik  
**Address:** Fikirtepe, Barış Sokak No:1 Kat:14 Daire:162, Alya Life Residence, Kadıköy / İstanbul

Historical hospital work may be stated only as past professional experience. It must never be presented as a current affiliation, current workplace, appointment location, footer location, contact location, SEO location, structured-data employer, badge, CTA, or social-profile association.

---

## Brand identity

The official identity is **GÖZDE AKIN — UZMAN DİYETİSYEN • PSİKOLOG**.

### Canonical palette

```text
Zeytin Yeşili / Forest Green: #4A5A45
Adaçayı Yeşili / Sage Green:  #A3B29A
Toprak / Earth:                #C8BBAA
Işık Altın / Light Gold:       #D4AD47
Cream:                         #FAF8F4
```

Do not use Memorial red or hospital-branded visual language. Legacy CSS aliases may remain only for compatibility if they render using the current Gözde Akın palette.

### Visual direction

- Minimal, elegant, premium, warm and evidence-led
- Generous white/cream space
- Rounded cards, restrained glass effects and soft motion
- Real Gözde Akın photography; avoid generic stock imagery
- No hospital logos, hospital badges or current hospital references
- Logo, favicon, PWA and social preview must use the Gözde Akın identity

---

## Professional positioning

Primary title:

**Uzman Diyetisyen & Psikolog Gözde Akın**

Current-position wording in Turkish:

> Danışanlarını İstanbul Kadıköy'deki kendi özel kliniğinde ve online olarak kabul etmektedir.

Do not use “pratik/pratiği” as the current workplace description. Use **özel klinik**.

Historical experience may include:

- 2017–2023 — Memorial Ataşehir Hastanesi, Sorumlu Diyetisyen
- Atlas Üniversitesi — Beslenme ve Psikoloji dersleri
- Bahçeşehir Üniversitesi — Sağlık Psikolojisi dersleri
- We5 Concept Etiler — Sporcu beslenmesi
- Kanada — uluslararası eğitim

There must be no statement saying Memorial Göztepe or any other hospital is the current workplace.

---

## Site map

```text
/                          → Ana Sayfa
/hakkimda                  → Hakkımda
/hizmetler                 → Hizmetler
/hizmetler/[slug]          → Hizmet detayı
/blog                      → Blog
/blog/[slug]               → Blog yazısı
/online-danismanlik        → Online danışmanlık
/iletisim                  → Özel klinik adresi, harita, form, WhatsApp
```

### Main services

- Kilo Yönetimi
- PCOS
- Gebelikte Beslenme
- Diyabet
- İnsülin Direnci
- Obezite
- Fonksiyonel Tıp
- Kurumsal Beslenme
- Sporcu Beslenmesi
- Çocuk Beslenmesi
- Hormon Dengesi
- Menopoz
- Bağırsak Sağlığı
- Sağlıklı Yaşlanma

---

## Homepage requirements

### Hero
- Gözde Akın official branding
- Current private-clinic badge, not a hospital badge
- Professional private-clinic/office portrait
- CTA: Randevu Al / Online Danışmanlık / WhatsApp

### About
- Expert Dietitian + Psychologist positioning
- Historical employment clearly separated from current status
- Current status: own private clinic in Kadıköy / İstanbul

### Contact and footer
Must show:

```text
Gözde Akın Özel Klinik
Fikirtepe, Barış Sokak No:1 Kat:14 Daire:162
Alya Life Residence, Kadıköy / İstanbul
+90 538 935 92 14
@diyetisyengozdeakin
```

No current hospital list and no Memorial doctor-profile link.

---

## Internationalization

Supported locales:

| Code | Language | Direction |
|---|---|---|
| tr | Türkçe | LTR |
| en | English | LTR |
| de | Deutsch | LTR |
| fr | Français | LTR |
| ru | Русский | LTR |
| ar | العربية | RTL |

All visible current-workplace text must communicate the same fact in every locale: Gözde Akın works from her own private clinic in Kadıköy, Istanbul and online. Historical Memorial employment must be written explicitly as past experience only.

---

## SEO and structured data

Canonical local SEO location:

**Fikirtepe / Kadıköy / İstanbul**

Requirements:

- LocalBusiness/MedicalBusiness data must use the private-clinic address
- Person structured data may describe Gözde Akın as Expert Dietitian & Psychologist
- `worksFor` must point to Gözde Akın Özel Klinik, not a hospital
- `sameAs` must not contain an obsolete Memorial profile
- Metadata titles/descriptions must not present a current hospital affiliation
- OpenGraph/Twitter preview must use current Gözde Akın branding
- Sitemap, robots and canonical/hreflang must remain valid

---

## Content policy

- Evidence-based, clear, warm and professional
- No guaranteed medical or weight-loss outcomes
- No miracle claims
- Use individualized-care language
- Past professional history can be preserved accurately
- Never imply endorsement or current affiliation by former employers

---

## Technical stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 + React 19 + TypeScript |
| Styling | Tailwind CSS 4 |
| Motion | Framer Motion |
| i18n | next-intl |
| Hosting | Vercel + Cloudflare |

### Quality gates

Before declaring production complete:

1. `npm run build` must pass.
2. No current hospital affiliation may appear in rendered pages, metadata or JSON-LD.
3. Contact map must resolve the private-clinic address.
4. Header/footer/mobile/PWA/offline/social-preview branding must be consistent.
5. All six locales must show the current private-clinic positioning.
6. Desktop and mobile layouts must remain responsive and accessible.
7. Historical Memorial references are permitted only where the date/context clearly identifies past employment.

---

## Agent instruction

Treat this file as the canonical source for current professional status, address and brand identity. If older files, cached content, translation JSON, screenshots or assets conflict with this directive, this directive wins.

*Last updated: September 2026*
