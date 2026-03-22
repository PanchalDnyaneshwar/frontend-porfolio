interface StatCardProps {
  label: string;
  value: string;
  description?: string;
}

function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft">
      <p className="text-sm uppercase tracking-[0.2em] text-primary">{label}</p>
      <p className="mt-3 text-3xl font-bold text-white">{value}</p>
      {description ? <p className="mt-2 text-sm text-slate-400">{description}</p> : null}
    </div>
  );
}

export default StatCard;