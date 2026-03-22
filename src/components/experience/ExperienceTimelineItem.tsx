import type { Experience } from '@/types/experience.types';
import ExperienceCard from './ExperienceCard';

interface ExperienceTimelineItemProps {
  experience: Experience;
}

function ExperienceTimelineItem({ experience }: ExperienceTimelineItemProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-3 h-3 w-3 rounded-full bg-primary" />
      <div className="absolute left-[5px] top-6 h-[calc(100%-12px)] w-px bg-slate-700" />
      <ExperienceCard experience={experience} />
    </div>
  );
}

export default ExperienceTimelineItem;