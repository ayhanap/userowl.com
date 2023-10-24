'use client';

import { Container } from '@/components/Container';

import { Disclosure, Transition } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Fragment } from 'react';

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function Example() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white py-20 sm:py-32"
    >
      {/* mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 */}
      {/* mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 */}
      <Container className="relative">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 id="faq-title" className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 transition-colors duration-300 aria-expanded:text-purple-600 aria-expanded:duration-200">
                        <span
                          className={clsx(
                            // open ? 'text-purple-600' : null,
                            'text-base font-semibold leading-7',
                          )}
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
                      enterTo="transform max-h-[150px] opacity-100"
                      leave="transition-all duration-200 ease-in-out"
                      leaveFrom="transform max-h-[150px] opacity-100"
                      leaveTo="transform max-h-0 opacity-0"
                    >
                      <Disclosure.Panel as="dd" className="mt-2 overflow-hidden pr-1">
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
