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
    <article className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-[#fcfaf6] shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
      <div className="h-56 overflow-hidden bg-[#f3ede4]">
        <ImageWithFallback
          src={blog.featuredImage}
          alt={blog.title}
          className="transition-transform duration-500 group-hover:scale-105"
          fallbackLabel="Blog Cover"
        />
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600">
          <span>{formatDate(blog.publishedAt)}</span>
          <span>â€¢</span>
          <span>{formatReadTime(blog.readTime)}</span>
          {blog.category ? (
            <>
              <span>â€¢</span>
              <span className="text-primary">{blog.category}</span>
            </>
          ) : null}
        </div>

        <h3 className="mt-4 text-xl font-semibold text-zinc-900">
          <Link
            to={`/blog/${blog.slug}`}
            className="transition-colors hover:text-primary"
          >
            {blog.title}
          </Link>
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-zinc-600">{blog.excerpt}</p>

        {blog.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {blog.tags.slice(0, 4).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        ) : null}

        <div className="mt-6 border-t border-neutral-200 pt-5">
          <Link
            to={`/blog/${blog.slug}`}
            className="text-sm font-semibold text-primary transition-colors hover:text-zinc-900"
          >
            Read Article
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;





