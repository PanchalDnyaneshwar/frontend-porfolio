import { ExternalLink, Github } from 'lucide-react';

interface ProjectLinksCardProps {
  liveUrl?: string;
  githubUrl?: string;
}

function ProjectLinksCard({ liveUrl, githubUrl }: ProjectLinksCardProps) {
  return (
    <aside className="h-fit rounded-[2rem] border border-neutral-200 bg-[#fff9f2] p-6 shadow-soft lg:sticky lg:top-28">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
        Project access
      </p>
      <h2 className="text-lg font-semibold text-zinc-900">Project Links</h2>

      <div className="mt-5 flex flex-col gap-4">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-neutral-300 px-4 py-3 text-zinc-800 transition-colors hover:border-primary hover:text-zinc-900"
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
            className="inline-flex items-center gap-3 rounded-2xl border border-neutral-300 px-4 py-3 text-zinc-800 transition-colors hover:border-primary hover:text-zinc-900"
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




