import { useParams } from 'react-router-dom';
import Container from '@/components/common/Container';
import ErrorState from '@/components/common/ErrorState';
import PageLoader from '@/components/common/PageLoader';
import PageSeo from '@/components/common/PageSeo';
import ProjectDetailsHero from '@/components/projects/ProjectDetailsHero';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectLinksCard from '@/components/projects/ProjectLinksCard';
import RelatedProjects from '@/components/projects/RelatedProjects';
import { useProject, useProjects } from '@/hooks/useProjects';

function ProjectDetailsPage() {
  const { slug = '' } = useParams();
  const projectQuery = useProject(slug);
  const allProjectsQuery = useProjects();

  if (projectQuery.isLoading || allProjectsQuery.isLoading) return <PageLoader />;

  if (projectQuery.error) {
    return (
      <Container className="py-20">
        <ErrorState message="Failed to load project details." />
      </Container>
    );
  }

  const project = projectQuery.data?.data;
  const projects = allProjectsQuery.data?.data || [];

  if (!project) {
    return (
      <Container className="py-20">
        <ErrorState message="Project not found." />
      </Container>
    );
  }

  return (
    <>
      <PageSeo
        title={project.title}
        description={project.shortDescription}
      />

      <section className="section-space">
        <Container>
          {project.thumbnail ? (
            <div className="mb-8 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-soft sm:mb-10">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[420px]"
              />
            </div>
          ) : null}

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
            <div>
              <ProjectDetailsHero project={project} />
              <ProjectGallery title={project.title} images={project.images || []} />
            </div>

            <ProjectLinksCard
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          </div>

          <RelatedProjects projects={projects} currentSlug={project.slug} />
        </Container>
      </section>
    </>
  );
}

export default ProjectDetailsPage;
