import type { TextareaHTMLAttributes } from 'react';
import { classNames } from '@/utils/classNames';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="space-y-2">
      {label ? (
        <label className="block text-sm font-semibold tracking-[-0.01em] text-zinc-800">
          {label}
        </label>
      ) : null}
      <textarea
        className={classNames(
          'w-full rounded-2xl border border-neutral-300 bg-[#fcfaf6] px-4 py-3.5 text-zinc-900 shadow-soft outline-none transition-all duration-200 placeholder:text-zinc-500 focus:border-primary focus:ring-4 focus:ring-primary/10',
          error ? 'border-danger' : '',
          className,
        )}
        {...props}
      />
      {error ? <p className="text-xs font-medium text-danger">{error}</p> : null}
    </div>
  );
}

export default Textarea;



