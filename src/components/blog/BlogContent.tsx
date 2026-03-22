import Badge from '@/components/common/Badge';
import { formatDate } from '@/utils/date';
import { formatReadTime } from '@/utils/formatters';
import type { Blog } from '@/types/blog.types';

interface BlogContentProps {
  blog: Blog;
}

function BlogContent({ blog }: BlogContentProps) {
  return (
    <article>
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

      <h1 className="mt-4 text-4xl font-bold leading-tight text-white">{blog.title}</h1>

      {blog.tags?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {blog.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      ) : null}

      <div className="prose prose-invert mt-10 max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </article>
  );
}

export default BlogContent;