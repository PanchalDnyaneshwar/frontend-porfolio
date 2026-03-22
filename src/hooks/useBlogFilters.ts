import { useMemo, useState } from 'react';
import type { Blog, BlogFilterState } from '@/types/blog.types';

export function useBlogFilters(blogs: Blog[]) {
  const [filters, setFilters] = useState<BlogFilterState>({
    search: '',
    category: '',
  });

  const categories = useMemo(() => {
    return Array.from(new Set(blogs.map((item) => item.category).filter(Boolean))) as string[];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const query = filters.search.toLowerCase();

      const matchesSearch =
        !filters.search ||
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesCategory =
        !filters.category || blog.category === filters.category;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, filters]);

  return {
    filters,
    setFilters,
    categories,
    filteredBlogs,
  };
}