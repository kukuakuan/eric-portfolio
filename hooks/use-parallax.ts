import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for parallax scroll effects
 * @param distance - The distance to move the element (default: 50)
 * @returns [ref, y] - Reference to attach to element and y motion value
 */
export function useParallax(distance: number = 50): [any, MotionValue<number>] {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return [ref, y];
}
