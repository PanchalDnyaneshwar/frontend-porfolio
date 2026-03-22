import Container from '@/components/common/Container';
import { SITE_CONFIG } from '@/constants/site';

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</p>
        <p>{SITE_CONFIG.footerText}</p>
      </Container>
    </footer>
  );
}

export default Footer;