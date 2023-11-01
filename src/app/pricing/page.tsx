import { Pricing } from '@/components/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Pricing' },
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
    </>
  );
}
