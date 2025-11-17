'use client';

import { m, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

type MotionViewportProps = BoxProps &
  MotionProps & {
    children: ReactNode;
    disableAnimate?: boolean;
  };

export function MotionViewport({
  children,
  disableAnimate = false,
  ...other
}: MotionViewportProps) {
  // Temporarily disable animations to make content visible
  return <Box {...other}>{children}</Box>;

  // Original code (commented out for debugging):
  // if (disableAnimate) {
  //   return <Box {...other}>{children}</Box>;
  // }
  //
  // return (
  //   <Box
  //     component={m.div}
  //     initial="initial"
  //     whileInView="animate"
  //     viewport={{ once: true, amount: 0.3 }}
  //     {...other}
  //   >
  //     {children}
  //   </Box>
  // );
}

// Variants for animations
export const varFade = (props?: MotionProps) => {
  const distance = props?.distance || 120;
  const durationIn = props?.durationIn || 0.64;
  const durationOut = props?.durationOut || 0.48;
  const easeIn = props?.easeIn || [0.43, 0.13, 0.23, 0.96];
  const easeOut = props?.easeOut || [0.43, 0.13, 0.23, 0.96];

  return {
    // Fade
    in: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: durationIn, ease: easeIn } },
      exit: { opacity: 0, transition: { duration: durationOut, ease: easeOut } },
    },
    // Fade In Up
    inUp: {
      initial: { opacity: 0, y: distance },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: durationIn, ease: easeIn },
      },
      exit: {
        opacity: 0,
        y: distance,
        transition: { duration: durationOut, ease: easeOut },
      },
    },
    // Fade In Down
    inDown: {
      initial: { opacity: 0, y: -distance },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: durationIn, ease: easeIn },
      },
      exit: {
        opacity: 0,
        y: -distance,
        transition: { duration: durationOut, ease: easeOut },
      },
    },
    // Fade In Left
    inLeft: {
      initial: { opacity: 0, x: -distance },
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration: durationIn, ease: easeIn },
      },
      exit: {
        opacity: 0,
        x: -distance,
        transition: { duration: durationOut, ease: easeOut },
      },
    },
    // Fade In Right
    inRight: {
      initial: { opacity: 0, x: distance },
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration: durationIn, ease: easeIn },
      },
      exit: {
        opacity: 0,
        x: distance,
        transition: { duration: durationOut, ease: easeOut },
      },
    },
  };
};

// Container variant for stagger children
export const varContainer = (props?: MotionProps) => {
  const staggerIn = props?.staggerIn || 0.05;
  const delayIn = props?.delayIn || 0.05;

  return {
    animate: {
      transition: {
        staggerChildren: staggerIn,
        delayChildren: delayIn,
      },
    },
  };
};

