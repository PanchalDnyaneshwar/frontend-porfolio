interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}

export default PageIntro;