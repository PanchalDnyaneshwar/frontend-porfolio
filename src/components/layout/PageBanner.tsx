import Container from '@/components/common/Container';

interface PageBannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950/40 py-20">
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-10" />
      <Container className="relative">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>

        {description ? (
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}

export default PageBanner;