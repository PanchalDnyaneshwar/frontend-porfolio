import type { PropsWithChildren } from 'react';

function PageWrapper({ children }: PropsWithChildren) {
  return <div className="min-h-[calc(100vh-128px)]">{children}</div>;
}

export default PageWrapper;