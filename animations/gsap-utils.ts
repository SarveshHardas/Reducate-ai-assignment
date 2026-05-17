import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateTextReveal = (element: HTMLElement) => {
  const words = element.querySelectorAll('.word');
  if (words.length === 0) return;

  gsap.from(words, {
    duration: 0.8,
    opacity: 0,
    y: 20,
    stagger: 0.1,
    ease: 'power2.out',
  });
};

export const animateScrollReveal = (selector: string, options = {}) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      duration: 1,
      opacity: 0,
      y: 30,
      ease: 'power3.out',
      ...options,
    });
  });
};

export const animateParallax = (selector: string, speed = 0.5) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    gsap.to(element, {
      y: `${speed * 100}px`,
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
      ease: 'none',
    });
  });
};

export const createHorizontalScroll = (container: HTMLElement, section: HTMLElement) => {
  const scrollAmount = section.offsetWidth - window.innerWidth;

  gsap.to(container, {
    x: -scrollAmount,
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${scrollAmount}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      markers: false,
    },
    ease: 'none',
  });
};

export const createCountUpAnimation = (element: HTMLElement, target: number, duration = 2) => {
  const obj = { value: 0 };

  gsap.to(obj, {
    value: target,
    duration,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    onUpdate: function () {
      element.textContent = Math.floor(obj.value).toLocaleString();
    },
    ease: 'power2.out',
  });
};

export const createStaggerAnimation = (selector: string, delay = 0.1) => {
  gsap.from(selector, {
    duration: 0.8,
    opacity: 0,
    y: 20,
    stagger: delay,
    ease: 'power2.out',
  });
};

export const createFloatingAnimation = (selector: string) => {
  gsap.to(selector, {
    y: -10,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

export const createHoverTilt = (selector: string) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    let x = 0;
    let y = 0;
    let boundingRect = element.getBoundingClientRect();

    element.addEventListener('mousemove', ((e: MouseEvent) => {
      boundingRect = element.getBoundingClientRect();
      x = e.clientX - boundingRect.left - boundingRect.width / 2;
      y = e.clientY - boundingRect.top - boundingRect.height / 2;

      gsap.to(element, {
        duration: 0.3,
        rotateX: y / 10,
        rotateY: -x / 10,
        transformPerspective: 1000,
      });
    }) as EventListener);

    element.addEventListener('mouseleave', (() => {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
      });
    }) as EventListener);
  });
};

export const initScrollTrigger = () => {
  ScrollTrigger.create({
    onUpdate: (self) => {
      if (self.getVelocity() > 500) {
        gsap.to('html', { scrollSmoothness: 6, overwrite: 'auto', duration: 0.4 });
      } else if (self.getVelocity() < -500) {
        gsap.to('html', { scrollSmoothness: 2, overwrite: 'auto', duration: 0.4 });
      } else {
        gsap.to('html', { scrollSmoothness: 8, overwrite: 'auto', duration: 0.4 });
      }
    },
  });

  ScrollTrigger.normalizeScroll(true);
};
