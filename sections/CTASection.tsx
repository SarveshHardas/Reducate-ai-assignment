'use client';

import React, { useEffect, useRef } from 'react';
import { Button, Container, Section, GradientText } from '@/components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CTASection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        duration: 1,
        opacity: 0,
        y: 40,
        ease: 'power3.out',
      });

      gsap.to('.floating-shape', {
        duration: 4,
        y: -30,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section className="relative py-20 md:py-28 overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-cyan-200/20 rounded-full blur-3xl floating-shape" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-purple-200/20 rounded-full blur-3xl floating-shape" />

      <Container>
        <div className="cta-content relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Ready to Start Your <GradientText>Success Story</GradientText>?
          </h2>

          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Join thousands of students who have transformed their careers at JG University. Apply now and take the first step towards your bright future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              Schedule a Tour
            </Button>
          </div>

          <p className="text-sm text-slate-500 mt-10">
            Application deadlines: Rolling admission throughout the year
          </p>
        </div>
      </Container>
    </Section>
  );
};
