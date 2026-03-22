import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

function ProjectsPage() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Projects Showcase"
          description="This page will list projects with filtering and premium cards."
        />
      </Container>
    </section>
  );
}

export default ProjectsPage;