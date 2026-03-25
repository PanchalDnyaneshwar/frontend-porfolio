import { NavLink } from 'react-router-dom';
import { classNames } from '@/utils/classNames';

interface NavItemProps {
  to: string;
  label: string;
  onClick?: () => void;
}

function NavItem({ to, label, onClick }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        classNames(
          'rounded-full px-3 py-2 text-sm font-medium tracking-[-0.01em] transition-all duration-200',
          isActive
            ? 'bg-primary/12 text-zinc-900 shadow-soft'
            : 'text-zinc-600 hover:bg-[#f1ebe2]/80 hover:text-zinc-900',
        )
      }
    >
      {label}
    </NavLink>
  );
}

export default NavItem;



