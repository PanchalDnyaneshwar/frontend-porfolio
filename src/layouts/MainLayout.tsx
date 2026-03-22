import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import PageWrapper from '@/components/layout/PageWrapper';

function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-slate-100">
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