import type { Profile } from '@/types/profile.types';

interface PersonalInfoCardProps {
  profile?: Profile | null;
}

function PersonalInfoCard({ profile }: PersonalInfoCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft">
      <h3 className="text-xl font-semibold text-white">Personal Info</h3>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-primary">Full Name</p>
          <p className="mt-1 text-slate-300">{profile?.fullName || '-'}</p>
        </div>
        <div>
          <p className="text-sm text-primary">Role</p>
          <p className="mt-1 text-slate-300">{profile?.title || '-'}</p>
        </div>
        <div>
          <p className="text-sm text-primary">Email</p>
          <p className="mt-1 break-all text-slate-300">{profile?.email || '-'}</p>
        </div>
        <div>
          <p className="text-sm text-primary">Phone</p>
          <p className="mt-1 text-slate-300">{profile?.phone || '-'}</p>
        </div>
        <div className="sm:col-span-2">
          <p className="text-sm text-primary">Location</p>
          <p className="mt-1 text-slate-300">{profile?.location || '-'}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoCard;