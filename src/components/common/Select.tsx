import type { SelectHTMLAttributes } from 'react';
import { classNames } from '@/utils/classNames';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

function Select({ label, error, className, children, ...props }: SelectProps) {
  return (
    <div>
      {label ? <label className="mb-2 block text-sm font-medium text-slate-300">{label}</label> : null}
      <select
        className={classNames(
          'w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-primary',
          error ? 'border-danger' : '',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      {error ? <p className="mt-1 text-xs text-danger">{error}</p> : null}
    </div>
  );
}

export default Select;