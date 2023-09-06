import { LinkIcon, MapIcon, TagIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

type Props = {};

const features = [
  {
    name: 'Organize.',
    description:
      'Manage feedback with the workflow that suits you. Tag and group the feature requests to match your product pipeline.',
    icon: TagIcon,
  },
  {
    name: 'Prioritize and Plan.',
    description:
      'Prioritize what to build according to user insights and analytics. Plan your roadmap.',
    icon: MapIcon,
  },
  {
    name: 'Merge',
    description:
      'Consolidate similar feature requests into one feedback and individually notify users once the feature is shipped.',
    icon: LinkIcon,
  },
];

const Feature2 = (props: Props) => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Product decision
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Prioritize changes that matter
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                No more guessing what your users want. Hear from them directly, then make the
                changes they care about.
              </p>
              <p className="mt-6">
                <Link
                  href="/features/feature-request-management"
                  className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-700"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
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

export default Feature2;
