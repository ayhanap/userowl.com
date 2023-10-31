'use client';

import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';

import { Disclosure, Transition } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Fragment } from 'react';

export type Faq = {
  question: string;
  answer?: string;
  answerInHTML?: React.ReactNode;
};

type Props = {
  faqs: Faq[];
  isDark?: boolean;
};

export default function Faqs(props: Props) {
  return (
    <section id="faq" aria-labelledby="faq-title" className={clsx(props.isDark ? 'dark' : null)}>
      <div className="relative overflow-hidden bg-white py-20 dark:bg-gray-900 sm:py-32">
        {/* mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 */}
        {/* mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 */}
        <Container className="relative" itemScope itemType="https://schema.org/FAQPage">
          <FadeInStagger faster className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <FadeIn>
              <h2
                id="faq-title"
                className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white"
              >
                Frequently asked questions
              </h2>
            </FadeIn>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-white/10">
              {props.faqs.map((faq) => (
                <FadeIn key={faq.question}>
                  <Disclosure as={Fragment}>
                    {({ open }) => (
                      <>
                        <dt
                          className="pt-6"
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                        >
                          <Disclosure.Button
                            className="flex w-full items-start justify-between text-left 
                      text-gray-900 transition-colors duration-300 aria-expanded:text-purple-600 
                      aria-expanded:duration-200 dark:text-white dark:aria-expanded:text-purple-400"
                          >
                            <span
                              className={clsx(
                                // open ? 'text-purple-600' : null,
                                'text-base font-semibold leading-7',
                              )}
                              itemProp="name"
                            >
                              {faq.question}
                            </span>
                            <div className="relative ml-6 flex h-7 items-center justify-end">
                              <Transition
                                as={Fragment}
                                show={open}
                                // appear={true}
                                unmount={false}
                                enter="transition duration-200 ease-out"
                                enterFrom="transform-all rotate-90 opacity-80"
                                enterTo="transform-all rotate-180 opacity-100"
                                leave="transition duration-200 ease-out"
                                leaveFrom="transform-all rotate-180 opacity-100"
                                leaveTo="transform-all rotate-90 opacity-80"
                              >
                                <div className="absolute">
                                  <MinusSmallIcon className="h-6 w-6 stroke-2" aria-hidden="true" />
                                </div>
                              </Transition>
                              <Transition
                                as={Fragment}
                                show={!open}
                                // appear={true}
                                unmount={false}
                                enter="transition duration-200 ease-out"
                                enterFrom="transform-all rotate-90 opacity-0"
                                enterTo="transform-all rotate-0 opacity-100"
                                leave="transition duration-200 ease-out"
                                leaveFrom="transform-all rotate-0 opacity-100"
                                leaveTo="transform-all rotate-90 opacity-0"
                              >
                                <div className="absolute">
                                  <PlusSmallIcon className="h-6 w-6 stroke-2" aria-hidden="true" />
                                </div>
                              </Transition>
                            </div>
                          </Disclosure.Button>
                        </dt>
                        <Transition
                          as={Fragment}
                          enter="transition-all duration-300 ease-in-out"
                          enterFrom="transform max-h-0 opacity-0"
                          enterTo="transform max-h-[200px] opacity-100"
                          leave="transition-all duration-200 ease-in-out"
                          leaveFrom="transform max-h-[200px] opacity-100"
                          leaveTo="transform max-h-0 opacity-0"
                          unmount={false}
                        >
                          <Disclosure.Panel
                            as="dd"
                            className="mt-2 overflow-hidden pr-1"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                            unmount={false}
                          >
                            <p
                              className="text-base leading-7 text-gray-600 dark:text-gray-300"
                              itemProp="text"
                            >
                              {faq.answerInHTML ? faq.answerInHTML : faq.answer}
                            </p>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </FadeIn>
              ))}
            </dl>
          </FadeInStagger>
        </Container>
      </div>
    </section>
  );
}
