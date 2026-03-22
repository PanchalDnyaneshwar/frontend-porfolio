import { useQuery } from '@tanstack/react-query';
import { getBlogBySlug, getBlogs } from '@/api/blog.api';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useBlogs = () =>
  useQuery({
    queryKey: QUERY_KEYS.blogs,
    queryFn: getBlogs,
  });

export const useBlog = (slug: string) =>
  useQuery({
    queryKey: QUERY_KEYS.blog(slug),
    queryFn: () => getBlogBySlug(slug),
    enabled: Boolean(slug),
  });