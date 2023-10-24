import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { memo } from 'react';
import NavItem from './navItem';
import { isCurrentFN } from './util';

const SidebarNavItem = ({
  item,
  isMobile,
  mobileOnClickHandler,
}: {
  item: NavItem;
  isMobile?: boolean;
  mobileOnClickHandler?: () => void;
}) => {
  const segments = useSelectedLayoutSegments().filter((segment) => !segment.match('\\(.*\\)'));
  const requiredItem = item as Required<NavItem>;
  return (
    <>
      <div key={item.name}>
        <Link
          onClick={isMobile ? mobileOnClickHandler : undefined}
          href={item.href}
          prefetch={item.prefetch === false ? false : undefined}
          className={clsx(
            isCurrentFN(item, segments)
              ? 'bg-white text-purple-600 dark:bg-gray-800 dark:text-white'
              : 'bg-white text-gray-600 hover:text-purple-600 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
            isMobile ? 'text-base' : 'text-sm leading-6',
            'group flex w-full items-center rounded-md py-2 pl-2 font-semibold',
          )}
        >
          {/* <requiredItem.icon
            className={clsx(
              isCurrentFN(item, segments) ? 'text-white' : 'text-gray-400 group-hover:text-white',
              'mr-3 h-6 w-6 flex-shrink-0',
            )}
            aria-hidden="true"
          /> */}
          {item.name}
        </Link>
      </div>
    </>
  );
};

export default memo(SidebarNavItem);
