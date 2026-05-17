'use client';

import React, { useEffect, useRef } from 'react';
import { Container, Section, GradientText } from '@/components';
import { FEATURES } from '@/constants/design';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Icons from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FeatureCardProps {
  feature: (typeof FEATURES)[0];
  index: number;
  isLarge?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, isLarge }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
        delay: index * 0.1,
        ease: 'power3.out',
      });

      const card = cardRef.current;
      if (!card) return;

      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.3,
          y: -15,
          boxShadow: '0 25px 50px rgba(139, 92, 246, 0.1)',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.3,
          y: 0,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        });
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl transition-all duration-300 cursor-pointer ${
        isLarge ? 'md:col-span-2 md:row-span-2 p-10' : 'p-8'
      }`}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-cyan-200/20 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />

      <div className="relative z-10">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-100 to-cyan-100 mb-6">
          {IconComponent ? <IconComponent className="w-6 h-6 text-purple-600" /> : null}
        </div>

        <h3 className={`font-semibold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors ${
          isLarge ? 'text-2xl' : 'text-lg'
        }`}>
          {feature.title}
        </h3>

        <p className={`text-slate-600 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}>
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export const WhyChooseUsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.features-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white" ref={containerRef}>
      <Container>
        <div className="features-header text-center mb-16">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">
            Why Choose JG University
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Everything You Need to <GradientText>Succeed</GradientText>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide a comprehensive ecosystem of support and resources for your growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <FeatureCard
              key={idx}
              feature={feature}
              index={idx}
              isLarge={idx === 0 || idx === 4}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
