import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

function AboutPage() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="This page will be connected to profile, skills and experience data with the premium portfolio design structure."
        />
      </Container>
    </section>
  );
}

export default AboutPage;