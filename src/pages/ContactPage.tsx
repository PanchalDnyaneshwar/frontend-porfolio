import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

function ContactPage() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Work Together"
          description="This page will include contact info, social links and connected contact form."
        />
      </Container>
    </section>
  );
}

export default ContactPage;