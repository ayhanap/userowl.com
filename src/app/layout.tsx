import clsx from 'clsx';
import { Lexend } from 'next/font/google';
import Local from 'next/font/local';

import '@/styles/tailwind.css';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s - Userowl',
    default: 'Userowl - Visual Feedback Tool',
  },
  description:
    'Collect feedback and bug reports directly within your application. Prioritize features based on user needs, reproduce and fix bugs or get feedback about your site. Utilize it on your live site, with your QA team, or for your client projects',
  twitter: {
    card: 'summary_large_image',
    title: 'Userowl | Visual Feedback Tool',
    description:
      'Collect feedback and bug reports directly within your application. Prioritize features based on user needs, reproduce and fix bugs or get feedback about your site. Utilize it on your live site, with your QA team, or for your client projects',
    siteId: '1564720076489629696',
    creator: '@userowl_com',
    creatorId: '1564720076489629696',
  },
};

const inter = Local({
  src: './Inter-roman.var.woff2',
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx('h-full scroll-smooth bg-white antialiased', inter.variable, lexend.variable)}
    >
      <body className="">{children}</body>
    </html>
  );
}
