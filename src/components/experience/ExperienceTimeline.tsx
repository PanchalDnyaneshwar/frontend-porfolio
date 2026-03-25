import type { Experience } from '@/types/experience.types';
import ExperienceTimelineItem from './ExperienceTimelineItem';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  if (!experiences.length) {
    return (
      <div className="rounded-3xl border border-neutral-200 bg-[#fcfaf6] p-6 text-zinc-600">
        No experience added yet.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {experiences.map((experience, index) => (
        <div
          key={experience._id}
          className={index === experiences.length - 1 ? '[&_.timeline-line]:hidden' : ''}
        >
          <ExperienceTimelineItem experience={experience} />
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;



