import clsx from 'clsx';
import { Lexend } from 'next/font/google';
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
  title: {
    template: '%s - Userowl',
    default: 'Userowl - Visual Feedback Management Software',
  },
  description:
    'Collect feedback and bug reports directly within your application. Prioritize features based on user needs, reproduce and fix bugs or get feedback about your site. Utilize it on your live site, with your QA team, or for your client projects',
  twitter: {
    card: 'summary_large_image',
    title: 'Userowl | Visual Feedback Management Software',
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
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager - Global base code */}
        <Script id="userowl-widget" strategy="afterInteractive">
          {`
          //Your APP ID
          var APP_ID = '6439840082e47f1eafd39804';

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
      <body className="">
        <Suspense>
          <Analytics />
        </Suspense>
        <Providers>
          {/* <div className="flex w-full">
            <Layout>{children}</Layout>
          </div> */}
          <Header isDark={false} />
          <main>{children}</main>
          <Footer isDark={false} />
        </Providers>
      </body>
    </html>
  );
}
