import { useMemo } from 'react';
import Container from '@/components/common/Container';
import EmptyState from '@/components/common/EmptyState';
import ErrorState from '@/components/common/ErrorState';
import PageLoader from '@/components/common/PageLoader';
import PageSeo from '@/components/common/PageSeo';
import PageBanner from '@/components/layout/PageBanner';
import SkillsGrid from '@/components/skills/SkillsGrid';
import { useSkills } from '@/hooks/useSkills';
import type { Skill } from '@/types/skill.types';

function SkillsPage() {
  const skillsQuery = useSkills();
  const skills = skillsQuery.data?.data || [];

  const groupedSkills = useMemo(() => {
    return skills.reduce<Record<string, Skill[]>>((acc, item) => {
      const key = item.category || 'Other';
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  }, [skills]);

  if (skillsQuery.isLoading) return <PageLoader />;

  if (skillsQuery.error) {
    return (
      <Container className="py-20">
        <ErrorState message="Failed to load skills." />
      </Container>
    );
  }

  return (
    <>
      <PageSeo
        title="Skills"
        description="Technical skills across frontend, backend, database and tools."
      />
      <PageBanner
        eyebrow="Skills"
        title="Technical Skills"
        description="Technologies, tools and concepts used across modern web development."
      />

      <section className="section-space">
        <Container>
          {skills.length ? (
            <SkillsGrid groupedSkills={groupedSkills} />
          ) : (
            <EmptyState
              title="No skills available"
              description="Skills will appear here once added."
            />
          )}
        </Container>
      </section>
    </>
  );
}

export default SkillsPage;