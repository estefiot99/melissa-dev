import { useEffect } from 'react';

interface UseInViewActionOptions {
  rootMargin?: string; // Offset from viewport
  threshold?: number; // Percentage of element visible to trigger
  stagger?: number; // Delay for child elements
}

export function useInViewAction<T extends HTMLElement>(
  ref: React.RefObject<T | null>, // The element to observe
  action: (el: T) => void, // What happens when it enters view
  {
    rootMargin = '0px',
    threshold = 0.15,
    stagger = 0
  }: UseInViewActionOptions = {}
) {
  useEffect(() => {
    if (!ref.current) return; // Make sure element exists

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as T;

            // Apply stagger to children if needed
            Array.from(target.children).forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * stagger}s`;
            });

            action(target); // Run the user-defined action
            obs.unobserve(target); // Stop observing (optional, one-time trigger)
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(ref.current); // Start observing

    return () => observer.disconnect(); // Cleanup
  }, [ref, action, rootMargin, threshold, stagger]);
}
