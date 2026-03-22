interface ErrorStateProps {
  message?: string;
}

function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="rounded-2xl border border-danger/30 bg-danger/10 p-6 text-sm text-red-200">
      {message || 'Something went wrong while loading data.'}
    </div>
  );
}

export default ErrorState;