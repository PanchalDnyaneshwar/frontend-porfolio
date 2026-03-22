import type { PropsWithChildren } from 'react';
import { classNames } from '@/utils/classNames';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames('mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}

export default Container;