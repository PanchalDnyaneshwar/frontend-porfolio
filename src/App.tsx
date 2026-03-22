import AppRoutes from '@/routes';
import { AppToaster } from '@/lib/toast';

function App() {
  return (
    <>
      <AppRoutes />
      <AppToaster />
    </>
  );
}

export default App;