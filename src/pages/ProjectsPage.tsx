import NewsletterForm from '@/components/common/NewsletterForm';
import Container from '@/components/common/Container';
import EmptyState from '@/components/common/EmptyState';
import ErrorState from '@/components/common/ErrorState';
import PageLoader from '@/components/common/PageLoader';
import PageSeo from '@/components/common/PageSeo';
import PageBanner from '@/components/layout/PageBanner';
import ProjectFilterBar from '@/components/projects/ProjectFilterBar';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { PROJECT_PAGE_TEXT } from '@/constants/project';
import { useProjectFilters } from '@/hooks/useProjectFilters';
import { useProjects } from '@/hooks/useProjects';

function ProjectsPage() {
  const projectsQuery = useProjects();
  const projects = projectsQuery.data?.data || [];
  const { filters, setFilters, categories, filteredProjects } =
    useProjectFilters(projects);

  if (projectsQuery.isLoading) return <PageLoader />;

  if (projectsQuery.error) {
    return (
      <Container className="py-20">
        <ErrorState message="Failed to load projects." />
      </Container>
    );
  }

  return (
    <>
      <PageSeo
        title="Projects"
        description="A showcase of full stack applications, admin dashboards and responsive interfaces."
      />
      <PageBanner
        eyebrow="Projects"
        title={PROJECT_PAGE_TEXT.title}
        description={PROJECT_PAGE_TEXT.description}
      />

      <section className="section-space">
        <Container>
          <ProjectFilterBar
            filters={filters}
            categories={categories}
            onChange={setFilters}
          />

          <div className="mt-8">
            {filteredProjects.length ? (
              <ProjectGrid projects={filteredProjects} />
            ) : (
              <EmptyState
                title="No projects match your filters"
                description="Try another search term or category."
              />
            )}
          </div>

          <div className="mt-16">
            <NewsletterForm />
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProjectsPage;
