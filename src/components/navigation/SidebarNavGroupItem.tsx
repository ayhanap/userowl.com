import { isCurrentFN } from '@/components/navigation/util';
import { Disclosure } from '@headlessui/react';
import ChevronRightIcon from '@heroicons/react/20/solid/ChevronRightIcon';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import NavItem from './navItem';

const SidebarNavGroupItem = ({
  item,
  isMobile,
  mobileOnClickHandler,
  parentVisible,
}: {
  item: NavItem;
  isMobile?: boolean;
  mobileOnClickHandler?: () => void;
  parentVisible: boolean;
}) => {
  const segments = useSelectedLayoutSegments().filter((segment) => !segment.match('\\(.*\\)'));
  const isCurrent = useMemo(() => {
    return item.children.filter((childItem) => isCurrentFN(childItem, segments, true)).length > 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, segments, parentVisible]);
  const [open, setOpen] = useState(isCurrent);

  useEffect(() => {
    setTimeout(() => setOpen(isCurrent), 300);
  }, [isCurrent, parentVisible]);

  const isCurrentExact = isCurrentFN(item, segments, false);
  // const requiredItem = item as Required<NavItem>;
  // console.log('requiredItem: ', requiredItem, 'icon', requiredItem.icon);
  return (
    <>
      <Disclosure as="div" key={item.name} className="space-y-1">
        <>
          <Disclosure.Button
            onClick={() => setOpen((isOpen) => !isOpen)}
            className={clsx(
              isCurrentExact
                ? 'bg-white dark:bg-gray-800'
                : 'bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-purple-600 dark:hover:text-white',
              isMobile ? 'text-base' : 'text-sm leading-6',
              open || isCurrent
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400',
              'group flex w-full items-center rounded-md p-2 text-left font-semibold',
            )}
          >
            <span className="flex-1">{item.name}</span>
            <ChevronRightIcon
              className={clsx(
                open
                  ? ' rotate-90 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400',
                'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-900 dark:group-hover:text-white',
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel static className="space-y-1">
            {open
              ? item.children!.map((subItem) => (
                  // eslint-disable-next-line react/jsx-indent
                  <Link
                    key={subItem.name}
                    onClick={isMobile ? mobileOnClickHandler : undefined}
                    // as="a"
                    href={subItem.href}
                    prefetch={subItem.prefetch === false ? false : undefined}
                    className={clsx(
                      isMobile ? 'text-base' : 'text-sm leading-6',
                      'group flex w-full items-center rounded-md bg-white py-2 pl-6 pr-2 text-gray-600 dark:bg-gray-900 dark:text-gray-400',
                      isCurrentFN(subItem, segments)
                        ? 'bg-white text-purple-600 dark:bg-gray-800 dark:text-white'
                        : 'hover:text-purple-600 dark:hover:bg-gray-800 dark:hover:text-white',
                    )}
                  >
                    <subItem.icon
                      className={clsx(
                        'mr-3 h-6 w-6 flex-shrink-0 text-gray-600 dark:text-gray-400',
                        isCurrentFN(subItem, segments)
                          ? 'text-purple-600 dark:text-white'
                          : 'group-hover:text-purple-600 dark:group-hover:text-white',
                      )}
                      aria-hidden="true"
                    />
                    {subItem.name}
                  </Link>
                ))
              : null}
          </Disclosure.Panel>
        </>
      </Disclosure>
    </>
  );
};

export default SidebarNavGroupItem;
