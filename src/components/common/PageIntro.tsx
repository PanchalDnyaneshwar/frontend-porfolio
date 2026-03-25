interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow ? (
        <p className="display-kicker mb-3 text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="display-title text-4xl sm:text-5xl">{title}</h1>
      {description ? (
        <p className="display-copy mt-5 text-lg text-zinc-600">{description}</p>
      ) : null}
    </div>
  );
}

export default PageIntro;


