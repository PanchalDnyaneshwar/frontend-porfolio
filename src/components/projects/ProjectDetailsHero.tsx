import Badge from '@/components/common/Badge';
import type { Project } from '@/types/project.types';

interface ProjectDetailsHeroProps {
  project: Project;
}

function ProjectDetailsHero({ project }: ProjectDetailsHeroProps) {
  return (
    <div className="mb-10">
      <p className="text-sm uppercase tracking-[0.2em] text-primary">
        {project.category || 'Project'}
      </p>
      <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
        {project.fullDescription || project.shortDescription}
      </p>

      {project.techStack?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ProjectDetailsHero;