import type { PropsWithChildren } from 'react';
import Container from './Container';
import { classNames } from '@/utils/classNames';

interface SectionProps extends PropsWithChildren {
  className?: string;
  containerClassName?: string;
  id?: string;
}

function Section({ children, className, containerClassName, id }: SectionProps) {
  return (
    <section id={id} className={classNames('section-space', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export default Section;