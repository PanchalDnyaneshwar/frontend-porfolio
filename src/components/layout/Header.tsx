import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import MobileMenu from './MobileMenu';
import { NAV_ITEMS } from '@/constants/ui';
import { APP_ROUTES } from '@/constants/appRoutes';
import { classNames } from '@/utils/classNames';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#081120]/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link to={APP_ROUTES.home} className="text-lg font-bold tracking-wide text-white">
          DP<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                classNames(
                  'text-sm font-medium transition-colors hover:text-white',
                  isActive ? 'text-white' : 'text-slate-400',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={APP_ROUTES.contact}>Hire Me</Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-slate-700 p-2 text-slate-200 md:hidden"
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