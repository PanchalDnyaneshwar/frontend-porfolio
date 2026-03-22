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

type AnchorProps = PropsWithChildren<
  BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>
> & {
  href: string;
};

type ButtonElementProps = PropsWithChildren<
  BaseProps & ButtonHTMLAttributes<HTMLButtonElement>
> & {
  href?: undefined;
};

type ButtonProps = AnchorProps | ButtonElementProps;

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary text-slate-950 hover:opacity-90',
  secondary: 'bg-secondary text-white hover:opacity-90',
  outline: 'border border-slate-700 bg-transparent text-white hover:bg-slate-800',
  ghost: 'bg-slate-900/40 text-white hover:bg-slate-800',
};

function isAnchorProps(props: ButtonProps): props is AnchorProps {
  return typeof (props as AnchorProps).href === 'string';
}

function Button(props: ButtonProps) {
  const commonClass = classNames(
    'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200',
    variantStyles[props.variant || 'primary'],
    props.className,
  );

  if (isAnchorProps(props)) {
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
