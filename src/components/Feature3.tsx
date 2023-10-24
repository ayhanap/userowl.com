import {
  AdjustmentsHorizontalIcon,
  CubeTransparentIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';

import screenshot from '@/images/screenshots/darkScreenshot.png';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    name: 'Teams.',
    description:
      'Invite your QA, support, product, dev teams, and even your clients. Your team has all the tools to manage and close the feedback loop.',
    icon: UserGroupIcon,
  },
  {
    name: 'Personalize.',
    description:
      'Whether you use Scrum, Kanban, Waterfall, or your custom workflow, Userowl allows you to customize your feedback workflow, aligning it with your team.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Omnichannel.',
    description:
      'With the help of the Userowl browser extension, collect feedback from social channels. Manage everything in one place.',
    icon: CubeTransparentIcon,
  },
];

export default function Feature3() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">One tool</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Centralize your feedback management
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Userowl is the only tool you need to manage your feedback. Invite your team, connect
                your tools, and personalize according to your needs.
              </p>
              <p className="mt-6">
                <Link
                  href="/features/feedback-management"
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
          <div className="flex items-center">
            <Image
              src={screenshot}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1  ring-gray-400/10  sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
