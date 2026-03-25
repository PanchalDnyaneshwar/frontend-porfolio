import type { Profile } from '@/types/profile.types';

interface PersonalInfoCardProps {
  profile?: Profile | null;
}

function PersonalInfoCard({ profile }: PersonalInfoCardProps) {
  return (
    <div className="rounded-[2rem] border border-neutral-200 bg-[#fcfaf6] p-6 shadow-soft sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
        Details
      </p>
      <h3 className="text-xl font-semibold text-zinc-900">Personal Info</h3>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-[#f7f2ea]/85 p-4">
          <p className="text-sm text-primary">Full Name</p>
          <p className="mt-1 text-zinc-700">{profile?.fullName || '-'}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-[#f7f2ea]/85 p-4">
          <p className="text-sm text-primary">Role</p>
          <p className="mt-1 text-zinc-700">{profile?.title || '-'}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-[#f7f2ea]/85 p-4">
          <p className="text-sm text-primary">Email</p>
          <p className="mt-1 break-all text-zinc-700">{profile?.email || '-'}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-[#f7f2ea]/85 p-4">
          <p className="text-sm text-primary">Phone</p>
          <p className="mt-1 text-zinc-700">{profile?.phone || '-'}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-[#f7f2ea]/85 p-4 sm:col-span-2">
          <p className="text-sm text-primary">Location</p>
          <p className="mt-1 text-zinc-700">{profile?.location || '-'}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoCard;





