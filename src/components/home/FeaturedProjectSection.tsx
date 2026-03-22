import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import EmptyState from '@/components/common/EmptyState';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectGrid from '@/components/projects/ProjectGrid';
import type { Project } from '@/types/project.types';

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          description="A collection of projects with clean UI, scalable backend logic and responsive implementation."
        />

        {projects.length ? (
          <>
            <ProjectGrid projects={projects} />
            <div className="mt-10">
              <Button href="/projects" variant="outline">
                View All Projects
              </Button>
            </div>
          </>
        ) : (
          <EmptyState
            title="No projects found"
            description="Featured projects will appear here after publishing from admin panel."
          />
        )}
      </Container>
    </section>
  );
}

export default FeaturedProjectsSection;