export const BRAND = {
  forestGreen: "#4A5A45",
  sageGreen: "#A7AE9D",
  earth: "#C8BBAA",
  lightGold: "#D4AD47",
  cream: "#FAF8F4",
} as const;

export const BRAND_IMAGES = {
  logo: "/brand/logo-official.svg",
  logoMark: "/brand/logo-mark-official.svg",
  logoTransparent: "/brand/logo-official.svg",
  banner: "/brand/logo-official.svg",
} as const;

export const BRAND_DIMENSIONS = {
  logo: { width: 1200, height: 800 },
  banner: { width: 1200, height: 800 },
} as const;

/** SVG assets are rendered losslessly; this remains for raster fallbacks. */
export const BRAND_IMAGE_QUALITY = 100;
