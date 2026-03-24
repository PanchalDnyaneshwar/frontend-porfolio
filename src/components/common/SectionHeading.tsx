interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        centered
          ? 'mx-auto mb-10 max-w-2xl text-center sm:mb-12'
          : 'mb-10 max-w-2xl sm:mb-12'
      }
    >
      {eyebrow ? (
        <p className="display-kicker mb-3 text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display-title text-3xl text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="display-copy mt-4 max-w-xl text-base text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
