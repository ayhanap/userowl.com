import { Button } from '@/components/Button';
import clsx from 'clsx';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image?: StaticImageData;
  imageAlt?: string;
  video?: string;
  svgImage?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  learnMoreText?: string;
  learnMoreHref?: string;
  isDark?: boolean;
  width?: number;
  height?: number;
  sideBySide?: boolean;
  noImage?: boolean;
  equalSizeImage?: boolean;
  noRing?: boolean;
  children?: React.ReactNode;
};

const Hero = (props: Props) => {
  return (
    <div className={clsx(props.isDark ? 'dark' : null)}>
      <div className="overflow-hidden bg-white  dark:bg-gray-900">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div
            className={clsx(
              props.sideBySide ? 'items-center pt-10 lg:flex' : '',
              'mx-auto max-w-7xl px-6 lg:px-8',
            )}
          >
            <div
              className={clsx(
                props.sideBySide
                  ? 'max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0 lg:pt-8 xl:max-w-xl'
                  : 'max-w-2xl text-center',
                'mx-auto ',
              )}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                {props.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {props.description}
              </p>
              <div
                className={clsx(
                  props.sideBySide ? '' : 'justify-center',
                  'items-top mt-10 flex gap-x-6',
                )}
              >
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
            {props.children ? props.children : null}
            {props.noImage ? null : (
              <div
                className={clsx(
                  props.sideBySide
                    ? 'mx-auto flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32'
                    : 'flow-root',
                  'mt-16 sm:mt-24',
                )}
              >
                <div
                  className={clsx(
                    props.equalSizeImage
                      ? 'w-full max-w-full lg:w-[30rem]'
                      : '-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-white/5 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4 ',
                    '',
                  )}
                >
                  {props.svgImage ? (
                    <props.svgImage
                      className={clsx(
                        // 'mx-auto w-[28rem] max-w-none xs:w-[36rem] sm:w-[48rem] md:w-[57rem]',
                        'mx-auto  p-5 lg:p-0',
                      )}
                    />
                  ) : (
                    <>
                      {props.image ? (
                        <Image
                          src={props.image}
                          alt={props.imageAlt}
                          className={clsx(
                            props.noRing
                              ? ''
                              : 'shadow-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 ',
                            'aspect-[3/2] rounded-lg md:hidden',
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
                          width={props.width ? props.width : 1284}
                          height={props.height ? props.height : 856}
                          className={clsx(
                            props.noRing
                              ? ''
                              : 'shadow-2xl ring-2 ring-inset ring-gray-900/10 dark:ring-white/10 ',
                            props.image ? 'hidden' : '',
                            'aspect-[3/2] rounded-lg md:block',
                          )}
                        >
                          <source src={props.video} type="video/mp4" />
                        </video>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
