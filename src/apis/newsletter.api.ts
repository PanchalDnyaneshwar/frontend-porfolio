import api from './axios';
import { API_ROUTES } from '@/constants/apiRoutes';
import type { ApiResponse } from '@/types/api.types';
import type { NewsletterPayload } from '@/types/contact.types';

export const createNewsletterSubscriber = async (payload: NewsletterPayload) => {
  const response = await api.post<ApiResponse<unknown>>(
    API_ROUTES.newsletter.subscribe,
    payload,
  );
  return response.data;
};
