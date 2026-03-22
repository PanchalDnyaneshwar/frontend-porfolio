interface EmptyStateProps {
  title?: string;
  description?: string;
}

function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center">
      <h3 className="text-lg font-semibold text-white">{title || 'No data found'}</h3>
      <p className="mt-2 text-sm text-slate-400">
        {description || 'There is nothing to show here right now.'}
      </p>
    </div>
  );
}

export default EmptyState;