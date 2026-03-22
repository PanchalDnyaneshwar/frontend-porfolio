import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/apis/profile.api';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useProfile = () =>
  useQuery({
    queryKey: QUERY_KEYS.profile,
    queryFn: getProfile,
  });
