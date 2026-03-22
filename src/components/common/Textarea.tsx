import type { TextareaHTMLAttributes } from 'react';
import { classNames } from '@/utils/classNames';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div>
      {label ? <label className="mb-2 block text-sm font-medium text-slate-300">{label}</label> : null}
      <textarea
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

export default Textarea;