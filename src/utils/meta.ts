import { SEO } from '@/constants/seo';

export const setDocumentTitle = (title: string) => {
  document.title = `${title} | ${SEO.titleSuffix}`;
};

export const setMetaDescription = (description: string) => {
  const metaDescription = document.querySelector('meta[name="description"]');

  if (metaDescription) {
    metaDescription.setAttribute('content', description);
    return;
  }

  const meta = document.createElement('meta');
  meta.name = 'description';
  meta.content = description;
  document.head.appendChild(meta);
};