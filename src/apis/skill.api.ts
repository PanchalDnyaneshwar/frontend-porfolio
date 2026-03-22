import api from './axios';
import { API_ROUTES } from '@/constants/apiRoutes';
import type { ApiResponse } from '@/types/api.types';
import type { Skill } from '@/types/skill.types';

export const getSkills = async () => {
  const response = await api.get<ApiResponse<Skill[]>>(API_ROUTES.skills.public);
  return response.data;
};