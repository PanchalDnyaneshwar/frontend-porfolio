import { useQuery } from '@tanstack/react-query';
import { getProjectBySlug, getProjects } from '@/apis/project.api';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useProjects = () =>
  useQuery({
    queryKey: QUERY_KEYS.projects,
    queryFn: getProjects,
  });

export const useProject = (slug: string) =>
  useQuery({
    queryKey: QUERY_KEYS.project(slug),
    queryFn: () => getProjectBySlug(slug),
    enabled: Boolean(slug),
  });
