export const normalizeSlug = (value: string) =>
  value.trim().toLowerCase().replace(/\s+/g, '-');