'use client';

import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';

import LogoColor from '@/assets/logo-color.svg';
import LogoWhite from '@/assets/logo-white.svg';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { NavLink } from '@/components/NavLink';
import { ThemeToggle } from '@/components/ThemeToggle';
import FlyoutMenu, { FlyoutMenuItemProps } from '@/components/navigation/FlyoutMenu';
import { FloatingDelayGroup } from '@floating-ui/react';
import {
  AcademicCapIcon,
  BookOpenIcon,
  BugAntIcon,
  CodeBracketIcon,
  LifebuoyIcon,
  LightBulbIcon,
  MapIcon,
  NewspaperIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  Square3Stack3DIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';

const features: FlyoutMenuItemProps[] = [
  {
    name: 'Feedback Widget',
    description: 'Collect feedback in your application',
    href: '/features/feedback-widget',
    icon: NewspaperIcon,
  },
  {
    name: 'Bug Tracking',
    description: 'Resolve bugs faster',
    href: '/features/bug-tracking',
    icon: BugAntIcon,
  },
  {
    name: 'Feature Request Management',
    description: 'Prioritize changes that matter',
    href: '/features/feature-request-management',
    icon: LightBulbIcon,
  },
  {
    name: 'Feedback Management',
    description: 'Centralize your feedback management',
    href: '/features/feedback-management',
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Integrations',
    description: "Fits into your team's workflow",
    href: '/features/integrations',
    icon: SquaresPlusIcon,
  },
];

const useCases: FlyoutMenuItemProps[] = [
  {
    name: 'Product Management',
    description: 'No more guessing what your users want',
    href: '/use-cases/product-management',
    icon: MapIcon,
  },
  {
    name: 'Software Development',
    description: 'Consistent and reproducible bug reports',
    href: '/use-cases/software-development',
    icon: CodeBracketIcon,
  },
  {
    name: 'QA & UAT',
    description: 'Reporting bugs has never been easier',
    href: '/use-cases/qa-uat',
    icon: ShieldCheckIcon,
  },
  {
    name: 'E-Commerce',
    description: 'Improve your online store experience',
    href: '/use-cases/e-commerce',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Agencies',
    description: 'Simplify design reviews with clients',
    href: '/use-cases/agencies',
    icon: PaintBrushIcon,
  },
];

const resources: FlyoutMenuItemProps[] = [
  {
    name: 'Blog',
    description: 'Discover insights, tips, news and more',
    href: '/blog',
    icon: BookOpenIcon,
  },
  {
    name: 'Help Center',
    description: 'Find answers to your questions',
    href: 'https://help.userol.com',
    icon: LifebuoyIcon,
  },
  {
    name: 'Documentation',
    description: 'Dive into detailed documentation',
    href: 'https://docs.userowl.com',
    icon: AcademicCapIcon,
  },
];

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx('origin-center transition', open && 'scale-90 opacity-0')}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx('origin-center transition', !open && 'scale-90 opacity-0')}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

type Props = {
  isDark?: boolean;
};
export const Header = (props: Props) => {
  return (
    <header
      className={clsx(props.isDark ? 'dark' : null, 'inset-x-0 flex items-center justify-between')}
    >
      <div className="flex-1 bg-white py-10 dark:bg-gray-900">
        <Container>
          <nav className="relative z-50 flex items-center justify-between">
            <div className="flex items-center md:gap-x-12">
              <Link href="/" aria-label="Home">
                <LogoWhite className="hidden h-7 w-auto dark:block md:mb-3" />
                <LogoColor className="h-7 w-auto dark:hidden md:mb-3" />
              </Link>
              <div className="hidden items-center md:flex md:gap-x-6">
                <FloatingDelayGroup delay={200}>
                  <FlyoutMenu label="Features" items={features} isDark={props.isDark} />
                  <FlyoutMenu label="Use Cases" items={useCases} isDark={props.isDark} />

                  <NavLink href="/pricing">Pricing</NavLink>
                  <FlyoutMenu label="Resources" items={resources} isDark={props.isDark} />
                </FloatingDelayGroup>
              </div>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <div className="hidden md:block">
                <NavLink href="https://app.userowl.com/login">Sign in</NavLink>
              </div>
              <Button href="https://app.userowl.com/signup" color="blue">
                <span>
                  Start free <span className="hidden lg:inline">today</span>
                </span>
              </Button>
              <div className="-mr-1 md:hidden">
                <MobileNavigation />
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};
