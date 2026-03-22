import type { Settings } from '@/types/settings.types';

interface ContactDetailsListProps {
  settings?: Settings | null;
}

function ContactDetailsList({ settings }: ContactDetailsListProps) {
  const info = settings?.contactInfo;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft">
      <h3 className="text-xl font-semibold text-white">Office / Contact Details</h3>

      <div className="mt-5 space-y-4 text-slate-300">
        {info?.email ? (
          <p>
            <span className="text-primary">Email:</span> {info.email}
          </p>
        ) : null}
        {info?.phone ? (
          <p>
            <span className="text-primary">Phone:</span> {info.phone}
          </p>
        ) : null}
        {info?.location ? (
          <p>
            <span className="text-primary">Location:</span> {info.location}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default ContactDetailsList;