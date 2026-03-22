import Button from './Button';
import Modal from './Modal';

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  description?: string;
  onClose: () => void;
  onConfirm: () => void;
}

function ConfirmDialog({
  open,
  title = 'Confirm Action',
  description = 'Are you sure you want to continue?',
  onClose,
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <Modal open={open} onClose={onClose} title={title}>
      <p className="text-sm leading-7 text-slate-400">{description}</p>
      <div className="mt-6 flex justify-end gap-3">
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;