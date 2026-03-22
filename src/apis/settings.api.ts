import api from './axios';
import { API_ROUTES } from '@/constants/apiRoutes';
import type { ApiResponse } from '@/types/api.types';
import type { Settings } from '@/types/settings.types';

export const getSettings = async () => {
  const response = await api.get<ApiResponse<Settings>>(API_ROUTES.settings.public);
  return response.data;
};