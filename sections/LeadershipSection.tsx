'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container, Section, GradientText } from '@/components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LeaderProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

const LeaderCard: React.FC<LeaderProps> = ({ name, role, image, index }) => {
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
        delay: index * 0.15,
        ease: 'power3.out',
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={cardRef} className="group">
      <div className="relative mb-6 h-80 overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
          {name}
        </h3>
        <p className="text-slate-600 text-sm mt-1">{role}</p>
      </div>
    </div>
  );
};

export const LeadershipSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.leadership-header', {
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

  const leaders = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Vice Chancellor',
      image: '/faculty/dinesh-1.jpg',
    },
    {
      name: 'Prof. Harshil Shah',
      role: 'Dean of Technology',
      image: '/faculty/harshil-1 (1).jpg',
    },
    {
      name: 'Prof. Jaini Desai',
      role: 'Dean of Innovation',
      image: '/faculty/jaini-1.jpg',
    },
    {
      name: 'Dr. Rima Sharma',
      role: 'Dean of Research',
      image: '/faculty/rima-1.jpg',
    },
  ];

  return (
    <Section className="py-20 md:py-28" ref={containerRef}>
      <Container>
        <div className="leadership-header text-center mb-16">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">
            Leadership Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Meet Our <GradientText>Expert Faculty</GradientText>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Distinguished academics and industry leaders driving innovation and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <LeaderCard
              key={idx}
              {...leader}
              index={idx}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
