import Badge from '@/components/common/Badge';
import { formatDate } from '@/utils/date';
import type { Experience } from '@/types/experience.types';

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
          <p className="mt-1 text-primary">{experience.companyName}</p>
        </div>
        <p className="text-sm text-slate-400">
          {formatDate(experience.startDate)} -{' '}
          {experience.currentlyWorking ? 'Present' : formatDate(experience.endDate)}
        </p>
      </div>

      {experience.description ? (
        <p className="mt-4 leading-8 text-slate-400">{experience.description}</p>
      ) : null}

      {experience.technologies?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ExperienceCard;