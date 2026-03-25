import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import EmptyState from '@/components/common/EmptyState';
import type { Experience } from '@/types/experience.types';
import { formatDate } from '@/utils/date';

interface ExperiencePreviewSectionProps {
  experiences: Experience[];
}

function ExperiencePreviewSection({ experiences }: ExperiencePreviewSectionProps) {
  const preview = experiences.slice(0, 3);

  return (
    <Section>
      {preview.length ? (
        <div className="xl:grid xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-10">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <SectionHeading
              eyebrow="Experience"
              title="Work Highlights"
              description="A snapshot of roles, contributions and technologies used in real projects."
            />

            <div className="rounded-3xl border border-neutral-200 bg-[#fcfaf6] p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                Role snapshot
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-700">
                The left side now carries context and the right side uses a more readable stack of
                experience cards, so desktop layouts feel fuller and easier to scan.
              </p>
            </div>

            <div className="mt-8 hidden xl:block">
              <Button href="/experience" variant="outline">
                View Full Experience
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {preview.map((item) => (
              <article
                key={item._id}
                className="rounded-3xl border border-neutral-200 bg-[#fcfaf6] p-6 shadow-soft"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900">{item.role}</h3>
                    <p className="mt-1 text-primary">{item.companyName}</p>
                  </div>

                  <div className="self-start rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {formatDate(item.startDate)} -{' '}
                    {item.currentlyWorking ? 'Present' : formatDate(item.endDate)}
                  </div>
                </div>

                {item.description ? (
                  <p className="mt-5 leading-7 text-zinc-600">{item.description}</p>
                ) : null}

                {item.technologies?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.slice(0, 6).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-neutral-300 bg-[#f1ebe2]/80 px-3 py-1 text-xs font-medium text-zinc-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}

            <div className="xl:hidden">
              <Button href="/experience" variant="outline">
                View Full Experience
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="xl:grid xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-10">
          <SectionHeading
            eyebrow="Experience"
            title="Work Highlights"
            description="A snapshot of roles, contributions and technologies used in real projects."
          />
          <EmptyState
            title="No experience found"
            description="Experience highlights will appear here after adding active experience items."
          />
        </div>
      )}
    </Section>
  );
}

export default ExperiencePreviewSection;





