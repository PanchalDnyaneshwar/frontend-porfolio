import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react';
import { Link } from 'react-router-dom';
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
  primary:
    'bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:opacity-95',
  secondary:
    'bg-secondary text-white shadow-soft hover:-translate-y-0.5 hover:opacity-95',
  outline:
    'border border-neutral-300 bg-transparent text-zinc-900 hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-[#f1ebe2]',
  ghost:
    'bg-[#fcfaf6] text-zinc-900 hover:-translate-y-0.5 hover:bg-[#f1ebe2]',
};

function isAnchorProps(props: ButtonProps): props is AnchorProps {
  return typeof (props as AnchorProps).href === 'string';
}

function isInternalHref(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

function Button(props: ButtonProps) {
  const commonClass = classNames(
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/10',
    variantStyles[props.variant || 'primary'],
    props.className,
  );

  if (isAnchorProps(props)) {
    const { children, href, className, variant, ...rest } = props;

    if (isInternalHref(href)) {
      return (
        <Link to={href} className={commonClass}>
          {children}
        </Link>
      );
    }

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





