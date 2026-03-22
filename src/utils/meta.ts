import { SEO } from '@/constants/seo';

export const setDocumentTitle = (title: string) => {
  document.title = `${title} | ${SEO.titleSuffix}`;
};