import type { PropsWithChildren } from 'react';

function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-[#0d5f59]">
      {children}
    </span>
  );
}

export default Badge;
