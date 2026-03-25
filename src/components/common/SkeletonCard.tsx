function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-3xl border border-neutral-200 bg-[#fcfaf6] p-6">
      <div className="h-48 rounded-2xl bg-[#f1ebe2]" />
      <div className="mt-5 h-5 w-2/3 rounded bg-[#f1ebe2]" />
      <div className="mt-3 h-4 w-full rounded bg-[#f1ebe2]" />
      <div className="mt-2 h-4 w-5/6 rounded bg-[#f1ebe2]" />
      <div className="mt-5 flex gap-2">
        <div className="h-8 w-20 rounded-full bg-[#f1ebe2]" />
        <div className="h-8 w-20 rounded-full bg-[#f1ebe2]" />
      </div>
    </div>
  );
}

export default SkeletonCard;



