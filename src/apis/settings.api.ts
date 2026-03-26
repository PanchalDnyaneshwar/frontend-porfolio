import axios from 'axios';
import api from './axios';
import { API_ROUTES } from '@/constants/apiRoutes';
import type { ApiResponse } from '@/types/api.types';
import type { Settings } from '@/types/settings.types';

export const getSettings = async (): Promise<ApiResponse<Settings | null>> => {
  try {
    const response = await api.get<ApiResponse<Settings>>(API_ROUTES.settings.public);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      return { message: 'Settings not found', data: null };
    }
    throw e;
  }
};