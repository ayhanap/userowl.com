import { Feature } from '@/types/feature';
import clsx from 'clsx';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
  id: string;
  ariaLabel: string;
  title: string;
  description: string;
  hashtag: string;
  image: StaticImageData;
  imageAlt: string;
  imageOnLeft?: boolean;
  children?: React.ReactNode;
  isDark?: boolean;
};

const FeatureWithScreenshotOnSide = (props: Props) => {
  return (
    <section
      id={props.id}
      aria-label={props.ariaLabel}
      className={clsx(props.isDark ? 'dark' : null)}
    >
      <div className="overflow-hidden bg-white py-24 dark:bg-gray-900 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={clsx(
              props.imageOnLeft
                ? 'xl:grid-cols-[minmax(0,_2fr)_minmax(max-content,_1fr)]'
                : 'xl:grid-cols-[minmax(max-content,_1fr)_minmax(0,_2fr)]',
              'mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none',
            )}
          >
            <div
              className={clsx(props.imageOnLeft ? 'lg:ml-auto  lg:pl-4' : 'lg:pr-8 ', 'lg:pt-4')}
            >
              <div className="xl:w-[28rem] xl:max-w-md 2xl:w-[32rem] 2xl:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
                  {props.hashtag}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  {props.title}
                </p>
                <p className="text-text-gray-600 mt-6 text-lg leading-8 dark:text-gray-300">
                  {props.description}
                </p>
                {props.children}
              </div>
            </div>
            <div
              className={clsx(
                props.imageOnLeft ? 'justify-end xl:order-first' : null,
                'flex items-center',
              )}
            >
              <Image
                src={props.image}
                alt={props.imageAlt}
                className="w-[28rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 xs:w-[36rem] sm:w-[48rem] md:-ml-4 md:w-[57rem] lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const LearnMoreLink = ({ href, text }: { href: string; text?: string }) => {
  return (
    <p className="mt-6">
      <Link
        href={href}
        className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        {text || 'Learn more'} <span aria-hidden="true">→</span>
      </Link>
    </p>
  );
};

export const FeatureList = ({ features }: { features: Feature[] }) => {
  return (
    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
      {features.map((feature) => (
        <div key={feature.name} className="relative pl-9">
          <dt className="inline font-semibold text-gray-900 dark:text-white">
            <feature.icon
              className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-indigo-500"
              aria-hidden="true"
            />
            {feature.name}
          </dt>{' '}
          <dd className="inline">{feature.description}</dd>
        </div>
      ))}
    </dl>
  );
};

export default FeatureWithScreenshotOnSide;
