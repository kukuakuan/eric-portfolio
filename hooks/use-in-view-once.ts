import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that triggers only once when element enters viewport
 * More performant than react-intersection-observer for one-time animations
 */
export function useInViewOnce(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInView) {
        setIsInView(true);
        observer.disconnect(); // Stop observing after first trigger
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView, options]);

  return [ref, isInView] as const;
}
