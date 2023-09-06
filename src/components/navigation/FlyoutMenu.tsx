import { Menu, MenuContent, MenuItem, MenuTrigger } from '@/components/navigation/Menu';
import useCheckMobileScreen from '@/util/useCheckMobileScreen';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';

export type Props = {
  label: string;
  items: FlyoutMenuItemProps[];
};

export interface FlyoutMenuItemProps {
  name: string;
  description: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const FlyoutMenu = ({ label, items }: Props) => {
  const isMobile = useCheckMobileScreen();

  const [open, setOpen] = useState(false);

  const parentVariant = {
    closed: {},
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="">
      <Menu open={isMobile ? open : undefined} onOpenChange={isMobile ? setOpen : undefined}>
        <MenuTrigger
          onClick={() => (isMobile ? setOpen((v) => !v) : undefined)}
          className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-700 hover:text-gray-900"
        >
          <span>{label}</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </MenuTrigger>

        <MenuContent
          className="z-10 mt-5 flex w-screen max-w-max px-4"
          motionProps={{
            initial: { opacity: 0, scale: 0.85 },
            animate: { opacity: 1, scale: 1 },
            variants: parentVariant,
          }}
          transitionFn={(delay) => {
            return typeof delay === 'object' && delay.open === 1
              ? { duration: 0.08 }
              : { duration: 0.2 };
          }}
        >
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <motion.ul
              initial="closed"
              exit="closed"
              animate="open"
              variants={parentVariant}
              className="p-4"
            >
              {items.map((item, i) => (
                <motion.li
                  variants={{
                    open: {
                      x: 0,
                      opacity: 1,
                    },
                    closed: { x: -16, opacity: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  key={item.name}
                  className=""
                >
                  <MenuItem
                    href={item.href}
                    label={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0">
                      <div
                        //
                        className="font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </div>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </MenuItem>
                </motion.li>
              ))}
            </motion.ul>

            {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  //   tabIndex={-1}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div> */}
          </div>
        </MenuContent>
      </Menu>
    </div>
  );
};

// type MenuItemProps = {

// };

// const FlyoutMenuItem = (props: MenuItemProps) => {

//     const context = useTooltipContext();
//     const listRef = useRef([]);

//     const listNavigation = useListNavigation(context.context, {
//       listRef,
//       activeIndex,
//       onNavigate: setActiveIndex,
//     });

//     const {getReferenceProps, getFloatingProps, getItemProps} =
//       useInteractions([listNavigation]);

// }

export default FlyoutMenu;
