import type { Experience } from '@/types/experience.types';
import ExperienceTimelineItem from './ExperienceTimelineItem';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  if (!experiences.length) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 text-slate-400">
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