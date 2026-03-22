import type { PaginatedQueryParams } from '@/types/api.types';

export const buildQueryParams = (params: PaginatedQueryParams) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, String(value));
    }
  });

  return searchParams.toString();
};