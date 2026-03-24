import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { APP_ROUTES } from '@/constants/appRoutes';
import { NAV_ITEMS } from '@/constants/ui';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#081120]/85 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-4 py-3">
        <Link
          to={APP_ROUTES.home}
          className="flex items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/50 px-3 py-2 text-white transition-colors hover:border-primary/40"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-sm font-bold tracking-[0.18em] text-primary">
            DP
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-[0.16em] text-white">
              Dnyaneshwar Panchal
            </span>
            <span className="block text-xs text-slate-400">Full Stack Developer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/50 px-3 py-2 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.path} to={item.path} label={item.label} />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={APP_ROUTES.contact} className="px-6">
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex rounded-xl border border-slate-700 bg-slate-900/50 p-2.5 text-slate-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

export default Header;
