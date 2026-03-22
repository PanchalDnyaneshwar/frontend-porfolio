import { Link } from 'react-router-dom';
import Badge from '@/components/common/Badge';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { formatDate } from '@/utils/date';
import { formatReadTime } from '@/utils/formatters';
import type { Blog } from '@/types/blog.types';

interface BlogCardProps {
  blog: Blog;
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-soft">
      <div className="h-56 overflow-hidden bg-slate-950">
        <ImageWithFallback
          src={blog.featuredImage}
          alt={blog.title}
          fallbackLabel="Blog Cover"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <span>{formatDate(blog.publishedAt)}</span>
          <span>•</span>
          <span>{formatReadTime(blog.readTime)}</span>
          {blog.category ? (
            <>
              <span>•</span>
              <span className="text-primary">{blog.category}</span>
            </>
          ) : null}
        </div>

        <h3 className="mt-4 text-xl font-semibold text-white">
          <Link to={`/blog/${blog.slug}`} className="hover:text-primary">
            {blog.title}
          </Link>
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-slate-400">{blog.excerpt}</p>

        {blog.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {blog.tags.slice(0, 4).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default BlogCard;