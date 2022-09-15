import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { FeaturesGrid } from '@/components/FeaturesGrid'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>Userowl | Hear your users</title>
        <meta
          name="description"
          content="Visual bug reporting and user feedback directly from your users and internal team with all the tooling you need."
        />

        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getuserowl" />
        <meta name="twitter:title" content="Userowl | Hear your users" />
        <meta name="twitter:description" content="Visual bug reporting and user feedback directly from your users and internal team with all the tooling you need." />
        {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
        <meta name="twitter:image:src" content="https://userowl.com/userowl-twitter-card.png" />


        {/* <!-- Open Graph data --> */}
        <meta property="og:title" content="Userowl | Hear your users" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://userowl.com/" />
        <meta property="og:image" content="https://userowl.com/userowl-twitter-card.png" />
        <meta property="og:description" content="Visual bug reporting and user feedback directly from your users and internal team with all the tooling you need." />
        <meta property="og:site_name" content="Userowl" />
      </Head>
      <Header />
      <main>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-K2NY36GBM8`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            <!-- Google tag (gtag.js) -->
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-K2NY36GBM8');
          `,
          }}
        />
        <Hero />
        <FeaturesGrid />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
