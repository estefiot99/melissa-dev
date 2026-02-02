import { useEffect } from 'react';

export function useFadeOnScroll(
  rootMargin = '0px',
  threshold = 0.15,
  stagger = 0
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = Array.from(entry.target.children) as HTMLElement[];

            // Apply stagger
            children.forEach((child, i) => {
              child.style.transitionDelay = `${i * stagger}s`;
            });

            entry.target.classList.add('visible');
            obs.unobserve(entry.target); // observe once
          }
        });
      },
      { rootMargin, threshold }
    );

    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [rootMargin, threshold, stagger]);
}
