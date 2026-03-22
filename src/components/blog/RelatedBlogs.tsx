import BlogGrid from './BlogGrid';
import type { Blog } from '@/types/blog.types';

interface RelatedBlogsProps {
  blogs: Blog[];
  currentSlug: string;
}

function RelatedBlogs({ blogs, currentSlug }: RelatedBlogsProps) {
  const related = blogs.filter((item) => item.slug !== currentSlug).slice(0, 3);

  if (!related.length) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-white">Related Articles</h2>
      <div className="mt-6">
        <BlogGrid blogs={related} />
      </div>
    </div>
  );
}

export default RelatedBlogs;