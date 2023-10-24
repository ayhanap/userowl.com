import { Dialog, Transition } from '@headlessui/react';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import React, { Fragment, useMemo, useState } from 'react';

import NavItem from '@/components/navigation/navItem';
import { isWindowsOS } from '@/util/utils';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';

import LogoColor from '@/assets/logo-color.svg';
import LogoWhite from '@/assets/logo-white.svg';
import { Button } from '@/components/Button';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';
import SidebarNavGroupItem from './SidebarNavGroupItem';
import SidebarNavItem from './SidebarNavItem';

interface SidebarNavProps {
  items: NavItem[];
}

const renderNavBody = ({
  props,
  isMobile,
  mobileOnClickHandler,
  isWindows,
}: {
  props: SidebarNavProps;
  isMobile?: boolean;
  mobileOnClickHandler?: () => void;
  isWindows: boolean;
}) => {
  return (
    <div
      className={clsx(
        isWindows ? 'side-scrollbar' : null,
        'flex grow flex-row overflow-y-auto overflow-x-hidden py-2',
      )}
    >
      <div className="w-full flex-shrink-0 basis-full transition duration-300 ease-in-out  [&:not(:focus-visible)]:focus:outline-none">
        <div className="mt-3">
          <nav className="space-y-1 bg-white px-2 dark:bg-gray-900" aria-label="Sidebar">
            {props.items
              .filter((item) => item.visible !== false)
              .map((item) =>
                !item.children ? (
                  <SidebarNavItem
                    key={item.name}
                    item={item}
                    isMobile={isMobile}
                    mobileOnClickHandler={mobileOnClickHandler}
                  />
                ) : (
                  <SidebarNavGroupItem
                    key={item.name}
                    item={item}
                    isMobile={isMobile}
                    parentVisible={true}
                    mobileOnClickHandler={mobileOnClickHandler}
                  />
                ),
              )}
          </nav>
        </div>
      </div>
    </div>
  );
};

const SidebarNav = React.forwardRef<HTMLButtonElement, SidebarNavProps>((props, ref) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const segments = useSelectedLayoutSegments().filter((segment) => !segment.match('\\(.*\\)'));

  const isWindows = useMemo(() => isWindowsOS(), []);

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="ml-1 hidden h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        onClick={() => {
          setSidebarOpen((isOpen) => !isOpen);
        }}
      ></button>
      <Transition.Root show={sidebarOpen}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="absolute right-0 top-0 flex h-full w-full max-w-xs flex-1 flex-col bg-white dark:bg-gray-900">
                <Transition
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-0 top-0 -ml-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition>
                <div className="flex flex-grow flex-col overflow-y-auto  pt-5 ">
                  {/* <div className="flex flex-shrink-0 items-center px-4">
                    <LogoWhite2 id="sidebar-mobile-logo" className="mx-auto h-8 w-auto" />
                  </div> */}

                  <Link href="/" aria-label="Home" className="flex flex-shrink-0 items-center px-4">
                    <LogoWhite className="mx-auto hidden h-7 w-auto dark:block md:mb-3" />
                    <LogoColor className="mx-auto h-7 w-auto dark:hidden md:mb-3" />
                  </Link>

                  {renderNavBody({
                    props,
                    isMobile: true,
                    mobileOnClickHandler: () => setSidebarOpen(false),
                    isWindows,
                  })}
                  <div className="flex flex-col space-y-2 p-2">
                    <div className="flex flex-col items-end sm:hidden">
                      <ThemeToggle />
                    </div>
                    <Button href="https://app.userowl.com/signup" color="blue" className="w-full">
                      <span>Start free trial</span>
                    </Button>
                    <Button
                      href="https://app.userowl.com/login"
                      variant="outline"
                      color="slate"
                      className="w-full"
                    >
                      <span>Sign in</span>
                    </Button>
                  </div>

                  {/* <ProjectSelect />
                  <div className="mt-5 flex  h-0 flex-grow flex-col">
                    <nav className="px-2" aria-label="Sidebar">
                      <div className="space-y-1 ">
                        {props.items.map((item) =>
                          !item.children ? (
                            <SidebarNavItem
                              key={item.name}
                              item={item}

                            />
                          ) : (
                            <SidebarNavGroupItem
                              key={item.name}
                              item={item}
                              isMobile={true}
                              parentVisible={showSettings}
                              mobileOnClickHandler={() => setSidebarOpen(false)}
                            />
                          ),
                        )}
                      </div>
                    </nav>
                  </div> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
});

SidebarNav.displayName = 'SidebarMenu';

export default SidebarNav;

// function RenderIcon(Elem: React.ComponentType) { ... }
