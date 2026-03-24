import type { Profile } from '@/types/profile.types';

interface ContactInfoCardProps {
  profile?: Profile | null;
}

function ContactInfoCard({ profile }: ContactInfoCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft">
      <h3 className="text-xl font-semibold text-white">Contact Information</h3>

      <div className="mt-6 space-y-4 text-slate-300">
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

      <p className="mt-8 leading-8 text-slate-400">
        I'm open to full stack development work, freelance opportunities,
        dashboard systems, UI implementation and backend integration projects.
      </p>
    </div>
  );
}

export default ContactInfoCard;
