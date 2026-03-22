import { Toaster } from 'react-hot-toast';

export function AppToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#0f172a',
          color: '#ffffff',
          border: '1px solid #1e293b',
        },
      }}
    />
  );
}