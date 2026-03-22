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
      onClick={onClick}
      className={({ isActive }) =>
        classNames(
          'text-sm font-medium transition-colors hover:text-white',
          isActive ? 'text-white' : 'text-slate-400',
        )
      }
    >
      {label}
    </NavLink>
  );
}

export default NavItem;