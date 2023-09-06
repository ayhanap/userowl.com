import Link from 'next/link';

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className=" text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900"
    >
      {children}
    </Link>
  );
}
