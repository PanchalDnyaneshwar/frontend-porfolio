import { useQuery } from '@tanstack/react-query';
import { getSettings } from '@/api/settings.api';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useSettings = () =>
  useQuery({
    queryKey: QUERY_KEYS.settings,
    queryFn: getSettings,
  });