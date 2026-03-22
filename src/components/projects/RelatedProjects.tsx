import ProjectGrid from './ProjectGrid';
import type { Project } from '@/types/project.types';

interface RelatedProjectsProps {
  projects: Project[];
  currentSlug: string;
}

function RelatedProjects({ projects, currentSlug }: RelatedProjectsProps) {
  const related = projects.filter((item) => item.slug !== currentSlug).slice(0, 3);

  if (!related.length) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-white">Related Projects</h2>
      <div className="mt-6">
        <ProjectGrid projects={related} />
      </div>
    </div>
  );
}

export default RelatedProjects;