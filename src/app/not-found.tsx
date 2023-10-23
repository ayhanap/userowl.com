import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 dark:bg-gray-900 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/" className="" color="blue">
            Go back home
          </Button>
          <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
