import clsx from 'clsx';
import Link from 'next/link';

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Card<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T;
  className?: string;
}) {
  const Component = as ?? 'div';

  return (
    <Component className={clsx(className, 'group relative flex flex-col items-start')}>
      {children}
    </Component>
  );
}

Card.Link = function CardLink({ children, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,
  href,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
  as?: T;
  href?: string;
}) {
  const Component = as ?? 'h2';

  return (
    <Component className="text-base font-semibold tracking-tight text-gray-800 dark:text-gray-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

Card.Description = function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">{children}</p>;
};

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <p className={clsx('mt-4')}>
      <span
        className={clsx(
          'relative z-10 text-sm font-semibold leading-6 text-indigo-600 group-hover:text-indigo-700 dark:text-indigo-400 dark:group-hover:text-indigo-300',
          "after:pointer-events-none after:absolute after:-bottom-[0.25rem] after:left-0 after:h-[2px] after:w-[calc(100%_-_1em)] after:origin-top-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-[ease] after:content-[''] group-hover:after:scale-x-100",
        )}
      >
        {children}
        <span
          // className="ml-0 transition-[margin] duration-300 ease-[ease] group-hover/link:ml-1"
          aria-hidden="true"
        >
          →
        </span>
      </span>
    </p>
    // <div
    //   aria-hidden="true"
    //   className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    // >
    //   {children}
    //   <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    // </div>
  );
};

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T;
  decorate?: boolean;
}) {
  const Component = as ?? 'p';

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-gray-500 dark:text-gray-400',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
