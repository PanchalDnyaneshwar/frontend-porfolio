import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '@/utils/scroll';

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
};