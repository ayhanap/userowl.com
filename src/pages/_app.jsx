import 'focus-visible'
import '@/styles/tailwind.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { GTM_ID, pageview } from '../lib/gtm'

import { getCookie } from 'cookies-next';

import { Layout } from '../components/Layout';

export default function App({ Component, pageProps }) {
  const consent = getCookie('uowl_consent');
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return (
    <>
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          // Define dataLayer and the gtag function.
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Default consent to 'denied'.
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'granted'
          });

          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${GTM_ID}');

          `,
        }}
      />
      <Script id='userowl-widget' strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
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
          })();
          `,
        }}
      />
      {consent === true && (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
