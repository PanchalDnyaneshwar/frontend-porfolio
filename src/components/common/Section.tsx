import type { PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from './Container';
import { classNames } from '@/utils/classNames';

interface SectionProps extends PropsWithChildren {
  className?: string;
  containerClassName?: string;
  id?: string;
}

function Section({ children, className, containerClassName, id }: SectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={classNames('section-space', className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <Container className={containerClassName}>{children}</Container>
    </motion.section>
  );
}

export default Section;
