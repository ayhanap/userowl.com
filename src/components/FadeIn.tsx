'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { createContext, useContext } from 'react';

const FadeInStaggerContext = createContext(false);

const viewport = { once: false, margin: '0px 0px -200px' };

export function FadeIn({
  fromLeft = false,
  fromRight = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & {
  fromLeft?: boolean;
  fromRight?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  let x = 0;
  let y = 0;
  if (fromRight) {
    x = shouldReduceMotion ? 0 : 24;
  } else if (fromLeft) {
    x = shouldReduceMotion ? 0 : -24;
  } else {
    y = shouldReduceMotion ? 0 : 24;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x, y },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
