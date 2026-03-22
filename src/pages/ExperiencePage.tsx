import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

function ExperiencePage() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Work Experience"
          description="This page will show timeline-based experience and work history."
        />
      </Container>
    </section>
  );
}

export default ExperiencePage;