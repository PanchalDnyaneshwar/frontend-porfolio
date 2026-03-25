interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="rounded-lg border border-neutral-300 px-4 py-2 text-sm text-zinc-900 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-sm text-zinc-600">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="rounded-lg border border-neutral-300 px-4 py-2 text-sm text-zinc-900 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

