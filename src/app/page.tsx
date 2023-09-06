import { CallToAction } from '@/components/CallToAction';
import Faqs from '@/components/Faqs';
import Feature1 from '@/components/Feature1';
import Feature2 from '@/components/Feature2';
import Feature3 from '@/components/Feature3';
import Feature4 from '@/components/Feature4';
import FeatureMain from '@/components/FeatureMain';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Pricing } from '@/components/Pricing';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureMain />
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
