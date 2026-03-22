import api from './axios';
import { API_ROUTES } from '@/constants/apiRoutes';
import type { ApiResponse } from '@/types/api.types';
import type { Experience } from '@/types/experience.types';

export const getExperiences = async () => {
  const response = await api.get<ApiResponse<Experience[]>>(API_ROUTES.experience.public);
  return response.data;
};