import Container from '@/components/common/Container';

interface PageBannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950/40 py-16 sm:py-18 lg:py-20">
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-10" />
      <Container className="relative max-w-4xl">
        {eyebrow ? (
          <p className="display-kicker mb-3 text-primary">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="display-title text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>

        {description ? (
          <p className="display-copy mt-5 max-w-3xl text-base text-slate-400 sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

export default PageBanner;
