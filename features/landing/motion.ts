// Motion system for landing page
// Provides IntersectionObserver, stagger, and parallax throttling utilities

export const motionConfig = {
  // Easing curves
  easeEntrance: 'cubic-bezier(.22,.9,.3,1)',
  easeHero: 'cubic-bezier(.16,.84,.35,1)',
  easeSlider: 'cubic-bezier(.25,.8,.25,1)',
  
  // Timing
  headerDelay: 60,
  heroDelay: 140,
  cardGridDelay: 320,
  staggerDelay: 70,
  
  // Thresholds
  intersectionThreshold: 0.15,
  parallaxFactor: 0.08,
};

// IntersectionObserver for reveals
export function createIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add('in-view', 'entered');
        
        // Apply stagger to child elements
        el.querySelectorAll('.stagger').forEach((item, i) => {
          (item as HTMLElement).style.transitionDelay = `${i * motionConfig.staggerDelay}ms`;
        });
        
        observer.unobserve(el);
      });
    },
    { threshold: motionConfig.intersectionThreshold }
  );
  
  return observer;
}

// Parallax throttling
export function createParallaxHandler() {
  const parallaxEls = document.querySelectorAll('.parallax');
  let ticking = false;
  
  const updateParallax = () => {
    parallaxEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight / 2) * motionConfig.parallaxFactor;
      (el as HTMLElement).style.transform = `translateY(${offset}px) scale(1.02)`;
    });
    ticking = false;
  };
  
  const handleScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateParallax);
  };
  
  return handleScroll;
}

// Orchestrate entrance animations on page load
export function orchestrateEntrance() {
  // Header entrance
  setTimeout(() => {
    const header = document.querySelector('.header');
    header?.classList.add('entered');
  }, motionConfig.headerDelay);
  
  // Hero entrance
  setTimeout(() => {
    const hero = document.querySelector('.hero');
    hero?.classList.add('entered');
    
    // Stagger headline lines
    document.querySelectorAll('.hero .headline .line').forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * motionConfig.staggerDelay}ms`;
    });
  }, motionConfig.heroDelay);
  
  // Card grid entrance (if above the fold)
  setTimeout(() => {
    const grid = document.querySelector('.grid');
    grid?.classList.add('entered');
  }, motionConfig.cardGridDelay);
}

// Initialize motion system
export function initMotionSystem() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initializeMotion();
    });
  } else {
    initializeMotion();
  }
}

function initializeMotion() {
  // Set up intersection observer
  const observer = createIntersectionObserver();
  document.querySelectorAll('.reveal-section, .section').forEach((section) => {
    observer.observe(section);
  });
  
  // Set up parallax
  const parallaxHandler = createParallaxHandler();
  window.addEventListener('scroll', parallaxHandler, { passive: true });
  
  // Orchestrate entrance animations
  orchestrateEntrance();
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', parallaxHandler);
  });
}
