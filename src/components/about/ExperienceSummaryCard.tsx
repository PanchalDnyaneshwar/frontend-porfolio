interface ExperienceSummaryCardProps {
  totalExperiences: number;
  totalSkills: number;
}

function ExperienceSummaryCard({
  totalExperiences,
  totalSkills,
}: ExperienceSummaryCardProps) {
  return (
    <div className="rounded-[2rem] border border-neutral-200 bg-[#fcfaf6] p-6 shadow-soft sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
        Snapshot
      </p>
      <h3 className="text-xl font-semibold text-zinc-900">Quick Summary</h3>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-[#f7f2ea]/90 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Experience Entries</p>
          <p className="mt-2 text-3xl font-bold text-zinc-900">{totalExperiences}</p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-[#f7f2ea]/90 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Skills Listed</p>
          <p className="mt-2 text-3xl font-bold text-zinc-900">{totalSkills}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSummaryCard;





