interface EmptyStateProps {
  title?: string;
  description?: string;
}

function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-[#fcfaf6] p-8 text-center">
      <h3 className="text-lg font-semibold text-zinc-900">{title || 'No data found'}</h3>
      <p className="mt-2 text-sm text-zinc-600">
        {description || 'There is nothing to show here right now.'}
      </p>
    </div>
  );
}

export default EmptyState;



