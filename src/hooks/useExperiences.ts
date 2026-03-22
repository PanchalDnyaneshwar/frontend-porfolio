import { useQuery } from '@tanstack/react-query';
import { getExperiences } from '@/apis/experience.api';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useExperiences = () =>
  useQuery({
    queryKey: QUERY_KEYS.experiences,
    queryFn: getExperiences,
  });
