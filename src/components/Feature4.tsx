import { ArrowsRightLeftIcon, BellAlertIcon, CogIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

type Props = {};

const features = [
  {
    name: 'Two-way integrations',
    description:
      "Sync feedback status and comments between Userowl and your project management tool. Let your feedback's status update when your dev team finishes development.",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: 'Notifications.',
    description: 'Recieve feedback notifications on your teams favorite messaging tool.',
    icon: BellAlertIcon,
  },
  {
    name: 'Automations',
    description:
      'Connect your feedback pipeline to numerous applications using Zapier or integrate it with your custom pipeline using webhooks.',
    icon: CogIcon,
  },
];

const Feature4 = (props: Props) => {
  return (
    <div className="overflow-hidden bg-gray-900  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">Integrations</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white  sm:text-4xl">
                Fits into your team&apos;s workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Userowl integrates with the tools you already use for product management, customer
                support and communication.
              </p>
              <p className="mt-6">
                <Link
                  href="/features/integrations"
                  className="text-sm font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-center justify-end lg:order-first">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature4;
