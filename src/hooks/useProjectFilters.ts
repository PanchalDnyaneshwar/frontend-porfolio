import { useMemo, useState } from 'react';
import type { Project, ProjectFilterState } from '@/types/project.types';

export function useProjectFilters(projects: Project[]) {
  const [filters, setFilters] = useState<ProjectFilterState>({
    search: '',
    category: '',
  });

  const categories = useMemo(() => {
    return Array.from(new Set(projects.map((item) => item.category).filter(Boolean))) as string[];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        !filters.search ||
        project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(filters.search.toLowerCase()),
        );

      const matchesCategory =
        !filters.category || project.category === filters.category;

      return matchesSearch && matchesCategory;
    });
  }, [projects, filters]);

  return {
    filters,
    setFilters,
    categories,
    filteredProjects,
  };
}