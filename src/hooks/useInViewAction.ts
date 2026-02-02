import { useEffect } from 'react';

interface UseInViewActionOptions {
  rootMargin?: string;
  threshold?: number;
  stagger?: number;
}

export function useInViewAction<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  action: (el: T) => void,
  {
    rootMargin = '0px',
    threshold = 0.15,
    stagger = 0
  }: UseInViewActionOptions = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as T;

            Array.from(target.children).forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * stagger}s`;
            });

            action(target);
            obs.unobserve(target);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, action, rootMargin, threshold, stagger]);
}
