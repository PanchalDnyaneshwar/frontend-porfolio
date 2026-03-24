import ImageWithFallback from '@/components/common/ImageWithFallback';
import { formatDate } from '@/utils/date';
import { formatReadTime } from '@/utils/formatters';
import type { Blog } from '@/types/blog.types';

interface BlogHeroCardProps {
  blog?: Blog;
}

function BlogHeroCard({ blog }: BlogHeroCardProps) {
  if (!blog) return null;

  return (
    <div className="mb-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 md:p-10">
          <p className="display-kicker text-primary">
            {blog.category || 'Featured'}
          </p>
          <h2 className="display-title mt-4 text-3xl text-white sm:text-4xl">
            {blog.title}
          </h2>
          <p className="display-copy mt-5 line-clamp-4 text-lg text-slate-400">
            {blog.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span>{formatDate(blog.publishedAt)}</span>
            <span>&bull;</span>
            <span>{formatReadTime(blog.readTime)}</span>
          </div>
        </div>

        <div className="min-h-[260px] bg-slate-950">
          <ImageWithFallback
            src={blog.featuredImage}
            alt={blog.title}
            fallbackLabel="Featured Blog"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogHeroCard;
