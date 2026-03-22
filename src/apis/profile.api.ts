import api from './axios';
import { API_ROUTES } from '@/constants/apiRoutes';
import type { ApiResponse } from '@/types/api.types';
import type { Profile } from '@/types/profile.types';

export const getProfile = async () => {
  const response = await api.get<ApiResponse<Profile>>(API_ROUTES.profile.public);
  return response.data;
};