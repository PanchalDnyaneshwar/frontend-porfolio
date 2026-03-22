import api from './axios';
import { API_ROUTES } from '@/constants/apiRoutes';

export const loginPublicStub = async () => {
  const response = await api.post(API_ROUTES.auth.login, {});
  return response.data;
};