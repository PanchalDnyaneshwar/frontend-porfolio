import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react';
import { classNames } from '@/utils/classNames';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface BaseProps {
  className?: string;
  variant?: Variant;
}

type ButtonProps =
  | (PropsWithChildren<BaseProps & ButtonHTMLAttributes<HTMLButtonElement>> & {
      href?: never;
    })
  | (PropsWithChildren<BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>> & {
      href: string;
    });

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary text-slate-950 hover:opacity-90',
  secondary: 'bg-secondary text-white hover:opacity-90',
  outline: 'border border-slate-700 bg-transparent text-white hover:bg-slate-800',
  ghost: 'bg-slate-900/40 text-white hover:bg-slate-800',
};

function Button(props: ButtonProps) {
  const commonClass = classNames(
    'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200',
    variantStyles[props.variant || 'primary'],
    props.className,
  );

  if ('href' in props && props.href) {
    const { children, href, className, variant, ...rest } = props;
    return (
      <a href={href} className={commonClass} {...rest}>
        {children}
      </a>
    );
  }

  const { children, className, variant, ...rest } = props;
  return (
    <button className={commonClass} {...rest}>
      {children}
    </button>
  );
}

export default Button;