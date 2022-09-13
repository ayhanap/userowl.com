import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="bg-indigo-700"
    >

      <Container className="relative">
        <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Know when it&apos;s ready.</span>
            <span className="block">Get special early access discount.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join our newsletter to get product updates about when Userowl will be ready and receive special early access promotions.
          </p>
          <Button href="#hero" color="white" className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto">
            Join early-access list
          </Button>
        </div>
      </Container>
    </section >
  )
}
