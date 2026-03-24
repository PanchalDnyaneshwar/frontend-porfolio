import type { SelectHTMLAttributes } from 'react';
import { classNames } from '@/utils/classNames';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

function Select({ label, error, className, children, ...props }: SelectProps) {
  return (
    <div className="space-y-2">
      {label ? (
        <label className="block text-sm font-semibold tracking-[-0.01em] text-slate-200">
          {label}
        </label>
      ) : null}
      <select
        className={classNames(
          'w-full rounded-2xl border border-slate-700/90 bg-slate-950/90 px-4 py-3.5 text-white shadow-soft outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/10',
          error ? 'border-danger' : '',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      {error ? <p className="text-xs font-medium text-danger">{error}</p> : null}
    </div>
  );
}

export default Select;
