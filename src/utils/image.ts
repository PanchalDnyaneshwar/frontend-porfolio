import { useEffect } from 'react';
import { SEO } from '@/constants/seo';

interface UsePageSeoOptions {
  title: string;
  description?: string;
}

export function usePageSeo({ title, description }: UsePageSeoOptions) {
  useEffect(() => {
    document.title = `${title} | ${SEO.titleSuffix}`;

    const metaDescription = document.querySelector('meta[name="description"]');
    const finalDescription = description || SEO.defaultDescription;

    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = finalDescription;
      document.head.appendChild(meta);
    }
  }, [title, description]);
}