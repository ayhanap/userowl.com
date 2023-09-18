import Link from 'next/link';

// eslint-disable-next-line import/prefer-default-export
export function InTextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-medium placeholder:text-purple-600 hover:text-purple-500 dark:text-purple-500 dark:hover:text-purple-400"
    >
      {children}
    </Link>
  );
}
