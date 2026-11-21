export type IconKey =
  | "switch" | "box" | "cable" | "bulb" | "mcb" | "plug"
  | "appliance" | "fan" | "pipe" | "repair" | "extension";

export interface Shop {
  name: string;
  tagline: string;
  city: string;
  address: string;
  phone: string;          // dialable, e.g. +919876543210
  phoneDisplay: string;   // human readable
  whatsapp: string;       // digits only with country code
  timings: string;        // leave "" until confirmed
  mapQuery: string;       // used for Google Maps links
}

export interface Brand {
  slug: string;
  name: string;
  color: string;
  logo?: string;          // path under /public, optional
  description: string;
  /** Not a real brand (e.g. "Also in stock"); excluded from brand counts. */
  isGeneral?: boolean;
}

export interface Category {
   slug: string;
  name: string;
  blurb: string;
  icon: IconKey;
  image?: string;
}

export interface Product {
  slug: string;
  name: string;
  brandSlug: string;
  categorySlug: string;
  description: string;
  image?: string;         // path under /public/images/products
  featured?: boolean;
  keywords?: string[];
  specs?: { label: string; value: string }[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: IconKey;
}
