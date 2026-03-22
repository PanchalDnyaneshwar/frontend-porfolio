import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import EmptyState from '@/components/common/EmptyState';
import SectionHeading from '@/components/common/SectionHeading';
import BlogGrid from '@/components/blog/BlogGrid';
import type { Blog } from '@/types/blog.types';

interface LatestBlogsSectionProps {
  blogs: Blog[];
}

function LatestBlogsSection({ blogs }: LatestBlogsSectionProps) {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Latest Articles"
          description="Thoughts, learnings and practical technical write-ups from my development journey."
        />

        {blogs.length ? (
          <>
            <BlogGrid blogs={blogs} />
            <div className="mt-10">
              <Button href="/blog" variant="outline">
                View All Articles
              </Button>
            </div>
          </>
        ) : (
          <EmptyState
            title="No blogs found"
            description="Published blogs will appear here."
          />
        )}
      </Container>
    </section>
  );
}

export default LatestBlogsSection;