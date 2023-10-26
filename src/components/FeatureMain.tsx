import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { LearnMoreLink } from '@/components/FeatureWithScreenshotOnSide';
import { Feature } from '@/types/feature';
import vd001 from '@/videos/VD-001-encoded-RF22.mp4';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';

type Props = {
  id: string;
  ariaLabel: string;
  title: string;
  description: string;
  hashtag: string;
  image?: StaticImageData;
  imageAlt: string;
  features: Feature[];
  isDark?: boolean;
};

const FeatureMain = (props: Props) => {
  return (
    <section
      id={props.id}
      aria-label={props.ariaLabel}
      className={clsx(props.isDark ? 'dark' : null)}
    >
      <div className="bg-white  py-24 dark:bg-gray-900 sm:py-32">
        <FadeInStagger>
          <FadeIn className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
                {props.hashtag}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {props.title}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {props.description}
              </p>
            </div>
          </FadeIn>
          <FadeIn className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* <Image
              src={props.image}
              alt={props.imageAlt}
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 ring-white/10"
            /> */}
              <video
                autoPlay
                loop
                playsInline
                muted
                preload="auto"
                width={1284}
                height={856}
                className="mb-[-7%] aspect-[3/2] rounded-xl shadow-2xl ring-1 ring-gray-900/10 ring-white/10"
              >
                <source src={vd001} type="video/mp4" />
              </video>
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%] dark:from-gray-900" />
              </div>
            </div>
          </FadeIn>
          <FadeInStagger className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 dark:text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {props.features.map((feature) => (
                <FadeIn key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 dark:text-white">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-indigo-400"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </FadeIn>
              ))}
            </dl>
            <FadeIn className="mt-2 flex justify-center">
              <LearnMoreLink href="/features/feedback-widget" />
            </FadeIn>
          </FadeInStagger>
        </FadeInStagger>
      </div>
    </section>
  );
};

export default FeatureMain;
