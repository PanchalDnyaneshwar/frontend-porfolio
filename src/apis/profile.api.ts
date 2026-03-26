import axios from 'axios';
import api from './axios';
import { API_ROUTES } from '@/constants/apiRoutes';
import type { ApiResponse } from '@/types/api.types';
import type { Profile } from '@/types/profile.types';

export const getProfile = async (): Promise<ApiResponse<Profile | null>> => {
  try {
    const response = await api.get<ApiResponse<Profile>>(API_ROUTES.profile.public);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      return { message: 'Profile not found', data: null };
    }
    throw e;
  }
};