import Section from '@/components/common/Section';
import type { Profile } from '@/types/profile.types';

interface AboutHeroSectionProps {
  profile?: Profile | null;
}

function AboutHeroSection({ profile }: AboutHeroSectionProps) {
  return (
    <Section className="pb-6">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
        <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-[#f3ede4] shadow-soft">
          {profile?.profileImage ? (
            <img
              src={profile.profileImage}
              alt={profile.fullName || 'Profile'}
              className="h-full min-h-[320px] w-full object-cover sm:min-h-[420px]"
            />
          ) : (
            <div className="flex min-h-[320px] items-center justify-center text-6xl font-bold text-primary sm:min-h-[420px]">
              DP
            </div>
          )}
        </div>

        <div className="rounded-[2rem] border border-neutral-200 bg-[#fcfaf6] p-6 shadow-soft sm:p-8 lg:p-10">
          <p className="display-kicker text-primary">
            About Me
          </p>
          <h1 className="display-title mt-4 text-4xl sm:text-5xl">
            {profile?.fullName || 'Dnyaneshwar Panchal'}
          </h1>
          <p className="mt-4 text-xl tracking-[-0.02em] text-zinc-700">
            {profile?.title || 'Full Stack Developer'}
          </p>
          <p className="display-copy mt-6 text-zinc-600">
            {profile?.longBio ||
              profile?.shortBio ||
              'I enjoy building practical products with thoughtful design, clean architecture and reliable backend integration.'}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-[#f7f2ea]/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                Focus
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-800">Full stack products</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-[#f7f2ea]/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                Approach
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-800">Clean, scalable systems</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-[#f7f2ea]/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                Priority
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-800">Responsive UX quality</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutHeroSection;





