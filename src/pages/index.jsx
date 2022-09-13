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

export default function Home() {
  return (
    <>
      <Head>
        <title>Userowl - Hear your users</title>
        <meta
          name="description"
          content="Bug reporting and user feedback directly from your customers or internal team with all the tooling you need."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <FeaturesGrid />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
