import type { Settings } from '@/types/settings.types';

interface ContactDetailsListProps {
  settings?: Settings | null;
}

function ContactDetailsList({ settings }: ContactDetailsListProps) {
  const info = settings?.contactInfo;

  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-900/45 p-6 shadow-soft sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
        Reach out
      </p>
      <h3 className="text-xl font-semibold text-white">Office / Contact Details</h3>

      <div className="mt-5 space-y-4 text-slate-300">
        {info?.email ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-sm text-primary">Email</p>
            <p className="mt-1 break-all">{info.email}</p>
          </div>
        ) : null}
        {info?.phone ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-sm text-primary">Phone</p>
            <p className="mt-1">{info.phone}</p>
          </div>
        ) : null}
        {info?.location ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-sm text-primary">Location</p>
            <p className="mt-1">{info.location}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ContactDetailsList;
