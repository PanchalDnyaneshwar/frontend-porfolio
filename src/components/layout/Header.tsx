import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { APP_ROUTES } from '@/constants/appRoutes';
import { NAV_ITEMS } from '@/constants/ui';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[rgba(252,250,246,0.88)] backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-3 py-3 lg:gap-5">
        <Link
          to={APP_ROUTES.home}
          className="flex shrink-0 items-center gap-3 rounded-2xl border border-neutral-200 bg-[rgba(252,250,246,0.88)] px-3 py-2 text-zinc-900 transition-colors hover:border-primary/40"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-sm font-bold tracking-[0.18em] text-primary">
            DP
          </span>
          <span className="hidden min-[420px]:block">
            <span className="heading-ink block text-sm font-semibold tracking-[0.08em]">
              Dnyaneshwar Panchal
            </span>
            <span className="block text-xs text-zinc-600">Full Stack Developer</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-[rgba(252,250,246,0.84)] p-1.5 shadow-soft">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.path} to={item.path} label={item.label} />
          ))}
          </div>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button href={APP_ROUTES.contact} className="px-5 xl:px-6">
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex rounded-xl border border-neutral-300 bg-[rgba(252,250,246,0.88)] p-2.5 text-zinc-800 transition-colors hover:border-neutral-400 hover:text-zinc-900 lg:hidden"
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




