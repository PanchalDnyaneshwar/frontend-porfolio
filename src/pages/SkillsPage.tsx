import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

function SkillsPage() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="This page will show categorized skills fetched from backend."
        />
      </Container>
    </section>
  );
}

export default SkillsPage;