import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import EmptyState from '@/components/common/EmptyState';
import SectionHeading from '@/components/common/SectionHeading';
import BlogCard from '@/components/blog/BlogCard';
import type { Blog } from '@/types/blog.types';

interface LatestBlogsSectionProps {
  blogs: Blog[];
}

function LatestBlogsSection({ blogs }: LatestBlogsSectionProps) {
  return (
    <Section>
      {blogs.length ? (
        <div className="xl:grid xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-10">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <SectionHeading
              eyebrow="Blog"
              title="Latest Articles"
              description="Thoughts, learnings and practical technical write-ups from my development journey."
            />

            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                Fresh notes
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                This section now uses the full home page width better by keeping the blog context
                on the left and the article previews in a cleaner right-side grid.
              </p>
            </div>

            <div className="mt-8 hidden xl:block">
              <Button href="/blog" variant="outline">
                View All Articles
              </Button>
            </div>
          </div>

          <div>
            <div className="grid gap-6 md:grid-cols-2">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>

            <div className="mt-10 xl:hidden">
              <Button href="/blog" variant="outline">
                View All Articles
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="xl:grid xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-10">
          <SectionHeading
            eyebrow="Blog"
            title="Latest Articles"
            description="Thoughts, learnings and practical technical write-ups from my development journey."
          />
          <EmptyState
            title="No blogs found"
            description="Published blogs will appear here."
          />
        </div>
      )}
    </Section>
  );
}

export default LatestBlogsSection;
