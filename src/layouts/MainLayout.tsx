import { Outlet } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import PageWrapper from '@/components/layout/PageWrapper';
import ScrollToTop from '@/components/layout/ScrollToTop';
import ThemeBackdrop from '@/components/layout/ThemeBackdrop';

function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-zinc-900">
      <ThemeBackdrop />
      <ScrollToTop />
      <Header />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default MainLayout;

