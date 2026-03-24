import type { Profile } from '@/types/profile.types';

interface ProfileSummaryCardProps {
  profile?: Profile | null;
}

function ProfileSummaryCard({ profile }: ProfileSummaryCardProps) {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-900/45 p-6 shadow-soft sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
        Overview
      </p>
      <h3 className="text-xl font-semibold text-white">Profile Summary</h3>

      <p className="mt-4 leading-8 text-slate-400">
        {profile?.longBio || profile?.shortBio || 'Profile details will be updated soon.'}
      </p>

      <div className="mt-6 space-y-3 border-t border-slate-800 pt-5 text-slate-300">
        {profile?.email ? (
          <p>
            <span className="text-primary">Email:</span> {profile.email}
          </p>
        ) : null}

        {profile?.phone ? (
          <p>
            <span className="text-primary">Phone:</span> {profile.phone}
          </p>
        ) : null}

        {profile?.location ? (
          <p>
            <span className="text-primary">Location:</span> {profile.location}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default ProfileSummaryCard;
