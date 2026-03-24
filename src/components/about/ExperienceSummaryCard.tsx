interface ExperienceSummaryCardProps {
  totalExperiences: number;
  totalSkills: number;
}

function ExperienceSummaryCard({
  totalExperiences,
  totalSkills,
}: ExperienceSummaryCardProps) {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-900/45 p-6 shadow-soft sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
        Snapshot
      </p>
      <h3 className="text-xl font-semibold text-white">Quick Summary</h3>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Experience Entries</p>
          <p className="mt-2 text-3xl font-bold text-white">{totalExperiences}</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Skills Listed</p>
          <p className="mt-2 text-3xl font-bold text-white">{totalSkills}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSummaryCard;
