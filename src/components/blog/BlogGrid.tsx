import BlogCard from './BlogCard';
import type { Blog } from '@/types/blog.types';

interface BlogGridProps {
  blogs: Blog[];
}

function BlogGrid({ blogs }: BlogGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogGrid;