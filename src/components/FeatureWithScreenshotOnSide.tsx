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
  image?: StaticImageData;
  imageAlt: string;
  video?: string;
  svgImage?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  imageOnLeft?: boolean;
  children?: React.ReactNode;
  isDark?: boolean;
  displayRing?: boolean;
  equalSizeImage?: boolean;
};

const FeatureWithScreenshotOnSide = (props: Props) => {
  return (
    <section
      id={props.id}
      aria-label={props.ariaLabel}
      className={clsx(props.isDark ? 'dark' : null)}
    >
      <div className="overflow-hidden bg-white py-24 dark:bg-gray-900 sm:py-32">
        <div
          className={clsx(
            props.equalSizeImage ? 'equal' : 'big',
            'group mx-auto max-w-7xl px-6 lg:px-8',
          )}
        >
          <div
            className={clsx(
              props.svgImage ? 'items-center' : null,
              props.imageOnLeft
                ? 'group-[.big]:xl:grid-cols-[minmax(0,_2fr)_minmax(max-content,_1fr)] group-[.equal]:xl:grid-cols-2 2xl:grid-cols-2'
                : 'group-[.big]:xl:grid-cols-[minmax(max-content,_1fr)_minmax(0,_2fr)] group-[.equal]:xl:grid-cols-2 2xl:grid-cols-2',
              'mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:max-w-3xl xl:mx-0 xl:max-w-none',
            )}
          >
            <div
              className={clsx(props.imageOnLeft ? 'xl:ml-auto  xl:pl-8' : 'xl:pr-8 ', 'xl:pt-4')}
            >
              <div className="group-[.equal]:max-w-auto group-[.big]:xl:w-[28rem] group-[.equal]:xl:w-auto group-[.big]:xl:max-w-md group-[.big]:2xl:w-[32rem] group-[.big]:2xl:max-w-lg">
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
                props.imageOnLeft
                  ? 'group-[.big]:xl:order-first group-[.equal]:xl:order-first'
                  : null,
                '',
              )}
            >
              {props.svgImage ? (
                <props.svgImage
                  className={clsx(
                    props.imageOnLeft ? 'float-right' : '',
                    'w-[28rem] max-w-full max-w-none xs:w-[36rem]',
                  )}
                />
              ) : (
                <>
                  {props.image ? (
                    <Image
                      src={props.image}
                      alt={props.imageAlt}
                      quality={90}
                      placeholder="blur"
                      sizes="(min-width: 768px) 57rem, (min-width: 640px) 48rem, (min-width: 475px) 36rem, 28rem"
                      className={clsx(
                        props.video ? 'md:hidden' : '',
                        props.imageOnLeft ? 'float-right' : '',
                        'aspect-[3/2] w-[28rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 xs:w-[36rem] sm:w-[48rem]  md:-ml-4 md:w-[57rem] lg:-ml-0',
                      )}
                    />
                  ) : null}
                  {props.video ? (
                    <video
                      autoPlay
                      loop
                      playsInline
                      muted
                      preload="auto"
                      width={1284}
                      height={856}
                      className={clsx(
                        props.video ? 'md:block' : '',
                        props.imageOnLeft ? 'float-right' : '',
                        'hidden aspect-[3/2] w-[28rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 xs:w-[36rem] sm:w-[48rem] md:-ml-4 md:w-[57rem] lg:-ml-0',
                      )}
                    >
                      <source src={props.video} type="video/mp4" />
                    </video>
                  ) : null}
                </>
              )}
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
