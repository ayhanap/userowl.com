'use client';

import clsx from 'clsx';

import { Container } from '@/components/Container';
import { Disclosure, RadioGroup, Transition } from '@headlessui/react';
import { ArrowSmallLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { TagIcon } from '@heroicons/react/24/outline';

import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { Fragment, useState } from 'react';

type Price = {
  monthly: string;
  annually: string;
  letsTalk?: boolean;
};

type Frequency = {
  value: 'monthly' | 'annually';
  label: string;
};

const frequencies: Frequency[] = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'annually', label: 'Annually' },
];

type PricingFeature = {
  name: string;
  description: string;
};

// function SwirlyDoodle(props: React.ComponentPropsWithoutRef<'svg'>) {
//   return (
//     <svg aria-hidden="true" viewBox="0 0 281 40" preserveAspectRatio="none" {...props}>
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
//       />
//     </svg>
//   );
// }

// function CheckIcon({ className, ...props }: React.ComponentPropsWithoutRef<'svg'>) {
//   return (
//     <svg
//       aria-hidden="true"
//       className={clsx('h-6 w-6 flex-none fill-current stroke-current', className)}
//       {...props}
//     >
//       <path
//         d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
//         strokeWidth={0}
//       />
//       <circle
//         cx={12}
//         cy={12}
//         r={8.25}
//         fill="none"
//         strokeWidth={1.5}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

