// export function Hero() {
//   return (
//     <Container className="pb-16 pt-20 text-center lg:pt-32">
//       <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
//         Accounting{' '}
//         <span className="relative whitespace-nowrap text-blue-600">
//           <svg
//             aria-hidden="true"
//             viewBox="0 0 418 42"
//             className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
//             preserveAspectRatio="none"
//           >
//             <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
//           </svg>
//           <span className="relative">made simple</span>
//         </span>{' '}
//         for small businesses.
//       </h1>
//       <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
//         Most bookkeeping software is accurate, but hard to use. We make the
//         opposite trade-off, and hope you don’t get audited.
//       </p>
//       <div className="mt-10 flex justify-center gap-x-6">
//         <Button href="/register">Get 6 months free</Button>
//         <Button
//           href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//           variant="outline"
//         >
//           <svg
//             aria-hidden="true"
//             className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
//           >
//             <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
//           </svg>
//           <span className="ml-3">Watch video</span>
//         </Button>
//       </div>
//       <div className="mt-36 lg:mt-44">
//         <p className="font-display text-base text-slate-900">
//           Trusted by these six companies so far
//         </p>
//         <ul
//           role="list"
//           className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
//         >
//           {[
//             [
//               { name: 'Transistor', logo: logoTransistor },
//               { name: 'Tuple', logo: logoTuple },
//               { name: 'StaticKit', logo: logoStaticKit },
//             ],
//             [
//               { name: 'Mirage', logo: logoMirage },
//               { name: 'Laravel', logo: logoLaravel },
//               { name: 'Statamic', logo: logoStatamic },
//             ],
//           ].map((group, groupIndex) => (
//             <li key={groupIndex}>
//               <ul
//                 role="list"
//                 className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
//               >
//                 {group.map((company) => (
//                   <li key={company.name} className="flex">
//                     <Image src={company.logo} alt={company.name} unoptimized />
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Container>
//   )
// }

import { Button } from '@/components/Button';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: StaticImageData;
  imageAlt: string;
  learnMoreText?: string;
  learnMoreHref?: string;
  isDark?: boolean;
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
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10"
                />
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

        {/* <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 xl:flex xl:px-8 xl:py-40">
        <div className="mx-auto max-w-2xl xl:mx-0 xl:max-w-xl xl:flex-shrink-0 xl:pt-8">
          <div className="mt-24 sm:mt-32 xl:mt-16">
            <span className="rounded-md bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
              Beta
            </span>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Effortless feedback collection, valuable insights
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Userowl simplifies feature collection and management for you and your users. You have
            all the data you need to resolve a bug or all the insights to decide the next feature to
            build that your users really need.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="https://app.userowl.com/signup"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start free trial
            </a>
            <a href="#feedback-widget" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-2 text-xs text-gray-500">No credit card required</div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 xl:ml-10 xl:mr-0 xl:mt-0 xl:max-w-none xl:flex-none 2xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl xl:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Hero;
