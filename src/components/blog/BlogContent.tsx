import Badge from '@/components/common/Badge';
import { formatDate } from '@/utils/date';
import { formatReadTime } from '@/utils/formatters';
import { sanitizeHtml } from '@/utils/sanitizeHtml';
import type { Blog } from '@/types/blog.types';

interface BlogContentProps {
  blog: Blog;
}

function BlogContent({ blog }: BlogContentProps) {
  const sanitizedContent = sanitizeHtml(blog.content);

  return (
    <article>
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
        <span>{formatDate(blog.publishedAt)}</span>
        <span>&bull;</span>
        <span>{formatReadTime(blog.readTime)}</span>
        {blog.category ? (
          <>
            <span>&bull;</span>
            <span className="text-primary">{blog.category}</span>
          </>
        ) : null}
      </div>

      <h1 className="display-title mt-4 text-3xl leading-[1.04] text-white sm:text-4xl lg:text-5xl">
        {blog.title}
      </h1>

      {blog.tags?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {blog.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      ) : null}

      <div className="prose prose-invert mt-8 max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 sm:mt-10">
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </div>
    </article>
  );
}

export default BlogContent;
