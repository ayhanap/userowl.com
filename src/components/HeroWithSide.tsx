import { Button } from '@/components/Button';
import clsx from 'clsx';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: StaticImageData;
  imageAlt: string;
  video: string;
  learnMoreText?: string;
  learnMoreHref?: string;
  isDark?: boolean;
  width?: number;
  height?: number;
};

const Hero = (props: Props) => {
  return (
    <div className={clsx(props.isDark ? 'dark' : null)}>
      <div className="overflow-hidden bg-white  dark:bg-gray-900">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                {props.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {props.description}
              </p>
              <div className="items-top mt-10 flex justify-center gap-x-6">
                <div className="">
                  <Button href={props.ctaHref} color="blue">
                    {' '}
                    {props.ctaText}
                  </Button>
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-300">
                    No credit card required
                  </div>
                </div>
                {props.learnMoreText ? (
                  <div className="flex h-10 items-center">
                    <a
                      href={props.learnMoreHref}
                      className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                    >
                      {props.learnMoreText} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                ) : null}
                {/* <a
                  href={props.ctaHref}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                >
                  {props.ctaText}
                </a>
                {props.learnMoreText ? (
                  <a
                    href={props.learnMoreHref}
                    className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                  >
                   
                  </a>
                ) : null} */}
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-white/5 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src={props.image}
                  alt={props.imageAlt}
                  className="rounded-lg shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10 md:hidden"
                />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="auto"
                  width={props.width ? props.width : 1284}
                  height={props.height ? props.height : 856}
                  className="hidden rounded-lg shadow-2xl ring-2 ring-inset ring-gray-900/10 dark:ring-white/10 md:block "
                >
                  <source src={props.video} type="video/mp4" />
                </video>
                {/* <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
