import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import EmptyState from '@/components/common/EmptyState';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import type { Project } from '@/types/project.types';

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  return (
    <Section>
      {projects.length ? (
        <div className="xl:grid xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-10">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <SectionHeading
              eyebrow="Projects"
              title="Featured Work"
              description="A collection of projects with clean UI, scalable backend logic and responsive implementation."
            />

            <div className="rounded-3xl border border-neutral-200 bg-[#fcfaf6] p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                Selected builds
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-700">
                The empty left area is now turned into a proper supporting panel, while the project
                cards fill the right side in a more balanced two-column layout.
              </p>
            </div>

            <div className="mt-8 hidden xl:block">
              <Button href="/projects" variant="outline">
                View All Projects
              </Button>
            </div>
          </div>

          <div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>

            <div className="mt-10 xl:hidden">
              <Button href="/projects" variant="outline">
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="xl:grid xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-10">
          <SectionHeading
            eyebrow="Projects"
            title="Featured Work"
            description="A collection of projects with clean UI, scalable backend logic and responsive implementation."
          />
          <EmptyState
            title="No projects found"
            description="Featured projects will appear here after publishing from admin panel."
          />
        </div>
      )}
    </Section>
  );
}

export default FeaturedProjectsSection;





