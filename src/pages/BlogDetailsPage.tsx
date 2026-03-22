import { useParams } from 'react-router-dom';
import Container from '@/components/common/Container';
import ErrorState from '@/components/common/ErrorState';
import PageLoader from '@/components/common/PageLoader';
import PageSeo from '@/components/common/PageSeo';
import BlogContent from '@/components/blog/BlogContent';
import RelatedBlogs from '@/components/blog/RelatedBlogs';
import { useBlog, useBlogs } from '@/hooks/useBlogs';

function BlogDetailsPage() {
  const { slug = '' } = useParams();
  const blogQuery = useBlog(slug);
  const blogsQuery = useBlogs();

  if (blogQuery.isLoading || blogsQuery.isLoading) return <PageLoader />;

  if (blogQuery.error) {
    return (
      <Container className="py-20">
        <ErrorState message="Failed to load blog details." />
      </Container>
    );
  }

  const blog = blogQuery.data?.data;
  const blogs = blogsQuery.data?.data || [];

  if (!blog) {
    return (
      <Container className="py-20">
        <ErrorState message="Blog not found." />
      </Container>
    );
  }

  return (
    <>
      <PageSeo title={blog.title} description={blog.excerpt} />

      <section className="section-space">
        <Container className="max-w-4xl">
          {blog.featuredImage ? (
            <div className="mb-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="h-[420px] w-full object-cover"
              />
            </div>
          ) : null}

          <BlogContent blog={blog} />
          <RelatedBlogs blogs={blogs} currentSlug={blog.slug} />
        </Container>
      </section>
    </>
  );
}

export default BlogDetailsPage;