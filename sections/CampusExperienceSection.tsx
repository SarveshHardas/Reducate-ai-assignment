'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container, Section, GradientText } from '@/components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CampusExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!scrollContainerRef.current) return;

      const scrollWidth = scrollContainerRef.current.scrollWidth - window.innerWidth;

      gsap.to(scrollContainerRef.current, {
        x: -scrollWidth,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '40% 15%',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
        ease: 'none',
      });

      gsap.from('.campus-card', {
        duration: 0.8,
        opacity: 0,
        scale: 0.95,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const campusImages = [
    {
      image: '/campus/3.jpg',
      title: 'Modern Classrooms',
      description: 'State-of-the-art learning spaces equipped with latest technology',
    },
    {
      image: '/campus/4.jpg',
      title: 'Sports Facilities',
      description: 'Olympic-standard sports complex for all athletic activities',
    },
    {
      image: '/campus/5.jpg',
      title: 'Innovation Labs',
      description: 'Cutting-edge laboratories for research and experimentation',
    },
    {
      image: '/campus/7.jpg',
      title: 'Vibrant Campus Life',
      description: 'Dynamic community with diverse cultural and social activities',
    },
  ];

  return (
    <Section className="py-0 bg-black overflow-hidden" ref={containerRef}>
      <div className="py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-4">
            Campus Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Explore Our <GradientText>Beautiful Campus</GradientText>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Scroll horizontally to discover the stunning facilities and vibrant community life at JG University
          </p>
        </Container>
      </div>

      <div className="h-[600px] md:h-[700px]">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 px-4 sm:px-6 lg:px-8 h-full"
        >
          {campusImages.map((campus, idx) => (
            <div
              key={idx}
              className="campus-card flex-shrink-0 w-full md:w-[600px] h-full group cursor-pointer"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={campus.image}
                  alt={campus.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">{campus.title}</h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {campus.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 via-black to-slate-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            ← Scroll horizontally to explore more →
          </p>
        </div>
      </div>
    </Section>
  );
};
