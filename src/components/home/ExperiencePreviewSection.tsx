import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import type { Experience } from '@/types/experience.types';
import { formatDate } from '@/utils/date';

interface ExperiencePreviewSectionProps {
  experiences: Experience[];
}

function ExperiencePreviewSection({ experiences }: ExperiencePreviewSectionProps) {
  const preview = experiences.slice(0, 3);

  return (
    <Section>
      <SectionHeading
        eyebrow="Experience"
        title="Work Highlights"
        description="A snapshot of roles, contributions and technologies used in real projects."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {preview.map((item) => (
          <div
            key={item._id}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft"
          >
            <h3 className="text-xl font-semibold text-white">{item.role}</h3>
            <p className="mt-1 text-primary">{item.companyName}</p>
            <p className="mt-3 text-sm text-slate-400">
              {formatDate(item.startDate)} - {item.currentlyWorking ? 'Present' : formatDate(item.endDate)}
            </p>
            {item.description ? (
              <p className="mt-4 line-clamp-3 leading-7 text-slate-400">{item.description}</p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button href="/experience" variant="outline">
          View Full Experience
        </Button>
      </div>
    </Section>
  );
}

export default ExperiencePreviewSection;