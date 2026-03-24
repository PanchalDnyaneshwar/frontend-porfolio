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
    <div className="border-t border-slate-800 bg-[#081120]/95 backdrop-blur-xl md:hidden">
      <div className="flex flex-col gap-2 px-4 py-4">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              classNames(
                'rounded-2xl border px-4 py-3 text-sm font-medium transition-colors',
                isActive
                  ? 'border-primary/40 bg-primary/10 text-white'
                  : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:bg-slate-900 hover:text-white',
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
