import type { PropsWithChildren } from 'react';

function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}

export default Badge;