import clsx from 'clsx';
// import { Lexend } from 'next/font/google';
import Local from 'next/font/local';

import { Providers } from '@/app/providers';
import Analytics from '@/components/Analytics';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/styles/tailwind.css';
import { type Metadata } from 'next';
import Script from 'next/script';
import { Suspense } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://userowl.com'),
  title: {
    template: '%s',
    default: 'Userowl - Visual Feedback Management Software',
  },
  description:
    'Collect feedback and bug reports directly within your application. Prioritize features based on user needs, reproduce and fix bugs or get feedback about your site.',
  twitter: {
    card: 'summary_large_image',
    title: 'Userowl | Visual Feedback Management Software',
    description:
      'Collect feedback and bug reports directly within your application. Prioritize features based on user needs, reproduce and fix bugs or get feedback about your site.',
    site: '@userowl_com',
    siteId: '1564720076489629696',
    creator: '@userowl_com',
    creatorId: '1564720076489629696',
  },
  openGraph: {
    title: 'Userowl | Visual Feedback Management Software',
    description:
      'Collect feedback and bug reports directly within your application. Prioritize features based on user needs, reproduce and fix bugs or get feedback about your site.',
    url: 'https://userowl.com',
    siteName: 'Userowl',
    locale: 'en_US',
    type: 'website',
  },
};

const inter = Local({
  src: './Inter-subset.woff2',
  display: 'swap',
  variable: '--font-inter',
  weight: '100 900',
});

// const lexend = Lexend({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-lexend',
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        // ,lexend.variable
      )}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager - Global base code */}
        <Script id="userowl-widget" strategy="afterInteractive">
          {`
          //Your APP ID
          var APP_ID = '64b0804c13596e47bb1b3d59';

          window.UserowlSettings = {
            appId: APP_ID
          };

          (function() {
            var w = window;
            var uo = w.Userowl = w.Userowl || [];
            uo.methods = ["open", "close"];
            w.UserowlQueue = [];
            uo.f = function(c) {
              return function() {
                var args = Array.prototype.slice.call(arguments);
                window.UserowlQueue.push({
                  c: c,
                  a: args
                })
              }
            }
            for(i = 0; i < uo.methods.length; i++){
              uo[uo.methods[i]] = uo.f(uo.methods[i]);
            }
            var d = document;
            var s = d.createElement('script');
            s.async = true;
            s.src = 'https://app.userowl.com/static/widget.js';
            (d.head || d.body).appendChild(s);
          })();`}
        </Script>
      </head>
      <body className="bg-white dark:bg-gray-900">
        <Suspense>
          <Analytics />
        </Suspense>
        <Providers>
          <Header isDark={false} />
          <main>{children}</main>
          <Footer isDark={false} />
        </Providers>
      </body>
    </html>
  );
}
