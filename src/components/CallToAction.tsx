import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';

// eslint-disable-next-line import/prefer-default-export
export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-purple-600 py-32"
      aria-label="Start your free trial today"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <Container className="relative">
        <FadeIn className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Start collecting valuable user insights to steer your product.
          </p>
          <Button href="https://app.userowl.com/signup" color="white" className="mt-10">
            Start 14 day trial
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
