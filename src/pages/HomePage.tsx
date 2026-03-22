import Container from '@/components/common/Container';
import ErrorState from '@/components/common/ErrorState';
import PageLoader from '@/components/common/PageLoader';
import PageSeo from '@/components/common/PageSeo';
import AboutPreviewSection from '@/components/home/AboutPreviewSection';
import ContactCtaSection from '@/components/home/ContactCtaSection';
import ExperiencePreviewSection from '@/components/home/ExperiencePreviewSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectSection';
import HeroSection from '@/components/home/HeroSection';
import LatestBlogsSection from '@/components/home/LatestBlogsSection';
import SkillsPreviewSection from '@/components/home/SkillsPreviewSection';
import StatsSection from '@/components/home/StatsSection';
import TechStackStrip from '@/components/home/TechStackStrip';
import { useBlogs } from '@/hooks/useBlogs';
import { useExperiences } from '@/hooks/useExperiences';
import { useProfile } from '@/hooks/useProfile';
import { useProjects } from '@/hooks/useProjects';
import { useSkills } from '@/hooks/useSkills';

function HomePage() {
  const profileQuery = useProfile();
  const projectsQuery = useProjects();
  const blogsQuery = useBlogs();
  const skillsQuery = useSkills();
  const experiencesQuery = useExperiences();

  const isLoading =
    profileQuery.isLoading ||
    projectsQuery.isLoading ||
    blogsQuery.isLoading ||
    skillsQuery.isLoading ||
    experiencesQuery.isLoading;

  const error =
    profileQuery.error ||
    projectsQuery.error ||
    blogsQuery.error ||
    skillsQuery.error ||
    experiencesQuery.error;

  if (isLoading) return <PageLoader />;

  if (error) {
    return (
      <Container className="py-20">
        <ErrorState message="Failed to load homepage data." />
      </Container>
    );
  }

  const profile = profileQuery.data?.data || null;
  const projects = (projectsQuery.data?.data || []).slice(0, 6);
  const blogs = (blogsQuery.data?.data || []).slice(0, 3);
  const skills = (skillsQuery.data?.data || []).slice(0, 16);
  const experiences = experiencesQuery.data?.data || [];

  return (
    <>
      <PageSeo
        title="Home"
        description="Modern full stack developer portfolio with projects, blogs, experience and contact details."
      />
      <HeroSection profile={profile} />
      <TechStackStrip />
      <StatsSection />
      <AboutPreviewSection profile={profile} />
      <SkillsPreviewSection skills={skills} />
      <ExperiencePreviewSection experiences={experiences} />
      <FeaturedProjectsSection projects={projects} />
      <LatestBlogsSection blogs={blogs} />
      <ContactCtaSection />
    </>
  );
}

export default HomePage;
