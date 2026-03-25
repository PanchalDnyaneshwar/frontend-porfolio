import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Button from '@/components/common/Button';
import { APP_ROUTES } from '@/constants/appRoutes';
import { NAV_ITEMS } from '@/constants/ui';
import { classNames } from '@/utils/classNames';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="border-t border-neutral-200 bg-[rgba(252,250,246,0.96)] shadow-soft backdrop-blur-xl lg:hidden"
        >
          <div className="px-4 py-4">
            <div className="mb-4 rounded-[1.75rem] border border-neutral-200 bg-[rgba(252,250,246,0.94)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                Navigation
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Browse sections of the portfolio or jump straight to the contact page.
              </p>
            </div>

            <div className="grid gap-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    classNames(
                      'rounded-2xl border px-4 py-3 text-sm font-medium tracking-[-0.01em] transition-all duration-200',
                      isActive
                        ? 'border-primary/40 bg-primary/10 text-zinc-900 shadow-soft'
                        : 'border-neutral-200 bg-[#fcfaf6] text-zinc-600 hover:border-neutral-300 hover:bg-[#f5f1ea] hover:text-zinc-900',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-4">
              <Button href={APP_ROUTES.contact} className="w-full" onClick={onClose}>
                Hire Me
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileMenu;





