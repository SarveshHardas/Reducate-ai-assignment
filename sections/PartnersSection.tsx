'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container, Section } from '@/components';
import gsap from 'gsap';
import clsx from 'clsx';

export const PartnersSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = containerRef.current?.querySelector('.marquee-content');
      if (!marquee) return;

      const marqueeWidth = (marquee as HTMLElement).offsetWidth;
      const parentWidth = (marquee.parentElement as HTMLElement).offsetWidth;

      gsap.to('.marquee-content', {
        x: -marqueeWidth + parentWidth,
        duration: 20,
        repeat: -1,
        ease: 'none',
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth),
        },
      });

      gsap.from('.partner-logo', {
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const partners = [
    { name: 'IBM', logo: '/partners/ibm.png' },
    { name: 'ISRO', logo: '/partners/isro.png' },
    { name: 'SAC', logo: '/partners/sac.png' },
    { name: 'Coding', logo: '/partners/coding.png' },
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <Section className="py-16 md:py-20 bg-gradient-to-r from-slate-50 via-white to-slate-50" ref={containerRef}>
      <Container>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">
            Trusted By Leading Organizations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Partners & Collaborators
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="marquee-content flex gap-12 md:gap-20 py-12">
              {duplicatedPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="partner-logo flex-shrink-0 w-40 h-24 flex items-center justify-center group"
                >
                  <div className="relative w-full h-full transition-all duration-300 group-hover:scale-110">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
