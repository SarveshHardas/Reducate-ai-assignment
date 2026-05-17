'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container, Section, GradientText } from '@/components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
        duration: 1,
        opacity: 0,
        x: -50,
        ease: 'power3.out',
      });

      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
        duration: 1,
        opacity: 0,
        x: 50,
        ease: 'power3.out',
      });

      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        stagger: 0.15,
        ease: 'power3.out',
      });

      document.querySelectorAll('.counter').forEach((el) => {
        const target = parseInt((el as HTMLElement).dataset.target || '0');
        const obj = { value: 0 };

        gsap.to(obj, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
          value: target,
          duration: 2,
          onUpdate: function () {
            (el as HTMLElement).textContent = Math.floor(obj.value).toLocaleString() + (target > 100 ? '%' : '+');
          },
          ease: 'power2.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section className="py-20 md:py-28" id="about" ref={containerRef}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="about-content space-y-8">
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">
                About JG University
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Shaping the <GradientText>Future Leaders</GradientText> of Tomorrow
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Founded with a vision to provide world-class education, JG University stands as a beacon of academic excellence and innovation. Our institution combines traditional values with cutting-edge modern education.
            </p>

            <ul className="space-y-3">
              {[
                'State-of-the-art facilities and infrastructure',
                'Industry-experienced faculty mentors',
                'Global alumni network and partnerships',
                'Incubation hub for student startups',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-image relative h-96 md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 to-cyan-200/40 rounded-3xl blur-3xl -z-10" />
            <Image
              src="/campus/3.jpg"
              alt="Campus"
              fill
              className="object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" ref={statsRef}>
          {[
            { label: 'Students', value: 15000, target: 15000 },
            { label: 'Faculty', value: 500, target: 500 },
            { label: 'Placements', value: 95, target: 95, isPercent: true },
            { label: 'Global Partners', value: 200, target: 200 },
          ].map((stat, idx) => (
            <div key={idx} className="stat-item text-center">
              <div className="glass-morphism rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                <p className="counter text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text mb-2" data-target={stat.target}>
                  0
                </p>
                <p className="text-sm md:text-base text-slate-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
