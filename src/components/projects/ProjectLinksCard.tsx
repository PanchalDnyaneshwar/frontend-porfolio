import { ExternalLink, Github } from 'lucide-react';

interface ProjectLinksCardProps {
  liveUrl?: string;
  githubUrl?: string;
}

function ProjectLinksCard({ liveUrl, githubUrl }: ProjectLinksCardProps) {
  return (
    <aside className="h-fit rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-white">Project Links</h2>

      <div className="mt-5 flex flex-col gap-4">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-slate-700 px-4 py-3 text-slate-200 hover:border-primary hover:text-white"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        ) : null}

        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-slate-700 px-4 py-3 text-slate-200 hover:border-primary hover:text-white"
          >
            <Github size={18} />
            GitHub Repo
          </a>
        ) : null}
      </div>
    </aside>
  );
}

export default ProjectLinksCard;