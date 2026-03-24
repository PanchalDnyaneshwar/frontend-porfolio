import { useMemo } from 'react';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import ExperienceSummaryCard from '@/components/about/ExperienceSummaryCard';
import PersonalInfoCard from '@/components/about/PersonalInfoCard';
import ProfileSummaryCard from '@/components/about/ProfileSummaryCard';
import Container from '@/components/common/Container';
import ErrorState from '@/components/common/ErrorState';
import PageLoader from '@/components/common/PageLoader';
import PageSeo from '@/components/common/PageSeo';
import SectionHeading from '@/components/common/SectionHeading';
import ExperienceTimeline from '@/components/experience/ExperienceTimeline';
import SkillsGrid from '@/components/skills/SkillsGrid';
import { useExperiences } from '@/hooks/useExperiences';
import { useProfile } from '@/hooks/useProfile';
import { useSkills } from '@/hooks/useSkills';
import type { Skill } from '@/types/skill.types';

function AboutPage() {
  const profileQuery = useProfile();
  const skillsQuery = useSkills();
  const experiencesQuery = useExperiences();

  const isLoading =
    profileQuery.isLoading || skillsQuery.isLoading || experiencesQuery.isLoading;

  const error =
    profileQuery.error || skillsQuery.error || experiencesQuery.error;

  const skills = skillsQuery.data?.data || [];
  const experiences = experiencesQuery.data?.data || [];
  const profile = profileQuery.data?.data || null;

  const groupedSkills = useMemo(() => {
    return skills.reduce<Record<string, Skill[]>>((acc, item) => {
      const key = item.category || 'Other';
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  }, [skills]);

  if (isLoading) return <PageLoader />;

  if (error) {
    return (
      <Container className="py-20">
        <ErrorState message="Failed to load about data." />
      </Container>
    );
  }

  return (
    <>
      <PageSeo
        title="About"
        description="Know more about my background, profile, skills and work experience."
      />
      <AboutHeroSection profile={profile} />

      <section className="section-space pt-6">
        <Container>
          <div className="grid gap-6 xl:grid-cols-3">
            <ProfileSummaryCard profile={profile} />
            <PersonalInfoCard profile={profile} />
            <ExperienceSummaryCard
              totalExperiences={experiences.length}
              totalSkills={skills.length}
            />
          </div>

          <div className="mt-14 sm:mt-16">
            <SectionHeading
              eyebrow="Skills"
              title="Technical Skills"
              description="Technologies and tools I use across frontend, backend and database development."
            />
            <SkillsGrid groupedSkills={groupedSkills} />
          </div>

          <div className="mt-14 sm:mt-16">
            <SectionHeading
              eyebrow="Experience"
              title="Professional Experience"
              description="Roles, responsibilities and technologies used in practical work."
            />
            <ExperienceTimeline experiences={experiences} />
          </div>
        </Container>
      </section>
    </>
  );
}

export default AboutPage;
