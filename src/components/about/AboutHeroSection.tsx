import Section from '@/components/common/Section';
import type { Profile } from '@/types/profile.types';

interface AboutHeroSectionProps {
  profile?: Profile | null;
}

function AboutHeroSection({ profile }: AboutHeroSectionProps) {
  return (
    <Section className="pb-6">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-soft">
          {profile?.profileImage ? (
            <img
              src={profile.profileImage}
              alt={profile.fullName || 'Profile'}
              className="h-full min-h-[420px] w-full object-cover"
            />
          ) : (
            <div className="flex min-h-[420px] items-center justify-center text-6xl font-bold text-primary">
              DP
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            About Me
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            {profile?.fullName || 'Dnyaneshwar Panchal'}
          </h1>
          <p className="mt-4 text-xl text-slate-300">
            {profile?.title || 'Full Stack Developer'}
          </p>
          <p className="mt-6 leading-8 text-slate-400">
            {profile?.longBio ||
              profile?.shortBio ||
              'I enjoy building practical products with thoughtful design, clean architecture and reliable backend integration.'}
          </p>
        </div>
      </div>
    </Section>
  );
}

export default AboutHeroSection;