import Container from '@/components/common/Container';
import ErrorState from '@/components/common/ErrorState';
import PageLoader from '@/components/common/PageLoader';
import PageSeo from '@/components/common/PageSeo';
import SectionHeading from '@/components/common/SectionHeading';
import ExperienceTimeline from '@/components/experience/ExperienceTimeline';
import PageBanner from '@/components/layout/PageBanner';
import { useExperiences } from '@/hooks/useExperiences';

function ExperiencePage() {
  const experiencesQuery = useExperiences();

  if (experiencesQuery.isLoading) return <PageLoader />;

  if (experiencesQuery.error) {
    return (
      <Container className="py-20">
        <ErrorState message="Failed to load experience data." />
      </Container>
    );
  }

  const experiences = experiencesQuery.data?.data || [];

  return (
    <>
      <PageSeo
        title="Experience"
        description="Professional journey, roles, work highlights and technologies used."
      />
      <PageBanner
        eyebrow="Experience"
        title="Professional Journey"
        description="Work history, responsibilities and technologies used across practical projects."
      />

      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Timeline"
            title="Experience Timeline"
            description="A structured view of my professional experience."
          />
          <ExperienceTimeline experiences={experiences} />
        </Container>
      </section>
    </>
  );
}

export default ExperiencePage;