function PricingFeatureExpandable({ name, description }: PricingFeature) {
  return (
    <Disclosure as="div" className="">
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button
              className="flex w-full items-center text-left 
      text-gray-900 transition-colors duration-200 aria-expanded:text-purple-600 
      aria-expanded:duration-100 dark:text-white dark:aria-expanded:text-purple-400"
            >
              <ChevronRightIcon
                className={clsx(
                  open ? 'rotate-90' : '',
                  'mr-1.5 h-6 w-6 stroke-2 text-indigo-600 transition-transform duration-200 dark:text-white',
                )}
                aria-hidden="true"
              />

              <span
                className={clsx(
                  // open ? 'text-purple-600' : null,
                  'font-semibold leading-7',
                )}
              >
                {name}
              </span>
            </Disclosure.Button>
          </dt>
          <Transition
            as={Fragment}
            enter="transition-all duration-200 ease-in-out"
            enterFrom="transform max-h-0 opacity-0"
            enterTo="transform max-h-[200px] opacity-100"
            leave="transition-all duration-100 ease-in-out"
            leaveFrom="transform max-h-[200px] opacity-100"
            leaveTo="transform max-h-0 opacity-0"
            unmount={false}
          >
            <Disclosure.Panel as="dd" className="mt-1.5 overflow-hidden pr-1" unmount={false}>
              <p className="ml-[1.875rem] leading-7 text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

function Plan({
  id,
  name,
  price,
  description,
  everythingInOtherDescription,
  buttonText,
  href,
  features,
  mostPopular = false,
  frequency,
  nOfUsers,
  nOfProjects,
}: {
  id: string;
  name: string;
  price: Price;
  description: string;
  everythingInOtherDescription?: string;
  buttonText: string;
  href: string;
  features: Array<PricingFeature>;
  mostPopular?: boolean;
  frequency: Frequency;
  nOfUsers: string;
  nOfProjects: string;
}) {
  return (
    <FadeIn
      className={clsx(
        mostPopular
          ? 'ring-2 ring-indigo-600 dark:bg-white/5 dark:ring-indigo-500'
          : 'ring-1 ring-gray-200 dark:ring-white/10',
        'rounded-3xl p-8 xl:p-10',
      )}
    >
      <div className="flex items-center justify-between gap-x-4">
        <h3
          id={id}
          className={clsx(
            mostPopular ? 'text-indigo-600 dark:text-white' : 'text-gray-900 dark:text-white',
            'text-lg font-semibold leading-8',
          )}
        >
          {name}
        </h3>
        {mostPopular ? (
          <p className="whitespace-nowrap rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600 dark:bg-indigo-500 dark:text-white">
            Best value
          </p>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
      <p className="mt-6 flex items-baseline gap-x-1">
        {price.letsTalk ? (
          <span className="text-2xl font-bold leading-[3.5rem] tracking-tight text-gray-900 dark:text-white">
            Let&apos;s Talk
          </span>
        ) : (
          <>
            <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {price[frequency.value]}
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
              /month
            </span>
          </>
        )}
      </p>
      <p
        className={clsx(
          !price.letsTalk && frequency.value === 'annually' ? 'block' : 'invisible',
          'text-xs text-gray-500 dark:text-gray-400',
        )}
      >
        billed annually
      </p>
      <a
        href={href}
        aria-describedby={id}
        className={clsx(
          mostPopular
            ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400'
            : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20',
          'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
        )}
      >
        {buttonText}
      </a>
      <div className="mt-8 grid grid-cols-1 divide-y divide-gray-200 rounded-lg px-[1.875rem] ring-0 ring-gray-200 dark:divide-white/10 dark:ring-white/10">
        <p className="pb-2">
          <b>{nOfUsers}</b> team members
        </p>
        <p className="pt-2">
          <b>{nOfProjects}</b> projects
        </p>
      </div>
      <ul
        role="list"
        className="mt-6 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 xl:mt-10"
      >
        {everythingInOtherDescription ? (
          <div
            className="flex w-full items-center text-left 
      text-gray-900 transition-colors duration-200 aria-expanded:text-purple-600 
      aria-expanded:duration-100 dark:text-white dark:aria-expanded:text-purple-400"
          >
            <ArrowSmallLeftIcon
              className={clsx(
                'mr-1.5 h-6 w-6 rotate-90 stroke-2 text-indigo-600 dark:text-white lg:rotate-0',
              )}
              aria-hidden="true"
            />

            <span
              className={clsx(
                // open ? 'text-purple-600' : null,
                'leading-7',
              )}
            >
              {everythingInOtherDescription}
            </span>
          </div>
        ) : null}
        {features.map((feature) => (
          <li key={feature.name} className="flex gap-x-3">
            {/* <CheckIcon
              className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
              aria-hidden="true"
            />
            {feature} */}
            <PricingFeatureExpandable {...feature} />
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}

// eslint-disable-next-line import/prefer-default-export
export function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);
  return (
    <section id="pricing" aria-label="Pricing" className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <FadeInStagger>
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
                Pricing
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Pricing plans for teams of&nbsp;all&nbsp;sizes
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
              Choose the perfect plan that suits your needs to start streamlining your feedback
              management.
            </p>
          </FadeIn>
          <FadeIn className="mt-16 flex justify-center">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-[auto_auto]  gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:bg-white/5 dark:text-white dark:ring-0"
            >
              <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
              {frequencies.map((option) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    clsx(
                      checked
                        ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                        : 'text-gray-500 dark:text-white',
                      'cursor-pointer rounded-full px-2.5 py-1.5',
                    )
                  }
                >
                  <span>
                    {option.label}
                    {option.value === 'annually' ? (
                      <span className="ml-2 rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600 dark:bg-indigo-100 dark:text-gray-900">
                        <TagIcon
                          className="-mt-0.5 mr-1 inline h-4 w-4 flex-none"
                          aria-hidden="true"
                        />
                        Save 3 Months
                      </span>
                    ) : null}
                  </span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </FadeIn>

          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Plan
              id="starter"
              name="Starter"
              price={{ monthly: '$29', annually: '$22' }}
              frequency={frequency}
              description="Ideal to get started for startups and small sized teams."
              buttonText={'Start 14-day free trial'}
              href="https://app.userowl.com/signup?plan=starter"
              nOfUsers="3"
              nOfProjects="3"
              features={[
                {
                  name: 'Unlimited Reporters',
                  description:
                    'Unlimited number of guests that can send feedback on your application or website.',
                },
                {
                  name: 'Screenshots & Annotations',
                  description:
                    'Your users can annotate screen to mark issues directly in your website without needing any other tool.',
                },
                {
                  name: 'Session Info',
                  description:
                    'Each feedback contains session details such as URL, OS, and browser, resolution, location, and more.',
                },
                {
                  name: 'Console Logs',
                  description:
                    'Browser console errors and logs are automatically captured and included in every feedback.',
                },
                {
                  name: 'Workflow Customization',
                  description: 'Customize your feedback workflow, aligning it with your team.',
                },
                {
                  name: 'One Integration',
                  description:
                    'Use one integration within all of your projects. Userowl integrates with the tools you already use for product management, customer support, and communication.',
                },
                {
                  name: 'Widget Customization',
                  description:
                    'Customize feedback widget section and fields according to your use case.',
                },
                {
                  name: 'Branding',
                  description:
                    'Customize look and feel of the feedback widget to match your brand.',
                },
                {
                  name: 'Collaboration',
                  description:
                    'Manage feedback with your team using comments, status updates, tags, prioritization and attachments.',
                },
              ]}
            />
            <Plan
              id="team"
              mostPopular
              name="Team"
              price={{ monthly: '$59', annually: '$44' }}
              frequency={frequency}
              description="Perfect for teams looking for advanced feedback management."
              everythingInOtherDescription="Everything in Starter, plus..."
              buttonText={'Start 14-day free trial'}
              href="https://app.userowl.com/signup?plan=team"
              nOfUsers="10"
              nOfProjects="10"
              features={[
                {
                  name: 'JavaScript SDK',
                  description:
                    'Control feedback widget functionality in your application. Control visibility, prefill fields, trigger custom actions and more.',
                },
                {
                  name: 'User Identification',
                  description:
                    'Fill your user info programmatically so reported feedback includes your logged in customer/user info.',
                },
                {
                  name: 'Custom Metadata',
                  description:
                    'Fill custom metadata to reported feedback programmatically according to your personal use case.',
                },
                {
                  name: 'All Integrations',
                  description:
                    'Userowl integrates with the tools you already use for product management, customer support, and communication.',
                },
              ]}
            />
            <Plan
              id="enterprise"
              name="Enterprise"
              price={{ monthly: '$0', annually: '0', letsTalk: true }}
              frequency={frequency}
              description="Best for enterprises that need special support and custom tools."
              everythingInOtherDescription="Everything in Team, plus..."
              buttonText={'Schedule a call'}
              href="https://calendly.com/userowl/30min"
              nOfUsers="Unlimited"
              nOfProjects="Unlimited"
              features={[
                {
                  name: 'API Access',
                  description:
                    'Use Userowl REST API to integrate Userowl functionality to your custom use case programmatically.',
                },
                {
                  name: 'Webhooks',
                  description: 'Get informed when a feedback created or updated via Webhooks.',
                },
                {
                  name: 'Remove ‘Powered By’',
                  description: 'Remove the ‘Powered By Userowl’ branding from the feedback widget.',
                },
                {
                  name: 'Implementation support',
                  description: 'On-call support to help implementation and onboarding.',
                },
                {
                  name: 'High priority support',
                  description: 'Priority support to handle your support cases.',
                },
              ]}
            />
          </div>
        </Container>
      </FadeInStagger>
    </section>
  );
}
