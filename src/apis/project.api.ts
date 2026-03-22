import api from './axios';
import { API_ROUTES } from '@/constants/apiRoutes';
import type { ApiResponse } from '@/types/api.types';
import type { Project } from '@/types/project.types';

export const getProjects = async () => {
  const response = await api.get<ApiResponse<Project[]>>(API_ROUTES.projects.public);
  return response.data;
};

export const getProjectBySlug = async (slug: string) => {
  const response = await api.get<ApiResponse<Project>>(API_ROUTES.projects.bySlug(slug));
  return response.data;
};