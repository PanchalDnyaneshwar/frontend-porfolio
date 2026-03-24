import Container from '@/components/common/Container';
import { SITE_CONFIG } from '@/constants/site';

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/40 py-10 sm:py-12">
      <Container className="grid gap-6 text-sm text-slate-400 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div className="text-center md:text-left">
          <p className="text-base font-semibold text-white">{SITE_CONFIG.brandName}</p>
          <p className="mt-2 max-w-md leading-7 text-slate-400">{SITE_CONFIG.footerText}</p>
        </div>

        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</p>
          <p className="mt-2 text-slate-500">Crafted for responsive, modern, production-ready web experiences.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
