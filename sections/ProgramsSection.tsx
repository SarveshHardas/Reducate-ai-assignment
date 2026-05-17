'use client';

import React, { useEffect, useRef } from 'react';
import { Container, Section, GradientText } from '@/components';
import { PROGRAMS } from '@/constants/design';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Icons from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProgramCardProps {
  program: (typeof PROGRAMS)[0];
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, index }) => {
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
        y: 30,
        delay: index * 0.1,
        ease: 'power3.out',
      });

      const card = cardRef.current;
      if (!card) return;

      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.3,
          y: -10,
          boxShadow: '0 20px 60px rgba(139, 92, 246, 0.15)',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.3,
          y: 0,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        });
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const IconComponent = Icons[program.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div
      ref={cardRef}
      className="group h-full backdrop-blur-xl bg-white/50 border border-white/20 rounded-2xl p-8 hover:border-purple-200 transition-all duration-300 cursor-pointer"
    >
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${program.color} mb-6`}>
        {IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null}
      </div>

      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
        {program.name}
      </h3>

      <p className="text-slate-600 mb-6 leading-relaxed">{program.description}</p>

      <div className="flex items-center gap-2 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm font-medium">Explore</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export const ProgramsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.programs-header', {
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
    <Section className="py-20 md:py-28" id="programs" ref={containerRef}>
      <Container>
        <div className="programs-header text-center mb-16">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">
            Academic Excellence
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Explore Our <GradientText>Premium Programs</GradientText>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of programs designed to prepare you for the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, idx) => (
            <ProgramCard key={program.id} program={program} index={idx} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
