import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '@/components/common/Badge';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import type { Project } from '@/types/project.types';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-soft transition-all duration-300 hover:-translate-y-1">
      <div className="h-56 overflow-hidden bg-slate-950">
        <ImageWithFallback
          src={project.thumbnail}
          alt={project.title}
          className="transition-transform duration-500 group-hover:scale-105"
          fallbackLabel="Project Preview"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            {project.category ? (
              <p className="mt-1 text-sm text-primary">{project.category}</p>
            ) : null}
          </div>

          {project.featured ? <Badge>Featured</Badge> : null}
        </div>

        <p className="mt-4 line-clamp-3 leading-7 text-slate-400">
          {project.shortDescription}
        </p>

        {project.techStack?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link to={`/projects/${project.slug}`} className="text-sm font-semibold text-primary">
            View Details
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
            >
              <ExternalLink size={16} />
              Live
            </a>
          ) : null}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
            >
              <Github size={16} />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;