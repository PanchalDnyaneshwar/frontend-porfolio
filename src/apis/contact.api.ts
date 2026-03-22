import api from './axios';
import { API_ROUTES } from '@/constants/apiRoutes';
import type { ApiResponse } from '@/types/api.types';
import type { ContactPayload } from '@/types/contact.types';

export const createContactMessage = async (payload: ContactPayload) => {
  const response = await api.post<ApiResponse<unknown>>(API_ROUTES.contact.create, payload);
  return response.data;
};