export interface SeoSettings {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
}

export interface ContactInfoSettings {
  email?: string;
  phone?: string;
  location?: string;
  mapUrl?: string;
}

export interface Settings {
  _id?: string;
  siteTitle?: string;
  siteDescription?: string;
  logo?: string;
  favicon?: string;
  primaryColor?: string;
  seo?: SeoSettings;
  contactInfo?: ContactInfoSettings;
}