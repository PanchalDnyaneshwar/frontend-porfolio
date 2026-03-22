import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '@/constants/ui';
import { classNames } from '@/utils/classNames';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="border-t border-slate-800 bg-[#081120] md:hidden">
      <div className="flex flex-col px-4 py-4">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              classNames(
                'rounded-lg px-3 py-3 text-sm transition-colors',
                isActive
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-white',
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;