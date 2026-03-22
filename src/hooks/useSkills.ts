import { useQuery } from '@tanstack/react-query';
import { getSkills } from '@/api/skill.api';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useSkills = () =>
  useQuery({
    queryKey: QUERY_KEYS.skills,
    queryFn: getSkills,
  });