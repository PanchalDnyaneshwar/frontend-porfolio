import type { PropsWithChildren } from 'react';

interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  title?: string;
}

function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-neutral-200 bg-[#f5f1ea] p-6 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-zinc-600 hover:text-zinc-900"
            aria-label="Close modal"
          >
            x
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;



