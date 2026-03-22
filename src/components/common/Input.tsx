import type { InputHTMLAttributes } from 'react';
import { classNames } from '@/utils/classNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div>
      {label ? <label className="mb-2 block text-sm font-medium text-slate-300">{label}</label> : null}
      <input
        className={classNames(
          'w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-primary',
          error ? 'border-danger' : '',
          className,
        )}
        {...props}
      />
      {error ? <p className="mt-1 text-xs text-danger">{error}</p> : null}
    </div>
  );
}

export default Input;