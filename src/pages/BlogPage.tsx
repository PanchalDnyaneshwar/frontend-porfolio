import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

function BlogPage() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Latest Articles"
          description="This page will show article list and featured content."
        />
      </Container>
    </section>
  );
}

export default BlogPage;