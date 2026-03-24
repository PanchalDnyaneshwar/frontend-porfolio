import NewsletterForm from '@/components/common/NewsletterForm';
import Container from '@/components/common/Container';
import EmptyState from '@/components/common/EmptyState';
import ErrorState from '@/components/common/ErrorState';
import PageLoader from '@/components/common/PageLoader';
import PageSeo from '@/components/common/PageSeo';
import BlogFilterBar from '@/components/blog/BlogFilterBar';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogHeroCard from '@/components/blog/BlogHeroCard';
import PageBanner from '@/components/layout/PageBanner';
import { BLOG_PAGE_TEXT } from '@/constants/blog';
import { useBlogFilters } from '@/hooks/useBlogFilters';
import { useBlogs } from '@/hooks/useBlogs';

function BlogPage() {
  const blogsQuery = useBlogs();
  const blogs = blogsQuery.data?.data || [];
  const featuredBlog = blogs.find((blog) => blog.featured) || blogs[0];
  const { filters, setFilters, categories, filteredBlogs } =
    useBlogFilters(blogs);

  if (blogsQuery.isLoading) return <PageLoader />;

  if (blogsQuery.error) {
    return (
      <Container className="py-20">
        <ErrorState message="Failed to load blogs." />
      </Container>
    );
  }

  return (
    <>
      <PageSeo
        title="Blog"
        description="Technical blogs, articles, learnings and practical development notes."
      />
      <PageBanner
        eyebrow="Blog"
        title={BLOG_PAGE_TEXT.title}
        description={BLOG_PAGE_TEXT.description}
      />

      <section className="section-space">
        <Container>
          <BlogHeroCard blog={featuredBlog} />

          <BlogFilterBar
            filters={filters}
            categories={categories}
            onChange={setFilters}
          />

          <div className="mt-8">
            {filteredBlogs.length ? (
              <BlogGrid blogs={filteredBlogs} />
            ) : (
              <EmptyState
                title="No blogs match your filters"
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

export default BlogPage;
