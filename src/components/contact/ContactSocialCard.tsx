import SocialLinks from '@/components/layout/SocialLinks';
import type { Profile } from '@/types/profile.types';

interface ContactSocialCardProps {
  profile?: Profile | null;
}

function ContactSocialCard({ profile }: ContactSocialCardProps) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-[#fcfaf6] p-6 shadow-soft">
      <h3 className="text-xl font-semibold text-zinc-900">Social Profiles</h3>
      <p className="mt-3 leading-7 text-zinc-600">
        Connect with me on professional and developer platforms.
      </p>
      <div className="mt-5">
        <SocialLinks links={profile?.socialLinks} email={profile?.email} />
      </div>
    </div>
  );
}

export default ContactSocialCard;



