'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';

import { AppContext } from '@/app/providers';
import { Container } from '@/components/Container';
import Prose from '@/components/blog/Prose';
import { authors } from '@/components/blog/authors';
import { type ArticleWithSlug } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';
import Image from 'next/image';
import Link from 'next/link';

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { previousPathname } = useContext(AppContext);

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            aria-label="Go back to articles"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 transition dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0 dark:ring-white/10 dark:hover:border-gray-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-gray-500 transition group-hover:stroke-gray-700 dark:stroke-gray-500 dark:group-hover:stroke-gray-400" />
          </Link>
          <article>
            <header className="relative flex flex-col">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
                {article.title}
              </h1>
              <dl>
                <dt className="sr-only">Date</dt>
                <dd className="absolute inset-x-0 top-0 text-slate-700 dark:text-slate-400">
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                </dd>
              </dl>
              <div className="mt-6">
                <ul className="-mx-5 -mt-6 flex flex-wrap text-sm leading-6">
                  <li className="mt-6 flex items-center whitespace-nowrap px-5 font-medium">
                    <Image
                      src={authors[article.author].ppic}
                      alt="Author Profile Picture"
                      className="mr-3 h-9 w-9 rounded-full bg-slate-50 dark:bg-slate-800"
                    />
                    <div className="text-sm leading-4">
                      <div className="text-slate-900 dark:text-slate-200">
                        {authors[article.author].name}
                      </div>
                      <div className="mt-1">
                        <a
                          href={`https://twitter.com/${authors[article.author].twitter}`}
                          className="text-purple-500 hover:text-purple-600 dark:text-purple-400"
                        >
                          @{authors[article.author].twitter}
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  );
}
