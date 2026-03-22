import { useEffect } from 'react';
import { SEO } from '@/constants/seo';

interface PageSeoProps {
  title: string;
  description?: string;
}

function PageSeo({ title, description }: PageSeoProps) {
  useEffect(() => {
    document.title = `${title} | ${SEO.titleSuffix}`;

    const metaDescription = document.querySelector('meta[name="description"]');
    const finalDescription = description || SEO.defaultDescription;

    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      meta.setAttribute('content', finalDescription);
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
}

export default PageSeo;