import api from './axios';
import { API_ROUTES } from '@/constants/apiRoutes';
import type { ApiResponse } from '@/types/api.types';
import type { Blog } from '@/types/blog.types';

export const getBlogs = async () => {
  const response = await api.get<ApiResponse<Blog[]>>(API_ROUTES.blogs.public);
  return response.data;
};

export const getBlogBySlug = async (slug: string) => {
  const response = await api.get<ApiResponse<Blog>>(API_ROUTES.blogs.bySlug(slug));
  return response.data;
};