'use client';

import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';

import LogoColor from '@/assets/logo-color.svg';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { NavLink } from '@/components/NavLink';
import FlyoutMenu, { FlyoutMenuItemProps } from '@/components/navigation/FlyoutMenu';
import { FloatingDelayGroup } from '@floating-ui/react';
import {
  AcademicCapIcon,
  BookOpenIcon,
  BugAntIcon,
  LifebuoyIcon,
  LightBulbIcon,
  NewspaperIcon,
  Square3Stack3DIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';

const features: FlyoutMenuItemProps[] = [
  {
    name: 'Feedback Widget',
    description: 'Get a better understanding of your traffic',
    href: '/features/feedback-widget',
    icon: NewspaperIcon,
  },
  {
    name: 'Bug Tracking',
    description: 'Speak directly to your customers',
    href: '/features/bug-tracking',
    icon: BugAntIcon,
  },
  {
    name: 'Feature Request Management',
    description: "Your customers' data will be safe and secure",
    href: '/features/feature-request-management',
    icon: LightBulbIcon,
  },
  {
    name: 'Feedback Management',
    description: 'Build strategic funnels that will convert',
    href: '/features/feedback-management',
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '/features/integrations',
    icon: SquaresPlusIcon,
  },
];

const useCases: FlyoutMenuItemProps[] = [
  {
    name: 'Feedback Widget',
    description: 'Get a better understanding of your traffic',
    href: '/features/feedback-widget',
    icon: NewspaperIcon,
  },
  {
    name: 'Bug Tracking',
    description: 'Speak directly to your customers',
    href: '/features/bug-tracking',
    icon: BugAntIcon,
  },
  {
    name: 'Feature Request Management',
    description: "Your customers' data will be safe and secure",
    href: '/features/feature-request-management',
    icon: LightBulbIcon,
  },
  {
    name: 'Feedback Management',
    description: 'Build strategic funnels that will convert',
    href: '/features/feedback-management',
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '/features/integrations',
    icon: SquaresPlusIcon,
  },
];

const resources: FlyoutMenuItemProps[] = [
  {
    name: 'Blog',
    description: 'Get a better understanding of your traffic',
    href: '/features/feedback-widget',
    icon: BookOpenIcon,
  },
  {
    name: 'Help Center',
    description: 'Speak directly to your customers',
    href: '/features/bug-tracking',
    icon: LifebuoyIcon,
  },
  {
    name: 'Documentation',
    description: "Your customers' data will be safe and secure",
    href: '/features/feature-request-management',
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

export default function Header() {
  return (
    <header className="absolute inset-x-0 flex items-center justify-between py-10">
      <Container className="flex-1">
        <nav className="relative z-50 flex items-center justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <LogoColor className="h-7 w-auto md:mb-3" />
            </Link>
            <div className="hidden items-center md:flex md:gap-x-6">
              <FloatingDelayGroup delay={200}>
                <FlyoutMenu label="Features" items={features} />
                <FlyoutMenu label="Use Cases" items={useCases} />

                <NavLink href="#pricing">Pricing</NavLink>
                <FlyoutMenu label="Resources" items={resources} />
              </FloatingDelayGroup>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Sign in</NavLink>
            </div>
            <Button href="/register" color="blue">
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
    </header>
  );
}
