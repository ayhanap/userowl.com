type Props = {};

import {
  CommandLineIcon,
  ComputerDesktopIcon,
  PhotoIcon,
  UserIcon,
} from '@heroicons/react/20/solid';

import Image from 'next/image';

import screenshot from '@/images/screenshots/app.userowl.com_feedbacks_64ea2cb7472b5a16a6c35415(1920X1080@4x).png';
import Link from 'next/link';

const features = [
  {
    name: 'Session Information.',
    description: 'Each feedback contains session details such as URL, OS, and browser, etc.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'User Information.',
    description:
      'You can identify your users so it also includes necessary user details so you can contact them or prioritize accordingly.',
    icon: UserIcon,
  },
  {
    name: 'Console Logs.',
    description: 'Console errors and logs automatically captured and included.',
    icon: CommandLineIcon,
  },
  {
    name: 'Annotated Screenshots.',
    description:
      'Your users can mark application issues using a user-friendly screen annotation tool, or you can opt for automatic screenshot inclusion with each feedback.',
    icon: PhotoIcon,
  },
];

const Feature1 = (props: Props) => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Bug tracking</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Resolve Bugs Faster
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Reduce bug resolution times with visual bug reports that include session info, user
                data and in-depth logs.
              </p>
              <p className="mt-6">
                <Link
                  href="/features/bug-tracking"
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
          <div className="flex items-center">
            <Image
              src={screenshot}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
